import type { ReactNode } from 'react'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      {children}
    </div>
  )
}
