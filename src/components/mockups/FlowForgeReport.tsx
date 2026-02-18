export default function FlowForgeReport() {
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
        flowforge.innovaas.co/reports/strategic-assessment
      </text>

      {/* Header */}
      <rect y="40" width="800" height="80" fill="#FAF8F3" />
      <text x="30" y="75" fontSize="22" fontWeight="bold" fill="#171614">
        Strategic Assessment Report
      </text>
      <text x="30" y="100" fontSize="13" fill="#1D9BA3" fontWeight="500">
        Generated from 12 stakeholder interviews · Acme Corp · January 2026
      </text>

      {/* Main Content */}
      <rect y="120" width="800" height="480" fill="#FFFEFB" />

      {/* Overall Score Card */}
      <rect x="30" y="140" width="740" height="100" rx="8" fill="#FFFFFF" />
      <rect x="30" y="140" width="740" height="100" rx="8" fill="none" stroke="#E7E5E4" strokeWidth="1" />
      <text x="50" y="170" fontSize="16" fontWeight="bold" fill="#171614">Overall Readiness Score</text>
      <text x="50" y="215" fontSize="48" fontWeight="bold" fill="url(#ff-reportGrad)">72%</text>
      <text x="180" y="195" fontSize="14" fill="#171614" fontWeight="500">High Readiness</text>
      <text x="180" y="215" fontSize="12" fill="#71706B">Strong strategic alignment with</text>
      <text x="180" y="230" fontSize="12" fill="#71706B">targeted improvement areas</text>

      {/* Radar Chart */}
      <g transform="translate(550, 190)">
        <circle cx="0" cy="0" r="80" fill="none" stroke="#E7E5E4" strokeWidth="1" />
        <circle cx="0" cy="0" r="60" fill="none" stroke="#E7E5E4" strokeWidth="1" />
        <circle cx="0" cy="0" r="40" fill="none" stroke="#E7E5E4" strokeWidth="1" />
        <circle cx="0" cy="0" r="20" fill="none" stroke="#E7E5E4" strokeWidth="1" />
        <line x1="0" y1="0" x2="0" y2="-80" stroke="#E7E5E4" strokeWidth="1" />
        <line x1="0" y1="0" x2="76" y2="-25" stroke="#E7E5E4" strokeWidth="1" />
        <line x1="0" y1="0" x2="47" y2="65" stroke="#E7E5E4" strokeWidth="1" />
        <line x1="0" y1="0" x2="-47" y2="65" stroke="#E7E5E4" strokeWidth="1" />
        <line x1="0" y1="0" x2="-76" y2="-25" stroke="#E7E5E4" strokeWidth="1" />
        <polygon points="0,-60 57,-19 35,49 -35,49 -50,-16" fill="#F25C05" opacity="0.2" stroke="#F25C05" strokeWidth="2" />
        <circle cx="0" cy="-60" r="4" fill="#F25C05" />
        <circle cx="57" cy="-19" r="4" fill="#F25C05" />
        <circle cx="35" cy="49" r="4" fill="#F25C05" />
        <circle cx="-35" cy="49" r="4" fill="#F25C05" />
        <circle cx="-50" cy="-16" r="4" fill="#F25C05" />
        <text x="0" y="-88" fontSize="10" fill="#171614" textAnchor="middle">Technology</text>
        <text x="88" y="-20" fontSize="10" fill="#171614" textAnchor="start">Processes</text>
        <text x="52" y="78" fontSize="10" fill="#171614" textAnchor="start">People</text>
        <text x="-52" y="78" fontSize="10" fill="#171614" textAnchor="end">Data</text>
        <text x="-88" y="-20" fontSize="10" fill="#171614" textAnchor="end">Strategy</text>
      </g>

      {/* Dimension Scores */}
      <rect x="30" y="260" width="360" height="320" rx="8" fill="#FFFFFF" />
      <rect x="30" y="260" width="360" height="320" rx="8" fill="none" stroke="#E7E5E4" strokeWidth="1" />
      <text x="50" y="290" fontSize="15" fontWeight="bold" fill="#171614">Readiness by Dimension</text>

      <text x="50" y="325" fontSize="13" fill="#171614">Technology</text>
      <rect x="50" y="335" width="300" height="10" rx="5" fill="#E7E5E4" />
      <rect x="50" y="335" width="225" height="10" rx="5" fill="#F25C05" />
      <text x="360" y="344" fontSize="12" fontWeight="bold" fill="#F25C05">75%</text>

      <text x="50" y="375" fontSize="13" fill="#171614">Processes</text>
      <rect x="50" y="385" width="300" height="10" rx="5" fill="#E7E5E4" />
      <rect x="50" y="385" width="210" height="10" rx="5" fill="#1D9BA3" />
      <text x="360" y="394" fontSize="12" fontWeight="bold" fill="#1D9BA3">70%</text>

      <text x="50" y="425" fontSize="13" fill="#171614">People</text>
      <rect x="50" y="435" width="300" height="10" rx="5" fill="#E7E5E4" />
      <rect x="50" y="435" width="240" height="10" rx="5" fill="#22c55e" />
      <text x="360" y="444" fontSize="12" fontWeight="bold" fill="#22c55e">80%</text>

      <text x="50" y="475" fontSize="13" fill="#171614">Data</text>
      <rect x="50" y="485" width="300" height="10" rx="5" fill="#E7E5E4" />
      <rect x="50" y="485" width="180" height="10" rx="5" fill="#eab308" />
      <text x="360" y="494" fontSize="12" fontWeight="bold" fill="#eab308">60%</text>

      <text x="50" y="525" fontSize="13" fill="#171614">Strategy</text>
      <rect x="50" y="535" width="300" height="10" rx="5" fill="#E7E5E4" />
      <rect x="50" y="535" width="210" height="10" rx="5" fill="#f97316" />
      <text x="360" y="544" fontSize="12" fontWeight="bold" fill="#f97316">70%</text>

      {/* Key Insights */}
      <rect x="410" y="260" width="360" height="320" rx="8" fill="#FFFFFF" />
      <rect x="410" y="260" width="360" height="320" rx="8" fill="none" stroke="#E7E5E4" strokeWidth="1" />
      <text x="430" y="290" fontSize="15" fontWeight="bold" fill="#171614">Key Findings</text>

      <circle cx="440" cy="320" r="3" fill="#22c55e" />
      <text x="455" y="325" fontSize="12" fill="#171614">Strong executive sponsorship for</text>
      <text x="455" y="340" fontSize="12" fill="#71706B">digital transformation initiatives</text>

      <circle cx="440" cy="365" r="3" fill="#f97316" />
      <text x="455" y="370" fontSize="12" fill="#171614">Data governance framework needs</text>
      <text x="455" y="385" fontSize="12" fill="#71706B">formalization across business units</text>

      <circle cx="440" cy="410" r="3" fill="#F25C05" />
      <text x="455" y="415" fontSize="12" fill="#171614">Process documentation incomplete</text>
      <text x="455" y="430" fontSize="12" fill="#71706B">in 3 of 5 core functions</text>

      <circle cx="440" cy="455" r="3" fill="#1D9BA3" />
      <text x="455" y="460" fontSize="12" fill="#171614">Technology stack well-positioned</text>
      <text x="455" y="475" fontSize="12" fill="#71706B">for cloud migration roadmap</text>

      <rect x="430" y="510" width="320" height="50" rx="6" fill="#FAF8F3" />
      <text x="445" y="530" fontSize="11" fill="#71706B">Recommended Next Steps</text>
      <text x="445" y="548" fontSize="11" fontWeight="bold" fill="#F25C05">View Full Report →</text>

      <defs>
        <linearGradient id="ff-reportGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f25c05" />
          <stop offset="100%" stopColor="#1d9ba3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
