"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import FlashcardItem from "./_components/FlashcardItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Flashcards() {
  const { courseId } = useParams();
  const [flashcards, setFlashcards] = useState([]);
  const [isFlipped, setIsFlipped] = useState();
  const [api, setApi] = useState();
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    GetFlashCards();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on('select', () => {
      setIsFlipped(false);
      setStepCount(api.selectedScrollSnap());
    })
  }, [api]);

  const GetFlashCards = async () => {
    const result = await axios.post("/api/study-type", {
      courseId: courseId,
      studyType: "flashcard",
    });
    setFlashcards(result?.data);
    console.log("Flashcards", result?.data);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div>
      <h2 className="font-bold text-2xl">Flashcards</h2>
      <p>Flashcards : The Ulltimate Tool to Lock in Concepts !</p>

      <div className="flex gap-2 items-center mb-5 mt-7">
        {flashcards?.content && flashcards.content.map((_, index) => (
          <div className={`w-full h-2 rounded-full ${index <= stepCount ? 'bg-primary' : 'bg-gray-200'}`} key={index}></div>
        ))}
      </div>

      <div>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {flashcards?.content && flashcards.content.map((flashcard, index) => (
              <CarouselItem key={index}>
                <FlashcardItem
                  isFlipped={isFlipped}
                  handleClick={handleClick}
                  flashcard={flashcard}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Flashcards;
