
import React from 'react';

const stats = [
    { value: "50+", label: "Deployed Projects" },
    { value: "90K+", label: "Instagram Followers" },
    { value: "15+", label: "Locations" },
    { value: "4.2/5", label: "Trustpilot Rating" },
];

const Stats: React.FC = () => {
    return (
        <section className="bg-primary py-16 md:py-20 border-y-4 border-white">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                    <div key={index}>
                        <h3 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900">{stat.value}</h3>
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-3 text-gray-800">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
