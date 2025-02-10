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
          <div className={`w-full h-2 rounded-full ${index <= stepCount ? 'bg-primary' : 'bg-gray-200'}`} key={index}></div>
        ))}
        <Button variant='outline' size="sm" onClick={() => setStepCount(stepCount + 1)}>Next</Button>
      </div>

      <div className="mt-10 mb-20">
        <div 
          className="notes-content"
          dangerouslySetInnerHTML={{
            __html: notes[stepCount]?.notes
              ?.replace(/```html/g, '')
              ?.replace(/```/g, '')
          }} 
        />

        <style jsx global>{`
          .notes-content {
            color: inherit;
            line-height: 1.6;
          }
          .notes-content h2 {
            font-size: 2rem;
            font-weight: 600;
            margin: 1.5rem 0 1rem 0;
            color: inherit;
          }
          .notes-content h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 1.25rem 0 0.75rem 0;
            color: inherit;
          }
          .notes-content h4 {
            font-size: 1.25rem;
            font-weight: 600;
            margin: 1rem 0 0.5rem 0;
            color: inherit;
          }
          .notes-content p, .notes-content li {
            margin: 0.75rem 0;
            font-size: 1rem;
            color: inherit;
          }
          .notes-content pre {
            background: var(--code-bg, #1a1a1a);
            color: var(--code-color, #fff);
            padding: 1rem;
            border-radius: 0.5rem;
            margin: 1rem 0;
            overflow-x: auto;
          }
          .notes-content code {
            font-family: monospace;
            color: inherit;
          }
          .notes-content ul, .notes-content ol {
            margin: 0.75rem 0;
            padding-left: 1.5rem;
            color: inherit;
          }
          .notes-content li {
            margin: 0.5rem 0;
          }
          .notes-content strong {
            font-weight: 600;
            color: inherit;
          }
        `}</style>

        {notes?.length == stepCount && 
          <div className='flex flex-col items-center gap-10'>
            <h2 className="text-2xl font-medium mt-5">Notes Completed. Well Done ✌️✌️</h2>
            <Button className="mt-3" onClick={() => route.back()}>Go to Course Page</Button>
          </div>}

      </div>
    </div>
  )
}

export default ViewNotes