export default function NovaKMSSearch() {
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
        novakms.innovaas.co/search
      </text>

      {/* Header */}
      <rect x="0" y="36" width="800" height="44" fill="#1e2a3a" />
      <text x="30" y="63" fontSize="14" fontWeight="bold" fill="#fff">
        AI-Powered Search
      </text>

      {/* Search Bar */}
      <rect x="30" y="96" width="740" height="44" rx="8" fill="#232b39" stroke="#F25C05" strokeWidth="1.5" />
      <text x="50" y="122" fontSize="13" fill="#e2e8f0">
        How do we handle customer refund requests?
      </text>
      <rect x="700" y="104" width="56" height="28" rx="6" fill="#F25C05" />
      <text x="712" y="123" fontSize="11" fontWeight="bold" fill="#fff">Search</text>

      {/* Result 1 */}
      <rect x="30" y="158" width="740" height="100" rx="8" fill="#232b39" />
      <rect x="42" y="168" width="56" height="20" rx="4" fill="#22c55e" opacity="0.15" />
      <text x="49" y="182" fontSize="9" fontWeight="bold" fill="#22c55e">98.4% match</text>
      <rect x="106" y="168" width="36" height="20" rx="4" fill="#F25C05" opacity="0.15" />
      <text x="112" y="182" fontSize="9" fontWeight="bold" fill="#F25C05">PDF</text>
      <text x="42" y="202" fontSize="13" fontWeight="bold" fill="#e2e8f0">
        Customer_Service_SOP_v5.pdf
      </text>
      <text x="42" y="220" fontSize="11" fill="#a0aec0">
        &quot;...Refund requests must be processed within 48 hours. The agent should verify
      </text>
      <text x="42" y="234" fontSize="11" fill="#a0aec0">
        the original purchase, check return eligibility, and initiate the refund through...&quot;
      </text>
      <text x="42" y="250" fontSize="9" fill="#718096">
        Page 12, Section 4.3 — Last updated Jan 15, 2026
      </text>

      {/* Result 2 */}
      <rect x="30" y="270" width="740" height="100" rx="8" fill="#232b39" />
      <rect x="42" y="280" width="56" height="20" rx="4" fill="#22c55e" opacity="0.15" />
      <text x="49" y="294" fontSize="9" fontWeight="bold" fill="#22c55e">94.1% match</text>
      <rect x="106" y="280" width="36" height="20" rx="4" fill="#9b59b6" opacity="0.15" />
      <text x="111" y="294" fontSize="9" fontWeight="bold" fill="#9b59b6">MP4</text>
      <text x="42" y="314" fontSize="13" fontWeight="bold" fill="#e2e8f0">
        Customer_Support_Training_2025.mp4
      </text>
      <text x="42" y="332" fontSize="11" fill="#a0aec0">
        &quot;...so when a customer asks for a refund, the first thing you want to do is pull
      </text>
      <text x="42" y="346" fontSize="11" fill="#a0aec0">
        up their order history. Always empathize first, then explain the process...&quot;
      </text>
      <text x="42" y="362" fontSize="9" fill="#718096">
        Timestamp 14:32 — Audio transcription match
      </text>

      {/* Result 3 */}
      <rect x="30" y="382" width="740" height="100" rx="8" fill="#232b39" />
      <rect x="42" y="392" width="56" height="20" rx="4" fill="#F25C05" opacity="0.15" />
      <text x="49" y="406" fontSize="9" fontWeight="bold" fill="#F25C05">87.6% match</text>
      <rect x="106" y="392" width="44" height="20" rx="4" fill="#3498db" opacity="0.15" />
      <text x="111" y="406" fontSize="9" fontWeight="bold" fill="#3498db">DOCX</text>
      <text x="42" y="426" fontSize="13" fontWeight="bold" fill="#e2e8f0">
        Refund_Policy_Update_Memo.docx
      </text>
      <text x="42" y="444" fontSize="11" fill="#a0aec0">
        &quot;...Effective February 2026, refund processing time has been reduced from 5
      </text>
      <text x="42" y="458" fontSize="11" fill="#a0aec0">
        business days to 48 hours for all approved requests under $500...&quot;
      </text>
      <text x="42" y="474" fontSize="9" fill="#718096">
        Section 2 — Updated Jan 28, 2026
      </text>

      {/* Results count */}
      <text x="30" y="510" fontSize="10" fill="#718096">
        Showing 3 of 12 results · Search completed in 0.8s
      </text>
    </svg>
  );
}
