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

          <div className="mt-6 flex">
            <div className="w-full">
              <ExpandImage parentClassName="max-w-[100%]"
                          src="/images/ASRS/0.jpg"
                          alt="ASRS Start"
                          width="2522"
                          height="4000"/>
            </div>
            <div className="w-[10%]"/>
            <p className="text-2xl">
              My team was tasked by our client, Daniel Barret, to develop a functioning model to simulate an automated industry warehouse inventory system. 
              The workspace had an existing <a href="https://new.abb.com/products/3HAC020536-001/irb-140" className="underline">IRB 140 Robot</a> by  
              ABB and a steel frame fitted with racks to house the materials being stored or retrieved. A 3-axis movement tray was installed on the storage 
              frame using steel wires, frames, and motors.
            </p>
          </div>

          <div className="flex mt-10">
            <p className="text-2xl w-full">
              The machine was connected to a 14" HMI display which was designed to control the ASRS with a user-friendly interface in mind.
              It is vital to have every element be quickly identified and understood by any user, indifferent of skill level. Thus, it is ideal
              to create a visual display that is simple yet informative to the user.
            </p>
            <div className="w-[10%]"/>
            <div className="w-full">
              <ExpandImage parentClassName="max-w-[100%]"
                           src="/images/ASRS/2.jpg"
                           alt="ASRS Start"
                           width="2522"
                           height="4000"/>
              <div className="mt-2"/>
              <ExpandImage parentClassName="max-w-[100%]"
                           src="/images/ASRS/3.jpg"
                           alt="ASRS Start"
                           width="2522"
                           height="4000"/>
            </div>
          </div>
        </section>
        <section className="mt-24">
          <h1 className="text-5xl">Process</h1>

          <p className="text-2xl mt-6">
            My role in the team as Lead Programmer, as I have an extensive background in programming projects of
            different varieties as well as an excellent understanding of computer knowledge and debugging.
          </p>
          <div className="flex mt-6">
            <div className="w-full">
              <p className="text-2xl">
                My teammates and I began by identifying problems and brainstorming as many solutions as we could come up with,
                no matter how significant one may appear over the other.
              </p>
              <p className="text-2xl mt-4">
                We wanted to overhaul the existing <i>tray</i>, <i>gripper</i>, <i>storage rack</i>, <i>delivery station</i>, and <i>tray extractor</i> designs.
                The original ASRS had functioning moving parts, but only aluminum trays which could not be picked up. We were looking to implement 3D printed components
                for the tray, grippers, and tray extractors, as these could be useful methods of prototyping the designs we came up with.
              </p>
              <p className="text-2xl mt-4">
                Some of the sketched out designs needed to work in conjunction with others. For instance, the first tray design would work with the first gripper
                and storage rack designs because the tray extended out a hook to be grabbed from above. Other tray designs may have necessitated the grippers to
                pick 
              </p>
            </div>
            <div className="w-[6%]"/>
            <div className="flex max-w-[40%]">
              <ExpandImage parentClassName="max-w-[100%]"
                           src="/images/ASRS/5.jpg"
                           alt="ASRS Start"
                           width="1379"
                           height="1064"/>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
