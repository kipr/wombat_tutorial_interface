(function () {
  "use strict";

  var STORAGE_KEY = "kipr_theme";
  var DARK_QUERY = "(prefers-color-scheme: dark)";
  var root = document.documentElement;
  var control = null;
  var mediaQuery = null;
  var followsSystem = true;
  var storedTheme = null;

  try {
    storedTheme = window.localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    /* Storage may be blocked or unavailable. */
  }

  if (storedTheme === "light" || storedTheme === "dark") {
    followsSystem = false;
  } else {
    storedTheme = null;
    if (typeof window.matchMedia === "function") {
      mediaQuery = window.matchMedia(DARK_QUERY);
    }
  }

  function syncControl() {
    if (!control) return;
    var dark = root.dataset.theme === "dark";
    control.setAttribute("aria-pressed", dark ? "true" : "false");
    control.textContent = dark ? "Dark mode: On" : "Dark mode: Off";
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    syncControl();
  }

  function systemTheme() {
    return mediaQuery && mediaQuery.matches ? "dark" : "light";
  }

  function handleSystemChange(event) {
    if (followsSystem) applyTheme(event.matches ? "dark" : "light");
  }

  function stopFollowingSystem() {
    followsSystem = false;
    if (!mediaQuery) return;
    if (typeof mediaQuery.removeEventListener === "function") {
      mediaQuery.removeEventListener("change", handleSystemChange);
    } else if (typeof mediaQuery.removeListener === "function") {
      mediaQuery.removeListener(handleSystemChange);
    }
  }

  applyTheme(storedTheme || systemTheme());

  if (followsSystem && mediaQuery) {
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleSystemChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleSystemChange);
    }
  }

  function bindControl() {
    control = document.getElementById("themeToggle");
    if (!control) return;
    syncControl();
    control.addEventListener("click", function () {
      stopFollowingSystem();
      var theme = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(theme);
      try {
        window.localStorage.setItem(STORAGE_KEY, theme);
      } catch (e) {
        /* Keep the active page theme when persistence is unavailable. */
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindControl);
  } else {
    bindControl();
  }
})();
