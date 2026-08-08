(function () {
  'use strict';

  var query = document.getElementById('glossaryQuery');
  var count = document.getElementById('glossaryCount');
  var empty = document.getElementById('glossaryEmpty');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.glossary-term'));

  if (!query || !count || !empty) return;

  cards.forEach(function (card) {
    var key = card.getAttribute('data-term') || '';
    card._highlightTargets = Array.prototype.slice.call(
      card.querySelectorAll('[data-search-highlight]')
    );
    card._highlightTargets.forEach(function (element) {
      element._rawText = element.textContent;
    });
    card._searchText = (key + ' ' + card._highlightTargets.map(function (element) {
      return element._rawText;
    }).join(' ')).toLocaleLowerCase();
  });

  function highlight(element, needle) {
    var raw = element._rawText;
    var lower = raw.toLocaleLowerCase();
    var start = 0;
    var match;

    element.textContent = '';
    if (!needle) {
      element.textContent = raw;
      return;
    }

    while ((match = lower.indexOf(needle, start)) !== -1) {
      element.appendChild(document.createTextNode(raw.slice(start, match)));
      var mark = document.createElement('mark');
      mark.textContent = raw.slice(match, match + needle.length);
      element.appendChild(mark);
      start = match + needle.length;
    }
    element.appendChild(document.createTextNode(raw.slice(start)));
  }

  function filterGlossary() {
    var needle = query.value.trim().toLocaleLowerCase();
    var visible = 0;

    cards.forEach(function (card) {
      var matches = !needle || card._searchText.indexOf(needle) !== -1;
      card.hidden = !matches;
      if (matches) visible += 1;
      card._highlightTargets.forEach(function (element) {
        highlight(element, matches ? needle : '');
      });
    });

    empty.hidden = visible !== 0;
    count.textContent = needle
      ? visible + ' of ' + cards.length + ' terms'
      : cards.length + ' terms';
  }

  query.addEventListener('input', filterGlossary);
})();
