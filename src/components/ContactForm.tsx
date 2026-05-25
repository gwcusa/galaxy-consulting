'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

interface Props {
  reasons: string[];
  defaultTopic?: string;
}

export default function ContactForm({ reasons, defaultTopic }: Props) {
  const firstCmmc = reasons.find((r) => r.toLowerCase().includes('cmmc')) ?? reasons[0];
  const [topic,   setTopic]   = useState(defaultTopic ?? firstCmmc);
  const [name,    setName]    = useState('');
  const [org,     setOrg]     = useState('');
  const [email,   setEmail]   = useState('');
  const [phone,   setPhone]   = useState('');
  const [message, setMessage] = useState('');

  const subject = encodeURIComponent(`Galaxy Consulting Inquiry — ${topic}`);
  const body = encodeURIComponent(
    [
      `Name: ${name || '[Your Name]'}`,
      `Organization: ${org || '[Your Organization]'}`,
      `Email: ${email || '[Your Email]'}`,
      `Phone: ${phone || '[Your Phone]'}`,
      `Topic: ${topic}`,
      ``,
      `Message:`,
      message || '[Your Message]',
    ].join('\n')
  );
  const mailto = `mailto:info@galaxyconsultingllc.com?subject=${subject}&body=${body}`;

  return (
    <div className="bg-card-alt rounded-xl p-7 border border-blue-accent/20 mt-6">
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

        {/* Email */}
        <div>
          <label className="block text-xs text-silver/50 uppercase tracking-widest mb-1.5" style={{ fontFamily: 'var(--font-inter)' }}>
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
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
            Message / Comments
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your needs or ask a question..."
            rows={4}
            className="w-full bg-navy border border-blue-accent/30 text-silver text-sm rounded-lg px-3 py-2.5 placeholder-silver/30 focus:outline-none focus:border-blue-accent transition-colors resize-none"
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
          Clicking &ldquo;Send Inquiry&rdquo; opens your email client pre-filled and addressed to{' '}
          <span className="text-silver/60">info@galaxyconsultingllc.com</span>.
        </p>
      </div>
    </div>
  );
}
