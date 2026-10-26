"use client";
// tsx-free-tool:sprs_score — the calculation runs in the browser; nothing is sent anywhere except an optional GA4 "tool_use" event.
import { useState } from "react";
import { compute } from "./compute";

type Row = [string, string];
type Field = { name: string; label: string; kind: "number" | "select" | "date"; default: string; min?: number; max?: number; step?: number; options?: [string, string][] };
const FIELDS: Field[] = [{"name":"five","label":"Unmet 5-point requirements","kind":"number","default":"0","min":0,"max":42,"step":1},{"name":"three","label":"Unmet 3-point requirements","kind":"number","default":"0","min":0,"max":14,"step":1},{"name":"one","label":"Unmet 1-point requirements","kind":"number","default":"0","min":0,"max":62,"step":1}];

export default function Tool() {
  const [values, setValues] = useState<Record<string, string>>(Object.fromEntries(FIELDS.map((f) => [f.name, f.default])));
  const [result, setResult] = useState<{ rows: Row[]; note?: string } | null>(null);
  const run = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(compute(values) as { rows: Row[]; note?: string });
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", "tool_use", { tool_id: "sprs_score" });
  };
  return (
    <form onSubmit={run} style={{ display: "grid", gap: "0.75rem", margin: "1.5rem 0" }}>
      {FIELDS.map((f) => (
        <label key={f.name} style={{ display: "grid", gap: "0.25rem" }}>
          <span>{f.label}</span>
          {f.options ? (
            <select value={values[f.name]} onChange={(e) => setValues({ ...values, [f.name]: e.target.value })}>
              {f.options.map(([v, l]) => (
                <option key={v} value={v}>{l}</option>
              ))}
            </select>
          ) : (
            <input
              type={f.kind}
              value={values[f.name]}
              min={f.min}
              max={f.max}
              step={f.step}
              onChange={(e) => setValues({ ...values, [f.name]: e.target.value })}
            />
          )}
        </label>
      ))}
      <button type="submit">Calculate</button>
      {result ? (
        <div aria-live="polite">
          <dl>
            {result.rows.map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                <dt>{k}</dt>
                <dd style={{ margin: 0, fontWeight: 600 }}>{v}</dd>
              </div>
            ))}
          </dl>
          {result.note ? <p>{result.note}</p> : null}
        </div>
      ) : null}
    </form>
  );
}
