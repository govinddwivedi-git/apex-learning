"use client";
import React from "react";
import { useState } from "react";
import SelectOption from "./_components/SelectOption";
import { Button } from "@/components/ui/button";
import TopicInput from "./_components/TopicInput";
import { v4 as uuidv4 } from 'uuid';
import { useUser } from "@clerk/nextjs";
import axios from 'axios';
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function Create() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState([]);
  const {user} = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleUserInput = (fieldName,fieldValue) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))

    console.log(formData)
  }

  /**
   * Used to Save User Input and Generate Course Outline using AI
   */

  const GenerateCourseOutline = async() => {
    try {
      const courseId = uuidv4();
      setLoading(true);
      const result = await axios.post('/api/generate-course-outline',{
          courseId: courseId,
          ...formData,
          createdBy: user?.primaryEmailAddress?.emailAddress
      });
      setLoading(false);
      router.replace('/dashboard');

      
      toast("Your course content is being ready, please refresh after few seconds");

      // console.log(result.data.result.resp);
    } catch (error) {
      console.error('Error generating course outline:', error);
    }
  }


  return (
    <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20 ">
      <h2 className="font-bold text-4xl text-primary">
        What do you want to create today ?
      </h2>
      <p className="text-grey-500 text-lg">
        Fill your requirements for the study material you want to create
      </p>

      <div className="mt-10 w-[50%]">{step == 0 ? <SelectOption selectedStudyType={(value)=>handleUserInput('courseType',value)} /> : <TopicInput setTopic={(value) => handleUserInput('topic',value)} 
      setDifficultyLevel={(value) => handleUserInput('difficultyLevel', value)}  />}</div>

      <div className="flex justify-between w-full mt-32">
        {step != 0 ? <Button variant="outline" onClick={() => setStep(step - 1)}>Previous</Button> : <div></div>}
        {step == 0 ? (
          <Button className='text-white' onClick={() => setStep(step + 1)}>Next</Button>
        ) : (
          <Button onClick={GenerateCourseOutline}  disabled={loading} className='text-white'>
            {loading ? <Loader className="animate-spin text-white"/> : 'Generate'} 
          </Button>
        )}
      </div>
    </div>
  );
}

export default Create;
