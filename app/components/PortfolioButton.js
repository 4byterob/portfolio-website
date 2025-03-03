import Image from "next/image";
import Link from "next/link";

export default function PortfolioButton({src, url, width, height, alt, header, description, imgClassName}) {
  return (
    <Link className=" w-fit justify-center flex flex-col p-12 text-xl hover:scale-105 transition duration-200 bg-[#111111] rounded-xl drop-shadow-xl shadow-xl" href={url ? url : ""}>
        <div className="w-[300px] h-[300px] relative overflow-clip">
          <Image className={imgClassName ? imgClassName : ""}
              src={src ? src : "/images/Placeholder.png"}
              width={width ? width : 200}
              height={height ? height : 200}
              alt={alt ? alt : "Portfolio Picture"}
              objectFit={"cover"}/>
        </div>
        <div className=" mx-auto mt-3 flex flex-col text-center max-w-[200px]">
            <h2 className="font-semibold text-3xl">{header ? header : "Header"}</h2>
            <p className="text-lg">{description ? description : "Description"}</p>
        </div>

        <div className="h-full"/>
    </Link>
  );
}
