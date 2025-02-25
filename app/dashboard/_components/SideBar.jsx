"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Shield, UserCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'
import { CourseCountContext } from '@/app/_context/CourseCountContext'

function SideBar() {
  const MenuList = [
    {
      name : 'Dashboard',
      icon : LayoutDashboard,
      path : '/dashboard'
    },
    {
      name : 'Upgrade',
      icon : Shield,
      path : '/dashboard/upgrade'
    },
    {
      name : 'Profile',
      icon : UserCircle,
      path : '/dashboard/profile'
    }
  ]

  const {totalCourse, setTotalCourse} = useContext(CourseCountContext)

  const path = usePathname();
  return (
    <div className='h-screen shadow-md shadow-stone-50/30 p-5'>
      <div className='flex gap-2 items-center'>
        <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
        <h2 className='font-bold text-2xl'>Apex Learning</h2>
      </div>

      <div className="mt-10">
        {(5-totalCourse) > 0 ? (
          <Link href={'/create'}>
            <Button className="w-full text-white">+ Create New</Button>
          </Link>
        ) : (
          <Link href={'/dashboard/upgrade'}>
            <Button className="w-full text-white">Upgrade to Create</Button>
          </Link>
        )}
      </div>

      <div className="mt-5">
        {MenuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <div className={`flex gap-2 items-center p-3 hover:bg-stone-50/30 rounded-lg cursor-pointer mt-3 ${path === menu.path&&'bg-stone-50/30'}`}>
              <menu.icon  />
              <h2>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className="border p-5 bg-stone-50/30 rounded-lg absolute bottom-10 w-[85%]">
        <h2 className='text-lg mb-2'>
          Available Credits : {5-totalCourse}
        </h2>
        <Progress value={(totalCourse/5) * 100}/>
        <h2 className='text-sm'>{totalCourse} Out Of 5 Credits Used</h2>

        <Link href={'/dashboard/upgrade'} className='text-pink-300 text-xs mt-3'> Upgrade to create more </Link> 
      </div>
    </div>

  )
}

export default SideBar