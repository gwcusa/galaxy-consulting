/* eslint-disable */
// @ts-nocheck
// tsx-free-tool:sprs_score — the TurnStoneX template's tested calculation, plain JavaScript copied verbatim.
export function compute(v) {
  const a = Math.max(0, Math.floor(Number(v.five) || 0)), b = Math.max(0, Math.floor(Number(v.three) || 0)), c = Math.max(0, Math.floor(Number(v.one) || 0));
  const score = Math.max(-203, 110 - 5 * a - 3 * b - c);
  return { rows: [["Estimated SPRS score", String(score)], ["Points to recover", String(110 - score)]], note: score === 110 ? "All 110 requirements met." : "Plan of Action items must be closed within the allowed time for conditional status." };
}
