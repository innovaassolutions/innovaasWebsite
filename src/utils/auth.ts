import { AuthError } from '@supabase/supabase-js'
import { supabase } from './supabase/client'

export function handleAuthError(error: AuthError) {
  switch (error.message) {
    case 'Invalid login credentials':
      return 'Invalid email or password'
    case 'Email not confirmed':
      return 'Please check your email and confirm your account'
    case 'User already registered':
      return 'An account with this email already exists'
    case 'Password should be at least 6 characters':
      return 'Password must be at least 6 characters long'
    case 'Unable to validate email address: invalid format':
      return 'Please enter a valid email address'
    default:
      return 'An error occurred during authentication'
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('Error signing out:', error.message)
  }
  // Redirect to login page
  window.location.href = '/login'
}

export async function refreshSession() {
  const { data, error } = await supabase.auth.refreshSession()
  if (error) {
    console.error('Error refreshing session:', error.message)
  }
  return { data, error }
} 