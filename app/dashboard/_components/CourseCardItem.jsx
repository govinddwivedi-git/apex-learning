import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { LoaderCircle, RefreshCw } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function CourseCardItem({course}) {
  return (
    <div className='border rounded-lg shadow-md p-5'>
        <div className="">
            <div className="flex justify-between items-center">
                <Image src={'/knowledge.png'} alt='other' width={50} height={50}/>
                <h2 className='text-[10px] p-1 px-2 rounded-full bg-blue-600 text-white'>12-Dec-2024</h2>
            </div>
            <h2 className='mt-3 font-medium text-lg'>{course?.courseLayout?.course_title}</h2>
            <p className='text-sm line-clamp-2 text-gray-500 mt-2'>{course?.courseLayout?.course_summary}</p>

            <div className='mt-3'>
                <Progress value={0}/>
            </div>

            <div className='mt-3 flex justify-end'>
                {course?.status=='Generating' ? 
                <h2 className='text-sm p-1 px-3 rounded-full flex gap-2 bg-gray-500 text-white'>
                  <LoaderCircle className="animate-spin h-5 w-5"/>Generating...
                </h2> :
                <Button>View</Button> }
            </div>
        </div>
    </div>
  )
}

export default CourseCardItem