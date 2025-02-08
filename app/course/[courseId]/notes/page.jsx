"use client";
import { Button } from '@/components/ui/button';
import axios from 'axios'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function ViewNotes() {

  const route = useRouter();

  const { courseId } = useParams();

  const [stepCount, setStepCount] = useState(0);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    GetNotes();
  }, [])
  
  const GetNotes = async() => {
     const result = await axios.post('/api/study-type', {
        courseId: courseId,
        studyType: 'notes'
      })

      console.log(result?.data);
      setNotes(result?.data);
  }
  return notes && (
    <div>
      <div className="flex gap-5 items-center">
        {stepCount != 0 && <Button variant='outline' size="sm" onClick={() => setStepCount(stepCount - 1)}>Previous</Button>}
        {notes?.map((item, index) => (
          <div className={`w-full h-2 rounded-full ${index < stepCount ? 'bg-primary' : 'bg-gray-200'}`} key={index}></div>
        ))}
        <Button variant='outline' size="sm" onClick={() => setStepCount(stepCount + 1)}>Next</Button>
      </div>

      <div className="mt-10">
        <div dangerouslySetInnerHTML={{__html: notes[stepCount]?.notes}} />

          {notes?.length == stepCount && 
          <div className='flex flex-col items-center gap-10'>
            <h2 className="text-2xl font-medium mt-5">Notes Completed</h2>
            <Button className="mt-3" onClick={() => route.back()}>Go to Course Page</Button>
          </div>}

      </div>
    </div>
  )
}

export default ViewNotes