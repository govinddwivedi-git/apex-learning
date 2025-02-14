import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { LoaderCircle, RefreshCw } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CourseCardItem({course}) {
  const [courseStatus, setCourseStatus] = useState(course?.status)
  
  useEffect(() => {
    let intervalId;
    
    const checkStatus = async () => {
      if (courseStatus === 'Generating') {
        const response = await axios.get(`/api/courses?courseId=${course?.courseId}`)
        const updatedStatus = response.data.result?.status
        if (updatedStatus !== 'Generating') {
          setCourseStatus(updatedStatus)
          clearInterval(intervalId)
        }
      }
    }

    if (courseStatus === 'Generating') {
      intervalId = setInterval(checkStatus, 5000) // Check every 5 seconds
    }

    return () => clearInterval(intervalId)
  }, [courseStatus, course?.courseId])

  return (
    <div className='border border-stone-50/30 rounded-lg p-5'>
        <div className="">
            <div className="flex justify-between items-center">
                <Image src={'/knowledge.png'} alt='other' width={50} height={50}/>
                <h2 className='text-[10px] p-1 px-2 rounded-full bg-blue-600 text-white'>12-Dec-2024</h2>
            </div>
            <h2 className='mt-3 font-medium text-lg'>{course?.courseLayout?.course_title}</h2>
            <p className='text-sm line-clamp-2 text-gray-400 mt-2'>{course?.courseLayout?.course_summary}</p>

            {/* <div className='mt-3'>
                <Progress value={0}/>
            </div> */}

            <div className='mt-3 flex justify-end'>
                {courseStatus === 'Generating' ? 
                <h2 className='text-sm p-1 px-3 rounded-full flex gap-2 bg-pink-900 text-white'>
                  <LoaderCircle className="animate-spin h-5 w-5"/>Generating...
                </h2> :
                <Link href={'/course/'+course?.courseId}><Button className="text-white">View</Button></Link>}
            </div>
        </div>
    </div>
  )
}

export default CourseCardItem