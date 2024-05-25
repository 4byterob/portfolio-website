import Image from "next/image";
import ProfilePic from "./components/ProfilePic";
import Button from "./components/Button";
import React from 'react';
import Wave from 'react-wavify';
import Head from "next/head";
import ParticlesComponent from "./components/ParticlesComponent";
import PortfolioButton from "./components/PortfolioButton";

export default function Home() {
  return (
    <main className=" relative font-LeagueSpartan bg-black0-base w-screen h-full z-0">
      {/*<div className="absolute size-full">
        <ParticlesComponent />
      </div>*/}
      <section className=" h-[80vh] items-center space-x-6 flex justify-center z-10">
        <ProfilePic />
        <div className="">
          <h1 className=" text-6xl">Robert Iobagiu</h1>
          <h2 className=" text-xl">🔧 Automation Engineer | Software Developer 🤖</h2>
          <h3 className=" mt-3">Hi, I&apos;m Robert! A recent graduate with a passion for mechanical and software engineering.</h3>
        
          <div className=" mt-6 text-4xl flex w-full m-auto justify-evenly font-semibold">
            <Button text="Portfolio" url="#Portfolio"/>
            <div className="bg-white w-[2px] h-full relative"/>
            <Button text="Resume" url="./pages/Resume"/>
            <div className="bg-white w-[2px] h-full relative"/>
            <Button text="Contact" url="./pages/Contact"/>
          </div>
        </div>

        {/* Waves */}
        <div className="h-[250px] w-full absolute top-0 right-0 -z-10 translate-y-[230%]">
          <Wave className=" absolute bottom-0"
                fill="#111111"
                paused={false}
                style={{ display: "flex" }}
                options={{
                  height: 20,
                  amplitude: 20,
                  speed: 0.15,
                  points: 3
                }}
          />
          
          <Wave className=" absolute  translate-y-[60%] bottom-0"
              fill="#090909"
              paused={false}
              style={{ display: "flex" }}
              options={{
                height: 20,
                amplitude: 20,
                speed: 0.15,
                points: 4
              }}
          />
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="w-full h-full bg-[#090909]">
        <div className="px-10 py-16">

          {/* Header */}
          <div id="Portfolio" className="">
            <h1 className="font-bold text-6xl">Portfolio</h1>
            {/* Include an arrow next to the portfolio */}
          </div>

          {/* Body */}
          <div className="w-[80%] mx-auto mt-16 flex flex-wrap justify-evenly">
            <PortfolioButton src="/images/ASRS/1.jpg" width={300} height={300} header="ASRS" url="./pages/Portfolio/ASRS" description="ASRS Description" />
            <PortfolioButton width={300} height={300} header="MPS Station" url="./pages/Portfolio/MPS Station" description="MPS Station Description" />
            <PortfolioButton width={300} height={300} header="Sterling Engine" url="./pages/Portfolio/Sterling Engine" description="Sterling Engine Description Sterling Engine Description Sterling Engine Description" />
            <PortfolioButton width={300} height={300} header="Sumo Robot" url="./pages/Portfolio/Sumo Robot" description="Sumo Robot Description" />
          </div>
        </div>
      </section>
    </main>
  );
}
