// Tabs for the Work section. Without JS the tabs stay hidden and every panel
// is shown. A panel can be opened from the URL, e.g. /#papers; panel element
// ids carry a "panel-" prefix so the browser doesn't jump past the tabs.
(function () {
  const group = document.querySelector(".filters");
  if (!group) return;
  const buttons = [...group.querySelectorAll(".filter")];
  const panels = [...document.querySelectorAll(".panel")];
  const ids = panels.map((p) => p.dataset.tab);

  function select(id) {
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.panel === id)));
    panels.forEach((p) => {
      p.hidden = p.dataset.tab !== id;
    });
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
