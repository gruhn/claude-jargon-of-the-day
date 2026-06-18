// The jargon list. Append new entries to the END to keep the daily rotation
// stable for existing dates — see the index calculation in app.js.
const PHRASES = [
  {
    term: "bespoke",
    definition:
      "Custom-made for a specific purpose rather than off-the-shelf. Claude reaches for this to describe a tailored, one-off solution.",
  },
  {
    term: "piecemeal",
    definition:
      "Done bit by bit, one piece at a time, rather than all at once in a coordinated way. Often used to flag a fragmented approach.",
  },
  {
    term: "fan-out",
    definition:
      "Splitting one task into many parallel sub-tasks that run independently — for example dispatching several searches at once and gathering the results.",
  },
  {
    term: "belt-and-suspenders",
    definition:
      "Using two redundant safeguards where one would technically do, so that if one fails the other still holds. A deliberately over-cautious approach.",
  },
  {
    term: "coalescing",
    definition:
      "Merging multiple separate things into a single combined one — e.g. collapsing several rapid updates into one, or combining overlapping results.",
  },
  {
    term: "load-bearing",
    definition: "Describes a component that something else critically depends on — remove it or change it and the whole structure fails.",
  },
  {
    term: "proof cohort",
    definition:
      "A small representative subset selected to validate an approach before applying it broadly — if the approach holds for the cohort, it's trusted to generalize.",
  }
];
