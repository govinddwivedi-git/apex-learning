import { UserButton } from '@clerk/nextjs'
import { Menu, X } from 'lucide-react'
import React from 'react'
import ShinyText from './ShinyText'
import Image from 'next/image'

function DashboardHeader({ onMenuToggle, mobileMenuOpen }) {
  return (
    <div className="p-5 shadow-sm shadow-stone-50/30 flex items-center gap-4">
      <button 
        onClick={onMenuToggle}
        className="md:hidden p-2 hover:bg-stone-50/30 rounded-lg"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className="flex-1 flex justify-center">
           <ShinyText text="Apex Learning: Your AI Companion for Smarter Study." disabled={false} speed={3} className='custom-class text-lg font-bold' />
      </div>
      <UserButton />
    </div>
  )
}

export default DashboardHeader