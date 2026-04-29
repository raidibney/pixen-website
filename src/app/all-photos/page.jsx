import PhotoCard from "@/components/PhotoCard";


const Allphotospage = async () => {
    const res = await fetch("https://pixen-website.vercel.app/data.json");
    const photos = await res.json();
    return (
        <div>
            <p className="font-bold">All photos</p>
            <div className="grid grid-cols-4">
                {photos.map (photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
            </div>
        </div>
    );
};

export default Allphotospage;