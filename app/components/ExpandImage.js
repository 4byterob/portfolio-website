"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react"

export default function ExpandImage({src, alt, width, height, parentClassName, imgClassName}) {
    const [isToggled, setIsToggled] = useState(0);

    const flipToggle = () => {
        // The reason we increment is because checking if the state is 'false' does not re-render
        //  the component. Thus, this is a more viable solution for now.
        // (Note: I have tried many attempts and searched far and wide, I cannot resolve the issue)
        setIsToggled(isToggled + 1);
    };

    return (
    <div onClick={() => flipToggle()} className={parentClassName}>
        <Image src={src} alt={alt} width={width} height={height} className={imgClassName + " hover:cursor-pointer"} />
        
        {(isToggled % 2 == 1) &&
            <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70">
                <div className="h-[90%] w-[50%] bg-black m-auto mt-[2.5%] relative">
                    <Image src={src}
                           alt={alt}
                           width={width}
                           height={height}
                           className=" w-screen h-screen relative object-contain"
                           objectFit="fit"
                    />
                </div>
                <button onClick={() => flipToggle()} className="absolute top-0 right-0 mr-6 mt-6 text-4xl z-50 bg-white bg-opacity-30 py-2 px-4 rounded-full hover:scale-110 transition-all duration-200 hover:bg-opacity-60">X</button>
            </div>
        }
    </div>
  );
}
