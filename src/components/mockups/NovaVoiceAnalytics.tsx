export default function NovaVoiceAnalytics() {
  return (
    <svg
      viewBox="0 0 800 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      {/* Browser Window Frame */}
      <rect width="800" height="480" rx="12" fill="#0f1520" />
      <rect width="800" height="36" rx="12" fill="#1a2233" />
      <circle cx="20" cy="18" r="5" fill="#ef4444" />
      <circle cx="36" cy="18" r="5" fill="#F25C05" />
      <circle cx="52" cy="18" r="5" fill="#22c55e" />
      <rect x="80" y="8" width="560" height="20" rx="4" fill="#0f1520" />
      <text x="92" y="22" fontSize="10" fill="#718096" fontFamily="monospace">
        novavoice.innovaas.co/analytics/monthly
      </text>

      {/* Header */}
      <rect x="0" y="36" width="800" height="44" fill="#1e2a3a" />
      <text x="30" y="63" fontSize="14" fontWeight="bold" fill="#fff">
        NovaVoice — Monthly Analytics
      </text>
      <rect x="640" y="48" width="90" height="24" rx="4" fill="#232b39" />
      <text x="656" y="64" fontSize="10" fill="#a0aec0">
        Jan 2025
      </text>

      {/* Top Stats Row */}
      <rect x="20" y="92" width="150" height="70" rx="8" fill="#232b39" />
      <text x="34" y="110" fontSize="8" fill="#718096">Total Calls</text>
      <text x="34" y="136" fontSize="24" fontWeight="bold" fill="#fff">1,247</text>
      <text x="110" y="136" fontSize="9" fill="#22c55e">+18%</text>

      <rect x="180" y="92" width="150" height="70" rx="8" fill="#232b39" />
      <text x="194" y="110" fontSize="8" fill="#718096">AI Resolved</text>
      <text x="194" y="136" fontSize="24" fontWeight="bold" fill="#22c55e">89.2%</text>

      <rect x="340" y="92" width="150" height="70" rx="8" fill="#232b39" />
      <text x="354" y="110" fontSize="8" fill="#718096">Appts Booked</text>
      <text x="354" y="136" fontSize="24" fontWeight="bold" fill="#F25C05">312</text>
      <text x="400" y="136" fontSize="9" fill="#22c55e">+24%</text>

      <rect x="500" y="92" width="140" height="70" rx="8" fill="#232b39" />
      <text x="514" y="110" fontSize="8" fill="#718096">Avg Satisfaction</text>
      <text x="514" y="136" fontSize="24" fontWeight="bold" fill="#22c55e">4.7/5</text>

      <rect x="650" y="92" width="130" height="70" rx="8" fill="#232b39" />
      <text x="664" y="110" fontSize="8" fill="#718096">Revenue Saved</text>
      <text x="664" y="136" fontSize="24" fontWeight="bold" fill="#22c55e">$42K</text>

      {/* Call Reasons Breakdown */}
      <rect x="20" y="176" width="380" height="280" rx="8" fill="#232b39" />
      <text x="34" y="200" fontSize="12" fontWeight="600" fill="#e2e8f0">
        Top Call Reasons
      </text>

      {/* Bar chart - horizontal */}
      <text x="34" y="228" fontSize="9" fill="#a0aec0">Appointment Scheduling</text>
      <rect x="180" y="218" width="190" height="14" rx="3" fill="#F25C05" opacity="0.8" />
      <text x="374" y="228" fontSize="9" fill="#e2e8f0">38%</text>

      <text x="34" y="256" fontSize="9" fill="#a0aec0">Pricing / Quotes</text>
      <rect x="180" y="246" width="125" height="14" rx="3" fill="#F25C05" opacity="0.65" />
      <text x="309" y="256" fontSize="9" fill="#e2e8f0">25%</text>

      <text x="34" y="284" fontSize="9" fill="#a0aec0">Hours &amp; Location</text>
      <rect x="180" y="274" width="75" height="14" rx="3" fill="#F25C05" opacity="0.5" />
      <text x="259" y="284" fontSize="9" fill="#e2e8f0">15%</text>

      <text x="34" y="312" fontSize="9" fill="#a0aec0">Service Questions</text>
      <rect x="180" y="302" width="55" height="14" rx="3" fill="#F25C05" opacity="0.4" />
      <text x="239" y="312" fontSize="9" fill="#e2e8f0">11%</text>

      <text x="34" y="340" fontSize="9" fill="#a0aec0">Complaints</text>
      <rect x="180" y="330" width="30" height="14" rx="3" fill="#ef4444" opacity="0.5" />
      <text x="214" y="340" fontSize="9" fill="#e2e8f0">6%</text>

      <text x="34" y="368" fontSize="9" fill="#a0aec0">Other</text>
      <rect x="180" y="358" width="25" height="14" rx="3" fill="#718096" opacity="0.5" />
      <text x="209" y="368" fontSize="9" fill="#e2e8f0">5%</text>

      {/* Cost Savings */}
      <line x1="34" y1="390" x2="386" y2="390" stroke="#2d3748" strokeWidth="1" />
      <text x="34" y="412" fontSize="9" fill="#718096">Human receptionist cost (est.)</text>
      <text x="320" y="412" fontSize="10" fontWeight="600" fill="#ef4444" textAnchor="end">$4,583/mo</text>
      <text x="34" y="432" fontSize="9" fill="#718096">NovaVoice cost</text>
      <text x="320" y="432" fontSize="10" fontWeight="600" fill="#22c55e" textAnchor="end">$639/mo</text>
      <line x1="34" y1="440" x2="386" y2="440" stroke="#2d3748" strokeWidth="1" />
      <text x="34" y="452" fontSize="10" fontWeight="700" fill="#e2e8f0">Monthly savings</text>
      <text x="320" y="452" fontSize="12" fontWeight="700" fill="#22c55e" textAnchor="end">$3,944</text>

      {/* Peak Hours Heatmap */}
      <rect x="420" y="176" width="360" height="140" rx="8" fill="#232b39" />
      <text x="434" y="200" fontSize="12" fontWeight="600" fill="#e2e8f0">
        Peak Call Hours
      </text>
      {/* Hour labels */}
      <text x="434" y="224" fontSize="7" fill="#718096">8am</text>
      <text x="468" y="224" fontSize="7" fill="#718096">9am</text>
      <text x="502" y="224" fontSize="7" fill="#718096">10am</text>
      <text x="540" y="224" fontSize="7" fill="#718096">11am</text>
      <text x="574" y="224" fontSize="7" fill="#718096">12pm</text>
      <text x="608" y="224" fontSize="7" fill="#718096">1pm</text>
      <text x="640" y="224" fontSize="7" fill="#718096">2pm</text>
      <text x="672" y="224" fontSize="7" fill="#718096">3pm</text>
      <text x="704" y="224" fontSize="7" fill="#718096">4pm</text>
      <text x="736" y="224" fontSize="7" fill="#718096">5pm</text>
      {/* Heatmap cells - Mon */}
      <text x="422" y="242" fontSize="7" fill="#718096">M</text>
      <rect x="434" y="230" width="28" height="14" rx="2" fill="#F25C05" opacity="0.3" />
      <rect x="466" y="230" width="28" height="14" rx="2" fill="#F25C05" opacity="0.7" />
      <rect x="498" y="230" width="28" height="14" rx="2" fill="#F25C05" opacity="0.9" />
      <rect x="534" y="230" width="28" height="14" rx="2" fill="#F25C05" opacity="0.6" />
      <rect x="568" y="230" width="28" height="14" rx="2" fill="#F25C05" opacity="0.4" />
      <rect x="602" y="230" width="28" height="14" rx="2" fill="#F25C05" opacity="0.5" />
      <rect x="636" y="230" width="28" height="14" rx="2" fill="#F25C05" opacity="0.7" />
      <rect x="670" y="230" width="28" height="14" rx="2" fill="#F25C05" opacity="0.5" />
      <rect x="704" y="230" width="28" height="14" rx="2" fill="#F25C05" opacity="0.3" />
      <rect x="736" y="230" width="28" height="14" rx="2" fill="#F25C05" opacity="0.15" />
      {/* Tue */}
      <text x="422" y="260" fontSize="7" fill="#718096">T</text>
      <rect x="434" y="248" width="28" height="14" rx="2" fill="#F25C05" opacity="0.25" />
      <rect x="466" y="248" width="28" height="14" rx="2" fill="#F25C05" opacity="0.8" />
      <rect x="498" y="248" width="28" height="14" rx="2" fill="#F25C05" opacity="1" />
      <rect x="534" y="248" width="28" height="14" rx="2" fill="#F25C05" opacity="0.7" />
      <rect x="568" y="248" width="28" height="14" rx="2" fill="#F25C05" opacity="0.3" />
      <rect x="602" y="248" width="28" height="14" rx="2" fill="#F25C05" opacity="0.6" />
      <rect x="636" y="248" width="28" height="14" rx="2" fill="#F25C05" opacity="0.8" />
      <rect x="670" y="248" width="28" height="14" rx="2" fill="#F25C05" opacity="0.6" />
      <rect x="704" y="248" width="28" height="14" rx="2" fill="#F25C05" opacity="0.4" />
      <rect x="736" y="248" width="28" height="14" rx="2" fill="#F25C05" opacity="0.2" />
      {/* Wed */}
      <text x="422" y="278" fontSize="7" fill="#718096">W</text>
      <rect x="434" y="266" width="28" height="14" rx="2" fill="#F25C05" opacity="0.35" />
      <rect x="466" y="266" width="28" height="14" rx="2" fill="#F25C05" opacity="0.6" />
      <rect x="498" y="266" width="28" height="14" rx="2" fill="#F25C05" opacity="0.85" />
      <rect x="534" y="266" width="28" height="14" rx="2" fill="#F25C05" opacity="0.9" />
      <rect x="568" y="266" width="28" height="14" rx="2" fill="#F25C05" opacity="0.5" />
      <rect x="602" y="266" width="28" height="14" rx="2" fill="#F25C05" opacity="0.45" />
      <rect x="636" y="266" width="28" height="14" rx="2" fill="#F25C05" opacity="0.6" />
      <rect x="670" y="266" width="28" height="14" rx="2" fill="#F25C05" opacity="0.4" />
      <rect x="704" y="266" width="28" height="14" rx="2" fill="#F25C05" opacity="0.3" />
      <rect x="736" y="266" width="28" height="14" rx="2" fill="#F25C05" opacity="0.15" />
      {/* Thu */}
      <text x="422" y="296" fontSize="7" fill="#718096">T</text>
      <rect x="434" y="284" width="28" height="14" rx="2" fill="#F25C05" opacity="0.3" />
      <rect x="466" y="284" width="28" height="14" rx="2" fill="#F25C05" opacity="0.75" />
      <rect x="498" y="284" width="28" height="14" rx="2" fill="#F25C05" opacity="0.95" />
      <rect x="534" y="284" width="28" height="14" rx="2" fill="#F25C05" opacity="0.65" />
      <rect x="568" y="284" width="28" height="14" rx="2" fill="#F25C05" opacity="0.35" />
      <rect x="602" y="284" width="28" height="14" rx="2" fill="#F25C05" opacity="0.55" />
      <rect x="636" y="284" width="28" height="14" rx="2" fill="#F25C05" opacity="0.7" />
      <rect x="670" y="284" width="28" height="14" rx="2" fill="#F25C05" opacity="0.45" />
      <rect x="704" y="284" width="28" height="14" rx="2" fill="#F25C05" opacity="0.25" />
      <rect x="736" y="284" width="28" height="14" rx="2" fill="#F25C05" opacity="0.1" />
      {/* Fri */}
      <text x="422" y="314" fontSize="7" fill="#718096">F</text>
      <rect x="434" y="302" width="28" height="14" rx="2" fill="#F25C05" opacity="0.4" />
      <rect x="466" y="302" width="28" height="14" rx="2" fill="#F25C05" opacity="0.85" />
      <rect x="498" y="302" width="28" height="14" rx="2" fill="#F25C05" opacity="0.75" />
      <rect x="534" y="302" width="28" height="14" rx="2" fill="#F25C05" opacity="0.55" />
      <rect x="568" y="302" width="28" height="14" rx="2" fill="#F25C05" opacity="0.3" />
      <rect x="602" y="302" width="28" height="14" rx="2" fill="#F25C05" opacity="0.4" />
      <rect x="636" y="302" width="28" height="14" rx="2" fill="#F25C05" opacity="0.5" />
      <rect x="670" y="302" width="28" height="14" rx="2" fill="#F25C05" opacity="0.3" />
      <rect x="704" y="302" width="28" height="14" rx="2" fill="#F25C05" opacity="0.2" />
      <rect x="736" y="302" width="28" height="14" rx="2" fill="#F25C05" opacity="0.1" />

      {/* Sentiment Analysis */}
      <rect x="420" y="328" width="360" height="130" rx="8" fill="#232b39" />
      <text x="434" y="352" fontSize="12" fontWeight="600" fill="#e2e8f0">
        Caller Sentiment Analysis
      </text>

      {/* Sentiment bars */}
      <text x="434" y="378" fontSize="9" fill="#a0aec0">Very Positive</text>
      <rect x="530" y="368" width="150" height="12" rx="3" fill="#22c55e" opacity="0.8" />
      <text x="684" y="378" fontSize="9" fill="#e2e8f0">42%</text>

      <text x="434" y="398" fontSize="9" fill="#a0aec0">Positive</text>
      <rect x="530" y="388" width="120" height="12" rx="3" fill="#22c55e" opacity="0.5" />
      <text x="654" y="398" fontSize="9" fill="#e2e8f0">34%</text>

      <text x="434" y="418" fontSize="9" fill="#a0aec0">Neutral</text>
      <rect x="530" y="408" width="55" height="12" rx="3" fill="#718096" opacity="0.5" />
      <text x="589" y="418" fontSize="9" fill="#e2e8f0">15%</text>

      <text x="434" y="438" fontSize="9" fill="#a0aec0">Negative</text>
      <rect x="530" y="428" width="25" height="12" rx="3" fill="#ef4444" opacity="0.5" />
      <text x="559" y="438" fontSize="9" fill="#e2e8f0">7%</text>

      <text x="434" y="458" fontSize="9" fill="#a0aec0">Very Negative</text>
      <rect x="530" y="448" width="8" height="12" rx="3" fill="#ef4444" opacity="0.8" />
      <text x="542" y="458" fontSize="9" fill="#e2e8f0">2%</text>
    </svg>
  );
}
