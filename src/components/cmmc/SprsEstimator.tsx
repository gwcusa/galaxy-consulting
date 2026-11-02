'use client';
// Runs entirely in the browser: nothing typed here is sent anywhere (only an anonymous GA4
// "tool_use" event on first use, when analytics is allowed).
import { useMemo, useRef, useState } from 'react';
import { FAMILIES, MAX_SCORE, MIN_SCORE, type Requirement } from '@/lib/nist-800-171';

type Status = 'met' | 'not' | 'partial';

/** Requirements that 32 CFR 170.21 keeps off a Level 2 POA&M regardless of point value. */
const NEVER_ON_POAM = new Set(['3.1.20', '3.1.22', '3.10.3', '3.10.4', '3.10.5', '3.12.4']);

function deduction(r: Requirement, s: Status): number {
  if (s === 'met' || r.unscored) return 0;
  if (s === 'partial' && r.partial) return r.partial.weight;
  return r.weight;
}

function poamEligible(r: Requirement, s: Status): boolean {
  if (NEVER_ON_POAM.has(r.id)) return false;
  if (r.id === '3.13.11') return s === 'partial';
  return r.weight === 1;
}

export default function SprsEstimator() {
  const [status, setStatus] = useState<Record<string, Status>>({});
  const tracked = useRef(false);

  const set = (id: string, s: Status) => {
    setStatus((prev) => ({ ...prev, [id]: s }));
    if (!tracked.current) {
      tracked.current = true;
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.('event', 'tool_use', { tool_id: 'sprs_score' });
    }
  };

  const result = useMemo(() => {
    let lost = 0;
    let unmet = 0;
    let blocking = 0;
    const byWeight: Record<number, number> = { 1: 0, 3: 0, 5: 0 };
    for (const f of FAMILIES) {
      for (const r of f.reqs) {
        const s = status[r.id] ?? 'met';
        if (s === 'met') continue;
        if (r.unscored) continue;
        const d = deduction(r, s);
        lost += d;
        unmet += 1;
        byWeight[d] = (byWeight[d] ?? 0) + 1;
        if (!poamEligible(r, s)) blocking += 1;
      }
    }
    const noSsp = (status['3.12.4'] ?? 'met') !== 'met';
    return { score: MAX_SCORE - lost, lost, unmet, byWeight, blocking, noSsp };
  }, [status]);

  const reset = () => setStatus({});
  const band =
    result.score === MAX_SCORE ? { label: 'All 110 requirements met', tone: 'text-emerald-400' }
    : result.score >= 88 ? { label: 'At or above 88, the Level 2 Conditional score floor', tone: 'text-cyan-300' }
    : { label: 'Below 88: not yet at the Level 2 Conditional floor', tone: 'text-amber-300' };

  return (
    <div className="not-prose">
      {/* Score panel */}
      <div className="fixed top-[84px] right-3 z-20 sm:hidden rounded-full border border-emerald-500/40 bg-navy-mid/95 px-4 py-2 text-sm text-white shadow-lg" aria-hidden>SPRS <strong>{result.score}</strong></div>
      <div className="sm:sticky sm:top-[80px] z-10 rounded-2xl border border-emerald-500/30 bg-navy-mid/95 backdrop-blur p-5 mb-8 shadow-lg" aria-live="polite">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-silver/60">Estimated SPRS score</div>
            <div className="text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-barlow)' }}>{result.score}</div>
            <div className={`text-sm ${band.tone}`}>{band.label}</div>
          </div>
          <div className="text-sm text-silver/80 space-y-1">
            <div>Unmet requirements: <strong className="text-white">{result.unmet}</strong> ({result.byWeight[5] ?? 0} at 5 points, {result.byWeight[3] ?? 0} at 3, {result.byWeight[1] ?? 0} at 1)</div>
            <div>Points to recover: <strong className="text-white">{result.lost}</strong></div>
            <div>Unmet items that may not go on a POA&amp;M: <strong className="text-white">{result.blocking}</strong></div>
            <div className="text-xs text-silver/50">Range: {MIN_SCORE} to {MAX_SCORE}</div>
          </div>
          <button type="button" onClick={reset} className="px-4 py-2 rounded-lg border border-silver/30 text-silver hover:text-white hover:border-silver/60 text-sm">
            Reset to 110
          </button>
        </div>
        {result.noSsp && (
          <p className="mt-3 text-sm text-amber-300">
            No current system security plan (3.12.4): under the DoD Assessment Methodology an assessment cannot be completed without one, so no score can be posted until it exists.
          </p>
        )}
      </div>

      {/* Requirement list */}
      <div className="space-y-6">
        {FAMILIES.map((f) => {
          const lostHere = f.reqs.reduce((t, r) => t + deduction(r, status[r.id] ?? 'met'), 0);
          return (
            <details key={f.code} className="group rounded-xl border border-blue-accent/20 bg-card-surface" open={f.code === 'AC'}>
              <summary className="cursor-pointer list-none flex flex-wrap items-center justify-between gap-3 p-4">
                <span className="font-semibold text-white">{f.code} · {f.name} <span className="text-silver/50 font-normal">({f.reqs.length})</span></span>
                <span className="text-sm text-silver/70">{lostHere > 0 ? `-${lostHere} points` : 'no deductions'}</span>
              </summary>
              <ul className="divide-y divide-blue-accent/10">
                {f.reqs.map((r) => {
                  const s = status[r.id] ?? 'met';
                  const name = `req-${r.id}`;
                  return (
                    <li key={r.id} className="p-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                      <div className="text-sm">
                        <span className="font-mono text-emerald-400 mr-2">{r.id}</span>
                        <span className="text-silver/90">{r.text}</span>
                        <span className="ml-2 text-xs text-silver/50">{r.unscored ? 'not scored' : `${r.weight} pt${r.weight > 1 ? 's' : ''}`}{r.partial ? ` (${r.partial.weight} if partial)` : ''}</span>
                      </div>
                      <fieldset className="flex flex-wrap gap-2 text-xs">
                        <legend className="sr-only">Status of {r.id}</legend>
                        {(['met', ...(r.partial ? ['partial'] : []), 'not'] as Status[]).map((opt) => (
                          <label key={opt} className={`cursor-pointer rounded-md border px-2.5 py-1.5 ${s === opt ? (opt === 'met' ? 'border-emerald-500 bg-emerald-500/15 text-emerald-300' : 'border-amber-400 bg-amber-400/15 text-amber-200') : 'border-silver/25 text-silver/70 hover:text-white'}`}>
                            <input type="radio" name={name} value={opt} checked={s === opt} onChange={() => set(r.id, opt)} className="sr-only" />
                            {opt === 'met' ? 'Met' : opt === 'not' ? 'Not met' : r.partial?.label}
                          </label>
                        ))}
                      </fieldset>
                    </li>
                  );
                })}
              </ul>
            </details>
          );
        })}
      </div>
    </div>
  );
}
