import React from "react";

function ChapterList({ course }) {
  const CHAPTERS = course?.courseLayout?.chapters;
  return (
    <div className="mt-5">
      <h2 className="font-medium text-xl"> Chapters </h2>
      <div className="mt-3">
        {CHAPTERS?.map((chapter, index) => (
          <div className="flex gap-5 items-center p-5 border rounded-lg shadow-md border-stone-50/30  mt-3 cursor-pointer">
            <h2 className="text-2xl">{chapter?.emoji}</h2>
            <div className="">
              <h2 className="font-medium">{chapter?.chapter_title}</h2>
              <p className="text-gray-500 text-sm">{chapter?.chapter_summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
