export default function GalleryContent({workshops = []}) {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {workshops.map((workshop, index) => (
                <div key={index} className="relative aspect-video w-full overflow-hidden rounded-sm">
                    <img
                        src={workshop.image}
                        alt={workshop.alt || workshop.title}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex items-center justify-center px-4">
                        <h3 className="text-center text-xl font-medium leading-tight text-white sm:text-2xl">
                            {workshop.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
}