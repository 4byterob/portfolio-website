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
      <section className=" h-[65vh] items-center space-x-6 flex justify-center z-10">
        <ProfilePic />
        <div className="">
          <h1 className=" text-6xl">Robert Iobagiu</h1>
          <h2 className=" text-xl">🔧 Automation Engineer | Software Developer 🤖</h2>
          <h3 className=" mt-3 ml-2 text-xl max-w-[80%]">Hi, I&apos;m Robert! A recent graduate with a passion for mechanical and software engineering.</h3>
        
          <div className=" mt-6 text-4xl flex w-full m-auto justify-evenly font-semibold">
            <Button text="Portfolio" url="#Portfolio" buttonClassName={"text-4xl"}/>
            <div className="bg-white w-[2px] h-full relative"/>
            <Button text="Resume" url="./pages/Resume" buttonClassName={"text-4xl"}/>
            <div className="bg-white w-[2px] h-full relative"/>
            <Button text="Contact" url="./pages/Contact" buttonClassName={"text-4xl"}/>
          </div>
        </div>
      </section>

      {/* Waves */}
      <section className="relative h-[20vh]">
        <div className="absolute h-[250px] w-full top-0 right-0 -z-10 -translate-y-[50%]">
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
          
          <Wave className="absolute translate-y-[50%] bottom-0"
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
      <section className="relative w-full h-full bg-[#090909]">
        <div className="relative px-10 py-4">
          <div className="size-full absolute">
            <ParticlesComponent />
          </div>
        
          {/* Header */}
          <div id="Portfolio" className="">
            <h1 className="font-bold text-6xl">Portfolio</h1>
            {/* Include an arrow next to the portfolio */}
          </div>

          {/* Body */}
          <div className="w-[80%] mx-auto mt-16 flex flex-wrap gap-8 align-middle">
            <PortfolioButton src="/images/ASRS/1.jpg" width={300} height={300} header="ASRS" url="./pages/Portfolio/ASRS" description="ASRS Description" imgClassName="-translate-y-[25%]"/>
            <PortfolioButton width={300} height={300} header="MPS Station" url="./pages/Misc/UnderConstruction" description="MPS Station Description" />
            <PortfolioButton width={300} height={300} header="Sterling Engine" url="./pages/Misc/UnderConstruction" description="Sterling Engine Description" />
            <PortfolioButton width={300} height={300} header="Sumo Robot" url="./pages/Misc/UnderConstruction" description="Sumo Robot Description" />
          </div>
        </div>
      </section>
    </main>
  );
}
