"use client";
import { useUser } from '@clerk/nextjs';
import Image from 'next/image'
import React from 'react'

export default function () {
    const {user} = useUser();
  return (
    <div className='p-5 bg-blue-700 w-full text-white rounded-lg flex items-center gap-6'>
        <Image src={'/laptop.png'} alt='laptop' width={100} height={100}/>
        <div>
            <h2 className='font-bold text-4xl'>Hello, {user?.firstName} 👋</h2>
            <p className='text-xl'>Welcome Back, Wanna Learn Something New ??!!</p>
        </div>
        
    </div>
  )
}
