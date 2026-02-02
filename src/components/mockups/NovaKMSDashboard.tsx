export default function NovaKMSDashboard() {
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
        novakms.innovaas.co/dashboard
      </text>

      {/* Header */}
      <rect x="0" y="36" width="800" height="44" fill="#1e2a3a" />
      <text x="30" y="63" fontSize="14" fontWeight="bold" fill="#fff">
        NovaKMS Dashboard
      </text>
      <text x="620" y="63" fontSize="11" fill="#a0aec0">
        Welcome back, Alex
      </text>

      {/* Stats Row */}
      <rect x="20" y="92" width="185" height="68" rx="8" fill="#232b39" />
      <text x="34" y="112" fontSize="9" fill="#718096">Total Documents</text>
      <text x="34" y="138" fontSize="22" fontWeight="bold" fill="#fff">247</text>

      <rect x="215" y="92" width="185" height="68" rx="8" fill="#232b39" />
      <text x="229" y="112" fontSize="9" fill="#718096">Search Queries Today</text>
      <text x="229" y="138" fontSize="22" fontWeight="bold" fill="#F25C05">84</text>

      <rect x="410" y="92" width="185" height="68" rx="8" fill="#232b39" />
      <text x="424" y="112" fontSize="9" fill="#718096">Avg Response Time</text>
      <text x="424" y="138" fontSize="22" fontWeight="bold" fill="#22c55e">1.2s</text>

      <rect x="605" y="92" width="175" height="68" rx="8" fill="#232b39" />
      <text x="619" y="112" fontSize="9" fill="#718096">Knowledge Coverage</text>
      <text x="619" y="138" fontSize="22" fontWeight="bold" fill="#fff">94%</text>

      {/* Recent Questions */}
      <rect x="20" y="174" width="470" height="200" rx="8" fill="#232b39" />
      <text x="34" y="196" fontSize="12" fontWeight="600" fill="#e2e8f0">
        Recent Questions
      </text>

      <rect x="34" y="208" width="442" height="36" rx="6" fill="#1a2233" />
      <text x="48" y="228" fontSize="10" fill="#a0aec0">
        &quot;What&apos;s our vacation policy for remote employees?&quot;
      </text>
      <text x="48" y="240" fontSize="8" fill="#22c55e">
        Answered · 3 sources · 0.8s
      </text>

      <rect x="34" y="252" width="442" height="36" rx="6" fill="#1a2233" />
      <text x="48" y="272" fontSize="10" fill="#a0aec0">
        &quot;How do I submit an expense report?&quot;
      </text>
      <text x="48" y="284" fontSize="8" fill="#22c55e">
        Answered · 2 sources · 1.1s
      </text>

      <rect x="34" y="296" width="442" height="36" rx="6" fill="#1a2233" />
      <text x="48" y="316" fontSize="10" fill="#a0aec0">
        &quot;What safety certifications do warehouse staff need?&quot;
      </text>
      <text x="48" y="328" fontSize="8" fill="#22c55e">
        Answered · 5 sources · 1.4s
      </text>

      {/* Processing Status */}
      <rect x="510" y="174" width="270" height="200" rx="8" fill="#232b39" />
      <text x="524" y="196" fontSize="12" fontWeight="600" fill="#e2e8f0">
        Processing
      </text>

      <text x="524" y="220" fontSize="10" fill="#a0aec0">Training_Video_Q1.mp4</text>
      <rect x="524" y="226" width="242" height="6" rx="3" fill="#2d3748" />
      <rect x="524" y="226" width="170" height="6" rx="3" fill="#F25C05" />
      <text x="524" y="244" fontSize="8" fill="#718096">68% — Extracting frames...</text>

      <text x="524" y="266" fontSize="10" fill="#a0aec0">HR_Policies_2026.pdf</text>
      <rect x="524" y="272" width="242" height="6" rx="3" fill="#2d3748" />
      <rect x="524" y="272" width="242" height="6" rx="3" fill="#22c55e" />
      <text x="524" y="290" fontSize="8" fill="#22c55e">✓ Complete — 42 chunks indexed</text>

      <text x="524" y="312" fontSize="10" fill="#a0aec0">Meeting_Notes_Audio.m4a</text>
      <rect x="524" y="318" width="242" height="6" rx="3" fill="#2d3748" />
      <rect x="524" y="318" width="100" height="6" rx="3" fill="#F25C05" />
      <text x="524" y="336" fontSize="8" fill="#718096">38% — Transcribing audio...</text>

      {/* Document Types */}
      <rect x="20" y="388" width="760" height="80" rx="8" fill="#232b39" />
      <text x="34" y="410" fontSize="12" fontWeight="600" fill="#e2e8f0">
        Document Types
      </text>
      <rect x="34" y="422" width="130" height="24" rx="4" fill="#F25C05" opacity="0.2" />
      <text x="44" y="438" fontSize="10" fill="#F25C05">PDF — 98 files</text>
      <rect x="174" y="422" width="120" height="24" rx="4" fill="#3498db" opacity="0.2" />
      <text x="184" y="438" fontSize="10" fill="#3498db">DOCX — 64 files</text>
      <rect x="304" y="422" width="110" height="24" rx="4" fill="#9b59b6" opacity="0.2" />
      <text x="314" y="438" fontSize="10" fill="#9b59b6">MP4 — 38 files</text>
      <rect x="424" y="422" width="110" height="24" rx="4" fill="#e67e22" opacity="0.2" />
      <text x="434" y="438" fontSize="10" fill="#e67e22">M4A — 27 files</text>
      <rect x="544" y="422" width="90" height="24" rx="4" fill="#22c55e" opacity="0.2" />
      <text x="554" y="438" fontSize="10" fill="#22c55e">TXT — 12 files</text>
      <rect x="644" y="422" width="70" height="24" rx="4" fill="#718096" opacity="0.2" />
      <text x="654" y="438" fontSize="10" fill="#718096">MD — 8</text>

      {/* Upload bar */}
      <rect x="20" y="482" width="760" height="56" rx="8" fill="#232b39" stroke="#F25C05" strokeWidth="1" strokeDasharray="6 3" />
      <text x="310" y="514" fontSize="12" fill="#F25C05" fontWeight="600">
        + Drop files to upload
      </text>
    </svg>
  );
}
