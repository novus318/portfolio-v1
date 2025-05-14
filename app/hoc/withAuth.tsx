'use client'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function withAuth(Component: React.ComponentType) {
  return function ProtectedRoute(props: any) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
      const checkAuth = () => {
        try {
          const token = localStorage.getItem('adminToken')
          if (!token) {
            router.push('/admin')
            return
          }

          const parsedToken = JSON.parse(token)
          const isValid = parsedToken?.value && parsedToken?.expires > Date.now()

          if (isValid) {
            setIsAuthenticated(true)
            setIsLoading(false)
          } else {
            localStorage.removeItem('adminToken')
            router.push('/admin')
          }
        } catch (error) {
          console.error('Authentication error:', error)
          localStorage.removeItem('adminToken')
          router.push('/admin')
        }
      }

      checkAuth()
    }, [router])

    if (isLoading) {
      return (
        <div className="min-h-[80vh] flex items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      )
    }

    return isAuthenticated ? <Component {...props} /> : null
  }
}