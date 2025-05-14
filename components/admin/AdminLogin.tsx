'use client'
import React, { useState, useEffect } from 'react'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, LockIcon } from 'lucide-react'

const AdminLogin = () => {
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Clear error message after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 5000)
      return () => clearTimeout(timer)
    }
  }, [error])

  const handleSubmit = async () => {
    // Basic input validation
    if (pin.length !== 6) {
      setError('Please enter a 6-digit PIN.')
      return
    }

    setIsLoading(true)
    try {
      // TODO: Replace hardcoded PIN with secure backend validation
      // In production, use environment variable or API call
      const validPin = '628201' // Replace with process.env.ADMIN_PIN or API check

      if (pin === validPin) {
        // Generate secure token with 2-day expiration
        const token = {
          value: crypto.randomUUID(), // More secure than Math.random
          expires: Date.now() + 2 * 24 * 60 * 60 * 1000, // 2 days
        }
        localStorage.setItem('adminToken', JSON.stringify(token))
        window.location.href = '/admin/dashboard'
      } else {
        setError('Invalid PIN. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again later.')
      console.error('Login error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-3">
      <Card className="w-full max-w-md shadow-lg transition-all duration-300 hover:shadow-xl">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full animate-pulse">
              <LockIcon className="h-6 w-6 " />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">
            Admin Login
          </CardTitle>
          <CardDescription>
            Enter your 6-digit PIN to access
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center">
            <InputOTP
              maxLength={6}
              value={pin}
              onChange={(value) => setPin(value)}
              aria-label="Admin PIN input"
              disabled={isLoading}
            >
              <InputOTPGroup className="gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="h-12 w-12 text-lg font-medium border-2 rounded-md  focus:ring-2  transition-all"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
            {error && (
              <p className="text-sm text-destructive mt-3 animate-fade-in">
                {error}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full h-12 text-base font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={pin.length !== 6 || isLoading}
            aria-label="Submit PIN"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Verifying...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                Login <ArrowRightIcon className="ml-2 h-5 w-5" />
              </div>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default AdminLogin