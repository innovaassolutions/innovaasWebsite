export default function NovaPredictDashboard() {
  return (
    <svg
      viewBox="0 0 800 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      {/* Browser Window Frame */}
      <rect width="800" height="560" rx="12" fill="#0f1520" />
      <rect width="800" height="36" rx="12" fill="#1a2233" />
      <circle cx="20" cy="18" r="5" fill="#ef4444" />
      <circle cx="36" cy="18" r="5" fill="#F25C05" />
      <circle cx="52" cy="18" r="5" fill="#22c55e" />
      <rect x="80" y="8" width="560" height="20" rx="4" fill="#0f1520" />
      <text x="92" y="22" fontSize="10" fill="#718096" fontFamily="monospace">
        novapredict.innovaas.co/dashboard/executive
      </text>

      {/* Header */}
      <rect x="0" y="36" width="800" height="44" fill="#1e2a3a" />
      <text x="30" y="63" fontSize="14" fontWeight="bold" fill="#fff">
        NovaPredict — Executive Dashboard
      </text>
      <text x="600" y="63" fontSize="11" fill="#a0aec0">
        Last sync: 2 min ago
      </text>

      {/* OEE Gauge */}
      <rect x="20" y="92" width="250" height="200" rx="8" fill="#232b39" />
      <text x="105" y="116" fontSize="11" fontWeight="600" fill="#e2e8f0" textAnchor="middle">
        Overall Equipment Effectiveness
      </text>
      {/* Gauge arc background */}
      <path d="M 70 240 A 75 75 0 1 1 220 240" stroke="#2d3748" strokeWidth="14" fill="none" strokeLinecap="round" />
      {/* Gauge arc filled (87.5%) */}
      <path d="M 70 240 A 75 75 0 1 1 207 180" stroke="#F25C05" strokeWidth="14" fill="none" strokeLinecap="round" />
      <text x="145" y="215" fontSize="32" fontWeight="bold" fill="#fff" textAnchor="middle">
        87.5%
      </text>
      <text x="145" y="235" fontSize="10" fill="#718096" textAnchor="middle">
        OEE Score
      </text>
      <text x="145" y="278" fontSize="9" fill="#22c55e" textAnchor="middle">
        ▲ 3.2% vs last month
      </text>

      {/* Uptime & Availability */}
      <rect x="280" y="92" width="250" height="94" rx="8" fill="#232b39" />
      <text x="294" y="116" fontSize="11" fontWeight="600" fill="#e2e8f0">
        Machine Uptime
      </text>
      <text x="294" y="152" fontSize="28" fontWeight="bold" fill="#22c55e">
        94.2%
      </text>
      <text x="294" y="170" fontSize="9" fill="#718096">
        Target: 95.0% · 18 machines online
      </text>

      <rect x="540" y="92" width="240" height="94" rx="8" fill="#232b39" />
      <text x="554" y="116" fontSize="11" fontWeight="600" fill="#e2e8f0">
        Predicted Failures (30d)
      </text>
      <text x="554" y="152" fontSize="28" fontWeight="bold" fill="#F25C05">
        3
      </text>
      <text x="554" y="170" fontSize="9" fill="#718096">
        1 critical · 2 warnings
      </text>

      {/* Cost Savings */}
      <rect x="280" y="196" width="250" height="96" rx="8" fill="#232b39" />
      <text x="294" y="220" fontSize="11" fontWeight="600" fill="#e2e8f0">
        Maintenance Cost Savings
      </text>
      {/* Bar chart */}
      <rect x="294" y="240" width="30" height="36" rx="3" fill="#2d3748" />
      <rect x="294" y="252" width="30" height="24" rx="3" fill="#718096" />
      <text x="309" y="282" fontSize="7" fill="#718096" textAnchor="middle">Q1</text>

      <rect x="332" y="240" width="30" height="36" rx="3" fill="#2d3748" />
      <rect x="332" y="248" width="30" height="28" rx="3" fill="#718096" />
      <text x="347" y="282" fontSize="7" fill="#718096" textAnchor="middle">Q2</text>

      <rect x="370" y="240" width="30" height="36" rx="3" fill="#2d3748" />
      <rect x="370" y="244" width="30" height="32" rx="3" fill="#F25C05" />
      <text x="385" y="282" fontSize="7" fill="#718096" textAnchor="middle">Q3</text>

      <rect x="408" y="240" width="30" height="36" rx="3" fill="#2d3748" />
      <rect x="408" y="238" width="30" height="38" rx="3" fill="#22c55e" />
      <text x="423" y="282" fontSize="7" fill="#718096" textAnchor="middle">Q4</text>

      <text x="460" y="260" fontSize="18" fontWeight="bold" fill="#22c55e">
        $247K
      </text>
      <text x="460" y="276" fontSize="8" fill="#718096">saved YTD</text>

      {/* Unplanned Downtime */}
      <rect x="540" y="196" width="240" height="96" rx="8" fill="#232b39" />
      <text x="554" y="220" fontSize="11" fontWeight="600" fill="#e2e8f0">
        Unplanned Downtime
      </text>
      <text x="554" y="256" fontSize="28" fontWeight="bold" fill="#22c55e">
        1.8%
      </text>
      <text x="554" y="276" fontSize="9" fill="#22c55e">
        ▼ 62% reduction since deployment
      </text>

      {/* Trend Line Chart */}
      <rect x="20" y="306" width="760" height="160" rx="8" fill="#232b39" />
      <text x="34" y="330" fontSize="12" fontWeight="600" fill="#e2e8f0">
        OEE Trend — Last 12 Months
      </text>
      <text x="680" y="330" fontSize="9" fill="#F25C05">● OEE</text>
      <text x="720" y="330" fontSize="9" fill="#22c55e">● Uptime</text>

      {/* Grid lines */}
      <line x1="50" y1="350" x2="750" y2="350" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="50" y1="380" x2="750" y2="380" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="50" y1="410" x2="750" y2="410" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="50" y1="440" x2="750" y2="440" stroke="#2d3748" strokeWidth="0.5" />

      {/* Y-axis labels */}
      <text x="40" y="354" fontSize="8" fill="#718096" textAnchor="end">95%</text>
      <text x="40" y="384" fontSize="8" fill="#718096" textAnchor="end">90%</text>
      <text x="40" y="414" fontSize="8" fill="#718096" textAnchor="end">85%</text>
      <text x="40" y="444" fontSize="8" fill="#718096" textAnchor="end">80%</text>

      {/* OEE trend line */}
      <polyline
        points="80,430 138,425 196,418 254,412 312,408 370,400 428,395 486,388 544,382 602,376 660,370 718,362"
        stroke="#F25C05"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Uptime trend line */}
      <polyline
        points="80,420 138,418 196,412 254,406 312,400 370,394 428,390 486,384 544,378 602,368 660,358 718,354"
        stroke="#22c55e"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
        strokeDasharray="6 3"
      />

      {/* X-axis labels */}
      <text x="80" y="458" fontSize="7" fill="#718096" textAnchor="middle">Jan</text>
      <text x="138" y="458" fontSize="7" fill="#718096" textAnchor="middle">Feb</text>
      <text x="196" y="458" fontSize="7" fill="#718096" textAnchor="middle">Mar</text>
      <text x="254" y="458" fontSize="7" fill="#718096" textAnchor="middle">Apr</text>
      <text x="312" y="458" fontSize="7" fill="#718096" textAnchor="middle">May</text>
      <text x="370" y="458" fontSize="7" fill="#718096" textAnchor="middle">Jun</text>
      <text x="428" y="458" fontSize="7" fill="#718096" textAnchor="middle">Jul</text>
      <text x="486" y="458" fontSize="7" fill="#718096" textAnchor="middle">Aug</text>
      <text x="544" y="458" fontSize="7" fill="#718096" textAnchor="middle">Sep</text>
      <text x="602" y="458" fontSize="7" fill="#718096" textAnchor="middle">Oct</text>
      <text x="660" y="458" fontSize="7" fill="#718096" textAnchor="middle">Nov</text>
      <text x="718" y="458" fontSize="7" fill="#718096" textAnchor="middle">Dec</text>

      {/* Footer status bar */}
      <rect x="20" y="480" width="760" height="56" rx="8" fill="#232b39" />
      <circle cx="44" cy="508" r="5" fill="#22c55e" />
      <text x="56" y="512" fontSize="10" fill="#22c55e">
        All systems nominal
      </text>
      <text x="220" y="512" fontSize="10" fill="#718096">
        18/18 machines reporting
      </text>
      <text x="420" y="512" fontSize="10" fill="#718096">
        Next scheduled maintenance: Feb 8
      </text>
      <text x="660" y="512" fontSize="10" fill="#F25C05" fontWeight="600">
        UNS Connected
      </text>
    </svg>
  );
}
