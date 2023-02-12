import type { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <h1>Auth Layout</h1>
      {children}
    </div>
  )
}
