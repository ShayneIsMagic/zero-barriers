'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CaseStudiesRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/results')
  }, [router])

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <p>Redirecting to Results page...</p>
    </div>
  )
}
