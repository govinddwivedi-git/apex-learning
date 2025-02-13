import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

function QuizCardItem({quiz, userSelectedOption}) {
    const [selectedOption, setSelectedOption] = useState()
  return quiz && (
    <div className='mt-10 p-5'>
        <h2 className='font-medium text-3xl text-center'>{quiz?.question}</h2>
        <div className='grid grid-cols-2 gap-5 mt-5'>
            {quiz?.options.map((item, index) => (
                <h2 key={index} className={`w-full border border-slate-500 text-lg rounded-full p-5 px-5 text-center flex justify-center items-center 
                hover:bg-slate-500 hover:text-white cursor-pointer transition-colors ${selectedOption == item && 'bg-primary text-white hover:bg-primary border-blue-800'}`} variant='outline'
                onClick={() =>{ setSelectedOption(item);
                    userSelectedOption(item)
                }}>{item}</h2>
            ))}
        </div>
    </div>
  )
}

export default QuizCardItem