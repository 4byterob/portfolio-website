import Image from "next/image";
import Link from "next/link";
import ExpImage from "@/app/components/ExpandImage";

export default function MPSStation() {
  return (
    <main className=" font-LeagueSpartan bg-black0-base w-screen h-full min-h-screen pb-24">
      <Link href="/" className=" font-extrabold text-6xl text-gray-200 rounded-full hover:bg-gray-600 transition duration-200 absolute left-4 top-4 p-1"><div className="translate-y-[5px]">⬅</div></Link>

      <div className="w-[60%] h-full mx-auto pt-32">
        <section className="">
          <h1 className="text-8xl font-semibold text-center pb-4">MPS Station</h1>
          <h2 className="text-4xl text-gray-300">Simulating Automation Lines in Live Production and Delivery of Products.</h2>
        </section>

        <section className="">
          <div className="flex flex-row pt-12">
            <div className="w-[60%]">
              <p className="text-2xl">
                The Modular Production System Station, or MPS Station, is a system built with the physical movements of motors and controlled by the powerful programmed logic of a PLC to handle fast-paced production surpassing normal human production speed and requiring minimal human interaction.
              </p>
            </div>
            <div className="w-[25%] ml-auto mr-10">
              <ExpImage className=""
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
            <p className="">Electrical Schematics & Wiring, PLC Assembly, PLC Programming, TCP/IP, Networking, HMI Design, Fast & Accurate Production Simulation</p>
          </div>
          <div className=" w-[30%]">
            <h3 className="text-4xl text-white">Timeline</h3>
            <p className="">January 9, 2024 to <br /> April 20, 2024</p>
          </div>
          <div className=" w-[30%]">
            <h3 className="text-4xl text-white">Collaborators</h3>
            <p className="">Susan Odhiambo</p>
          </div>
        </section>
        <section className="mt-24">
          <h1 className="text-5xl">Defining The Problem</h1>

          <div className="mt-6">
            <p className="text-2xl">
              A group of 20* students paired into 10* teams are tasked to develop and simulate an automated production line that receives materials, sorts, assembles, packages, and delivers finished products at the end of the line. 
            </p>

            <div className="flex justify-between pt-8 text-2xl">
              <ExpImage src="/MPS_Station/0.jpg" alt="MPS Station" height="4000" width="2252" parentClassName="" />
              <p>Each pair works on their own individual station. The moving and sensing devices in the production line are in unique configurations for each pair, requiring different approaches and a joint-group effort to ensure the production line interacts as fast and accurately as possible. </p>
            </div>
          </div>
        </section>
        <section className="mt-24">
          <h1 className="text-5xl">Where do we Start</h1>

          <div className="mt-6">
            <p className="text-2xl">
              The project starts with needing to assemble a new Allen-Bradley PLC equipped with a reliable power supply, input and output slots, and connection cables protruding out of the PLC's I/O ports* for connecting to the physical mechanisms outside.
            </p>

            <div className="flex justify-between pt-8 text-2xl">
              <ExpImage src="/images/MPS_Station/0.jpg" alt="MPS Station" height="4000" width="2252" parentClassName="w-[30%] m-auto" />
              <p className="w-[40%]">Each PLC must be assembled the same way to ensure that every data transfer happens accurately between the schematics, programming, and connection of the components. It is important for any troubleshooting that we may run into while assembling, testing, operation, and repairing.</p>
            </div>
            <div className="flex justify-between pt-8 text-2xl">
              <p className="w-[60%]">We follow an electrical wiring diagram to have an idea of how the necessary components, like the PLC, fuse, neutral & live currents, and others, should be placed around the panel. </p>
              <div className="flex flex-row w-[50%]">
                <ExpImage src="/images/MPS_Station/2.jpg" alt="MPS Station" height="950" width="734" parentClassName="w-[48%] m-auto" />
                <ExpImage src="/images/MPS_Station/2.jpg" alt="MPS Station" height="950" width="734" parentClassName="w-[48%] m-auto" />
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </main>
  );
}
