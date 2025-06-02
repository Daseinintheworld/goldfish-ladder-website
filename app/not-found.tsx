"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/logo-2.png"
        width={150}
        height={150}
        alt={`GoldFish Logo`}
        priority={true}
      />
      <div className="p-6 rounded-lg shadow-md text-center w-1/3">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could Not Find Requested Page.</p>
        <Button
          variant={"outline"}
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
