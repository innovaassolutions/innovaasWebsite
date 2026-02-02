export default function NovaPredictAlerts() {
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
        novapredict.innovaas.co/dashboard/maintenance
      </text>

      {/* Header */}
      <rect x="0" y="36" width="800" height="44" fill="#1e2a3a" />
      <text x="30" y="63" fontSize="14" fontWeight="bold" fill="#fff">
        Predictive Maintenance — Alerts
      </text>
      <rect x="620" y="48" width="80" height="24" rx="4" fill="#ef4444" opacity="0.2" />
      <text x="660" y="64" fontSize="10" fill="#ef4444" textAnchor="middle" fontWeight="600">
        4 Active
      </text>
      <rect x="710" y="48" width="70" height="24" rx="4" fill="#232b39" />
      <text x="745" y="64" fontSize="10" fill="#718096" textAnchor="middle">
        Filter ▾
      </text>

      {/* Alert 1 — Critical */}
      <rect x="20" y="92" width="760" height="100" rx="8" fill="#232b39" />
      <rect x="20" y="92" width="760" height="100" rx="8" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.4" />
      <rect x="20" y="92" width="5" height="100" rx="2" fill="#ef4444" />
      <rect x="38" y="102" width="70" height="20" rx="4" fill="#ef4444" opacity="0.2" />
      <text x="73" y="116" fontSize="9" fill="#ef4444" textAnchor="middle" fontWeight="700">
        CRITICAL
      </text>
      <text x="120" y="116" fontSize="12" fontWeight="bold" fill="#fff">
        Bearing Failure Imminent — WELD-L1-01
      </text>
      <text x="38" y="138" fontSize="10" fill="#a0aec0">
        ML model predicts bearing failure within 10-14 days based on vibration signature analysis.
      </text>
      <text x="38" y="154" fontSize="10" fill="#a0aec0">
        Current vibration: 7.6 mm/s (threshold: 5.0 mm/s) · Temperature trending +2.1°C/day
      </text>
      <text x="38" y="176" fontSize="9" fill="#F25C05" fontWeight="600">
        ⚡ Recommended: Schedule bearing replacement within 7 days. Est. downtime: 4 hours.
      </text>
      <text x="660" y="106" fontSize="9" fill="#718096">
        Predicted: Feb 14
      </text>
      <text x="660" y="120" fontSize="9" fill="#718096">
        Confidence: 94%
      </text>
      <rect x="660" y="166" width="100" height="22" rx="4" fill="#F25C05" />
      <text x="710" y="181" fontSize="9" fill="#fff" textAnchor="middle" fontWeight="600">
        Create WO →
      </text>

      {/* Alert 2 — Warning */}
      <rect x="20" y="204" width="760" height="100" rx="8" fill="#232b39" />
      <rect x="20" y="204" width="5" height="100" rx="2" fill="#eab308" />
      <rect x="38" y="214" width="70" height="20" rx="4" fill="#eab308" opacity="0.2" />
      <text x="73" y="228" fontSize="9" fill="#eab308" textAnchor="middle" fontWeight="700">
        WARNING
      </text>
      <text x="120" y="228" fontSize="12" fontWeight="bold" fill="#fff">
        Hydraulic Pressure Drop — PRESS-L1-01
      </text>
      <text x="38" y="250" fontSize="10" fill="#a0aec0">
        Gradual pressure loss detected over 72 hours. Seal degradation pattern matches historical failure mode.
      </text>
      <text x="38" y="266" fontSize="10" fill="#a0aec0">
        Pressure: 2,847 PSI (nominal: 3,200 PSI) · Rate of decline: -18 PSI/day
      </text>
      <text x="38" y="288" fontSize="9" fill="#F25C05" fontWeight="600">
        ⚡ Recommended: Inspect hydraulic seals at next scheduled maintenance window.
      </text>
      <text x="660" y="218" fontSize="9" fill="#718096">
        Predicted: Feb 22
      </text>
      <text x="660" y="232" fontSize="9" fill="#718096">
        Confidence: 87%
      </text>
      <rect x="660" y="278" width="100" height="22" rx="4" fill="#232b39" stroke="#eab308" strokeWidth="1" />
      <text x="710" y="293" fontSize="9" fill="#eab308" textAnchor="middle" fontWeight="600">
        Schedule PM
      </text>

      {/* Alert 3 — Warning */}
      <rect x="20" y="316" width="760" height="100" rx="8" fill="#232b39" />
      <rect x="20" y="316" width="5" height="100" rx="2" fill="#eab308" />
      <rect x="38" y="326" width="70" height="20" rx="4" fill="#eab308" opacity="0.2" />
      <text x="73" y="340" fontSize="9" fill="#eab308" textAnchor="middle" fontWeight="700">
        WARNING
      </text>
      <text x="120" y="340" fontSize="12" fontWeight="bold" fill="#fff">
        Motor Current Anomaly — GRIND-L1-01
      </text>
      <text x="38" y="362" fontSize="10" fill="#a0aec0">
        Spindle motor drawing 12% above baseline. Pattern consistent with early-stage winding insulation degradation.
      </text>
      <text x="38" y="378" fontSize="10" fill="#a0aec0">
        Current draw: 18.4A (baseline: 16.2A) · Anomaly score: 0.73
      </text>
      <text x="38" y="400" fontSize="9" fill="#F25C05" fontWeight="600">
        ⚡ Recommended: Perform insulation resistance test. Monitor closely for 2 weeks.
      </text>
      <text x="660" y="330" fontSize="9" fill="#718096">
        Predicted: Mar 5
      </text>
      <text x="660" y="344" fontSize="9" fill="#718096">
        Confidence: 76%
      </text>
      <rect x="660" y="390" width="100" height="22" rx="4" fill="#232b39" stroke="#eab308" strokeWidth="1" />
      <text x="710" y="405" fontSize="9" fill="#eab308" textAnchor="middle" fontWeight="600">
        Schedule PM
      </text>

      {/* Alert 4 — Info */}
      <rect x="20" y="428" width="760" height="88" rx="8" fill="#232b39" />
      <rect x="20" y="428" width="5" height="88" rx="2" fill="#3b82f6" />
      <rect x="38" y="438" width="50" height="20" rx="4" fill="#3b82f6" opacity="0.2" />
      <text x="63" y="452" fontSize="9" fill="#3b82f6" textAnchor="middle" fontWeight="700">
        INFO
      </text>
      <text x="100" y="452" fontSize="12" fontWeight="bold" fill="#fff">
        Lubrication Cycle Due — CNC-L1-01
      </text>
      <text x="38" y="474" fontSize="10" fill="#a0aec0">
        Automated lubrication schedule triggered. Runtime hours: 2,847 of 3,000 cycle limit.
      </text>
      <text x="38" y="500" fontSize="9" fill="#3b82f6" fontWeight="600">
        ⚡ Recommended: Standard lubrication service. Can be completed during shift change.
      </text>
      <text x="660" y="442" fontSize="9" fill="#718096">
        Due: Feb 6
      </text>
      <text x="660" y="456" fontSize="9" fill="#718096">
        Routine PM
      </text>
      <rect x="660" y="494" width="100" height="22" rx="4" fill="#232b39" stroke="#3b82f6" strokeWidth="1" />
      <text x="710" y="509" fontSize="9" fill="#3b82f6" textAnchor="middle" fontWeight="600">
        Acknowledge
      </text>

      {/* Bottom summary bar */}
      <rect x="20" y="528" width="760" height="24" rx="6" fill="#1e2a3a" />
      <text x="34" y="544" fontSize="9" fill="#718096">
        Showing 4 of 4 active alerts · 23 resolved this month · Avg lead time: 18 days · False positive rate: 3.2%
      </text>
    </svg>
  );
}
