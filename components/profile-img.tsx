"use client"
import Image from "next/image"

interface ProfilePictureProps{
    size: number 
}

export function ProfilePicture({size}: ProfilePictureProps){
    return(
        <div className="flex-shrink-0 ">
            <Image
            /* Copy the URL from the Cloudinary image you want to use
                Add `c_fill,h_${size},w_${size}/` after upload/, before v17xxx...
            */
            src={`https://res.cloudinary.com/da5o0fitn/image/upload/c_fill,h_${size},w_${size},g_face/v1762194768/portfolio/profile-pictures/profile-picture_13.jpg`}
            alt="Photographer"
            width={size}
            height={size}
            className="rounded-full"
            />
        </div>
    )
}
   