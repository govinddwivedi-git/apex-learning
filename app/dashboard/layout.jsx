"use client"
import React, { useState } from 'react'
import SideBar from './_components/SideBar'
import DashboardHeader from './_components/DashboardHeader'
import { CourseCountContext } from '../_context/CourseCountContext'

function DashboardLayout({children}) {
  const [totalCourse, setTotalCourse] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <CourseCountContext.Provider value={{totalCourse, setTotalCourse}}>
    <div className="relative min-h-screen">
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-lg z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <div className={`
          fixed top-0 left-0 h-full z-40
          md:w-64 w-[80%] 
          transform transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}> 
            <SideBar />
        </div>

        {/* Main Content */}
        <div className='md:ml-64'>
            <DashboardHeader 
              onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} 
              mobileMenuOpen={mobileMenuOpen}
            />
            <div className='p-5 md:p-10'>
                {children}
            </div>
        </div>
    </div>
    </CourseCountContext.Provider>
  )
}

export default DashboardLayout