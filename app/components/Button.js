import Image from "next/image";
import Link from "next/link";

export default function Button({text, url, buttonClassName}) {
  return (
    <Link className=" w-full justify-center flex p-4 text-xl hover:scale-110 transition duration-300" href={url ? url : ""}>
        <button className={buttonClassName ? buttonClassName : ""}>
            <h2 className="">{text ? text : "Button"}</h2>
        </button>
    </Link>
  );
}
