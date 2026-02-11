export default function NovaVoiceDashboard() {
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
        novavoice.innovaas.co/dashboard
      </text>

      {/* Header */}
      <rect x="0" y="36" width="800" height="44" fill="#1e2a3a" />
      <text x="30" y="63" fontSize="14" fontWeight="bold" fill="#fff">
        NovaVoice — AI Phone Agent Dashboard
      </text>
      <rect x="620" y="48" width="100" height="24" rx="4" fill="#22c55e" opacity="0.2" />
      <text x="632" y="64" fontSize="10" fill="#22c55e">
        Agent Active
      </text>
      <circle cx="760" cy="60" r="4" fill="#22c55e">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* KPI Cards Row */}
      <rect x="20" y="92" width="185" height="78" rx="8" fill="#232b39" />
      <text x="34" y="112" fontSize="9" fill="#718096">Total Calls Today</text>
      <text x="34" y="142" fontSize="28" fontWeight="bold" fill="#F25C05">47</text>
      <text x="80" y="142" fontSize="10" fill="#22c55e">+12% vs avg</text>

      <rect x="215" y="92" width="185" height="78" rx="8" fill="#232b39" />
      <text x="229" y="112" fontSize="9" fill="#718096">Calls Answered by AI</text>
      <text x="229" y="142" fontSize="28" fontWeight="bold" fill="#22c55e">43</text>
      <text x="275" y="142" fontSize="10" fill="#718096">91.5% rate</text>

      <rect x="410" y="92" width="185" height="78" rx="8" fill="#232b39" />
      <text x="424" y="112" fontSize="9" fill="#718096">Appointments Booked</text>
      <text x="424" y="142" fontSize="28" fontWeight="bold" fill="#fff">18</text>
      <text x="460" y="142" fontSize="10" fill="#22c55e">+38% this week</text>

      <rect x="605" y="92" width="175" height="78" rx="8" fill="#232b39" />
      <text x="619" y="112" fontSize="9" fill="#718096">Revenue Saved</text>
      <text x="619" y="142" fontSize="28" fontWeight="bold" fill="#22c55e">$4,200</text>
      <text x="619" y="158" fontSize="8" fill="#718096">from recovered missed calls</text>

      {/* Call Volume Chart */}
      <rect x="20" y="184" width="470" height="190" rx="8" fill="#232b39" />
      <text x="34" y="206" fontSize="12" fontWeight="600" fill="#e2e8f0">
        Call Volume (Last 7 Days)
      </text>
      {/* Y-axis labels */}
      <text x="34" y="228" fontSize="8" fill="#718096">60</text>
      <text x="34" y="253" fontSize="8" fill="#718096">45</text>
      <text x="34" y="278" fontSize="8" fill="#718096">30</text>
      <text x="34" y="303" fontSize="8" fill="#718096">15</text>
      <text x="37" y="328" fontSize="8" fill="#718096">0</text>
      {/* Grid lines */}
      <line x1="55" y1="224" x2="460" y2="224" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="55" y1="249" x2="460" y2="249" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="55" y1="274" x2="460" y2="274" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="55" y1="299" x2="460" y2="299" stroke="#2d3748" strokeWidth="0.5" />
      <line x1="55" y1="324" x2="460" y2="324" stroke="#2d3748" strokeWidth="0.5" />
      {/* Bars — AI answered (green) stacked with missed (red) */}
      {/* Monday */}
      <rect x="70" y="248" width="22" height="76" rx="3" fill="#22c55e" opacity="0.8" />
      <rect x="70" y="240" width="22" height="8" rx="3" fill="#ef4444" opacity="0.6" />
      <text x="72" y="340" fontSize="7" fill="#718096">Mon</text>
      {/* Tuesday */}
      <rect x="125" y="238" width="22" height="86" rx="3" fill="#22c55e" opacity="0.8" />
      <rect x="125" y="228" width="22" height="10" rx="3" fill="#ef4444" opacity="0.6" />
      <text x="127" y="340" fontSize="7" fill="#718096">Tue</text>
      {/* Wednesday */}
      <rect x="180" y="228" width="22" height="96" rx="3" fill="#22c55e" opacity="0.8" />
      <rect x="180" y="222" width="22" height="6" rx="3" fill="#ef4444" opacity="0.6" />
      <text x="180" y="340" fontSize="7" fill="#718096">Wed</text>
      {/* Thursday */}
      <rect x="235" y="244" width="22" height="80" rx="3" fill="#22c55e" opacity="0.8" />
      <rect x="235" y="234" width="22" height="10" rx="3" fill="#ef4444" opacity="0.6" />
      <text x="236" y="340" fontSize="7" fill="#718096">Thu</text>
      {/* Friday */}
      <rect x="290" y="232" width="22" height="92" rx="3" fill="#22c55e" opacity="0.8" />
      <rect x="290" y="226" width="22" height="6" rx="3" fill="#ef4444" opacity="0.6" />
      <text x="296" y="340" fontSize="7" fill="#718096">Fri</text>
      {/* Saturday */}
      <rect x="345" y="278" width="22" height="46" rx="3" fill="#22c55e" opacity="0.8" />
      <rect x="345" y="274" width="22" height="4" rx="3" fill="#ef4444" opacity="0.6" />
      <text x="349" y="340" fontSize="7" fill="#718096">Sat</text>
      {/* Sunday */}
      <rect x="400" y="290" width="22" height="34" rx="3" fill="#22c55e" opacity="0.8" />
      <rect x="400" y="286" width="22" height="4" rx="3" fill="#ef4444" opacity="0.6" />
      <text x="403" y="340" fontSize="7" fill="#718096">Sun</text>
      {/* Legend */}
      <rect x="34" y="354" width="8" height="8" rx="2" fill="#22c55e" opacity="0.8" />
      <text x="46" y="362" fontSize="8" fill="#a0aec0">AI Answered</text>
      <rect x="110" y="354" width="8" height="8" rx="2" fill="#ef4444" opacity="0.6" />
      <text x="122" y="362" fontSize="8" fill="#a0aec0">Missed</text>

      {/* Satisfaction & Performance */}
      <rect x="510" y="184" width="270" height="190" rx="8" fill="#232b39" />
      <text x="524" y="206" fontSize="12" fontWeight="600" fill="#e2e8f0">
        AI Agent Performance
      </text>
      {/* Donut chart */}
      <circle cx="640" cy="280" r="48" stroke="#2d3748" strokeWidth="14" fill="none" />
      <circle cx="640" cy="280" r="48" stroke="#22c55e" strokeWidth="14" fill="none"
        strokeDasharray="301" strokeDashoffset="27" strokeLinecap="round" />
      <text x="618" y="284" fontSize="20" fontWeight="bold" fill="#fff">91%</text>
      <text x="615" y="298" fontSize="8" fill="#718096">satisfaction</text>

      <text x="524" y="238" fontSize="9" fill="#a0aec0">Avg call duration</text>
      <text x="524" y="254" fontSize="14" fontWeight="bold" fill="#F25C05">3m 42s</text>
      <text x="524" y="274" fontSize="9" fill="#a0aec0">Resolution rate</text>
      <text x="524" y="290" fontSize="14" fontWeight="bold" fill="#22c55e">87.3%</text>
      <text x="524" y="310" fontSize="9" fill="#a0aec0">Escalated to human</text>
      <text x="524" y="326" fontSize="14" fontWeight="bold" fill="#fff">8.5%</text>
      <text x="524" y="348" fontSize="9" fill="#a0aec0">Avg response time</text>
      <text x="524" y="364" fontSize="14" fontWeight="bold" fill="#22c55e">0.8s</text>

      {/* Recent Calls Table */}
      <rect x="20" y="388" width="760" height="155" rx="8" fill="#232b39" />
      <text x="34" y="410" fontSize="12" fontWeight="600" fill="#e2e8f0">
        Recent Calls
      </text>
      {/* Table header */}
      <rect x="34" y="418" width="732" height="22" rx="4" fill="#1a2233" />
      <text x="44" y="432" fontSize="8" fontWeight="600" fill="#a0aec0">TIME</text>
      <text x="130" y="432" fontSize="8" fontWeight="600" fill="#a0aec0">CALLER</text>
      <text x="280" y="432" fontSize="8" fontWeight="600" fill="#a0aec0">PURPOSE</text>
      <text x="480" y="432" fontSize="8" fontWeight="600" fill="#a0aec0">DURATION</text>
      <text x="560" y="432" fontSize="8" fontWeight="600" fill="#a0aec0">STATUS</text>
      <text x="680" y="432" fontSize="8" fontWeight="600" fill="#a0aec0">OUTCOME</text>

      {/* Row 1 */}
      <text x="44" y="456" fontSize="9" fill="#a0aec0">2:34 PM</text>
      <text x="130" y="456" fontSize="9" fill="#e2e8f0">Sarah Mitchell</text>
      <text x="280" y="456" fontSize="9" fill="#e2e8f0">Appointment scheduling</text>
      <text x="480" y="456" fontSize="9" fill="#e2e8f0">4m 12s</text>
      <rect x="560" y="446" width="64" height="16" rx="8" fill="#22c55e" opacity="0.15" />
      <text x="570" y="457" fontSize="8" fill="#22c55e">Resolved</text>
      <text x="680" y="456" fontSize="9" fill="#22c55e">Booked</text>

      {/* Row 2 */}
      <text x="44" y="476" fontSize="9" fill="#a0aec0">2:18 PM</text>
      <text x="130" y="476" fontSize="9" fill="#e2e8f0">James Rodriguez</text>
      <text x="280" y="476" fontSize="9" fill="#e2e8f0">Pricing inquiry</text>
      <text x="480" y="476" fontSize="9" fill="#e2e8f0">2m 45s</text>
      <rect x="560" y="466" width="64" height="16" rx="8" fill="#22c55e" opacity="0.15" />
      <text x="570" y="477" fontSize="8" fill="#22c55e">Resolved</text>
      <text x="680" y="476" fontSize="9" fill="#F25C05">Quote sent</text>

      {/* Row 3 */}
      <text x="44" y="496" fontSize="9" fill="#a0aec0">2:05 PM</text>
      <text x="130" y="496" fontSize="9" fill="#e2e8f0">Maria Chen</text>
      <text x="280" y="496" fontSize="9" fill="#e2e8f0">Service complaint</text>
      <text x="480" y="496" fontSize="9" fill="#e2e8f0">6m 33s</text>
      <rect x="560" y="486" width="64" height="16" rx="8" fill="#F25C05" opacity="0.15" />
      <text x="568" y="497" fontSize="8" fill="#F25C05">Escalated</text>
      <text x="680" y="496" fontSize="9" fill="#718096">To manager</text>

      {/* Row 4 */}
      <text x="44" y="516" fontSize="9" fill="#a0aec0">1:47 PM</text>
      <text x="130" y="516" fontSize="9" fill="#e2e8f0">David Park</text>
      <text x="280" y="516" fontSize="9" fill="#e2e8f0">Hours &amp; location</text>
      <text x="480" y="516" fontSize="9" fill="#e2e8f0">1m 08s</text>
      <rect x="560" y="506" width="64" height="16" rx="8" fill="#22c55e" opacity="0.15" />
      <text x="570" y="517" fontSize="8" fill="#22c55e">Resolved</text>
      <text x="680" y="516" fontSize="9" fill="#22c55e">Info given</text>

      {/* Row 5 */}
      <text x="44" y="536" fontSize="9" fill="#a0aec0">1:32 PM</text>
      <text x="130" y="536" fontSize="9" fill="#e2e8f0">Lisa Thompson</text>
      <text x="280" y="536" fontSize="9" fill="#e2e8f0">Appointment reschedule</text>
      <text x="480" y="536" fontSize="9" fill="#e2e8f0">2m 51s</text>
      <rect x="560" y="526" width="64" height="16" rx="8" fill="#22c55e" opacity="0.15" />
      <text x="570" y="537" fontSize="8" fill="#22c55e">Resolved</text>
      <text x="680" y="536" fontSize="9" fill="#22c55e">Rebooked</text>
    </svg>
  );
}
