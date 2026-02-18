export default function NovaCRMContact() {
  return (
    <svg
      viewBox="0 0 800 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Browser Window Frame */}
      <rect width="800" height="520" rx="12" fill="#FFFEFB" />

      {/* Browser Chrome */}
      <rect width="800" height="40" rx="12" fill="#FAF8F3" />
      <circle cx="20" cy="20" r="6" fill="#ef4444" />
      <circle cx="40" cy="20" r="6" fill="#F25C05" />
      <circle cx="60" cy="20" r="6" fill="#22c55e" />

      {/* URL Bar */}
      <rect x="90" y="10" width="600" height="20" rx="4" fill="#FFFFFF" />
      <text x="100" y="25" fontSize="11" fill="#71706B" fontFamily="monospace">
        novacrm.innovaas.co/contacts/sarah-chen
      </text>

      {/* Header */}
      <rect x="0" y="40" width="800" height="48" fill="#FFFEFB" />
      <text x="30" y="68" fontSize="11" fill="#71706B">← Contacts</text>
      <text x="110" y="68" fontSize="16" fontWeight="bold" fill="#171614">Sarah Chen</text>
      <line x1="0" y1="88" x2="800" y2="88" stroke="#E6E2D6" strokeWidth="1" />

      {/* Left Panel: Contact Details */}
      <rect x="20" y="98" width="280" height="400" rx="8" fill="#FAF8F3" />

      <circle cx="70" cy="140" r="28" fill="#F25C05" opacity="0.15" />
      <text x="70" y="146" fontSize="18" fontWeight="bold" fill="#F25C05" textAnchor="middle">SC</text>

      <text x="108" y="130" fontSize="14" fontWeight="bold" fill="#171614">Sarah Chen</text>
      <text x="108" y="146" fontSize="10" fill="#71706B">VP of Engineering</text>
      <text x="108" y="160" fontSize="10" fill="#F25C05">Apex Technologies</text>

      <line x1="35" y1="175" x2="285" y2="175" stroke="#E6E2D6" strokeWidth="1" />

      <text x="35" y="195" fontSize="9" fill="#71706B" fontWeight="600">CONTACT INFO</text>
      <text x="35" y="212" fontSize="10" fill="#71706B">Email</text>
      <text x="150" y="212" fontSize="10" fill="#171614">sarah@apextech.io</text>
      <text x="35" y="230" fontSize="10" fill="#71706B">Phone</text>
      <text x="150" y="230" fontSize="10" fill="#171614">+1 (415) 555-0142</text>
      <text x="35" y="248" fontSize="10" fill="#71706B">Location</text>
      <text x="150" y="248" fontSize="10" fill="#171614">San Francisco, CA</text>
      <text x="35" y="266" fontSize="10" fill="#71706B">LinkedIn</text>
      <text x="150" y="266" fontSize="10" fill="#3B82F6">linkedin.com/in/sarachen</text>

      <line x1="35" y1="280" x2="285" y2="280" stroke="#E6E2D6" strokeWidth="1" />

      {/* AI Enrichment */}
      <rect x="35" y="290" width="250" height="100" rx="6" fill="#FEF5EE" />
      <text x="50" y="308" fontSize="10" fontWeight="600" fill="#F25C05">✦ AI Enrichment</text>
      <text x="50" y="325" fontSize="9" fill="#171614">Decision maker for enterprise deals</text>
      <text x="50" y="340" fontSize="9" fill="#71706B">Engages most on Tues/Wed AM</text>
      <text x="50" y="355" fontSize="9" fill="#71706B">Prefers technical deep-dives</text>
      <text x="50" y="370" fontSize="9" fill="#71706B">Connected to 3 other contacts</text>
      <text x="50" y="385" fontSize="9" fill="#22C55E" fontWeight="500">Score: 92/100 — Hot Lead</text>

      {/* Tags */}
      <rect x="35" y="400" width="65" height="20" rx="10" fill="#F25C05" opacity="0.1" />
      <text x="67" y="414" fontSize="9" fill="#F25C05" textAnchor="middle">Enterprise</text>
      <rect x="108" y="400" width="45" height="20" rx="10" fill="#22C55E" opacity="0.1" />
      <text x="130" y="414" fontSize="9" fill="#22C55E" textAnchor="middle">VIP</text>
      <rect x="161" y="400" width="58" height="20" rx="10" fill="#3B82F6" opacity="0.1" />
      <text x="190" y="414" fontSize="9" fill="#3B82F6" textAnchor="middle">Decision</text>

      {/* Right Panel: Activity + Deals */}
      <rect x="310" y="98" width="472" height="140" rx="8" fill="#FAF8F3" />
      <text x="325" y="120" fontSize="12" fontWeight="600" fill="#171614">Active Deals</text>

      <rect x="325" y="132" width="440" height="38" rx="6" fill="#FFFEFB" />
      <circle cx="340" cy="151" r="5" fill="#F25C05" />
      <text x="352" y="147" fontSize="10" fontWeight="500" fill="#171614">Enterprise Platform License</text>
      <text x="352" y="161" fontSize="9" fill="#71706B">Proposal stage · Est. close: Mar 15</text>
      <text x="720" y="151" fontSize="12" fontWeight="bold" fill="#F25C05" textAnchor="end">$125,000</text>

      <rect x="325" y="176" width="440" height="38" rx="6" fill="#FFFEFB" />
      <circle cx="340" cy="195" r="5" fill="#22C55E" />
      <text x="352" y="191" fontSize="10" fontWeight="500" fill="#171614">Annual Support Contract</text>
      <text x="352" y="205" fontSize="9" fill="#71706B">Negotiation stage · Est. close: Feb 28</text>
      <text x="720" y="195" fontSize="12" fontWeight="bold" fill="#22C55E" textAnchor="end">$48,000</text>

      {/* Activity Timeline */}
      <rect x="310" y="248" width="472" height="250" rx="8" fill="#FAF8F3" />
      <text x="325" y="272" fontSize="12" fontWeight="600" fill="#171614">Activity Timeline</text>

      <line x1="340" y1="285" x2="340" y2="478" stroke="#E6E2D6" strokeWidth="2" />

      <circle cx="340" cy="298" r="6" fill="#F25C05" />
      <text x="356" y="296" fontSize="10" fontWeight="500" fill="#171614">Email sent: Proposal follow-up</text>
      <text x="356" y="310" fontSize="9" fill="#71706B">Today at 10:30 AM · Opened ✓</text>

      <circle cx="340" cy="338" r="6" fill="#3B82F6" />
      <text x="356" y="336" fontSize="10" fontWeight="500" fill="#171614">Meeting: Product Demo</text>
      <text x="356" y="350" fontSize="9" fill="#71706B">Yesterday at 2:00 PM · 45 min · 3 attendees</text>

      <circle cx="340" cy="378" r="6" fill="#8B5CF6" />
      <text x="356" y="376" fontSize="10" fontWeight="500" fill="#171614">Note added: Interested in API integration</text>
      <text x="356" y="390" fontSize="9" fill="#71706B">Jan 30 · by Alex Rivera</text>

      <circle cx="340" cy="418" r="6" fill="#22C55E" />
      <text x="356" y="416" fontSize="10" fontWeight="500" fill="#171614">Deal created: Enterprise Platform License</text>
      <text x="356" y="430" fontSize="9" fill="#71706B">Jan 28 · $125,000 estimated value</text>

      <circle cx="340" cy="458" r="6" fill="#71706B" />
      <text x="356" y="456" fontSize="10" fontWeight="500" fill="#171614">Contact imported from LinkedIn</text>
      <text x="356" y="470" fontSize="9" fill="#71706B">Jan 25 · Auto-enriched by AI</text>

      {/* Border */}
      <rect width="800" height="520" rx="12" fill="none" stroke="#E6E2D6" strokeWidth="1" />
    </svg>
  );
}
