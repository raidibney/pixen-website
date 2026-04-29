import Image from "next/image";
import { Button, Chip, Card, Separator } from "@heroui/react";
import { IoIosHeart, IoMdArrowRoundBack } from "react-icons/io";
import { IoDownload, IoCopyOutline } from "react-icons/io5";
import Link from "next/link";

const PhotoDetailspage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://pixen-website.vercel.app/data.json");
    const photos = await res.json();
    const photo = photos.find(p => p.id == Number(id));

    if (!photo) return <div className="h-screen flex items-center justify-center">Photo not found!</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
            {/* Back Button */}
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-all">
                <IoMdArrowRoundBack /> <span>Back to Gallery</span>
            </Link>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Left: Image Preview */}
                <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                        src={photo.imageUrl}
                        fill
                        priority
                        alt={photo.title}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Right: Info Section */}
                <div className="flex flex-col gap-6">
                    <div>
                        <Chip color="secondary" variant="flat" className="mb-3 uppercase tracking-wider text-xs font-bold">
                            {photo.category}
                        </Chip>
                        <h1 className="text-4xl font-extrabold text-gray-900">{photo.title}</h1>
                        <p className="text-gray-500 mt-2">Generated on {new Date(photo.createdAt).toLocaleDateString()}</p>
                    </div>

                    {/* Stats Row */}
                    <div className="flex gap-8 py-4">
                        <div className="flex flex-col">
                            <span className="text-gray-400 text-sm">Likes</span>
                            <span className="flex items-center gap-1 text-xl font-bold"><IoIosHeart className="text-red-500"/> {photo.likes}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-400 text-sm">Downloads</span>
                            <span className="flex items-center gap-1 text-xl font-bold"><IoDownload className="text-blue-500"/> {photo.downloads}</span>
                        </div>
                    </div>

                    <Separator></Separator>

                    {/* AI Prompt Box */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative">
                        <h3 className="text-sm font-bold text-gray-400 uppercase mb-3">AI Prompt</h3>
                        <p className="text-gray-700 italic leading-relaxed">"{photo.prompt}"</p>
                        <Button isIconOnly size="sm" variant="light" className="absolute top-4 right-4">
                            <IoCopyOutline />
                        </Button>
                    </div>

                    {/* Technical Specs */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-100 rounded-xl text-center">
                            <p className="text-xs text-gray-500 uppercase">Model</p>
                            <p className="font-bold">{photo.model}</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-xl text-center">
                            <p className="text-xs text-gray-500 uppercase">Resolution</p>
                            <p className="font-bold">{photo.resolution}</p>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {photo.tags?.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-4">
                        <Button color="primary" size="lg" className="flex-1 font-bold h-14 rounded-2xl shadow-lg shadow-blue-200">
                            Download HD
                        </Button>
                        <Button isIconOnly variant="bordered" size="lg" className="h-14 w-14 rounded-2xl border-2">
                            <IoIosHeart size={24} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoDetailspage;