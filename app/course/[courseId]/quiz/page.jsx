"use client"
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import QuizCardItem from './_components/QuizCardItem';
import { Button } from '@/components/ui/button';

function Quiz() {

    const {courseId} = useParams();
    const route = useRouter();
    const [quizData, setQuizData] = useState();
    const [quiz, setQuiz] = useState([]);
    const [stepCount, setStepCount] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    useEffect(() => {
        GetQuiz()
    }, [])

    const checkAnswer = (userAnswer, currentQuestion) => {
        if(userAnswer == currentQuestion?.answer) {
            setCorrectAnswer(true);
        }
        else {
            setCorrectAnswer(false);
        }
    }

    const GetQuiz = async() => {
        const result = await axios.post('/api/study-type', {
            courseId: courseId,
            studyType: 'quiz'
        })
        setQuizData(result.data);
        setQuiz(result.data?.content)
        console.log('Get Quiz', result);
        // console.log('Get qdata', quiz);
    }

    useEffect(() => {
        setCorrectAnswer(null);
    }, [stepCount])
  return (
    <div>
        <h2 className='font-bold text-2xl text-center mb-4'>Quiz</h2>
        <div className="flex gap-5 items-center">
            {stepCount != 0 && <Button variant='outline' size="sm" onClick={() => setStepCount(stepCount - 1)}>Previous</Button>}
            {quiz?.map((item, index) => (
                <div className={`w-full h-2 rounded-full ${index <= stepCount ? 'bg-primary' : 'bg-gray-200'}`} key={index}></div>
            ))}
            <Button variant='outline' size="sm" onClick={() => setStepCount(stepCount + 1)}>Next</Button>
        </div>

        <QuizCardItem quiz={quiz[stepCount]} userSelectedOption={(v) => checkAnswer(v, quiz[stepCount])} />

        {quiz?.length == stepCount && 
            <div className='flex flex-col items-center gap-10'>
            <h2 className="text-2xl font-medium mt-5">Quiz Completed. Well Done ✌️✌️</h2>
            <Button className="mt-3 text-white" onClick={() => route.back()}>Go to Course Page</Button>
            </div>}

        {correctAnswer == false && 
        <div>
            <div className='border border-red-900 p-3 rounded-full bg-red-300 text-center'>
                <h2 className='font-bold text-lg text-red-600'>Incorrect</h2>
                <p className='text-gray-600'>Oops! Your answer is Wrong ❌</p>
            </div>
        </div>
        }
        {correctAnswer == true && 
        <div>
            <div className='border border-green-900 p-3 rounded-full bg-green-300 text-center'>
                <h2 className='font-bold text-lg text-green-700'>Correct</h2>
                <p className='text-gray-600'>Your answer is correct ✅</p>
            </div>
        </div>
        }


        
    </div>
  )
}

export default Quiz