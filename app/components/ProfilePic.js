import Image from "next/image";

export default function ProfilePic({width, height}) {
  return (
    <div className=" size-fit flex">
      <Image className=" shadow-2xl drop-shadow-xl rounded-full" alt="Profile Picture" src="/images/ProfilePic1.jpg" width={width ? width : 300} height={height ? height : 300} style={{objectFit: "cover"}} />
    </div>
  );
}
