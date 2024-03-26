import Link from "next/link"

export default function BackToTopButton({url}) {
  return (
    <div className=" fixed bottom-0 p-16 right-0 z-40">
        <Link href={url ? url : ""}>
            <button className=" text-black0-base font-extrabold align-middle w-14 h-14 text-6xl rounded-full shadow">^</button>
        </Link>
    </div>
  );
}