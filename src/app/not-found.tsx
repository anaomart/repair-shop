import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='px-2 w-full flex justify-center items-center flex-col gap-4 h-screen'>
      <h1 className='font-bold'>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL and try again.</p>
      <Link className='bg-red-500 px-4 py-2 text-white rounded-md ' href="/home">Back to Home</Link>
    </div>
  )
}
