import Image from 'next/image'
import React from 'react'
import { useState } from 'react';

function SelectOption({ selectedStudyType }) {
    const [selectedOption, setSelectedOption] = useState();
    const Options = [
        {
            name: 'Exam',
            icon: '/exam_1.png',
        },
        {
            name: 'Job Inteview',
            icon: '/job.png',
        },
        {
            name: 'Practice',
            icon: '/practice.png',
        },
        {
            name: 'Coding Prep',
            icon: '/code.png',
        },
        {
            name: 'Other',
            icon: '/knowledge.png',
        }
    ]
  return (
    <div>
        <h2 className='text-center text-lg mb-2'>
            Select for what you want to create 
        </h2>
        <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5'>
            {Options.map((option, index) => (
                <div key={index} className={`p-4 flex flex-col items-center justify-center border rounded-xl hover:border-primary cursor-pointer ${option?.name === selectedOption&&'border-primary'}`} onClick={() => {setSelectedOption(option.name);
                    selectedStudyType(option.name)}}
                >
                    <Image src={option.icon} alt={option.name} width={50} height={50}/>
                    <h2 className='text-sm mt-2'>{option.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SelectOption