// Number of whole days since the Unix epoch (UTC), based on the local date.
// We build a UTC timestamp from the local Y/M/D so the displayed phrase flips
// at the user's local midnight rather than at UTC midnight.
function daysSinceEpoch(date) {
  const utcMidnight = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  return Math.floor(utcMidnight / 86400000);
}

// Map the date to an index. Because the index advances by exactly one each day,
// the phrase is never repeated on consecutive days, and the rotation walks the
// whole list in order before wrapping. Appending new phrases to the end extends
// the cycle without disturbing it: if today is the last index, tomorrow wraps to
// 0 — but if a phrase was added, tomorrow lands on the new entry instead.
function indexForDate(date, length) {
  return ((daysSinceEpoch(date) % length) + length) % length;
}

function render(date) {
  const index = indexForDate(date, PHRASES.length);
  const { term, definition } = PHRASES[index];

  document.getElementById("term").textContent = term;
  document.getElementById("definition").textContent = definition;
  document.getElementById("date").textContent = date.toLocaleDateString(
    undefined,
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );
  document.getElementById("count").textContent = `${index + 1} of ${PHRASES.length}`;
}

// GitHub Pages serves every file with Cache-Control: max-age=600, and the
// headers can't be changed. So we load phrases.js with a cache-busting query
// param to make sure freshly deployed phrases show up immediately instead of
// being served from the browser cache for up to 10 minutes. Loaded via a
// script tag (not fetch) so opening index.html over file:// still works.
const script = document.createElement("script");
script.src = "phrases.js?t=" + Date.now();
script.onload = () => render(new Date());
document.head.appendChild(script);
