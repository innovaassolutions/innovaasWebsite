export default function NovaCRMPipeline() {
  return (
    <svg
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Browser Window Frame */}
      <rect width="800" height="500" rx="12" fill="#FFFEFB" />

      {/* Browser Chrome */}
      <rect width="800" height="40" rx="12" fill="#FAF8F3" />
      <circle cx="20" cy="20" r="6" fill="#ef4444" />
      <circle cx="40" cy="20" r="6" fill="#F25C05" />
      <circle cx="60" cy="20" r="6" fill="#22c55e" />
      <rect x="90" y="10" width="600" height="20" rx="4" fill="#FFFFFF" />
      <text x="100" y="25" fontSize="11" fill="#71706B" fontFamily="monospace">
        app.novacrm.io/deals/pipeline
      </text>

      {/* Header */}
      <rect x="0" y="40" width="800" height="48" fill="#FFFEFB" />
      <text x="30" y="70" fontSize="16" fontWeight="bold" fill="#171614">Deal Pipeline</text>
      <text x="720" y="68" fontSize="10" fill="#71706B">Total: $1.24M</text>
      <line x1="0" y1="88" x2="800" y2="88" stroke="#E6E2D6" strokeWidth="1" />

      {/* Column Headers */}
      <rect x="15" y="96" width="148" height="28" rx="6" fill="#F25C05" opacity="0.08" />
      <text x="89" y="114" fontSize="10" fontWeight="600" fill="#F25C05" textAnchor="middle">LEAD · $180K</text>
      <text x="89" y="135" fontSize="9" fill="#71706B" textAnchor="middle">5 deals</text>

      <rect x="170" y="96" width="148" height="28" rx="6" fill="#3B82F6" opacity="0.08" />
      <text x="244" y="114" fontSize="10" fontWeight="600" fill="#3B82F6" textAnchor="middle">QUALIFIED · $340K</text>
      <text x="244" y="135" fontSize="9" fill="#71706B" textAnchor="middle">4 deals</text>

      <rect x="325" y="96" width="148" height="28" rx="6" fill="#8B5CF6" opacity="0.08" />
      <text x="399" y="114" fontSize="10" fontWeight="600" fill="#8B5CF6" textAnchor="middle">PROPOSAL · $410K</text>
      <text x="399" y="135" fontSize="9" fill="#71706B" textAnchor="middle">3 deals</text>

      <rect x="480" y="96" width="148" height="28" rx="6" fill="#F59E0B" opacity="0.08" />
      <text x="554" y="114" fontSize="10" fontWeight="600" fill="#F59E0B" textAnchor="middle">NEGOTIATION · $225K</text>
      <text x="554" y="135" fontSize="9" fill="#71706B" textAnchor="middle">2 deals</text>

      <rect x="635" y="96" width="148" height="28" rx="6" fill="#22C55E" opacity="0.08" />
      <text x="709" y="114" fontSize="10" fontWeight="600" fill="#22C55E" textAnchor="middle">CLOSED WON · $87K</text>
      <text x="709" y="135" fontSize="9" fill="#71706B" textAnchor="middle">3 deals</text>

      {/* Deal Cards - Lead Column */}
      <rect x="20" y="145" width="138" height="75" rx="6" fill="#FAF8F3" stroke="#E6E2D6" strokeWidth="1" />
      <text x="30" y="163" fontSize="9" fontWeight="600" fill="#171614">Bright Solutions</text>
      <text x="30" y="177" fontSize="9" fill="#71706B">Web Redesign</text>
      <text x="30" y="195" fontSize="11" fontWeight="bold" fill="#171614">$45,000</text>
      <rect x="100" y="197" width="50" height="14" rx="7" fill="#22C55E" opacity="0.1" />
      <text x="125" y="207" fontSize="7" fill="#22C55E" textAnchor="middle">Hot</text>

      <rect x="20" y="228" width="138" height="75" rx="6" fill="#FAF8F3" stroke="#E6E2D6" strokeWidth="1" />
      <text x="30" y="246" fontSize="9" fontWeight="600" fill="#171614">Zenith Corp</text>
      <text x="30" y="260" fontSize="9" fill="#71706B">CRM Migration</text>
      <text x="30" y="278" fontSize="11" fontWeight="bold" fill="#171614">$62,000</text>
      <rect x="100" y="280" width="50" height="14" rx="7" fill="#F59E0B" opacity="0.1" />
      <text x="125" y="290" fontSize="7" fill="#F59E0B" textAnchor="middle">Warm</text>

      <rect x="20" y="311" width="138" height="60" rx="6" fill="#FAF8F3" stroke="#E6E2D6" strokeWidth="1" />
      <text x="30" y="329" fontSize="9" fontWeight="600" fill="#171614">Peak Media</text>
      <text x="30" y="343" fontSize="9" fill="#71706B">Social Campaign</text>
      <text x="30" y="358" fontSize="11" fontWeight="bold" fill="#171614">$28,000</text>

      {/* Qualified Column */}
      <rect x="175" y="145" width="138" height="75" rx="6" fill="#FAF8F3" stroke="#E6E2D6" strokeWidth="1" />
      <text x="185" y="163" fontSize="9" fontWeight="600" fill="#171614">Nova Industries</text>
      <text x="185" y="177" fontSize="9" fill="#71706B">ERP Integration</text>
      <text x="185" y="195" fontSize="11" fontWeight="bold" fill="#171614">$120,000</text>
      <rect x="255" y="197" width="50" height="14" rx="7" fill="#22C55E" opacity="0.1" />
      <text x="280" y="207" fontSize="7" fill="#22C55E" textAnchor="middle">Hot</text>

      <rect x="175" y="228" width="138" height="75" rx="6" fill="#FAF8F3" stroke="#E6E2D6" strokeWidth="1" />
      <text x="185" y="246" fontSize="9" fontWeight="600" fill="#171614">Meridian Group</text>
      <text x="185" y="260" fontSize="9" fill="#71706B">Data Analytics</text>
      <text x="185" y="278" fontSize="11" fontWeight="bold" fill="#171614">$85,000</text>

      <rect x="175" y="311" width="138" height="60" rx="6" fill="#FAF8F3" stroke="#E6E2D6" strokeWidth="1" />
      <text x="185" y="329" fontSize="9" fontWeight="600" fill="#171614">Horizon Tech</text>
      <text x="185" y="343" fontSize="9" fill="#71706B">Cloud Setup</text>
      <text x="185" y="358" fontSize="11" fontWeight="bold" fill="#171614">$72,000</text>

      {/* Proposal Column */}
      <rect x="330" y="145" width="138" height="80" rx="6" fill="#FAF8F3" stroke="#E6E2D6" strokeWidth="1" />
      <text x="340" y="163" fontSize="9" fontWeight="600" fill="#171614">Apex Technologies</text>
      <text x="340" y="177" fontSize="9" fill="#71706B">Platform License</text>
      <text x="340" y="195" fontSize="11" fontWeight="bold" fill="#171614">$125,000</text>
      <rect x="340" y="203" width="118" height="12" rx="3" fill="#E6E2D6" />
      <rect x="340" y="203" width="80" height="12" rx="3" fill="#8B5CF6" opacity="0.5" />
      <text x="399" y="212" fontSize="7" fill="#FFFEFB" textAnchor="middle">Sent 3d ago</text>

      <rect x="330" y="233" width="138" height="75" rx="6" fill="#FAF8F3" stroke="#E6E2D6" strokeWidth="1" />
      <text x="340" y="251" fontSize="9" fontWeight="600" fill="#171614">Luna Labs</text>
      <text x="340" y="265" fontSize="9" fill="#71706B">R&amp;D Tools</text>
      <text x="340" y="283" fontSize="11" fontWeight="bold" fill="#171614">$195,000</text>
      <rect x="410" y="285" width="50" height="14" rx="7" fill="#22C55E" opacity="0.1" />
      <text x="435" y="295" fontSize="7" fill="#22C55E" textAnchor="middle">Hot</text>

      {/* Negotiation Column */}
      <rect x="485" y="145" width="138" height="80" rx="6" fill="#FAF8F3" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="495" y="163" fontSize="9" fontWeight="600" fill="#171614">Smith &amp; Partners</text>
      <text x="495" y="177" fontSize="9" fill="#71706B">Annual Retainer</text>
      <text x="495" y="195" fontSize="11" fontWeight="bold" fill="#171614">$150,000</text>
      <text x="495" y="213" fontSize="8" fill="#F59E0B" fontWeight="500">Pricing discussion pending</text>

      <rect x="485" y="233" width="138" height="70" rx="6" fill="#FAF8F3" stroke="#E6E2D6" strokeWidth="1" />
      <text x="495" y="251" fontSize="9" fontWeight="600" fill="#171614">Cedar Health</text>
      <text x="495" y="265" fontSize="9" fill="#71706B">Patient Portal</text>
      <text x="495" y="283" fontSize="11" fontWeight="bold" fill="#171614">$75,000</text>

      {/* Closed Won Column */}
      <rect x="640" y="145" width="138" height="65" rx="6" fill="#22C55E" opacity="0.05" stroke="#22C55E" strokeWidth="1" />
      <text x="650" y="163" fontSize="9" fontWeight="600" fill="#171614">TechFlow Inc</text>
      <text x="650" y="177" fontSize="9" fill="#71706B">Automation Suite</text>
      <text x="650" y="195" fontSize="11" fontWeight="bold" fill="#22C55E">$35,000 ✓</text>

      <rect x="640" y="218" width="138" height="65" rx="6" fill="#22C55E" opacity="0.05" stroke="#22C55E" strokeWidth="1" />
      <text x="650" y="236" fontSize="9" fontWeight="600" fill="#171614">Vertex Digital</text>
      <text x="650" y="250" fontSize="9" fill="#71706B">Marketing Tools</text>
      <text x="650" y="268" fontSize="11" fontWeight="bold" fill="#22C55E">$22,000 ✓</text>

      <rect x="640" y="291" width="138" height="65" rx="6" fill="#22C55E" opacity="0.05" stroke="#22C55E" strokeWidth="1" />
      <text x="650" y="309" fontSize="9" fontWeight="600" fill="#171614">Prism Analytics</text>
      <text x="650" y="323" fontSize="9" fill="#71706B">Dashboard Build</text>
      <text x="650" y="341" fontSize="11" fontWeight="bold" fill="#22C55E">$30,000 ✓</text>

      {/* AI Insight Bar */}
      <rect x="20" y="390" width="762" height="36" rx="8" fill="#FEF5EE" />
      <text x="40" y="413" fontSize="10" fill="#F25C05" fontWeight="600">✦ AI Insight:</text>
      <text x="125" y="413" fontSize="10" fill="#171614">
        Smith &amp; Partners deal has been in Negotiation for 12 days. Suggest scheduling a decision call this week.
      </text>

      {/* Drag hint */}
      <rect x="20" y="440" width="762" height="30" rx="6" fill="#FAF8F3" />
      <text x="400" y="460" fontSize="9" fill="#71706B" textAnchor="middle">
        Drag and drop deals between stages · Click to view details · AI auto-scores deal health
      </text>

      {/* Border */}
      <rect width="800" height="500" rx="12" fill="none" stroke="#E6E2D6" strokeWidth="1" />
    </svg>
  );
}
