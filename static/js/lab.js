/* Shared behaviour for every worksheet page.
 *
 * Replaces the four inline <script> blocks that were previously pasted into
 * each sheet. Everything is delegated from document, so this file never needs
 * to know which widgets a given page happens to contain.
 *
 * Page-specific values come from data attributes on <body>:
 *   data-mission-id     key used for the autosave slot and the download name
 *   data-mission-title  human title recorded inside the submission payload
 */
(function () {
  "use strict";

  var body = document.body;
  var MISSION_ID = body.getAttribute("data-mission-id");
  var MISSION_TITLE = body.getAttribute("data-mission-title") || document.title;

  function readControl(el) {
    return el.type === "checkbox" ? (el.checked ? "yes" : "") : el.value;
  }

  function writeControl(el, value) {
    if (el.type === "checkbox") {
      el.checked = value === "yes";
    } else {
      el.value = value;
    }
  }

  function collectAnswers(root) {
    var answers = {};
    root.querySelectorAll("[data-key]").forEach(function (el) {
      answers[el.getAttribute("data-key")] = readControl(el);
    });
    return answers;
  }

  function restoreAnswers(root, answers) {
    if (!answers) return;
    root.querySelectorAll("[data-key]").forEach(function (el) {
      var key = el.getAttribute("data-key");
      if (key in answers) writeControl(el, answers[key]);
    });
  }

  /* Kept small and DOM-agnostic so persistence behavior can be regression
   * tested without duplicating the production serialization rules. */
  window.KIPR_WORKSHEET_PERSISTENCE = {
    readControl: readControl,
    writeControl: writeControl,
    collectAnswers: collectAnswers,
    restoreAnswers: restoreAnswers
  };

  /* ---------------------------------------------------------------- submit */

  (function submitFlow() {
    var pinInput = document.getElementById("pin");
    if (!pinInput || !MISSION_ID) return;

    var statusEl = document.getElementById("status");
    var statusBottom = document.getElementById("statusBottom");
    var SAVE_KEY = "kipr_" + MISSION_ID + "_draft";
    var submitting = false;

    function restoreDraft() {
      var raw;
      try {
        raw = window.localStorage.getItem(SAVE_KEY);
      } catch (e) {
        return;
      }
      if (!raw) return;
      var data;
      try {
        data = JSON.parse(raw);
      } catch (e) {
        return;
      }
      if (data.pin) pinInput.value = data.pin;
      restoreAnswers(document, data.answers);
    }

    function saveDraft() {
      try {
        window.localStorage.setItem(
          SAVE_KEY,
          JSON.stringify({ pin: pinInput.value.trim(), answers: collectAnswers(document) })
        );
      } catch (e) {
        /* storage full or blocked - ignore */
      }
    }

    function setStatus(msg, kind) {
      if (statusEl) {
        statusEl.textContent = msg;
        statusEl.className = "status" + (kind ? " " + kind : "");
      }
      if (statusBottom) statusBottom.textContent = msg;
    }

    function downloadJSON(payload) {
      var blob = new Blob([JSON.stringify(payload, null, 2)], {
        type: "application/json"
      });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = MISSION_ID + "_pin" + (payload.pin || "none") + ".json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 1000);
    }

    function handleSubmit() {
      if (submitting) return;
      var pin = pinInput.value.trim();
      if (!pin) {
        setStatus("Enter your PIN at the top before you submit.", "warn");
        pinInput.focus();
        return;
      }
      submitting = true;
      setStatus("Turning in your work...");

      downloadJSON({
        mission: MISSION_ID,
        missionTitle: MISSION_TITLE,
        pin: pin,
        submittedAt: new Date().toISOString(),
        answers: collectAnswers(document)
      });

      var echo = document.getElementById("pinEcho");
      if (echo) echo.textContent = pin;
      setStatus(
        "Saved your results file to Downloads. Opening the print dialog so you can save your PDF...",
        "ok"
      );

      setTimeout(function () {
        window.print();
        submitting = false;
      }, 600);
    }

    restoreDraft();
    document.addEventListener("input", function (e) {
      if (e.target.matches("[data-key], #pin")) saveDraft();
    });
    document.addEventListener("change", function (e) {
      if (e.target.matches("[data-key], #pin")) saveDraft();
    });
    ["submitTop", "submitBottom"].forEach(function (id) {
      var btn = document.getElementById(id);
      if (btn) btn.addEventListener("click", handleSubmit);
    });
  })();

  /* ------------------------------------------------- glossary definitions */

  (function definitions() {
    var overlay = document.getElementById("defOverlay");
    if (!overlay) return;

    var termEl = document.getElementById("defTerm");
    var bodyEl = document.getElementById("defBody");
    var defs = window.KIPR_GLOSSARY || {};
    var trigger = null;

    function open(control) {
      var key = control.dataset.term;
      var entry = defs[key];
      if (!entry) return;
      trigger = control;
      termEl.textContent = entry.title;
      bodyEl.textContent = entry.body;
      overlay.hidden = false;
      overlay.classList.add("open");
      document.getElementById("defClose").focus();
      document.body.style.overflow = "hidden";
    }

    function close() {
      if (!overlay.classList.contains("open")) return;
      overlay.classList.remove("open");
      overlay.hidden = true;
      document.body.style.overflow = "";
      if (trigger) trigger.focus();
      trigger = null;
    }

    document.getElementById("defClose").addEventListener("click", close);
    overlay.addEventListener("click", function (e) {
      if (e.target === this) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("open")) close();
    });
    document.addEventListener("click", function (e) {
      var el = e.target.closest(".def-term");
      if (el) {
        e.preventDefault();
        open(el);
      }
    });
  })();

  /* ---------------------------------------------------------- image zoom */

  (function imageZoom() {
    var zoom = document.getElementById("zoom");
    if (!zoom) return;

    var img = document.getElementById("zimg");
    var caption = document.getElementById("zcap");
    var trigger = null;

    function open(control) {
      var source = control.querySelector("img");
      trigger = control;
      img.src = source.src;
      img.alt = source.alt || "";
      var figure = source.closest("figure");
      var figcaption = figure && figure.querySelector("figcaption");
      caption.textContent = figcaption ? figcaption.textContent : "";
      zoom.classList.add("open");
      document.body.style.overflow = "hidden";
      document.getElementById("zclose").focus();
    }

    function close() {
      zoom.classList.remove("open");
      img.src = "";
      document.body.style.overflow = "";
      if (trigger) trigger.focus();
      trigger = null;
    }

    document.addEventListener("click", function (e) {
      var target = e.target.closest(".figure-zoom");
      if (target) {
        open(target);
        return;
      }
      if (e.target === zoom) close();
    });
    document.getElementById("zclose").addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && zoom.classList.contains("open")) close();
    });
  })();
})();
