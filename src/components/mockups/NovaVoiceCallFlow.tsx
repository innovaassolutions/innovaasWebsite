export default function NovaVoiceCallFlow() {
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
        novavoice.innovaas.co/agent/call-flow
      </text>

      {/* Header */}
      <rect x="0" y="36" width="800" height="44" fill="#1e2a3a" />
      <text x="30" y="63" fontSize="14" fontWeight="bold" fill="#fff">
        NovaVoice — Live Call Transcript
      </text>
      <rect x="640" y="48" width="90" height="24" rx="4" fill="#F25C05" opacity="0.2" />
      <text x="655" y="64" fontSize="10" fill="#F25C05">
        Live Call
      </text>
      <circle cx="748" cy="60" r="4" fill="#ef4444">
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
      </circle>

      {/* Left Panel — Caller Info */}
      <rect x="20" y="92" width="220" height="370" rx="8" fill="#232b39" />
      <text x="34" y="116" fontSize="11" fontWeight="600" fill="#e2e8f0">Caller Information</text>

      {/* Caller avatar placeholder */}
      <circle cx="130" cy="160" r="30" fill="#1a2233" />
      <text x="118" y="164" fontSize="18" fill="#F25C05">SM</text>

      <text x="90" y="206" fontSize="13" fontWeight="600" fill="#fff" textAnchor="middle">
        Sarah Mitchell
      </text>
      <text x="130" y="206" fontSize="13" fontWeight="600" fill="#fff">Sarah Mitchell</text>
      <text x="130" y="222" fontSize="9" fill="#718096" textAnchor="middle">(555) 234-8901</text>

      {/* Caller details */}
      <line x1="34" y1="236" x2="226" y2="236" stroke="#2d3748" strokeWidth="1" />
      <text x="34" y="256" fontSize="9" fill="#718096">Previous Calls</text>
      <text x="190" y="256" fontSize="9" fontWeight="600" fill="#e2e8f0" textAnchor="end">3</text>
      <text x="34" y="276" fontSize="9" fill="#718096">Last Contact</text>
      <text x="190" y="276" fontSize="9" fontWeight="600" fill="#e2e8f0" textAnchor="end">Jan 15</text>
      <text x="34" y="296" fontSize="9" fill="#718096">Customer Since</text>
      <text x="190" y="296" fontSize="9" fontWeight="600" fill="#e2e8f0" textAnchor="end">2024</text>
      <text x="34" y="316" fontSize="9" fill="#718096">Sentiment</text>
      <rect x="154" y="306" width="50" height="16" rx="8" fill="#22c55e" opacity="0.15" />
      <text x="162" y="317" fontSize="8" fill="#22c55e">Positive</text>

      <line x1="34" y1="332" x2="226" y2="332" stroke="#2d3748" strokeWidth="1" />
      <text x="34" y="352" fontSize="9" fontWeight="600" fill="#e2e8f0">Detected Intent</text>
      <rect x="34" y="360" width="120" height="22" rx="4" fill="#F25C05" opacity="0.15" />
      <text x="44" y="375" fontSize="9" fill="#F25C05">Schedule Appointment</text>

      <text x="34" y="406" fontSize="9" fontWeight="600" fill="#e2e8f0">Confidence</text>
      <rect x="34" y="412" width="172" height="6" rx="3" fill="#1a2233" />
      <rect x="34" y="412" width="155" height="6" rx="3" fill="#22c55e" />
      <text x="194" y="420" fontSize="8" fill="#22c55e">94%</text>

      <text x="34" y="444" fontSize="9" fontWeight="600" fill="#e2e8f0">Call Duration</text>
      <text x="34" y="458" fontSize="16" fontWeight="bold" fill="#F25C05">2:34</text>

      {/* Right Panel — Conversation Transcript */}
      <rect x="256" y="92" width="524" height="370" rx="8" fill="#232b39" />
      <text x="270" y="116" fontSize="11" fontWeight="600" fill="#e2e8f0">Conversation Transcript</text>

      {/* AI Message 1 */}
      <rect x="270" y="128" width="360" height="44" rx="8" fill="#1a2233" />
      <text x="280" y="142" fontSize="8" fontWeight="600" fill="#F25C05">NovaVoice Agent</text>
      <text x="280" y="155" fontSize="9" fill="#e2e8f0">Good afternoon! Thank you for calling Riverside</text>
      <text x="280" y="166" fontSize="9" fill="#e2e8f0">Dental. How can I help you today?</text>

      {/* Caller Message 1 */}
      <rect x="420" y="180" width="346" height="34" rx="8" fill="#2d4a3a" />
      <text x="430" y="194" fontSize="8" fontWeight="600" fill="#22c55e">Sarah Mitchell</text>
      <text x="430" y="207" fontSize="9" fill="#e2e8f0">Hi, I&apos;d like to schedule a cleaning please.</text>

      {/* AI Message 2 */}
      <rect x="270" y="222" width="380" height="54" rx="8" fill="#1a2233" />
      <text x="280" y="236" fontSize="8" fontWeight="600" fill="#F25C05">NovaVoice Agent</text>
      <text x="280" y="249" fontSize="9" fill="#e2e8f0">I&apos;d be happy to help with that, Sarah! I can see you&apos;re</text>
      <text x="280" y="260" fontSize="9" fill="#e2e8f0">due for your 6-month cleaning. I have openings next</text>
      <text x="280" y="271" fontSize="9" fill="#e2e8f0">Tuesday at 10 AM or Thursday at 2 PM. Which works?</text>

      {/* Caller Message 2 */}
      <rect x="480" y="284" width="286" height="34" rx="8" fill="#2d4a3a" />
      <text x="490" y="298" fontSize="8" fontWeight="600" fill="#22c55e">Sarah Mitchell</text>
      <text x="490" y="311" fontSize="9" fill="#e2e8f0">Thursday at 2 would be perfect.</text>

      {/* AI Message 3 */}
      <rect x="270" y="326" width="390" height="64" rx="8" fill="#1a2233" />
      <text x="280" y="340" fontSize="8" fontWeight="600" fill="#F25C05">NovaVoice Agent</text>
      <text x="280" y="353" fontSize="9" fill="#e2e8f0">You&apos;re all set for Thursday, February 13th at 2:00 PM</text>
      <text x="280" y="364" fontSize="9" fill="#e2e8f0">with Dr. Williams. I&apos;ll send a confirmation text to your</text>
      <text x="280" y="375" fontSize="9" fill="#e2e8f0">number on file. We&apos;ll also send a reminder 24 hours</text>
      <text x="280" y="386" fontSize="9" fill="#e2e8f0">before. Is there anything else I can help with?</text>

      {/* Action taken indicator */}
      <rect x="270" y="400" width="200" height="24" rx="6" fill="#22c55e" opacity="0.1" />
      <circle cx="284" cy="412" r="4" fill="#22c55e" />
      <text x="292" y="416" fontSize="9" fill="#22c55e">Appointment booked in calendar</text>

      {/* Typing indicator */}
      <rect x="270" y="432" width="80" height="20" rx="10" fill="#1a2233" />
      <circle cx="290" cy="442" r="3" fill="#718096">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="302" cy="442" r="3" fill="#718096">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="314" cy="442" r="3" fill="#718096">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
