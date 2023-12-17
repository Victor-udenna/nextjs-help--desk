import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <main className="text-center">
      <h2 className="text-3xl">We Hit a Brick Wall</h2>
      <p>We could not find the ticket you are looking for</p>
      <p>
        Go back to all <Link href={'/tickets'}>tickets</Link>
      </p>
    </main>
  )
}

export default NotFound