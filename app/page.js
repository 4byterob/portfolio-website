import Image from "next/image";
import ProfilePic from "./components/ProfilePic";

export default function Home() {
  return (
    <main className=" font-Montserrat bg-black0-base w-screen h-screen">
      <div className=" h-full items-center flex justify-center">
        <ProfilePic />
        <h1 className=" text-6xl">Robert Iobagiu</h1>
      </div>
    </main>
  );
}
