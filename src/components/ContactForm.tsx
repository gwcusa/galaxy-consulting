'use client';

import { useState } from 'react';
import { Send, Building2 } from 'lucide-react';

interface Props {
  reasons: string[];
  defaultTopic?: string;
}

export default function ContactForm({ reasons, defaultTopic }: Props) {
  const firstCmmc = reasons.find((r) => r.toLowerCase().includes('cmmc')) ?? reasons[0];
  const [topic, setTopic] = useState(defaultTopic ?? firstCmmc);
  const [name, setName]   = useState('');
  const [org, setOrg]     = useState('');

  const subject = encodeURIComponent(`Galaxy Consulting Inquiry — ${topic}`);
  const body    = encodeURIComponent(
    `Name: ${name || '[Your Name]'}\nOrganization: ${org || '[Your Organization]'}\nTopic: ${topic}\n\nMessage:\n`
  );
  const mailto  = `mailto:info@galaxyconsultingllc.com?subject=${subject}&body=${body}`;

  return (
    <div className="bg-card-alt rounded-xl p-7 border border-blue-accent/20 mt-6">
      <h3 className="text-white font-bold text-base mb-5" style={{ fontFamily: 'var(--font-barlow)' }}>
        How Can We Help?
      </h3>

      <div className="space-y-4">
        {/* Topic Dropdown */}
        <div>
          <label className="block text-xs text-silver/50 uppercase tracking-widest mb-1.5" style={{ fontFamily: 'var(--font-inter)' }}>
            Inquiry Topic
          </label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
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
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
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

        {/* Submit */}
        <a
          href={mailto}
          className="mt-2 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-accent hover:bg-blue-bright text-navy text-sm font-semibold rounded-lg transition-colors duration-200"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          <Send size={15} />
          Send Inquiry
        </a>

        <p className="text-xs text-silver/40 text-center" style={{ fontFamily: 'var(--font-inter)' }}>
          Opens your email client pre-filled with your inquiry details.
        </p>
      </div>
    </div>
  );
}
