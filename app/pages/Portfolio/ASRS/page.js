import Image from "next/image";
import Link from "next/link";
import ExpandImage from "@/app/components/ExpandImage"

export default function ASRS() {
  return (
    <main className=" font-LeagueSpartan bg-black0-base w-screen h-full min-h-screen pb-24">
      <Link href="/" className=" font-extrabold text-6xl text-gray-200 rounded-full hover:bg-gray-600 transition duration-200 absolute left-4 top-4 p-1"><div className="translate-y-[5px]">⬅</div></Link>

      <div className="w-[60%] h-full mx-auto pt-32">
        <section className="">
          <h1 className="text-8xl font-semibold text-center pb-4">ASRS Project</h1>
          <h2 className="text-4xl text-gray-300">Simulating Warehouse Inventory with the Automated Storage and Retrieval System Capstone Project. </h2>
        </section>

        <section className="">
          <div className="flex flex-row pt-12">
            <div className="w-[60%]">
              <p className="text-2xl">
                The Automated Storage and Retrieval System, ASRS, is widely used in warehousing industries to 
                efficiently store and retrieve materials and other necessities in a large array of inventory.
              </p>
            </div>
            <div className="w-[25%] ml-auto mr-10">
              <ExpandImage className=""
                           alt="Cover Picture"
                           src="/images/ASRS/1.jpg"
                           width="10000"
                           height="10000"/>
            </div>
          </div>
        </section>

        <section className="flex flex-row mt-6 text-3xl text-gray-400 justify-between">
          <div className=" w-[30%]">
            <h3 className="text-4xl text-white">Skills</h3>
            <p className="">PLC Programming, ABB Robotics Programming, HMI Designing & Programming, Electrical Wiring, AutoCAD Modelling, 3D Modelling, Project Management</p>
          </div>
          <div className=" w-[30%]">
            <h3 className="text-4xl text-white">Timeline</h3>
            <p className="">December 1, 2023 to <br /> April 20, 2024</p>
          </div>
          <div className=" w-[30%]">
            <h3 className="text-4xl text-white">Collaborators</h3>
            <p className="">Derek Chorney, <br/> Ghanshyam Marasini, <br/> Susan Odhiambo</p>
          </div>
        </section>
        <section className="mt-24">
          <h1 className="text-5xl">Defining The Problem</h1>

          <div className="mt-6">
            <p className="text-2xl">
              My team was tasked by our client, Daniel Barret, to develop a functioning model to simulate an automated industry warehouse inventory system. 
              The workspace had an existing <a href="https://new.abb.com/products/3HAC020536-001/irb-140" className="underline">IRB 140 Robot</a> by  
              ABB and a steel frame fitted with racks to house the materials being stored or retrieved. A 3-axis movement tray was installed on the storage 
              frame using steel wires, frames, and motors.
            </p>
          </div>

          <div className="mt-6 flex w-full">
            <ExpandImage parentClassName="max-w-[50%]"
                         src="/images/ASRS/0.jpg"
                         alt="ASRS Start"
                         width="2522"
                         height="4000"/>
            <div className="w-[2%]" />
            <p className="text-2xl max-w-[50%]">
              
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
