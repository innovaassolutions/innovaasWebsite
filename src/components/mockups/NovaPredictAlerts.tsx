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
        Predictive Maintenance Alerts
      </text>
      <rect x="620" y="48" width="100" height="24" rx="4" fill="#ef4444" opacity="0.2" />
      <text x="634" y="64" fontSize="10" fill="#ef4444">
        3 Active Alerts
      </text>

      {/* Critical Alert Banner */}
      <rect x="20" y="92" width="760" height="60" rx="8" fill="#ef4444" opacity="0.15" />
      <rect x="20" y="92" width="4" height="60" rx="2" fill="#ef4444" />
      <text x="40" y="112" fontSize="11" fontWeight="bold" fill="#ef4444">
        ⚠ CRITICAL: CNC-003 Bearing Failure Predicted in 14 Days
      </text>
      <text x="40" y="128" fontSize="9" fill="#a0aec0">
        ML Model: Bearing degradation pattern detected · Confidence: 92% · RUL: 14.2 days
      </text>
      <text x="40" y="142" fontSize="9" fill="#a0aec0">
        Recommendation: Schedule replacement during next planned downtime (Feb 10-11)
      </text>
      <rect x="640" y="108" width="120" height="28" rx="6" fill="#F25C05" />
      <text x="656" y="126" fontSize="10" fontWeight="600" fill="#fff">
        Create Work Order
      </text>

      {/* RUL Prediction */}
      <rect x="20" y="164" width="470" height="200" rx="8" fill="#232b39" />
      <text x="34" y="186" fontSize="12" fontWeight="600" fill="#e2e8f0">
        CNC-003 Bearing Degradation Analysis
      </text>
      <text x="34" y="208" fontSize="9" fill="#718096">Remaining Useful Life (RUL) Prediction</text>
      <text x="34" y="230" fontSize="7" fill="#718096">100%</text>
      <text x="34" y="260" fontSize="7" fill="#718096">75%</text>
      <text x="34" y="290" fontSize="7" fill="#718096">50%</text>
      <text x="34" y="320" fontSize="7" fill="#718096">25%</text>
      <text x="40" y="350" fontSize="7" fill="#718096">0%</text>
      <line x1="60" y1="226" x2="470" y2="226" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="60" y1="256" x2="470" y2="256" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="60" y1="286" x2="470" y2="286" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="60" y1="316" x2="470" y2="316" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="60" y1="346" x2="470" y2="346" stroke="#2d3748" strokeWidth="0.5" />
      <polyline
        points="60,228 100,230 140,232 180,236 220,242 260,252 300,268 340,290 380,318 420,342 460,354"
        stroke="#ef4444" strokeWidth="2" fill="none"
      />
      <polygon
        points="60,224 100,224 140,226 180,228 220,232 260,240 300,254 340,274 380,298 420,324 460,338 460,370 420,360 380,338 340,306 300,282 260,264 220,252 180,244 140,238 100,236 60,232"
        fill="#ef4444" opacity="0.1"
      />
      <line x1="60" y1="316" x2="470" y2="316" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
      <text x="380" y="312" fontSize="8" fill="#ef4444">Failure Threshold</text>
      <line x1="340" y1="220" x2="340" y2="350" stroke="#F25C05" strokeWidth="1" strokeDasharray="4 4" />
      <text x="342" y="360" fontSize="8" fill="#F25C05">Today</text>
      <line x1="420" y1="220" x2="420" y2="350" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
      <text x="406" y="360" fontSize="8" fill="#ef4444">Feb 16</text>

      {/* ML Details */}
      <rect x="510" y="164" width="270" height="200" rx="8" fill="#232b39" />
      <text x="524" y="186" fontSize="12" fontWeight="600" fill="#e2e8f0">
        ML Prediction Details
      </text>
      <text x="524" y="210" fontSize="9" fill="#718096">Model</text>
      <text x="524" y="224" fontSize="10" fill="#fff">NASA Bearing RUL v2.1</text>
      <text x="524" y="246" fontSize="9" fill="#718096">Training Data</text>
      <text x="524" y="260" fontSize="10" fill="#fff">400K+ data points (NASA IMS Dataset)</text>
      <text x="524" y="282" fontSize="9" fill="#718096">Prediction Confidence</text>
      <rect x="524" y="288" width="200" height="10" rx="5" fill="#2d3748" />
      <rect x="524" y="288" width="184" height="10" rx="5" fill="#ef4444" />
      <text x="730" y="296" fontSize="9" fill="#ef4444">92%</text>
      <text x="524" y="318" fontSize="9" fill="#718096">Key Indicators</text>
      <text x="524" y="334" fontSize="9" fill="#F25C05">● Vibration RMS: 4.2 mm/s (threshold: 2.5)</text>
      <text x="524" y="348" fontSize="9" fill="#F25C05">● Temperature: 67.8°C (baseline: 45°C)</text>
      <text x="524" y="362" fontSize="9" fill="#a0aec0">● Spindle load: 92% (normal: 70-80%)</text>

      {/* Alerts Table */}
      <rect x="20" y="378" width="760" height="160" rx="8" fill="#232b39" />
      <text x="34" y="400" fontSize="12" fontWeight="600" fill="#e2e8f0">
        Active Predictions
      </text>
      <rect x="34" y="412" width="732" height="24" rx="4" fill="#1a2233" />
      <text x="48" y="428" fontSize="9" fontWeight="600" fill="#718096">Machine</text>
      <text x="160" y="428" fontSize="9" fontWeight="600" fill="#718096">Alert Type</text>
      <text x="320" y="428" fontSize="9" fontWeight="600" fill="#718096">RUL</text>
      <text x="420" y="428" fontSize="9" fontWeight="600" fill="#718096">Confidence</text>
      <text x="530" y="428" fontSize="9" fontWeight="600" fill="#718096">Status</text>
      <text x="650" y="428" fontSize="9" fontWeight="600" fill="#718096">Action</text>

      {/* Row 1 */}
      <rect x="34" y="440" width="732" height="28" rx="4" fill="#ef4444" opacity="0.08" />
      <circle cx="48" cy="454" r="4" fill="#ef4444" />
      <text x="58" y="458" fontSize="9" fill="#e2e8f0">CNC-003</text>
      <text x="160" y="458" fontSize="9" fill="#ef4444">Bearing Failure</text>
      <text x="320" y="458" fontSize="9" fill="#ef4444">14 days</text>
      <text x="420" y="458" fontSize="9" fill="#ef4444">92%</text>
      <rect x="530" y="446" width="70" height="16" rx="4" fill="#ef4444" opacity="0.2" />
      <text x="542" y="458" fontSize="8" fill="#ef4444">CRITICAL</text>
      <rect x="650" y="444" width="90" height="18" rx="4" fill="#F25C05" />
      <text x="662" y="457" fontSize="8" fill="#fff">Schedule Maint.</text>

      {/* Row 2 */}
      <rect x="34" y="472" width="732" height="28" rx="4" fill="#F25C05" opacity="0.06" />
      <circle cx="48" cy="486" r="4" fill="#F25C05" />
      <text x="58" y="490" fontSize="9" fill="#e2e8f0">CNC-007</text>
      <text x="160" y="490" fontSize="9" fill="#F25C05">Coolant Degradation</text>
      <text x="320" y="490" fontSize="9" fill="#F25C05">21 days</text>
      <text x="420" y="490" fontSize="9" fill="#F25C05">78%</text>
      <rect x="530" y="478" width="70" height="16" rx="4" fill="#F25C05" opacity="0.2" />
      <text x="542" y="490" fontSize="8" fill="#F25C05">WARNING</text>
      <rect x="650" y="476" width="90" height="18" rx="4" fill="#232b39" stroke="#F25C05" strokeWidth="1" />
      <text x="666" y="489" fontSize="8" fill="#F25C05">Monitor</text>

      {/* Row 3 */}
      <rect x="34" y="504" width="732" height="28" rx="4" fill="transparent" />
      <circle cx="48" cy="518" r="4" fill="#3498db" />
      <text x="58" y="522" fontSize="9" fill="#e2e8f0">CNC-009</text>
      <text x="160" y="522" fontSize="9" fill="#3498db">Belt Wear Pattern</text>
      <text x="320" y="522" fontSize="9" fill="#3498db">28 days</text>
      <text x="420" y="522" fontSize="9" fill="#3498db">65%</text>
      <rect x="530" y="510" width="70" height="16" rx="4" fill="#3498db" opacity="0.2" />
      <text x="548" y="522" fontSize="8" fill="#3498db">INFO</text>
      <rect x="650" y="508" width="90" height="18" rx="4" fill="#232b39" stroke="#3498db" strokeWidth="1" />
      <text x="666" y="521" fontSize="8" fill="#3498db">Monitor</text>
    </svg>
  );
}
