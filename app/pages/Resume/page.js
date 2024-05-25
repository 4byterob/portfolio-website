"use client"

import Image from "next/image";
import ProfilePic from "../../components/ProfilePic";
import Button from "../../components/Button";
import BackToTopButton from "../../components/BackToTopButton";
import Navbar from "../../navbar/page"
import { useState, useEffect } from "react";

export default function Resume() {

    const size = useWindowSize()
    const scrollY = useScroll();
    const minListWidth = 1200;

    const [tabgroupActive, setTabgroupActive] = useState([true, false]);

    return (
        <main className=" font-LeagueSpartan bg-black0-base w-screen h-full">
        <Navbar id="Navbar"/>
        
        { scrollY > 300 &&
            <BackToTopButton url="#Navbar"/>
        }

        {/* Tab Group */}
        <div className="flex bg-black0-base w-full h-20 text-black text-2xl">
            <button className={tabgroupActive[0] ? "bg-white rounded-t-xl h-full w-48"
                                                 : "bg-gray-200 hover:bg-gray-50 transition duration-100 rounded-t-xl h-full w-48"} onClick={() => (setTabgroupActive([true, false]))}>
                <h2>Web</h2>
            </button>
            <button className={tabgroupActive[1] ? "bg-white rounded-t-xl h-full w-48"
                                                 : "bg-gray-200 hover:bg-gray-50 transition duration-100 rounded-t-xl h-full w-48"} onClick={() => (setTabgroupActive([false, true]))}>
                <h2>PDF</h2>
            </button>
        </div>
        {/* End of Tab Group */}

        {/* Main Resume */}
        <div className="bg-white size-full text-black text-lg px-16">
            {/* Tab ---WEB--- */}
            { tabgroupActive[0] && 
            <div className=" size-full flex flex-col">
                <h1 className="flex text-4xl justify-center mt-12">RESUME</h1>
                
                <div className="mt-8"/>
                
                <div className={size.width < minListWidth ? "flex flex-col" : "flex space-x-8"}>
                    <div className={size.width < minListWidth ? "w-full m-auto" : " w-7/12 m-auto"}>
                        {/* Experience */}
                        <div>
                            <h3 className=" text-4xl">Experience</h3>
                            <div>
                                <h4 className=" text-xl font-bold">SAIT MET Associate</h4>
                                <h5 className=" italic">Mechanical Engineering Technologist</h5>
                                <p>• Applied advanced machining techniques to design, construct, and optimize products, focusing on precision and material waste reduction.</p>
                                <p>• Successfully constructed, wired, powered, programmed, and tested a new Phoenix Contact PLC with network integration and I/O expansion within two months.</p>
                                <p>• Integrated PLC-controlled robotics and Arduinos into manufacturing processes, streamlining tasks synchronously and improving overall operational efficiency.</p>
                                <p>• Played a key role in teams to collaborate and coordinate important project specifications, including timelines, budget constraints, and technical documentation.</p>
                            </div>
                            <div>
                                <h4 className=" text-xl font-bold">META SAIT</h4>
                                <h5 className=" italic">Club Associate</h5>
                                <p>• Collaborated with team members to plan and implement engaging activities, resulting in increased participation.</p>
                                <p>• Employed effective communication skills to present and coordinate logistics for club meetings, ensuring satisfying and fulfilling events.</p>
                                <p>• Demonstrated leadership and engagement by actively participating in club decision-making processes for time and resource allocation purposes</p>
                                <p>• Participated in and supported various club functions and initiatives, including annual Saitsa events.</p>
                            </div>
                        </div>

                        {/* Projects */}
                        <div>
                            <h3 className=" text-4xl">Projects</h3>
                            <div>
                                <h4 className=" text-xl font-bold">ASRS Capstone</h4>
                                <h5 className=" italic">Phoenix Contact PLC, HMI, Electrical Schematics, Ladder Logic, CAD Modelling, Networking</h5>
                                <p>• Led a team in developing an Automated Storage and Retrieval System (ASRS) for efficient inventory management.</p>
                                <p>• Utilized Phoenix Contact PLCs and HMIs to automate material retrieval and storage processes using user feedback.</p>
                                <p>• Integrated support for asynchronous work with a separate IRB-140 Robot.</p>
                                <p>• Managed project life cycle analysis, including data gathering, documentation, and project management tasks.</p>
                                <p>• Project Client Contact: daniel.barrett@sait.ca</p>
                                <p>• Portfolio: behance.net/robertiobagiu</p>
                            </div>
                            <div>
                                <h4 className=" text-xl font-bold">Sterling Engine</h4>
                                <h5 className=" italic">Thermodynamic Analysis, Milling, Lathing, 3D CAD Design, Blueprint Development</h5>
                                <p>• Designed and manufactured a functional sterling engine with high-end efficiency at 300 RPM.</p>
                                <p>• Utilized SolidWorks to model and develop design schematics to follow as a guideline.</p>
                                <p>• Applied thermodynamic analysis to optimize engine performance by 67%.</p>
                                <p>• Followed GD&T specifications and used standard fastening components.</p>
                            </div>
                            <div>
                                <h4 className=" text-xl font-bold">GD&T Product Upgrade</h4>
                                <h5 className=" italic">GD&T Analysis, Measuring & Dimensioning, Functional Analysis, Material Science Analysis</h5>
                                <p>• Conducted a comprehensive analysis on a common machine shop tool to upgrade efficiency and ergonomic design.</p>
                                <p>• Deconstructed the tool and created detailed 3D CAD models for each component with with accurate replication.</p>
                                <p>• Performed SolidWorks simulation analysis on each component to analyze faults and maximize efficiency with smart topology.</p>
                            </div>
                        </div>
                    </div>

                    <div className={size.width < minListWidth ? "w-full" : " w-5/12"}>
                        {/* Education */}
                        <div>
                            <h3 className=" text-4xl font-medium">Education</h3>
                            <h4 className=" font-bold text-xl">SAIT</h4>
                            <h5 className=" italic">Mechanical Engineering Technologist Diploma - Design and Automation</h5>
                            <p>Relevant Coursework: Machining, Robotics, Automation, Electronics, Design & Prototyping, GD&T, CAD Modelling, Pneumatics & Hydraulics, Material Science, Engineering Statistics & Economics.</p>
                        </div>

                        {/* Technical Skills */}
                        <div>
                            <h3 className=" text-2xl">Technical Skills</h3>
                            <div>
                                <h5 className=" font-bold">Skills</h5>
                                <p>Machining, Lathing, Milling, Programming, Electrical Wiring & Schematics, Soldering, Welding, Design & Blueprint Schematics, Phoenix Contact PLC, HMI, GD&T, Material Science, 3D CAD Modelling, Product Development, Project Management, Economic & Thermodynamic Analysis, Server Systems, Transmission Control Protocol (TCP), Pneumatic & Hydraulic Installation & Schematics </p>
                            
                                <h5 className=" font-bold">Technologies</h5>
                                <p>SolidWorks, SolidWorks Simulations, Autodesk, Fusion 360, Autodesk Inventory, Studio 5000, RSLogix 5000, RSLinx, RSClassic, RobotStudio, RAPID, PLC4, PLC5, Blender, Adobe, Office, Word, Excel, Powerpoint</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            {/* End of Tab ---WEB--- */}

            {/* Tab ---PDF--- */}
            { tabgroupActive[1] && 
            <div className=" size-full flex flex-col">
                <div className="h-screen"/>
            </div>
            }
            {/* End of Tab ---PDF--- */}
        </div>
        </main>
    );
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
        // Set window width/height to state
        setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

function useScroll() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Call handler right away so state gets updated with initial window size
    handleScroll();

    // Remove event listener on cleanup
    return () => {
        window.removeEventListener("scroll", handleScroll);
    }
    }, []); // Empty array ensures that effect is only run on mount
    return scrollY;
}
