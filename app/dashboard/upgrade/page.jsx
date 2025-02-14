'use client'
import SpotlightCard from '@/components/ui/SpotlightCard';
import { db } from '@/configs/db';
import { USER_TABLE } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { eq } from 'drizzle-orm';
import { MoveRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Upgrade() {
  const router = useRouter();

  const [userDetail, setUserDetail] = useState();

  const {user} = useUser();
  useEffect(() => {
    user && GetUserDetail();
  },[user])

  const GetUserDetail = async() => {
    const result = await db.select().from(USER_TABLE)
    .where(eq(USER_TABLE.email, user.primaryEmailAddress?.emailAddress));

    setUserDetail(result[0]);
  }

  

  const OnCheckoutClick = async () => {
    const result = await axios.post('/api/payment/checkout',{
        priceId : process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY
    });
    console.log(result.data);
    window.open(result.data?.url)
}

// console.log(userDetail);

const OnPaymentManage = async() => {
    const result = await axios.post('/api/payment/manage-payment', {
        customerId : userDetail?.customerId
    })
    
    window.open(result.data?.url)
    console.log(result.data);
  }

  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 p-4 md:p-0'>
      <SpotlightCard className='w-full md:w-auto p-4 md:p-8 bg-white-800 border border-slate-600 rounded-2xl shadow-lg'>
        <h1 className='text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8'>Free</h1>

        <div className='grid gap-4 md:gap-6'>
          <div className='space-y-3 md:space-y-4'>
            <h2 className='text-lg md:text-xl font-semibold'>Free Offerigs:</h2>
            <ul className='space-y-3'>
              <li className='flex items-center gap-2'>
                <MoveRight className='text-green-500' size={20} />
                <span>Limited creation and storage</span>
              </li>
              <li className='flex items-center gap-2'>
                <MoveRight className='text-green-500' size={20} />
                <span>Limited generation of custom study notes.</span>
              </li>
              <li className='flex items-center gap-2'>
                <MoveRight className='text-green-500' size={20} />
                <span>Generate limited flashcards</span>
              </li>
              <li className='flex items-center gap-2'>
                <MoveRight className='text-green-500' size={20} />
                <span>Practice quizzes and assessments</span>
              </li>
              
            </ul>
          </div>

          <div className='border-t pt-4 md:pt-6'>
            <div className='text-center space-y-3 md:space-y-4'>
              <div className='text-3xl md:text-4xl font-bold'>$0<span className='text-base md:text-lg text-pink-300'>/month</span></div>
              <h2 
                className='w-full py-3 px-6 bg-pink-600 text-white rounded-lg font-semibold'
              >
                Free Plan
              </h2>
            </div>
          </div>
        </div>
      </SpotlightCard>
      <SpotlightCard className='w-full md:w-auto p-4 md:p-8 bg-purple-800 rounded-2xl shadow-lg'>
        <h1 className='text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8'>Upgrade to Premium</h1>

        <div className='grid gap-6'>
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold'>Premium Features:</h2>
            <ul className='space-y-3'>
              <li className='flex items-center gap-2'>
                <MoveRight className='text-green-500' size={20} />
                <span>Unlimited storage of all study materials</span>
              </li>
              <li className='flex items-center gap-2'>
                <MoveRight className='text-green-500' size={20} />
                <span>Unlimited generation custom study notes</span>
              </li>
              <li className='flex items-center gap-2'>
                <MoveRight className='text-green-500' size={20} />
                <span>Unlimited generation custom study notes</span>
              </li>
              <li className='flex items-center gap-2'>
                <MoveRight className='text-green-500' size={20} />
                <span>Unlimited practice quizzes</span>
              </li>
            </ul>
          </div>

          <div className='border-t pt-6'>
            <div className='text-center space-y-4'>
              <div className='text-4xl font-bold'>$9.99<span className='text-lg text-pink-300'>/month</span></div>
              {userDetail?.isMember == false ? <button 
                onClick={OnCheckoutClick}
                className='w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold'
              >
               Upgrade Now 
              </button> :
              <button 
              onClick={OnPaymentManage}
              className='w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold'
            >
              Manage Payment
            </button>}
              <p className='text-sm text-pink-300'>Cancel anytime. No long-term commitment required.</p>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  )
}

export default Upgrade