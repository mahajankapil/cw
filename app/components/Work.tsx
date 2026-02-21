
import React, { useEffect, useState } from 'react';

type ReelEntry = string | { src: string; title?: string };

const fallbackImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBNcHUkSyhd9X7LNaQ38zZ2aBB7kMu4cJ6WkLkgv5hC0Xs2bHVat6HZ5cyoEoSlvJRopgkSxS8sq-qEDyXWnVcwjcmOl5vGVOXFJQl9EOdZ4XqWf6rRl9E8Kx9g67Pb7fhePrxLPARXUuN2q3qR4TjyMosv0ZV-KBfIJEoFkJ1V-drogmTFwNzviqAb9RGWS746l5iVFSna2gIjyuBbOXYgwi6F2nbUfClqxLdx7wSyJ1a9yrm2hzCfNETL4wUUy_D6jNzj1-ICQcp2",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBoFL_JlghRYKGHZGorWKPBBCXP9UtCIr50iwvD1eXYqM4pXk0P8AECJJfLqjyC8_8wSnNzpCL3T5boIVTpK34E2QFwz6lwIrH6iyF___aSbE0uzlyRfuFc7Kc9rd2EsMjilO419pw-iYr2RsJz_AaVtAU0A00bruFzzSV7kR7StsoCU0lupT1SoBl37XqQDROA5TDw4vdU-mjs1b_8ZvXPIfQFfRX3tOPUK7xcI0eNSw6MFOEC8vpjDB0SN66DU5MJwkO6mko9hUJE",
];

const Work: React.FC = () => {
    const [reels, setReels] = useState<ReelEntry[] | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let mounted = true;
        fetch('/reels/reels.json', { cache: 'no-store' })
            .then(res => res.json())
            .then((list: ReelEntry[]) => {
                if (!mounted) return;
                if (!Array.isArray(list) || list.length === 0) {
                    setReels([]);
                    return;
                }
                const normalized = list.map(item => typeof item === 'string' ? item : item.src);
                setReels(normalized as string[]);
            })
            .catch(() => {
                if (mounted) setReels([]);
            });
        return () => { mounted = false };
    }, []);

    const handlePrev = () => {
        const totalReels = reels && reels.length > 0 ? reels.length : fallbackImages.length;
        setCurrentIndex((prev) => (prev === 0 ? totalReels - 1 : prev - 1));
    };

    const handleNext = () => {
        const totalReels = reels && reels.length > 0 ? reels.length : fallbackImages.length;
        setCurrentIndex((prev) => (prev === totalReels - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-20 bg-white" id="work">
            <div className="max-w-7xl mx-auto px-4 mb-12">
                <h2 className="font-display text-4xl md:text-5xl font-extrabold text-center uppercase tracking-tight text-gray-900">Our Work</h2>
            </div>
            
            {/* Mobile: Single reel with arrows */}
            <div className="md:hidden relative flex items-center justify-center px-4">
                <button 
                    onClick={handlePrev}
                    className="absolute left-2 z-10 bg-black/70 hover:bg-black/90 rounded-full p-2 transition-colors"
                    aria-label="Previous reel"
                >
                    <span className="material-icons text-white text-2xl">chevron_left</span>
                </button>

                <div className="w-[280px] h-[500px] bg-gray-200 rounded-lg overflow-hidden relative">
                {reels && reels.length > 0 ? (
                    <>
                        <video 
                            key={currentIndex}
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={`/reels/${reels[currentIndex]}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-4 right-4 bg-black/60 rounded-full p-1.5">
                            <span className="material-icons text-white text-sm">volume_off</span>
                        </div>
                        <div className="absolute top-4 right-4 bg-black/60 rounded-full px-3 py-1">
                            <span className="text-white text-sm font-bold">{currentIndex + 1}/{reels.length}</span>
                        </div>
                    </>
                ) : (
                    <>
                        <img alt={`Work thumbnail ${currentIndex + 1}`} className="w-full h-full object-cover" src={fallbackImages[currentIndex]} />
                        <div className="absolute bottom-4 right-4 bg-black/60 rounded-full p-1.5">
                            <span className="material-icons text-white text-sm">volume_off</span>
                        </div>
                        <div className="absolute top-4 right-4 bg-black/60 rounded-full px-3 py-1">
                            <span className="text-white text-sm font-bold">{currentIndex + 1}/{fallbackImages.length}</span>
                        </div>
                    </>
                )}
                </div>

                <button 
                    onClick={handleNext}
                    className="absolute right-2 z-10 bg-black/70 hover:bg-black/90 rounded-full p-2 transition-colors"
                    aria-label="Next reel"
                >
                    <span className="material-icons text-white text-2xl">chevron_right</span>
                </button>
            </div>

            {/* Desktop: All reels in a row */}
            <div className="hidden md:block px-4">
                <div className="flex justify-center items-center gap-3 md:gap-4">
                {reels && reels.length > 0 ? (
                    reels.map((r, i) => (
                        <div key={i} className="w-[220px] md:w-[240px] h-[400px] md:h-[440px] bg-gray-200 rounded-lg overflow-hidden relative group">
                            <video 
                                autoPlay 
                                muted 
                                loop 
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src={`/reels/${r}`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute bottom-4 right-4 bg-black/60 rounded-full p-1.5">
                                <span className="material-icons text-white text-sm">volume_off</span>
                            </div>
                        </div>
                    ))
                ) : (
                    fallbackImages.map((src, index) => (
                        <div key={index} className="w-[220px] md:w-[240px] h-[400px] md:h-[440px] bg-gray-200 rounded-lg overflow-hidden relative group">
                            <img alt={`Work thumbnail ${index + 1}`} className="w-full h-full object-cover" src={src} />
                            <div className="absolute bottom-4 right-4 bg-black/60 rounded-full p-1.5"><span className="material-icons text-white text-sm">volume_off</span></div>
                        </div>
                    ))
                )}
                </div>
            </div>
        </section>
    );
};

export default Work;
