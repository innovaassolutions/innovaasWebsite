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
        Factory Floor — Real-Time Monitoring
      </text>
      <rect x="600" y="48" width="16" height="16" rx="8" fill="#22c55e" />
      <text x="622" y="61" fontSize="10" fill="#22c55e">LIVE</text>
      <text x="660" y="61" fontSize="10" fill="#718096">30.2 msg/sec</text>

      {/* Machine 1 - CNC-001 */}
      <rect x="20" y="92" width="375" height="160" rx="8" fill="#232b39" />
      <rect x="20" y="92" width="375" height="32" rx="8" fill="#1a2233" />
      <circle cx="38" cy="108" r="5" fill="#22c55e" />
      <text x="50" y="112" fontSize="11" fontWeight="600" fill="#e2e8f0">CNC-001 — Assembly Line A</text>
      <text x="310" y="112" fontSize="9" fill="#22c55e">RUNNING</text>

      <text x="34" y="144" fontSize="9" fill="#718096">Spindle Temp</text>
      <text x="34" y="158" fontSize="16" fontWeight="bold" fill="#fff">42.3°C</text>
      <rect x="34" y="164" width="100" height="4" rx="2" fill="#2d3748" />
      <rect x="34" y="164" width="42" height="4" rx="2" fill="#22c55e" />

      <text x="150" y="144" fontSize="9" fill="#718096">Vibration</text>
      <text x="150" y="158" fontSize="16" fontWeight="bold" fill="#fff">0.8 mm/s</text>
      <rect x="150" y="164" width="100" height="4" rx="2" fill="#2d3748" />
      <rect x="150" y="164" width="20" height="4" rx="2" fill="#22c55e" />

      <text x="270" y="144" fontSize="9" fill="#718096">Spindle Speed</text>
      <text x="270" y="158" fontSize="16" fontWeight="bold" fill="#F25C05">8,400 RPM</text>

      <text x="34" y="190" fontSize="8" fill="#718096">Temperature (1h)</text>
      <polyline points="34,210 60,208 86,212 112,206 138,210 164,204 190,208 216,206 242,210 268,204 294,208 320,206 346,210 372,204"
        stroke="#22c55e" strokeWidth="1.5" fill="none" />

      <text x="34" y="236" fontSize="9" fill="#718096">Bearing Health</text>
      <rect x="120" y="228" width="120" height="10" rx="5" fill="#2d3748" />
      <rect x="120" y="228" width="108" height="10" rx="5" fill="#22c55e" />
      <text x="246" y="236" fontSize="9" fill="#22c55e">90%</text>

      {/* Machine 2 - CNC-003 Warning */}
      <rect x="405" y="92" width="375" height="160" rx="8" fill="#232b39" />
      <rect x="405" y="92" width="375" height="32" rx="8" fill="#1a2233" />
      <circle cx="423" cy="108" r="5" fill="#F25C05" />
      <text x="435" y="112" fontSize="11" fontWeight="600" fill="#e2e8f0">CNC-003 — Assembly Line A</text>
      <text x="690" y="112" fontSize="9" fill="#F25C05">⚠ WARNING</text>

      <text x="419" y="144" fontSize="9" fill="#718096">Spindle Temp</text>
      <text x="419" y="158" fontSize="16" fontWeight="bold" fill="#F25C05">67.8°C</text>
      <rect x="419" y="164" width="100" height="4" rx="2" fill="#2d3748" />
      <rect x="419" y="164" width="68" height="4" rx="2" fill="#F25C05" />

      <text x="535" y="144" fontSize="9" fill="#718096">Vibration</text>
      <text x="535" y="158" fontSize="16" fontWeight="bold" fill="#ef4444">4.2 mm/s</text>
      <rect x="535" y="164" width="100" height="4" rx="2" fill="#2d3748" />
      <rect x="535" y="164" width="84" height="4" rx="2" fill="#ef4444" />

      <text x="655" y="144" fontSize="9" fill="#718096">Spindle Speed</text>
      <text x="655" y="158" fontSize="16" fontWeight="bold" fill="#fff">6,200 RPM</text>

      <text x="419" y="190" fontSize="8" fill="#718096">Vibration (1h) — TRENDING UP</text>
      <polyline points="419,210 445,208 471,210 497,206 523,208 549,204 575,206 601,200 627,196 653,192 679,188 705,184 731,180 757,176"
        stroke="#ef4444" strokeWidth="1.5" fill="none" />

      <text x="419" y="236" fontSize="9" fill="#718096">Bearing Health</text>
      <rect x="505" y="228" width="120" height="10" rx="5" fill="#2d3748" />
      <rect x="505" y="228" width="36" height="10" rx="5" fill="#ef4444" />
      <text x="631" y="236" fontSize="9" fill="#ef4444">30% — DEGRADING</text>

      {/* UNS Topic Browser */}
      <rect x="20" y="264" width="375" height="180" rx="8" fill="#232b39" />
      <text x="34" y="286" fontSize="12" fontWeight="600" fill="#e2e8f0">
        UNS Topic Browser (Live)
      </text>

      <rect x="34" y="298" width="347" height="22" rx="4" fill="#1a2233" />
      <text x="44" y="313" fontSize="9" fontFamily="monospace" fill="#22c55e">uns/enterprise/site-kl/area-a/cnc-001/spindle/temp</text>
      <text x="340" y="313" fontSize="9" fill="#fff">42.3</text>

      <rect x="34" y="324" width="347" height="22" rx="4" fill="#1a2233" />
      <text x="44" y="339" fontSize="9" fontFamily="monospace" fill="#F25C05">uns/enterprise/site-kl/area-a/cnc-003/vibration/rms</text>
      <text x="340" y="339" fontSize="9" fill="#F25C05">4.2</text>

      <rect x="34" y="350" width="347" height="22" rx="4" fill="#1a2233" />
      <text x="44" y="365" fontSize="9" fontFamily="monospace" fill="#22c55e">uns/enterprise/site-kl/area-a/cnc-004/spindle/speed</text>
      <text x="326" y="365" fontSize="9" fill="#fff">7800</text>

      <rect x="34" y="376" width="347" height="22" rx="4" fill="#1a2233" />
      <text x="44" y="391" fontSize="9" fontFamily="monospace" fill="#22c55e">uns/enterprise/site-kl/area-b/cnc-006/power/draw</text>
      <text x="332" y="391" fontSize="9" fill="#fff">11.2</text>

      <text x="34" y="424" fontSize="9" fill="#718096">80+ ISA-95 compliant topics · 2.8M+ messages processed</text>

      {/* Protocol Connections */}
      <rect x="405" y="264" width="375" height="180" rx="8" fill="#232b39" />
      <text x="419" y="286" fontSize="12" fontWeight="600" fill="#e2e8f0">
        Connected Protocols
      </text>

      <rect x="419" y="298" width="160" height="32" rx="6" fill="#1a2233" />
      <circle cx="435" cy="314" r="4" fill="#22c55e" />
      <text x="445" y="310" fontSize="9" fill="#a0aec0">OPC UA Server</text>
      <text x="445" y="322" fontSize="8" fill="#22c55e">Connected · 10 nodes</text>

      <rect x="589" y="298" width="160" height="32" rx="6" fill="#1a2233" />
      <circle cx="605" cy="314" r="4" fill="#22c55e" />
      <text x="615" y="310" fontSize="9" fill="#a0aec0">Modbus TCP</text>
      <text x="615" y="322" fontSize="8" fill="#22c55e">Connected · 6 devices</text>

      <rect x="419" y="338" width="160" height="32" rx="6" fill="#1a2233" />
      <circle cx="435" cy="354" r="4" fill="#22c55e" />
      <text x="445" y="350" fontSize="9" fill="#a0aec0">MQTT Broker</text>
      <text x="445" y="362" fontSize="8" fill="#22c55e">Active · 30.2 msg/sec</text>

      <rect x="589" y="338" width="160" height="32" rx="6" fill="#1a2233" />
      <circle cx="605" cy="354" r="4" fill="#22c55e" />
      <text x="615" y="350" fontSize="9" fill="#a0aec0">Siemens S7</text>
      <text x="615" y="362" fontSize="8" fill="#22c55e">Connected · 4 PLCs</text>

      <rect x="419" y="378" width="160" height="32" rx="6" fill="#1a2233" />
      <circle cx="435" cy="394" r="4" fill="#22c55e" />
      <text x="445" y="390" fontSize="9" fill="#a0aec0">REST APIs</text>
      <text x="445" y="402" fontSize="8" fill="#22c55e">3 endpoints active</text>

      <rect x="589" y="378" width="160" height="32" rx="6" fill="#1a2233" />
      <circle cx="605" cy="394" r="4" fill="#22c55e" />
      <text x="615" y="390" fontSize="9" fill="#a0aec0">Ethernet/IP</text>
      <text x="615" y="402" fontSize="8" fill="#22c55e">Connected · 2 devices</text>

      {/* Throughput stats */}
      <rect x="20" y="458" width="760" height="80" rx="8" fill="#232b39" />
      <text x="34" y="480" fontSize="12" fontWeight="600" fill="#e2e8f0">
        System Throughput
      </text>
      <rect x="34" y="494" width="160" height="32" rx="6" fill="#1a2233" />
      <text x="48" y="510" fontSize="9" fill="#a0aec0">Messages Today</text>
      <text x="48" y="524" fontSize="14" fontWeight="bold" fill="#fff">284,392</text>

      <rect x="204" y="494" width="140" height="32" rx="6" fill="#1a2233" />
      <text x="218" y="510" fontSize="9" fill="#a0aec0">Throughput</text>
      <text x="218" y="524" fontSize="14" fontWeight="bold" fill="#F25C05">30.2 msg/s</text>

      <rect x="354" y="494" width="120" height="32" rx="6" fill="#1a2233" />
      <text x="368" y="510" fontSize="9" fill="#a0aec0">Latency</text>
      <text x="368" y="524" fontSize="14" fontWeight="bold" fill="#22c55e">&lt;100ms</text>

      <rect x="484" y="494" width="140" height="32" rx="6" fill="#1a2233" />
      <text x="498" y="510" fontSize="9" fill="#a0aec0">Success Rate</text>
      <text x="498" y="524" fontSize="14" fontWeight="bold" fill="#22c55e">100%</text>

      <rect x="634" y="494" width="140" height="32" rx="6" fill="#1a2233" />
      <text x="648" y="510" fontSize="9" fill="#a0aec0">Topics</text>
      <text x="648" y="524" fontSize="14" fontWeight="bold" fill="#fff">80+ ISA-95</text>
    </svg>
  );
}
