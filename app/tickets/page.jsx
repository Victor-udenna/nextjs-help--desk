import React from 'react'
import TicketList from './TicketList'
import { Suspense } from 'react'
import Loading from '../loading'

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently Open Tickets</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading/>}>
        <TicketList />
      </Suspense>
    </main>
  )
}

export default Tickets
