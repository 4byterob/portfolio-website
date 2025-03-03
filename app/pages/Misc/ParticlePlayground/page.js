import Image from "next/image";
import Button from "@/app/components/Button";
import Link from "next/link";
import React from 'react';
import Wave from 'react-wavify';
import Head from "next/head";
import ParticlesComponent from "@/app/components/ParticlesComponent";
import PortfolioButton from "@/app/components/PortfolioButton";

export default function Home() {
  return (
    <main className=" relative font-LeagueSpartan bg-[#090909] w-screen h-full z-0">
      <Link href="/" className=" font-extrabold text-6xl text-gray-200 rounded-full hover:bg-gray-600 transition duration-200 absolute left-4 top-4 p-1"><div className="translate-y-[5px]">⬅</div></Link>
      
      <div className="h-[100vh]">
        <ParticlesComponent />
      </div>
    </main>
  );
}
