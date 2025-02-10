import { UserButton } from '@clerk/nextjs'
import React from 'react'
import ShinyText from './ShinyText'
import Image from 'next/image'

function DashboardHeader() {
  return (
    <div className="p-5 shadow-sm shadow-stone-50/30 flex items-center">
      <div className="flex-1 flex justify-center">
           {/* <p className='text-xl font-bold'>Apex Learning: Your AI Companion for Smarter Study.</p> */}
           <ShinyText text="Apex Learning: Your AI Companion for Smarter Study." disabled={false} speed={3} className='custom-class text-lg font-bold' />
      </div>
      <UserButton />
    </div>
  )
}

export default DashboardHeader