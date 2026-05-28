(function () {
  var KEY = "holytear_iu_theme";
  var root = document.documentElement;
  var meta = document.querySelector("meta[name='theme-color']");
  var colors = { light: "#f7f4ef", dark: "#100f0e" };

  function current() {
    return root.dataset.theme === "dark" ? "dark" : "light";
  }

  function apply(theme) {
    root.dataset.theme = theme;
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) {}
    if (meta) meta.setAttribute("content", colors[theme] || colors.light);
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    });
  }

  apply(current());

  document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(current() === "dark" ? "light" : "dark");
    });
  });
})();
