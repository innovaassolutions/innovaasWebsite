import { Button } from '@chakra-ui/react'
import { signOut } from '@/utils/auth'

export function LogoutButton() {
  return (
    <Button
      onClick={signOut}
      bg="#F25C05"
      color="white"
      _hover={{ bg: "#d94e04" }}
      size="sm"
    >
      Logout
    </Button>
  )
} 