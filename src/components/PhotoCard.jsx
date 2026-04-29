import { Button, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { IoIosHeart } from "react-icons/io";
import { IoDownload } from "react-icons/io5";
import Link from "next/link";

const PhotoCard = ({ photo }) => {
  return (
    <div className="border rounded-2xl px-3 py-4 shadow-sm hover:shadow-md transition-shadow">
      {photo?.imageUrl ? (
        <>
          <div className="flex justify-center relative w-full aspect-square">
            <Image
              src={photo.imageUrl}
               fill
              alt={photo.title || "Photo"}
              className="rounded-lg object-cover"
            />
            <Chip size="sm" className="absolute right-2 top-2">{photo.category}</Chip>
          </div>
          
          {/* Dynamic Title added here */}
          <h2 className="mt-4 text-lg font-semibold text-gray-800 text-center">
            {photo.title || "Untitled Image"}
          </h2>
          
        
         <div className="flex gap-10">
             <div className="flex items-center">
               <IoIosHeart />
                <p className=" font-bold"> {photo.likes}</p>
          </div>
              <Separator orientation="vertical"></Separator>
         <div className="flex items-center">
            <IoDownload />
           <p className=" font-bold">{photo.downloads}</p>
         </div>
         </div>
     
        </>
      ) : (
        <div className="flex items-center justify-center h-[250px] bg-gray-100 rounded-lg">
          <p className="text-gray-400 italic">Loading image...</p>
        </div>
      )}
    <Link href={`/all-photos/${photo.id}`}>
  <Button variant="outline" className="w-full mt-5 border-2">view</Button>
</Link>
     
    </div>
  );
};

export default PhotoCard;