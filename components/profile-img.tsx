"use client"
import Image from "next/image"

interface ProfilePictureProps{
    size: number 
}

export function ProfilePicture({size}: ProfilePictureProps){
    return(
        <div className="flex-shrink-0 ">
            <Image
            src="/profile.png"
            alt="Photographer"
            width={size}
            height={size}
            className="rounded-full"
            />
        </div>
    )
}
   