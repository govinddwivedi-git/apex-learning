import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React from 'react'

function CourseIntroCard({course}) {
  return (
    <div className='flex gap-5 items-center p-10 border border-stone-50/30 rounded-lg shadow-sm shadow-stone-50/30'>
        <Image src={'/knowledge.png'} alt='other' width={70} height={70}/>
        <div className="">
            <h2 className='font-bold text-2xl mt-3'>
                {course?.courseLayout?.course_title}
            </h2>
            <p className='text-sm text-gray-500 mt-2'>
                {course?.courseLayout?.course_summary}
            </p>

            {/* <Progress className="mt-3" value={0}/> */}

            <h2 className='mt-3 text-lg text-primary'>Total Chapters : {course?.courseLayout?.chapters?.length}</h2>
        </div>
    </div>
  )
}

export default CourseIntroCard