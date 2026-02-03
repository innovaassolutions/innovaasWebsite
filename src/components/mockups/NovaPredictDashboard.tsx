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
        NovaPredict — Executive Overview
      </text>
      <rect x="640" y="48" width="80" height="24" rx="4" fill="#22c55e" opacity="0.2" />
      <text x="652" y="64" fontSize="10" fill="#22c55e">
        ● All Systems OK
      </text>

      {/* KPI Cards Row */}
      <rect x="20" y="92" width="185" height="78" rx="8" fill="#232b39" />
      <text x="34" y="112" fontSize="9" fill="#718096">Overall Equipment Effectiveness</text>
      <text x="34" y="142" fontSize="26" fontWeight="bold" fill="#22c55e">87.5%</text>
      <text x="120" y="142" fontSize="10" fill="#22c55e">▲ 2.1%</text>

      <rect x="215" y="92" width="185" height="78" rx="8" fill="#232b39" />
      <text x="229" y="112" fontSize="9" fill="#718096">Uptime (30 days)</text>
      <text x="229" y="142" fontSize="26" fontWeight="bold" fill="#fff">94.2%</text>
      <text x="320" y="142" fontSize="10" fill="#22c55e">▲ 1.8%</text>

      <rect x="410" y="92" width="185" height="78" rx="8" fill="#232b39" />
      <text x="424" y="112" fontSize="9" fill="#718096">Active Predictions</text>
      <text x="424" y="142" fontSize="26" fontWeight="bold" fill="#F25C05">12</text>
      <text x="460" y="142" fontSize="10" fill="#718096">across 10 machines</text>

      <rect x="605" y="92" width="175" height="78" rx="8" fill="#232b39" />
      <text x="619" y="112" fontSize="9" fill="#718096">Est. Savings (QTD)</text>
      <text x="619" y="142" fontSize="26" fontWeight="bold" fill="#22c55e">$340K</text>

      {/* Downtime Trend Chart */}
      <rect x="20" y="184" width="470" height="190" rx="8" fill="#232b39" />
      <text x="34" y="206" fontSize="12" fontWeight="600" fill="#e2e8f0">
        Unplanned Downtime Trend (12 months)
      </text>
      <line x1="50" y1="224" x2="470" y2="224" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="50" y1="254" x2="470" y2="254" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="50" y1="284" x2="470" y2="284" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="50" y1="314" x2="470" y2="314" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="50" y1="344" x2="470" y2="344" stroke="#2d3748" strokeWidth="0.5" />
      <text x="34" y="228" fontSize="8" fill="#718096">40h</text>
      <text x="34" y="258" fontSize="8" fill="#718096">30h</text>
      <text x="34" y="288" fontSize="8" fill="#718096">20h</text>
      <text x="34" y="318" fontSize="8" fill="#718096">10h</text>
      <text x="37" y="348" fontSize="8" fill="#718096">0h</text>
      {/* Declining bar chart */}
      <rect x="60" y="234" width="28" height="110" rx="3" fill="#ef4444" opacity="0.7" />
      <rect x="95" y="244" width="28" height="100" rx="3" fill="#ef4444" opacity="0.7" />
      <rect x="130" y="254" width="28" height="90" rx="3" fill="#F25C05" opacity="0.7" />
      <rect x="165" y="264" width="28" height="80" rx="3" fill="#F25C05" opacity="0.7" />
      <rect x="200" y="274" width="28" height="70" rx="3" fill="#F25C05" opacity="0.7" />
      <rect x="235" y="280" width="28" height="64" rx="3" fill="#F25C05" opacity="0.7" />
      <rect x="270" y="290" width="28" height="54" rx="3" fill="#22c55e" opacity="0.7" />
      <rect x="305" y="296" width="28" height="48" rx="3" fill="#22c55e" opacity="0.7" />
      <rect x="340" y="304" width="28" height="40" rx="3" fill="#22c55e" opacity="0.7" />
      <rect x="375" y="310" width="28" height="34" rx="3" fill="#22c55e" opacity="0.7" />
      <rect x="410" y="316" width="28" height="28" rx="3" fill="#22c55e" opacity="0.7" />
      <rect x="445" y="322" width="28" height="22" rx="3" fill="#22c55e" opacity="0.7" />

      {/* ML Model Performance */}
      <rect x="510" y="184" width="270" height="190" rx="8" fill="#232b39" />
      <text x="524" y="206" fontSize="12" fontWeight="600" fill="#e2e8f0">
        ML Model Performance
      </text>
      <circle cx="640" cy="280" r="50" stroke="#2d3748" strokeWidth="12" fill="none" />
      <circle cx="640" cy="280" r="50" stroke="#22c55e" strokeWidth="12" fill="none"
        strokeDasharray="283" strokeDashoffset="42" strokeLinecap="round" />
      <text x="622" y="284" fontSize="18" fontWeight="bold" fill="#fff">85%</text>
      <text x="618" y="298" fontSize="8" fill="#718096">accuracy</text>
      <text x="524" y="240" fontSize="9" fill="#a0aec0">Bearing failures predicted</text>
      <text x="524" y="254" fontSize="14" fontWeight="bold" fill="#22c55e">17 / 20</text>
      <text x="524" y="276" fontSize="9" fill="#a0aec0">Avg lead time</text>
      <text x="524" y="290" fontSize="14" fontWeight="bold" fill="#F25C05">18.3 days</text>
      <text x="524" y="312" fontSize="9" fill="#a0aec0">False positives</text>
      <text x="524" y="326" fontSize="14" fontWeight="bold" fill="#fff">3</text>

      {/* Machine Fleet Status */}
      <rect x="20" y="388" width="760" height="150" rx="8" fill="#232b39" />
      <text x="34" y="410" fontSize="12" fontWeight="600" fill="#e2e8f0">
        Machine Fleet Status
      </text>
      <rect x="34" y="422" width="140" height="48" rx="6" fill="#1a2233" />
      <circle cx="50" cy="446" r="5" fill="#22c55e" />
      <text x="60" y="440" fontSize="9" fill="#a0aec0">CNC-001</text>
      <text x="60" y="452" fontSize="8" fill="#22c55e">Running · 98.1% OEE</text>

      <rect x="184" y="422" width="140" height="48" rx="6" fill="#1a2233" />
      <circle cx="200" cy="446" r="5" fill="#22c55e" />
      <text x="210" y="440" fontSize="9" fill="#a0aec0">CNC-002</text>
      <text x="210" y="452" fontSize="8" fill="#22c55e">Running · 95.4% OEE</text>

      <rect x="334" y="422" width="140" height="48" rx="6" fill="#1a2233" />
      <circle cx="350" cy="446" r="5" fill="#F25C05" />
      <text x="360" y="440" fontSize="9" fill="#a0aec0">CNC-003</text>
      <text x="360" y="452" fontSize="8" fill="#F25C05">Warning · Bearing alert</text>

      <rect x="484" y="422" width="140" height="48" rx="6" fill="#1a2233" />
      <circle cx="500" cy="446" r="5" fill="#22c55e" />
      <text x="510" y="440" fontSize="9" fill="#a0aec0">CNC-004</text>
      <text x="510" y="452" fontSize="8" fill="#22c55e">Running · 91.7% OEE</text>

      <rect x="634" y="422" width="140" height="48" rx="6" fill="#1a2233" />
      <circle cx="650" cy="446" r="5" fill="#22c55e" />
      <text x="660" y="440" fontSize="9" fill="#a0aec0">CNC-005</text>
      <text x="660" y="452" fontSize="8" fill="#22c55e">Running · 93.2% OEE</text>

      <rect x="34" y="478" width="140" height="48" rx="6" fill="#1a2233" />
      <circle cx="50" cy="502" r="5" fill="#22c55e" />
      <text x="60" y="496" fontSize="9" fill="#a0aec0">CNC-006</text>
      <text x="60" y="508" fontSize="8" fill="#22c55e">Running · 89.8% OEE</text>

      <rect x="184" y="478" width="140" height="48" rx="6" fill="#1a2233" />
      <circle cx="200" cy="502" r="5" fill="#718096" />
      <text x="210" y="496" fontSize="9" fill="#a0aec0">CNC-007</text>
      <text x="210" y="508" fontSize="8" fill="#718096">Scheduled Maint.</text>

      <rect x="334" y="478" width="140" height="48" rx="6" fill="#1a2233" />
      <circle cx="350" cy="502" r="5" fill="#22c55e" />
      <text x="360" y="496" fontSize="9" fill="#a0aec0">CNC-008</text>
      <text x="360" y="508" fontSize="8" fill="#22c55e">Running · 96.1% OEE</text>

      <rect x="484" y="478" width="140" height="48" rx="6" fill="#1a2233" />
      <circle cx="500" cy="502" r="5" fill="#22c55e" />
      <text x="510" y="496" fontSize="9" fill="#a0aec0">CNC-009</text>
      <text x="510" y="508" fontSize="8" fill="#22c55e">Running · 94.5% OEE</text>

      <rect x="634" y="478" width="140" height="48" rx="6" fill="#1a2233" />
      <circle cx="650" cy="502" r="5" fill="#22c55e" />
      <text x="660" y="496" fontSize="9" fill="#a0aec0">CNC-010</text>
      <text x="660" y="508" fontSize="8" fill="#22c55e">Running · 92.3% OEE</text>
    </svg>
  );
}
