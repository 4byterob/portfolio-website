import Image from "next/image";
import ProfilePic from "../components/ProfilePic";
import Button from "../components/Button";

export default function Navbar() {
  return (
    <main className=" px-4 flex font-Montserrat bg-black0-base w-screen h-20">
      <div className=" flex">
        <Button text="Home" url="../../"/>
      </div>
      <div className="w-full"/>
      <div className=" flex">
        <Button text="PORTFOLIO" url="../pages/Portfolio"/>
        <Button text="RESUME" url="../pages/Resume"/>
        <Button text="CONTACT" url="../pages/Contact"/>
      </div>
    </main>
  );
}
