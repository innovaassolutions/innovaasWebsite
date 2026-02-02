export default function NovaKMSChat() {
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
        novakms.innovaas.co/chat
      </text>

      {/* Header */}
      <rect x="0" y="36" width="800" height="44" fill="#1e2a3a" />
      <text x="30" y="63" fontSize="14" fontWeight="bold" fill="#fff">
        RAG Chat Assistant
      </text>
      <rect x="650" y="47" width="120" height="28" rx="6" fill="#232b39" />
      <text x="672" y="66" fontSize="10" fill="#a0aec0">3 sources loaded</text>

      {/* User message 1 */}
      <rect x="250" y="100" width="520" height="40" rx="10" fill="#F25C05" />
      <text x="270" y="125" fontSize="12" fill="#fff">
        What&apos;s the process for onboarding a new remote employee?
      </text>

      {/* AI response 1 */}
      <rect x="30" y="156" width="620" height="200" rx="10" fill="#232b39" />
      <circle cx="50" cy="176" r="10" fill="#F25C05" opacity="0.2" />
      <text x="44" y="180" fontSize="10" fontWeight="bold" fill="#F25C05">AI</text>
      <text x="68" y="180" fontSize="11" fontWeight="600" fill="#e2e8f0">
        NovaKMS Assistant
      </text>

      <text x="42" y="204" fontSize="11" fill="#e2e8f0">
        Based on your organization&apos;s documents, here&apos;s the remote
      </text>
      <text x="42" y="220" fontSize="11" fill="#e2e8f0">onboarding process:</text>

      <text x="42" y="244" fontSize="11" fill="#a0aec0">
        1. HR sends welcome packet + credentials (Day -3)
      </text>
      <text x="42" y="260" fontSize="11" fill="#a0aec0">
        2. IT provisions laptop, VPN access, and email (Day -2)
      </text>
      <text x="42" y="276" fontSize="11" fill="#a0aec0">
        3. Manager assigns onboarding buddy (Day 1)
      </text>
      <text x="42" y="292" fontSize="11" fill="#a0aec0">
        4. Complete security training module (Week 1)
      </text>

      <text x="42" y="320" fontSize="10" fontWeight="600" fill="#F25C05">
        📄 Sources:
      </text>
      <text x="42" y="336" fontSize="9" fill="#718096">
        [1] Remote_Onboarding_Checklist.pdf — p.3, Section 2.1
      </text>
      <text x="42" y="350" fontSize="9" fill="#718096">
        [2] IT_Setup_Guide_Remote.docx — p.1, &quot;Hardware Provisioning&quot;
      </text>

      {/* User message 2 */}
      <rect x="350" y="372" width="420" height="40" rx="10" fill="#F25C05" />
      <text x="370" y="397" fontSize="12" fill="#fff">
        What security training is required in the first week?
      </text>

      {/* AI response 2 */}
      <rect x="30" y="428" width="620" height="80" rx="10" fill="#232b39" />
      <circle cx="50" cy="448" r="10" fill="#F25C05" opacity="0.2" />
      <text x="44" y="452" fontSize="10" fontWeight="bold" fill="#F25C05">AI</text>
      <text x="68" y="452" fontSize="11" fontWeight="600" fill="#e2e8f0">
        NovaKMS Assistant
      </text>
      <text x="42" y="474" fontSize="11" fill="#e2e8f0">
        New employees must complete these modules in Week 1:
      </text>
      <text x="42" y="490" fontSize="11" fill="#a0aec0">
        • Data Security Awareness (2h) • Password Policy (30min) • Phishing...
      </text>
      <text x="42" y="504" fontSize="9" fill="#718096">
        [1] Security_Training_Guide.pdf — p.7
      </text>

      {/* Input bar */}
      <rect x="30" y="520" width="740" height="28" rx="6" fill="#232b39" stroke="#4a5568" strokeWidth="1" />
      <text x="46" y="538" fontSize="11" fill="#718096">
        Ask a question about your knowledge base...
      </text>
    </svg>
  );
}
