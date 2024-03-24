import Image from "next/image";

export default function ProfilePic({width, height}) {
  return (
    <div className=" h-2 flex transition duration-1000 hover:h-64">
      <Image className="rounded-full" alt="Profile Picture" src="/images/ProfilePic.jpeg" width={width ? width : 300} height={height ? height : 300} style={{objectFit: "cover"}} />
    </div>
  );
}
