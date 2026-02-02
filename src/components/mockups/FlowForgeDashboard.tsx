export default function FlowForgeDashboard() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Browser Window Frame */}
      <rect width="800" height="600" rx="12" fill="#FFFEFB" />

      {/* Browser Chrome */}
      <rect width="800" height="40" rx="12" fill="#FAF8F3" />
      <circle cx="20" cy="20" r="6" fill="#ef4444" />
      <circle cx="40" cy="20" r="6" fill="#F25C05" />
      <circle cx="60" cy="20" r="6" fill="#22c55e" />

      {/* URL Bar */}
      <rect x="90" y="10" width="600" height="20" rx="4" fill="#FFFFFF" />
      <text x="100" y="25" fontSize="12" fill="#71706B" fontFamily="monospace">
        flowforge.ai/dashboard
      </text>

      {/* Header Bar */}
      <rect x="0" y="40" width="800" height="50" fill="#FFFEFB" />
      <text x="30" y="72" fontSize="18" fontWeight="bold" fill="#171614">
        Dashboard
      </text>
      <text x="630" y="65" fontSize="11" fill="#71706B" textAnchor="end">
        Good morning, Alex
      </text>
      <text x="770" y="65" fontSize="11" fill="#71706B" textAnchor="end">
        Feb 2, 2026
      </text>
      <line x1="0" y1="90" x2="800" y2="90" stroke="#FAF8F3" strokeWidth="1" />

      {/* ROW 1: Client Readiness Cards */}
      <text x="30" y="113" fontSize="13" fontWeight="600" fill="#171614">
        Client Readiness Overview
      </text>

      <rect x="20" y="122" width="180" height="95" rx="10" fill="#FAF8F3" />
      <text x="35" y="142" fontSize="12" fontWeight="600" fill="#171614">Acme Corp</text>
      <text x="35" y="185" fontSize="28" fontWeight="bold" fill="#22C55E">72</text>
      <text x="72" y="185" fontSize="12" fill="#71706B">/ 100</text>
      <rect x="35" y="195" width="150" height="5" rx="2" fill="#E8E7E4" />
      <rect x="35" y="195" width="108" height="5" rx="2" fill="#22C55E">
        <animate attributeName="width" from="0" to="108" dur="0.8s" fill="freeze" />
      </rect>
      <text x="35" y="160" fontSize="9" fill="#22C55E" fontWeight="500">On Track</text>

      <rect x="210" y="122" width="180" height="95" rx="10" fill="#FAF8F3" />
      <text x="225" y="142" fontSize="12" fontWeight="600" fill="#171614">Smith &amp; Co</text>
      <text x="225" y="185" fontSize="28" fontWeight="bold" fill="#F59E0B">58</text>
      <text x="262" y="185" fontSize="12" fill="#71706B">/ 100</text>
      <rect x="225" y="195" width="150" height="5" rx="2" fill="#E8E7E4" />
      <rect x="225" y="195" width="87" height="5" rx="2" fill="#F59E0B">
        <animate attributeName="width" from="0" to="87" dur="0.8s" fill="freeze" />
      </rect>
      <text x="225" y="160" fontSize="9" fill="#F59E0B" fontWeight="500">Needs Attention</text>

      <rect x="400" y="122" width="180" height="95" rx="10" fill="#FAF8F3" />
      <text x="415" y="142" fontSize="12" fontWeight="600" fill="#171614">Meridian Group</text>
      <text x="415" y="185" fontSize="28" fontWeight="bold" fill="#22C55E">84</text>
      <text x="452" y="185" fontSize="12" fill="#71706B">/ 100</text>
      <rect x="415" y="195" width="150" height="5" rx="2" fill="#E8E7E4" />
      <rect x="415" y="195" width="126" height="5" rx="2" fill="#22C55E">
        <animate attributeName="width" from="0" to="126" dur="0.8s" fill="freeze" />
      </rect>
      <text x="415" y="160" fontSize="9" fill="#22C55E" fontWeight="500">Strong</text>

      <rect x="590" y="122" width="190" height="95" rx="10" fill="#FAF8F3" />
      <text x="605" y="142" fontSize="12" fontWeight="600" fill="#171614">Nova Industries</text>
      <text x="605" y="185" fontSize="28" fontWeight="bold" fill="#EF4444">41</text>
      <text x="635" y="185" fontSize="12" fill="#71706B">/ 100</text>
      <rect x="605" y="195" width="160" height="5" rx="2" fill="#E8E7E4" />
      <rect x="605" y="195" width="66" height="5" rx="2" fill="#EF4444">
        <animate attributeName="width" from="0" to="66" dur="0.8s" fill="freeze" />
      </rect>
      <text x="605" y="160" fontSize="9" fill="#EF4444" fontWeight="500">At Risk</text>

      {/* ROW 2: Stakeholder Alignment | Dimension Scores */}
      <rect x="20" y="228" width="250" height="155" rx="10" fill="#FAF8F3" />
      <text x="35" y="250" fontSize="13" fontWeight="600" fill="#171614">Stakeholder Alignment</text>
      <circle cx="95" cy="330" r="35" stroke="#E8E7E4" strokeWidth="8" fill="none" />
      <circle cx="95" cy="330" r="35" stroke="#F59E0B" strokeWidth="8" fill="none" strokeDasharray="220" strokeDashoffset="79" strokeLinecap="round" transform="rotate(-90 95 330)">
        <animate attributeName="stroke-dashoffset" from="220" to="79" dur="1s" fill="freeze" />
      </circle>
      <text x="95" y="334" fontSize="18" fontWeight="bold" fill="#171614" textAnchor="middle">64%</text>
      <text x="150" y="300" fontSize="10" fill="#F59E0B" fontWeight="600">⚠ Gap Detected</text>
      <text x="150" y="316" fontSize="9" fill="#71706B">Executive vs Operations</text>
      <text x="150" y="330" fontSize="9" fill="#71706B">misaligned on timeline</text>
      <text x="150" y="350" fontSize="9" fill="#71706B">Avg across 4 clients</text>

      <rect x="280" y="228" width="310" height="155" rx="10" fill="#FAF8F3" />
      <text x="295" y="250" fontSize="13" fontWeight="600" fill="#171614">Dimension Scores (Avg)</text>
      <text x="295" y="276" fontSize="10" fill="#171614">Technology</text>
      <rect x="370" y="267" width="180" height="11" rx="3" fill="#E8E7E4" />
      <rect x="370" y="267" width="126" height="11" rx="3" fill="#1D9BA3">
        <animate attributeName="width" from="0" to="126" dur="0.7s" fill="freeze" />
      </rect>
      <text x="558" y="276" fontSize="9" fill="#171614" fontWeight="500">70</text>
      <text x="295" y="298" fontSize="10" fill="#171614">Process</text>
      <rect x="370" y="289" width="180" height="11" rx="3" fill="#E8E7E4" />
      <rect x="370" y="289" width="108" height="11" rx="3" fill="#F59E0B">
        <animate attributeName="width" from="0" to="108" dur="0.7s" fill="freeze" />
      </rect>
      <text x="558" y="298" fontSize="9" fill="#171614" fontWeight="500">60</text>
      <text x="295" y="320" fontSize="10" fill="#171614">People</text>
      <rect x="370" y="311" width="180" height="11" rx="3" fill="#E8E7E4" />
      <rect x="370" y="311" width="140" height="11" rx="3" fill="#22C55E">
        <animate attributeName="width" from="0" to="140" dur="0.7s" fill="freeze" />
      </rect>
      <text x="558" y="320" fontSize="9" fill="#171614" fontWeight="500">78</text>
      <text x="295" y="342" fontSize="10" fill="#171614">Data</text>
      <rect x="370" y="333" width="180" height="11" rx="3" fill="#E8E7E4" />
      <rect x="370" y="333" width="90" height="11" rx="3" fill="#EF4444">
        <animate attributeName="width" from="0" to="90" dur="0.7s" fill="freeze" />
      </rect>
      <text x="558" y="342" fontSize="9" fill="#171614" fontWeight="500">50</text>
      <text x="295" y="364" fontSize="10" fill="#171614">Strategy</text>
      <rect x="370" y="355" width="180" height="11" rx="3" fill="#E8E7E4" />
      <rect x="370" y="355" width="133" height="11" rx="3" fill="#1D9BA3">
        <animate attributeName="width" from="0" to="133" dur="0.7s" fill="freeze" />
      </rect>
      <text x="558" y="364" fontSize="9" fill="#171614" fontWeight="500">74</text>

      <rect x="600" y="228" width="180" height="155" rx="10" fill="#FAF8F3" />
      <text x="615" y="250" fontSize="11" fill="#71706B" fontWeight="500">Assessments This Quarter</text>
      <text x="690" y="305" fontSize="36" fontWeight="bold" fill="#F25C05" textAnchor="middle">12</text>
      <text x="690" y="322" fontSize="11" fill="#71706B" textAnchor="middle">completed</text>
      <rect x="630" y="340" width="120" height="8" rx="4" fill="#E8E7E4" />
      <rect x="630" y="340" width="100" height="8" rx="4" fill="#22C55E">
        <animate attributeName="width" from="0" to="100" dur="0.8s" fill="freeze" />
      </rect>
      <text x="690" y="364" fontSize="10" fill="#71706B" textAnchor="middle">83% completion rate</text>

      {/* ROW 3: Risk Indicators | Pipeline */}
      <rect x="20" y="395" width="470" height="110" rx="10" fill="#FAF8F3" />
      <text x="35" y="417" fontSize="13" fontWeight="600" fill="#171614">Risk Indicators</text>
      <rect x="35" y="428" width="440" height="30" rx="6" fill="#FEF2F2" />
      <circle cx="52" cy="443" r="5" fill="#EF4444">
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="64" y="447" fontSize="10" fill="#171614" fontWeight="500">Smith &amp; Co: IT and Operations misaligned on digital priorities</text>
      <text x="430" y="447" fontSize="9" fill="#EF4444" fontWeight="600">HIGH</text>
      <rect x="35" y="464" width="440" height="30" rx="6" fill="#FFFBEB" />
      <circle cx="52" cy="479" r="5" fill="#F59E0B" />
      <text x="64" y="483" fontSize="10" fill="#171614" fontWeight="500">Nova Industries: Executive sponsor disengaged — 3 missed sessions</text>
      <text x="430" y="483" fontSize="9" fill="#F59E0B" fontWeight="600">MEDIUM</text>

      <rect x="500" y="395" width="280" height="110" rx="10" fill="#FAF8F3" />
      <text x="515" y="417" fontSize="13" fontWeight="600" fill="#171614">Pipeline Summary</text>
      <text x="515" y="443" fontSize="10" fill="#71706B">Active Engagements</text>
      <text x="710" y="443" fontSize="14" fontWeight="bold" fill="#171614" textAnchor="end">4</text>
      <text x="515" y="463" fontSize="10" fill="#71706B">Proposals Pending</text>
      <text x="710" y="463" fontSize="14" fontWeight="bold" fill="#F25C05" textAnchor="end">2</text>
      <text x="515" y="483" fontSize="10" fill="#71706B">Revenue This Quarter</text>
      <text x="710" y="483" fontSize="14" fontWeight="bold" fill="#22C55E" textAnchor="end">$142K</text>

      {/* Bottom bar */}
      <rect x="20" y="518" width="760" height="36" rx="8" fill="#FAF8F3" />
      <text x="40" y="541" fontSize="10" fill="#71706B">Last sync: 15 min ago</text>
      <text x="280" y="541" fontSize="10" fill="#71706B">Next review: Smith &amp; Co — Feb 5, 10:00 AM</text>
      <text x="580" y="541" fontSize="10" fill="#71706B">2 reports ready to export</text>

      {/* Border */}
      <rect width="800" height="600" rx="12" fill="none" stroke="#E8E7E4" strokeWidth="1" />
    </svg>
  );
}
