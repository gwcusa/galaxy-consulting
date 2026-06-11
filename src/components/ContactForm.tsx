'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface Props {
  reasons: string[];
  defaultTopic?: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm({ reasons, defaultTopic }: Props) {
  const firstCmmc = reasons.find((r) => r.toLowerCase().includes('cmmc')) ?? reasons[0];
  const [topic,   setTopic]   = useState(defaultTopic ?? firstCmmc);
  const [name,    setName]    = useState('');
  const [org,     setOrg]     = useState('');
  const [email,   setEmail]   = useState('');
  const [phone,   setPhone]   = useState('');
  const [message, setMessage] = useState('');
  const [status,  setStatus]  = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, org, email, phone, topic, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
      } else {
        setStatus('success');
        setName(''); setOrg(''); setEmail(''); setPhone(''); setMessage('');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-card-alt rounded-xl p-7 border border-emerald-500/30 mt-6 flex flex-col items-center text-center gap-4">
        <CheckCircle2 size={40} className="text-emerald-400" />
        <h3 className="text-white font-bold text-base" style={{ fontFamily: 'var(--font-barlow)' }}>
          Message Sent!
        </h3>
        <p className="text-silver/70 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
          Thank you for reaching out. A member of our team will be in touch with you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-xs text-blue-bright hover:underline"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card-alt rounded-xl p-7 border border-blue-accent/20 mt-6">
      <h3 className="text-white font-bold text-base mb-5" style={{ fontFamily: 'var(--font-barlow)' }}>
        How Can We Help?
      </h3>

      <div className="space-y-4">
        {/* Topic */}
        <div>
          <label className="block text-xs text-silver/50 uppercase tracking-widest mb-1.5" style={{ fontFamily: 'var(--font-inter)' }}>
            Inquiry Topic
          </label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
            className="w-full bg-navy border border-blue-accent/30 text-silver text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-accent transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {reasons.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        {/* Name */}
        <div>
          <label className="block text-xs text-silver/50 uppercase tracking-widest mb-1.5" style={{ fontFamily: 'var(--font-inter)' }}>
            Your Name <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            required
            className="w-full bg-navy border border-blue-accent/30 text-silver text-sm rounded-lg px-3 py-2.5 placeholder-silver/30 focus:outline-none focus:border-blue-accent transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          />
        </div>

        {/* Organization */}
        <div>
          <label className="block text-xs text-silver/50 uppercase tracking-widest mb-1.5" style={{ fontFamily: 'var(--font-inter)' }}>
            Organization
          </label>
          <input
            type="text"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            placeholder="Company or agency name"
            className="w-full bg-navy border border-blue-accent/30 text-silver text-sm rounded-lg px-3 py-2.5 placeholder-silver/30 focus:outline-none focus:border-blue-accent transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs text-silver/50 uppercase tracking-widest mb-1.5" style={{ fontFamily: 'var(--font-inter)' }}>
            Email Address <span className="text-rose-400">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full bg-navy border border-blue-accent/30 text-silver text-sm rounded-lg px-3 py-2.5 placeholder-silver/30 focus:outline-none focus:border-blue-accent transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs text-silver/50 uppercase tracking-widest mb-1.5" style={{ fontFamily: 'var(--font-inter)' }}>
            Phone Number <span className="normal-case text-silver/30">(optional)</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 000-0000"
            className="w-full bg-navy border border-blue-accent/30 text-silver text-sm rounded-lg px-3 py-2.5 placeholder-silver/30 focus:outline-none focus:border-blue-accent transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs text-silver/50 uppercase tracking-widest mb-1.5" style={{ fontFamily: 'var(--font-inter)' }}>
            Message / Comments <span className="text-rose-400">*</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your needs or ask a question..."
            rows={4}
            required
            className="w-full bg-navy border border-blue-accent/30 text-silver text-sm rounded-lg px-3 py-2.5 placeholder-silver/30 focus:outline-none focus:border-blue-accent transition-colors resize-none"
            style={{ fontFamily: 'var(--font-inter)' }}
          />
        </div>

        {/* Error message */}
        {status === 'error' && (
          <div className="flex items-start gap-2 text-rose-400 text-xs bg-rose-500/10 border border-rose-500/20 rounded-lg px-3 py-2.5" style={{ fontFamily: 'var(--font-inter)' }}>
            <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="mt-2 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-accent hover:bg-blue-bright disabled:opacity-60 disabled:cursor-not-allowed text-navy text-sm font-semibold rounded-lg transition-colors duration-200"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {status === 'sending' ? (
            <><Loader2 size={15} className="animate-spin" /> Sending…</>
          ) : (
            <><Send size={15} /> Send Inquiry</>
          )}
        </button>

        <p className="text-xs text-silver/40 text-center" style={{ fontFamily: 'var(--font-inter)' }}>
          Fields marked <span className="text-rose-400">*</span> are required. We typically respond within one business day.
        </p>
      </div>
    </form>
  );
}
