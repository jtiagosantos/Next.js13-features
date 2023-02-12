import { Count } from '@/components/Count'
import Link from 'next/link'

export default function SignIn() {
  return (
    <div>
      <h1>SignIn</h1>
      <Count />
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}
