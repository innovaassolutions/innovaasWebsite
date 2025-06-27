import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Spinner, Center } from '@chakra-ui/react'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <Center minH="100vh">
        <Spinner size="xl" color="#F25C05" />
      </Center>
    )
  }

  return user ? <>{children}</> : null
} 