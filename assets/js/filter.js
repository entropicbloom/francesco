// Tag filter for the Work cards. Without JS the buttons stay hidden and every
// card is shown.
(function () {
  const group = document.querySelector(".filters");
  if (!group) return;
  const buttons = group.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".card");

  function select(tag) {
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === tag)));
    cards.forEach((c) => {
      c.hidden = !c.dataset.tags.split(" ").includes(tag);
    });
  }

  group.addEventListener("click", (e) => {
    const button = e.target.closest(".filter");
    if (button) select(button.dataset.filter);
  });

  group.hidden = false;
  select(buttons[0].dataset.filter);
})();
