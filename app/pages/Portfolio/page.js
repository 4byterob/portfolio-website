import Image from "next/image";
import ProfilePic from "../../components/ProfilePic";
import Button from "../../components/Button";

export default function Portfolio() {
  return (
    <main className=" font-Montserrat bg-black0-base w-screen h-screen">
      <div className=" h-full items-center space-x-6 flex justify-center">
        <ProfilePic />
        <div className="">
          <h1 className=" text-6xl">Robert Iobagiu</h1>
          <h2 className=" text-xl">Automation Engineer | Software Developer</h2>
          <h3 className=" mt-3">Hi, I'm Robert! A recent graduate with a passion for mechanical and software engineering</h3>
        
          <div className=" mt-6 pt-6 text-4xl flex w-full m-auto justify-evenly">
            <Button />
            <p>|</p>
            <Button />
            <p>|</p>
            <Button />
          </div>
        </div>
      </div>
    </main>
  );
}
