"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"

export default function ExpandImage({src, alt, width, height, parentClassName, imgClassName}) {
    const [isToggled, setIsToggled] = useState(false);

    return (
    <button onClick={() => setIsToggled(true)} className={parentClassName}>
        <Image src={src} alt={alt} width={width} height={height} className={imgClassName} />
        
        {isToggled && 
            <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70">
                <div className="h-[90%] w-[50%] bg-black m-auto translate-y-1/2">

                </div>
            </div>
        }
    </button>
  );
}
