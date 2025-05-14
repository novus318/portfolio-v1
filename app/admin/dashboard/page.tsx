'use client'
import withAuth from '@/app/hoc/withAuth'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto px-4 bg-amber-100 h-96'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
    </div>
  )
}

export default withAuth(page)