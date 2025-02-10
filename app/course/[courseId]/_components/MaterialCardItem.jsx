import { Button } from "@/components/ui/button";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

function MaterialCardItem({ item, studyTypeContent, course, refreshData }) {
  const [loading, setLoading] = useState(false);
  const GenerateContent = async () => {
    toast("Generating content.....");
    setLoading(true);
    // console.log(course);
    let chapters = "";
    course?.courseLayout.chapters.forEach((chapter) => {
      chapters =
        (chapter.chapter_title || chapter?.chapter.chapterTitle) +
        "," +
        chapters;
    });

    // console.log(chapters);
    const result = await axios.post("/api/study-type-content", {
      courseId: course?.courseId,
      type: item.type,
      chapters: chapters,
    });
    setLoading(false);
    console.log(result);
    refreshData(true);
    toast("Content generated successfully");
  };

  return (
    
      <div
        className={`border border-stone-50/30 rounded-lg p-5 flex flex-col items-center ${
          studyTypeContent?.[item.type]?.length == 0 && "grayscale"
        }`}
      >
        {studyTypeContent?.[item.type]?.length == 0 ? (
          <h2 className="p-1 px-2 bg-gray-500 text-white rounded-full text-[10px] mb-2">
            Generate
          </h2>
        ) : (
          <h2 className="p-1 px-2 bg-green-500 text-white rounded-full text-[10px] mb-2">
            Ready
          </h2>
        )}
        <Image src={item.icon} alt={item.name} width={50} height={50} />
        <h2 className="font-med mt-3">{item.name}</h2>
        <p className="text-gray-500 text-sm text-center">{item.desc}</p>

        {studyTypeContent?.[item.type]?.length == 0 ? (
          <Button
            className="mt-3 w-full"
            variant="outline"
            onClick={() => GenerateContent()}
          >
            {loading && <LoaderCircle className="animate-spin" />}Generate
          </Button>
        ) : (
          <Link href={"/course/" + course?.courseId + item.path}>
          <Button className="mt-3 w-full text-white">
            View
          </Button>
          </Link>
        )}
      </div>
    
  );
}

export default MaterialCardItem;
