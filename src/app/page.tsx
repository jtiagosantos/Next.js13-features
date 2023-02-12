import { Suspense } from 'react'
import { Repo } from '@/components/Repo'
import { User } from '@/components/User'
import Link from 'next/link'

export default async function Home() {
  return (
    <div>
      <Link href="/dashboard">Dashboard</Link>

      <Suspense
        fallback={
          <>
            <h1>Loading user...</h1>
          </>
        }
      >
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>

      <Suspense
        fallback={
          <>
            <h1>Loading repositories...</h1>
          </>
        }
      >
        {/* @ts-expect-error Async Server Component */}
        <Repo />
      </Suspense>
    </div>
  )
}
