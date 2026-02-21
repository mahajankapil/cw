
import React from 'react';

const ProfileCard: React.FC<{ name: string; title: string; }> = ({ name, title }) => (
    <div className="flex flex-col items-center">
        <div className="w-64 h-72 bg-blue-100 overflow-hidden mb-6 relative">
            <div className="absolute inset-0 bg-[#E0F2FE]"></div>
            <div className="absolute bottom-0 w-full h-1/3 bg-[#84CC16] rounded-t-[50%] scale-150 translate-y-2"></div>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full opacity-100"></div>
            <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-white rounded-full opacity-100"></div>
            <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white rounded-full opacity-100"></div>
        </div>
        <h4 className="font-display font-black text-xl text-gray-900 uppercase">{name}</h4>
        <p className="text-xs font-bold text-gray-800 uppercase tracking-widest mt-1">{title}</p>
    </div>
);

const Story: React.FC = () => {
    return (
        <section className="py-24 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="font-display text-4xl md:text-5xl font-extrabold text-center uppercase tracking-tight mb-20 text-gray-900">Our Story</h2>
                <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-32 mb-16">
                    <ProfileCard name="Dev. Kapil Mahajan" title="Founder" />
                    <ProfileCard name="Dev. Sainath Padwal" title="Co-Founder" />
                </div>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
                        We are from Pune, Maharashtra, trying to change the way we learn. We are doing software projects, app development for Android and iOS devices. We have 90K+ fanbase of coding students on Instagram.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Story;
