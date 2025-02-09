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
  useEffect(() => {
    GetFlashCards();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on('select', () => {
      setIsFlipped(false);
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

      <div>
        <Carousel setApi = {setApi}>
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
