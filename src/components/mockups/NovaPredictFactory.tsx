export default function NovaPredictFactory() {
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
        novapredict.innovaas.co/dashboard/factory
      </text>

      {/* Header */}
      <rect x="0" y="36" width="800" height="44" fill="#1e2a3a" />
      <text x="30" y="63" fontSize="14" fontWeight="bold" fill="#fff">
        Factory Floor — Machine Status
      </text>
      <text x="580" y="63" fontSize="11" fill="#a0aec0">
        Line 1 · Building A · Live
      </text>
      <circle cx="720" cy="58" r="4" fill="#22c55e" />
      <text x="728" y="62" fontSize="10" fill="#22c55e">LIVE</text>

      {/* Machine Card 1 — CW-L1-01 (Green/Normal) */}
      <rect x="20" y="92" width="245" height="140" rx="8" fill="#232b39" />
      <circle cx="38" cy="112" r="6" fill="#22c55e" />
      <text x="50" y="116" fontSize="12" fontWeight="bold" fill="#fff">
        CW-L1-01
      </text>
      <text x="150" y="116" fontSize="9" fill="#22c55e">RUNNING</text>
      <text x="34" y="136" fontSize="9" fill="#718096">Cold Wire Drawing · Line 1</text>
      <rect x="34" y="146" width="215" height="1" fill="#2d3748" />
      <text x="34" y="164" fontSize="9" fill="#718096">Temperature</text>
      <text x="180" y="164" fontSize="9" fill="#22c55e" textAnchor="end">42.3°C</text>
      <rect x="34" y="170" width="215" height="4" rx="2" fill="#2d3748" />
      <rect x="34" y="170" width="130" height="4" rx="2" fill="#22c55e" />
      <text x="34" y="190" fontSize="9" fill="#718096">Vibration</text>
      <text x="180" y="190" fontSize="9" fill="#22c55e" textAnchor="end">2.1 mm/s</text>
      <rect x="34" y="196" width="215" height="4" rx="2" fill="#2d3748" />
      <rect x="34" y="196" width="90" height="4" rx="2" fill="#22c55e" />
      <text x="34" y="218" fontSize="8" fill="#718096">Health: 96% · Next PM: 14d</text>

      {/* Machine Card 2 — PRESS-L1-01 (Yellow/Warning) */}
      <rect x="278" y="92" width="245" height="140" rx="8" fill="#232b39" />
      <circle cx="296" cy="112" r="6" fill="#eab308" />
      <text x="308" y="116" fontSize="12" fontWeight="bold" fill="#fff">
        PRESS-L1-01
      </text>
      <text x="420" y="116" fontSize="9" fill="#eab308">WARNING</text>
      <text x="292" y="136" fontSize="9" fill="#718096">Hydraulic Press · Line 1</text>
      <rect x="292" y="146" width="215" height="1" fill="#2d3748" />
      <text x="292" y="164" fontSize="9" fill="#718096">Temperature</text>
      <text x="438" y="164" fontSize="9" fill="#eab308" textAnchor="end">68.7°C</text>
      <rect x="292" y="170" width="215" height="4" rx="2" fill="#2d3748" />
      <rect x="292" y="170" width="175" height="4" rx="2" fill="#eab308" />
      <text x="292" y="190" fontSize="9" fill="#718096">Vibration</text>
      <text x="438" y="190" fontSize="9" fill="#eab308" textAnchor="end">4.8 mm/s</text>
      <rect x="292" y="196" width="215" height="4" rx="2" fill="#2d3748" />
      <rect x="292" y="196" width="160" height="4" rx="2" fill="#eab308" />
      <text x="292" y="218" fontSize="8" fill="#eab308">Health: 72% · Bearing wear detected</text>

      {/* Machine Card 3 — CNC-L1-01 (Green/Normal) */}
      <rect x="536" y="92" width="245" height="140" rx="8" fill="#232b39" />
      <circle cx="554" cy="112" r="6" fill="#22c55e" />
      <text x="566" y="116" fontSize="12" fontWeight="bold" fill="#fff">
        CNC-L1-01
      </text>
      <text x="670" y="116" fontSize="9" fill="#22c55e">RUNNING</text>
      <text x="550" y="136" fontSize="9" fill="#718096">CNC Lathe · Line 1</text>
      <rect x="550" y="146" width="215" height="1" fill="#2d3748" />
      <text x="550" y="164" fontSize="9" fill="#718096">Temperature</text>
      <text x="696" y="164" fontSize="9" fill="#22c55e" textAnchor="end">38.1°C</text>
      <rect x="550" y="170" width="215" height="4" rx="2" fill="#2d3748" />
      <rect x="550" y="170" width="110" height="4" rx="2" fill="#22c55e" />
      <text x="550" y="190" fontSize="9" fill="#718096">Vibration</text>
      <text x="696" y="190" fontSize="9" fill="#22c55e" textAnchor="end">1.4 mm/s</text>
      <rect x="550" y="196" width="215" height="4" rx="2" fill="#2d3748" />
      <rect x="550" y="196" width="60" height="4" rx="2" fill="#22c55e" />
      <text x="550" y="218" fontSize="8" fill="#718096">Health: 98% · Next PM: 21d</text>

      {/* Machine Card 4 — WELD-L1-01 (Red/Critical) */}
      <rect x="20" y="244" width="245" height="140" rx="8" fill="#232b39" />
      <rect x="20" y="244" width="245" height="140" rx="8" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
      <circle cx="38" cy="264" r="6" fill="#ef4444" />
      <text x="50" y="268" fontSize="12" fontWeight="bold" fill="#fff">
        WELD-L1-01
      </text>
      <text x="155" y="268" fontSize="9" fill="#ef4444">CRITICAL</text>
      <text x="34" y="288" fontSize="9" fill="#718096">Robot Welder · Line 1</text>
      <rect x="34" y="298" width="215" height="1" fill="#2d3748" />
      <text x="34" y="316" fontSize="9" fill="#718096">Temperature</text>
      <text x="180" y="316" fontSize="9" fill="#ef4444" textAnchor="end">89.2°C</text>
      <rect x="34" y="322" width="215" height="4" rx="2" fill="#2d3748" />
      <rect x="34" y="322" width="200" height="4" rx="2" fill="#ef4444" />
      <text x="34" y="342" fontSize="9" fill="#718096">Vibration</text>
      <text x="180" y="342" fontSize="9" fill="#ef4444" textAnchor="end">7.6 mm/s</text>
      <rect x="34" y="348" width="215" height="4" rx="2" fill="#2d3748" />
      <rect x="34" y="348" width="195" height="4" rx="2" fill="#ef4444" />
      <text x="34" y="370" fontSize="8" fill="#ef4444">Health: 34% · Failure in ~12 days</text>

      {/* Machine Card 5 — CONV-L1-01 (Green/Normal) */}
      <rect x="278" y="244" width="245" height="140" rx="8" fill="#232b39" />
      <circle cx="296" cy="264" r="6" fill="#22c55e" />
      <text x="308" y="268" fontSize="12" fontWeight="bold" fill="#fff">
        CONV-L1-01
      </text>
      <text x="420" y="268" fontSize="9" fill="#22c55e">RUNNING</text>
      <text x="292" y="288" fontSize="9" fill="#718096">Conveyor System · Line 1</text>
      <rect x="292" y="298" width="215" height="1" fill="#2d3748" />
      <text x="292" y="316" fontSize="9" fill="#718096">Temperature</text>
      <text x="438" y="316" fontSize="9" fill="#22c55e" textAnchor="end">35.4°C</text>
      <rect x="292" y="322" width="215" height="4" rx="2" fill="#2d3748" />
      <rect x="292" y="322" width="100" height="4" rx="2" fill="#22c55e" />
      <text x="292" y="342" fontSize="9" fill="#718096">Vibration</text>
      <text x="438" y="342" fontSize="9" fill="#22c55e" textAnchor="end">1.8 mm/s</text>
      <rect x="292" y="348" width="215" height="4" rx="2" fill="#2d3748" />
      <rect x="292" y="348" width="75" height="4" rx="2" fill="#22c55e" />
      <text x="292" y="370" fontSize="8" fill="#718096">Health: 94% · Next PM: 28d</text>

      {/* Machine Card 6 — GRIND-L1-01 (Green/Normal) */}
      <rect x="536" y="244" width="245" height="140" rx="8" fill="#232b39" />
      <circle cx="554" cy="264" r="6" fill="#22c55e" />
      <text x="566" y="268" fontSize="12" fontWeight="bold" fill="#fff">
        GRIND-L1-01
      </text>
      <text x="680" y="268" fontSize="9" fill="#22c55e">RUNNING</text>
      <text x="550" y="288" fontSize="9" fill="#718096">Surface Grinder · Line 1</text>
      <rect x="550" y="298" width="215" height="1" fill="#2d3748" />
      <text x="550" y="316" fontSize="9" fill="#718096">Temperature</text>
      <text x="696" y="316" fontSize="9" fill="#22c55e" textAnchor="end">41.0°C</text>
      <rect x="550" y="322" width="215" height="4" rx="2" fill="#2d3748" />
      <rect x="550" y="322" width="120" height="4" rx="2" fill="#22c55e" />
      <text x="550" y="342" fontSize="9" fill="#718096">Vibration</text>
      <text x="696" y="342" fontSize="9" fill="#22c55e" textAnchor="end">2.3 mm/s</text>
      <rect x="550" y="348" width="215" height="4" rx="2" fill="#2d3748" />
      <rect x="550" y="348" width="95" height="4" rx="2" fill="#22c55e" />
      <text x="550" y="370" fontSize="8" fill="#718096">Health: 91% · Next PM: 17d</text>

      {/* Summary Footer */}
      <rect x="20" y="398" width="760" height="44" rx="8" fill="#232b39" />
      <circle cx="44" cy="420" r="6" fill="#22c55e" />
      <text x="56" y="416" fontSize="9" fill="#22c55e">4 Normal</text>
      <circle cx="130" cy="420" r="6" fill="#eab308" />
      <text x="142" y="416" fontSize="9" fill="#eab308">1 Warning</text>
      <circle cx="220" cy="420" r="6" fill="#ef4444" />
      <text x="232" y="416" fontSize="9" fill="#ef4444">1 Critical</text>
      <text x="56" y="432" fontSize="8" fill="#718096">UNS: spBv1.0/Factory/Line1/*</text>
      <text x="560" y="424" fontSize="10" fill="#F25C05" fontWeight="600">
        Unified Namespace Connected
      </text>

      {/* Line selector tabs */}
      <rect x="20" y="454" width="760" height="40" rx="8" fill="#232b39" />
      <rect x="30" y="460" width="80" height="28" rx="4" fill="#F25C05" />
      <text x="70" y="478" fontSize="10" fill="#fff" textAnchor="middle" fontWeight="600">Line 1</text>
      <rect x="120" y="460" width="80" height="28" rx="4" fill="#1a2233" />
      <text x="160" y="478" fontSize="10" fill="#718096" textAnchor="middle">Line 2</text>
      <rect x="210" y="460" width="80" height="28" rx="4" fill="#1a2233" />
      <text x="250" y="478" fontSize="10" fill="#718096" textAnchor="middle">Line 3</text>
      <rect x="300" y="460" width="100" height="28" rx="4" fill="#1a2233" />
      <text x="350" y="478" fontSize="10" fill="#718096" textAnchor="middle">Packaging</text>
      <rect x="410" y="460" width="80" height="28" rx="4" fill="#1a2233" />
      <text x="450" y="478" fontSize="10" fill="#718096" textAnchor="middle">Utility</text>

      {/* Bottom status */}
      <rect x="20" y="506" width="760" height="34" rx="8" fill="#1e2a3a" />
      <text x="34" y="528" fontSize="9" fill="#718096">
        MQTT Broker: connected · SparkplugB · 6 devices · Polling: 1s · Data points: 847,291 today
      </text>
    </svg>
  );
}
