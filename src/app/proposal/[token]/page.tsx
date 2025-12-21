import { notFound } from 'next/navigation'
import fs from 'fs/promises'
import path from 'path'
import { findProposalByToken } from '@/config/proposal-tokens'

interface ProposalPageProps {
  params: Promise<{
    token: string
  }>
}

export default async function ProposalPage({ params }: ProposalPageProps) {
  const { token } = await params

  // Find the proposal by token
  const proposal = findProposalByToken(token)

  if (!proposal) {
    // Invalid or expired token
    notFound()
  }

  try {
    // Read the HTML file from the client's proposals folder
    const proposalPath = path.join(
      process.cwd(),
      'proposals',
      proposal.clientFolder,
      'index.html'
    )

    const htmlContent = await fs.readFile(proposalPath, 'utf-8')

    // Return the raw HTML with full page rendering
    return (
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
        }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    )
  } catch (error) {
    console.error('Error reading proposal file:', error)
    notFound()
  }
}

// Disable static generation for this dynamic route
export const dynamic = 'force-dynamic'

// Optional: Add metadata
export async function generateMetadata({ params }: ProposalPageProps) {
  const { token } = await params
  const proposal = findProposalByToken(token)

  if (!proposal) {
    return {
      title: 'Proposal Not Found',
    }
  }

  return {
    title: `Proposal - ${proposal.clientName}`,
    robots: 'noindex, nofollow', // Prevent search engines from indexing
  }
}
