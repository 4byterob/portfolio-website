import Link from "next/link";
import React from 'react';
import Wave from 'react-wavify';

export default function Home() {
  return (
    <main className=" relative font-LeagueSpartan bg-black0-base w-screen h-full z-0">
      <Link href="/" className=" font-extrabold text-6xl text-gray-200 rounded-full hover:bg-gray-600 transition duration-200 absolute left-4 top-4 p-1"><div className="translate-y-[5px]">⬅</div></Link>

      <section className="w-[60%] mx-auto pt-48 h-[50vh]">
        <section className="">
          <h1 className="text-8xl font-semibold text-center pb-4">🚧 Under Construction 🚧</h1>
          <h2 className="text-4xl text-gray-300 text-center">I&apos;m Working Hard to Update This Page. Please Check Back in the Future.</h2>
        </section>
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
      <div className="bg-[#090909] h-[40vh]"/>
    </main>
  );
}
