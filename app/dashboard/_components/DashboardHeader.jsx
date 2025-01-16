import { UserButton } from '@clerk/nextjs'
import React from 'react'
import ShinyText from './ShinyText'

function DashboardHeader() {
  return (
    <div className="p-5 shadow-md flex items-center">
      <div className="flex-1 flex justify-center">
           <p className='text-xl font-bold'>Apex Learning: Your AI Companion for Smarter Study.</p>
           {/* <ShinyText text="Apex Learning: Your AI Companion for Smarter Study." disabled={false} speed={3} className='custom-class' /> */}
      </div>
      <UserButton />
    </div>
  )
}

export default DashboardHeader