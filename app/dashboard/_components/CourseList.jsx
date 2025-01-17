"use client"
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CourseCardItem from './CourseCardItem';

function CourseList() {
    const {user} = useUser();
    const [CourseList, setCourseList] = useState([])
    useEffect(() => {
        user&&GetCourseList();
    }, [user]);

    const GetCourseList  = async () => {
        const result = await axios.post('/api/courses',{
            createdBy: user?.primaryEmailAddress?.emailAddress
        })
        console.log(result);
        setCourseList(result.data.result);
    }
  return (
    <div className='mt-10'>
        <h2 className='font-bold text-2xl'>Your Previous Created Study Material</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3'>
            {CourseList?.map((course, index) => (
                <CourseCardItem course = {course} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default CourseList