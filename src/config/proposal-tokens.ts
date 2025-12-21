/**
 * Proposal Access Tokens
 *
 * Maps unique access tokens to client proposal folders.
 * Each token should be a long, random string that's hard to guess.
 *
 * IMPORTANT: Keep these tokens secret! Anyone with a token can view that client's proposal.
 */

interface ProposalToken {
  token: string
  clientFolder: string
  clientName: string
  createdAt: string
  expiresAt?: string // Optional expiration date
}

export const PROPOSAL_TOKENS: ProposalToken[] = [
  {
    token: 'a7f3k9m2p5w8x1v6n4b9',
    clientFolder: 'leaningwithmeaning',
    clientName: 'Leaning with Meaning',
    createdAt: '2025-12-21',
    // expiresAt: '2026-01-21', // Uncomment to set expiration
  },
  // Add more clients here:
  // {
  //   token: 'generate-another-random-token',
  //   clientFolder: 'another-client',
  //   clientName: 'Another Client Name',
  //   createdAt: '2025-12-21',
  // },
]

/**
 * Find a proposal by token
 */
export function findProposalByToken(token: string): ProposalToken | null {
  const proposal = PROPOSAL_TOKENS.find(p => p.token === token)

  if (!proposal) {
    return null
  }

  // Check if token has expired
  if (proposal.expiresAt) {
    const expirationDate = new Date(proposal.expiresAt)
    const now = new Date()
    if (now > expirationDate) {
      return null // Token expired
    }
  }

  return proposal
}

/**
 * Generate a random token (use this to create new tokens)
 * Run this in Node.js: node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
 */
export function generateToken(): string {
  // This is just for reference - generate tokens server-side
  return 'use-crypto-randomBytes-to-generate'
}
