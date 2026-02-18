export default function NovaCRMDashboard() {
  return (
    <svg
      viewBox="0 0 800 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Browser Window Frame */}
      <rect width="800" height="560" rx="12" fill="#FFFEFB" />

      {/* Browser Chrome */}
      <rect width="800" height="40" rx="12" fill="#FAF8F3" />
      <circle cx="20" cy="20" r="6" fill="#ef4444" />
      <circle cx="40" cy="20" r="6" fill="#F25C05" />
      <circle cx="60" cy="20" r="6" fill="#22c55e" />

      {/* URL Bar */}
      <rect x="90" y="10" width="600" height="20" rx="4" fill="#FFFFFF" />
      <text x="100" y="25" fontSize="11" fill="#71706B" fontFamily="monospace">
        novacrm.innovaas.co/dashboard
      </text>

      {/* Header Bar */}
      <rect x="0" y="40" width="800" height="48" fill="#FFFEFB" />
      <text x="30" y="70" fontSize="16" fontWeight="bold" fill="#171614">Dashboard</text>
      <text x="640" y="68" fontSize="11" fill="#71706B">Welcome back, Sarah</text>
      <line x1="0" y1="88" x2="800" y2="88" stroke="#E6E2D6" strokeWidth="1" />

      {/* ROW 1: Metric Cards */}
      <rect x="20" y="100" width="183" height="80" rx="8" fill="#FAF8F3" />
      <text x="35" y="120" fontSize="10" fill="#71706B">Total Revenue</text>
      <text x="35" y="148" fontSize="24" fontWeight="bold" fill="#171614">$284K</text>
      <text x="35" y="166" fontSize="9" fill="#22C55E">↑ 12% vs last quarter</text>

      <rect x="213" y="100" width="183" height="80" rx="8" fill="#FAF8F3" />
      <text x="228" y="120" fontSize="10" fill="#71706B">Active Deals</text>
      <text x="228" y="148" fontSize="24" fontWeight="bold" fill="#F25C05">37</text>
      <text x="228" y="166" fontSize="9" fill="#71706B">$1.2M in pipeline</text>

      <rect x="406" y="100" width="183" height="80" rx="8" fill="#FAF8F3" />
      <text x="421" y="120" fontSize="10" fill="#71706B">Win Rate</text>
      <text x="421" y="148" fontSize="24" fontWeight="bold" fill="#22C55E">68%</text>
      <text x="421" y="166" fontSize="9" fill="#22C55E">↑ 5% this month</text>

      <rect x="599" y="100" width="183" height="80" rx="8" fill="#FAF8F3" />
      <text x="614" y="120" fontSize="10" fill="#71706B">New Leads</text>
      <text x="614" y="148" fontSize="24" fontWeight="bold" fill="#171614">124</text>
      <text x="614" y="166" fontSize="9" fill="#71706B">This month</text>

      {/* ROW 2: Pipeline Overview + Recent Activity */}
      <rect x="20" y="195" width="480" height="170" rx="8" fill="#FAF8F3" />
      <text x="35" y="218" fontSize="12" fontWeight="600" fill="#171614">Pipeline Overview</text>

      <text x="35" y="242" fontSize="9" fill="#71706B">Lead</text>
      <rect x="100" y="234" width="380" height="12" rx="3" fill="#E6E2D6" />
      <rect x="100" y="234" width="280" height="12" rx="3" fill="#F25C05" opacity="0.3">
        <animate attributeName="width" from="0" to="280" dur="0.6s" fill="freeze" />
      </rect>
      <text x="390" y="244" fontSize="9" fill="#171614">14 deals · $180K</text>

      <text x="35" y="264" fontSize="9" fill="#71706B">Qualified</text>
      <rect x="100" y="256" width="380" height="12" rx="3" fill="#E6E2D6" />
      <rect x="100" y="256" width="220" height="12" rx="3" fill="#F25C05" opacity="0.5">
        <animate attributeName="width" from="0" to="220" dur="0.6s" fill="freeze" />
      </rect>
      <text x="330" y="266" fontSize="9" fill="#171614">9 deals · $340K</text>

      <text x="35" y="286" fontSize="9" fill="#71706B">Proposal</text>
      <rect x="100" y="278" width="380" height="12" rx="3" fill="#E6E2D6" />
      <rect x="100" y="278" width="160" height="12" rx="3" fill="#F25C05" opacity="0.7">
        <animate attributeName="width" from="0" to="160" dur="0.6s" fill="freeze" />
      </rect>
      <text x="270" y="288" fontSize="9" fill="#171614">7 deals · $410K</text>

      <text x="35" y="308" fontSize="9" fill="#71706B">Negotiation</text>
      <rect x="100" y="300" width="380" height="12" rx="3" fill="#E6E2D6" />
      <rect x="100" y="300" width="100" height="12" rx="3" fill="#F25C05" opacity="0.85">
        <animate attributeName="width" from="0" to="100" dur="0.6s" fill="freeze" />
      </rect>
      <text x="210" y="310" fontSize="9" fill="#171614">4 deals · $195K</text>

      <text x="35" y="330" fontSize="9" fill="#71706B">Closed Won</text>
      <rect x="100" y="322" width="380" height="12" rx="3" fill="#E6E2D6" />
      <rect x="100" y="322" width="55" height="12" rx="3" fill="#22C55E">
        <animate attributeName="width" from="0" to="55" dur="0.6s" fill="freeze" />
      </rect>
      <text x="165" y="332" fontSize="9" fill="#171614">3 deals · $87K</text>

      <text x="35" y="354" fontSize="9" fill="#F25C05" fontWeight="500">AI Insight: 4 deals likely to close this week based on engagement signals</text>

      {/* Recent Activity */}
      <rect x="510" y="195" width="272" height="170" rx="8" fill="#FAF8F3" />
      <text x="525" y="218" fontSize="12" fontWeight="600" fill="#171614">Recent Activity</text>

      <circle cx="533" cy="238" r="4" fill="#22C55E" />
      <text x="543" y="242" fontSize="9" fill="#171614">Deal won: Apex Tech — $42K</text>
      <text x="543" y="253" fontSize="8" fill="#71706B">2 min ago</text>

      <circle cx="533" cy="270" r="4" fill="#F25C05" />
      <text x="543" y="274" fontSize="9" fill="#171614">New lead: Marcus Chen</text>
      <text x="543" y="285" fontSize="8" fill="#71706B">15 min ago</text>

      <circle cx="533" cy="302" r="4" fill="#3B82F6" />
      <text x="543" y="306" fontSize="9" fill="#171614">Proposal sent: Bright Solutions</text>
      <text x="543" y="317" fontSize="8" fill="#71706B">1 hour ago</text>

      <circle cx="533" cy="334" r="4" fill="#8B5CF6" />
      <text x="543" y="338" fontSize="9" fill="#171614">Contract signed: Luna Labs</text>
      <text x="543" y="349" fontSize="8" fill="#71706B">3 hours ago</text>

      {/* ROW 3: Revenue Chart + AI Summary */}
      <rect x="20" y="378" width="480" height="140" rx="8" fill="#FAF8F3" />
      <text x="35" y="400" fontSize="12" fontWeight="600" fill="#171614">Revenue Trend</text>
      <text x="445" y="400" fontSize="9" fill="#71706B" textAnchor="end">Last 6 months</text>

      <line x1="55" y1="415" x2="55" y2="500" stroke="#E6E2D6" strokeWidth="1" />
      <line x1="55" y1="500" x2="475" y2="500" stroke="#E6E2D6" strokeWidth="1" />

      <rect x="75" y="470" width="45" height="30" rx="3" fill="#F25C05" opacity="0.3" />
      <text x="98" y="498" fontSize="8" fill="#FFFEFB" textAnchor="middle">$32K</text>
      <text x="98" y="512" fontSize="8" fill="#71706B" textAnchor="middle">Sep</text>

      <rect x="140" y="455" width="45" height="45" rx="3" fill="#F25C05" opacity="0.4" />
      <text x="163" y="498" fontSize="8" fill="#FFFEFB" textAnchor="middle">$41K</text>
      <text x="163" y="512" fontSize="8" fill="#71706B" textAnchor="middle">Oct</text>

      <rect x="205" y="460" width="45" height="40" rx="3" fill="#F25C05" opacity="0.5" />
      <text x="228" y="498" fontSize="8" fill="#FFFEFB" textAnchor="middle">$38K</text>
      <text x="228" y="512" fontSize="8" fill="#71706B" textAnchor="middle">Nov</text>

      <rect x="270" y="445" width="45" height="55" rx="3" fill="#F25C05" opacity="0.6" />
      <text x="293" y="498" fontSize="8" fill="#FFFEFB" textAnchor="middle">$52K</text>
      <text x="293" y="512" fontSize="8" fill="#71706B" textAnchor="middle">Dec</text>

      <rect x="335" y="435" width="45" height="65" rx="3" fill="#F25C05" opacity="0.8" />
      <text x="358" y="498" fontSize="8" fill="#FFFEFB" textAnchor="middle">$63K</text>
      <text x="358" y="512" fontSize="8" fill="#71706B" textAnchor="middle">Jan</text>

      <rect x="400" y="425" width="45" height="75" rx="3" fill="#F25C05">
        <animate attributeName="height" from="0" to="75" dur="0.6s" fill="freeze" />
        <animate attributeName="y" from="500" to="425" dur="0.6s" fill="freeze" />
      </rect>
      <text x="423" y="498" fontSize="8" fill="#FFFEFB" textAnchor="middle">$58K</text>
      <text x="423" y="512" fontSize="8" fill="#71706B" textAnchor="middle">Feb</text>

      {/* AI Summary Card */}
      <rect x="510" y="378" width="272" height="140" rx="8" fill="#FEF5EE" />
      <text x="525" y="400" fontSize="12" fontWeight="600" fill="#F25C05">✦ AI Summary</text>
      <text x="525" y="422" fontSize="9" fill="#171614" fontWeight="500">This week&apos;s highlights:</text>
      <text x="525" y="438" fontSize="9" fill="#71706B">• Pipeline value up 18% — strong</text>
      <text x="525" y="452" fontSize="9" fill="#71706B">  inbound from marketing push</text>
      <text x="525" y="468" fontSize="9" fill="#71706B">• 3 deals stalled &gt;14 days — follow up</text>
      <text x="525" y="484" fontSize="9" fill="#71706B">• Top performer: Sarah K. (5 deals)</text>
      <text x="525" y="500" fontSize="9" fill="#71706B">• Predicted close rate this month: 72%</text>

      {/* Border */}
      <rect width="800" height="560" rx="12" fill="none" stroke="#E6E2D6" strokeWidth="1" />
    </svg>
  );
}
