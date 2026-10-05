// Tabs for the Work section. Without JS the tabs stay hidden and every panel
// is shown. A panel can be opened from the URL, e.g. /#papers; panel element
// ids carry a "panel-" prefix so the browser doesn't jump past the tabs.
(function () {
  const group = document.querySelector(".filters");
  if (!group) return;
  const buttons = [...group.querySelectorAll(".filter")];
  const panels = [...document.querySelectorAll(".panel")];
  const ids = panels.map((p) => p.dataset.tab);

  // Card rows scroll sideways. One pair of arrows at the end of the tab row moves the
  // open tab's row, and only shows when that row has more cards than fit.
  const nav = document.createElement("div");
  nav.className = "cards-nav";
  nav.innerHTML =
    '<button type="button" aria-label="Previous">←</button><button type="button" aria-label="Next">→</button>';
  group.append(nav);
  const [prev, next] = nav.querySelectorAll("button");
  const activeList = () => document.querySelector(".panel:not([hidden]) .cards");
  const step = (list) => list.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(list).columnGap);
  const scroll = (dir) => {
    const list = activeList();
    if (list) list.scrollBy({ left: dir * step(list), behavior: "smooth" });
  };
  prev.addEventListener("click", () => scroll(-1));
  next.addEventListener("click", () => scroll(1));
  const updateNav = () => {
    const list = activeList();
    const max = list ? list.scrollWidth - list.clientWidth : 0;
    nav.hidden = max <= 1;
    if (!list) return;
    prev.disabled = list.scrollLeft <= 1;
    next.disabled = list.scrollLeft >= max - 1;
  };
  document.querySelectorAll(".cards").forEach((list) => list.addEventListener("scroll", updateNav, { passive: true }));
  window.addEventListener("resize", updateNav);

  function select(id) {
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.panel === id)));
    panels.forEach((p) => {
      p.hidden = p.dataset.tab !== id;
    });
    updateNav();
  }

  function fromHash() {
    const id = location.hash.slice(1);
    if (!ids.includes(id)) return false;
    select(id);
    document.getElementById("work").scrollIntoView();
    return true;
  }

  group.addEventListener("click", (e) => {
    const button = e.target.closest(".filter");
    if (button) select(button.dataset.panel);
  });
  window.addEventListener("hashchange", fromHash);

  group.hidden = false;
  if (!fromHash()) select(ids[0]);
})();
