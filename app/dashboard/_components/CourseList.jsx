"use client"
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import CourseCardItem from './CourseCardItem';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { CourseCountContext } from '@/app/_context/CourseCountContext';

function CourseList() {
    const {user} = useUser();
    const [CourseList, setCourseList] = useState([])
    const [loading, setLoading] = useState(false);
    const {totalCourse, setTotalCourse} = useContext(CourseCountContext)
    useEffect(() => {
        user&&GetCourseList();
    }, [user]);

    const GetCourseList  = async () => {
        setLoading(true);
        const result = await axios.post('/api/courses',{
            createdBy: user?.primaryEmailAddress?.emailAddress
        })
        console.log(result);
        setCourseList(result.data.result);
        setLoading(false);
        setTotalCourse(result.data.result?.length);
    }
  return (
    <div className='mt-10'>
        <h2 className='font-bold text-2xl flex items-center justify-between'>Your Previous Created Study Material
        <Button variant='outline'
        onClick={GetCourseList}
         className="border-stone-50/30 text-white bg-slate-600"><RefreshCw/>Refresh</Button></h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3'>
            {loading == false ? CourseList?.map((course, index) => (
                <CourseCardItem course = {course} key={index}/>
            )) :
            [1,2,3,4,5,6].map((item,index) => (
                <div key={index} className='h-56 w-full bg-slate-700 rounded-lg animate-pulse'>

                </div>
            ))
            }
        </div>
    </div>
  )
}

export default CourseList