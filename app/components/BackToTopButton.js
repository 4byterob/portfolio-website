import Link from "next/link"

export default function BackToTopButton({url}) {
  return (
    <div className=" fixed bottom-0 p-16 right-0 z-40">
        <Link href={url ? url : ""}>
            <div className=" text-black0-base font-extrabold align-middle w-14 h-14 text-5xl text-center rounded-full shadow">▲</div>
        </Link>
    </div>
  );
}