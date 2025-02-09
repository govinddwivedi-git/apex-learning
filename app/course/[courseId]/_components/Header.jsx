'use client';
import { UserButton } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  
  return (
    <div className="p-5 shadow-md flex items-center">
      <div className="flex-1 flex justify-between">
        <div 
          className="flex gap-2 items-center cursor-pointer" 
          onClick={() => router.push("/dashboard")}
        >
          <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
          <h2 className="font-bold text-xl">Apex Learning</h2>
        </div>
        <p className="text-xl font-bold text-pink-800">
          Apex Learning : Your AI Companion for Smarter Study.
        </p>
      <UserButton />
      </div>
    </div>
  );
}

export default Header;
