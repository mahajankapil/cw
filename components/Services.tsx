
import React from 'react';

const services = [
    { title: "Website Development", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuACz76dhmH5FOl_ITnMoHUD7vW6O5X2m5ruHCnx2HsSOcIwOFE85B6bpW6ZeAs0-VBW0rUe2cdPeXcwYTdzrfAuYjaoHjliAX6Ui_5BKxAipCmQzCTIL4EbtkWp8fXffbEYRVGEDWPawp7ghfKPppxW5O8VIoV377VA9yw4Z5cCAJUOoyck46RXR45HP-qKyvKWf07MU6v7M6Uytea_aEe-VdNifQGWHJbstJSJnm3bvCyV1sNTWal1Bk9xpCnoaN8a0Mxl-FP3Q-MF" },
    { title: "Android App", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS0fe0uTy1_YbCCFiCWzFueUL6SmlVuGTCmT_B32O4w9V4EyHHnRfxvuKIrq6TzLgMWGy7yE130kCH0LmBeWk2i4LQRa3iFyi4YgVnoeqbl3HfjkSbKEBbQqcUxLvm3hgIQyiEiicma-kLsQFS_IZyRmDT49_SY1Yv936C7MwDxE6fcVaR2DcaOmt8UqU8yVphgIj_esmxVd4iMCwhitRsa2sGmbBIGX0zH744PwZHceRHUQ8_hFND-umtE890wpk6ZQap82ZyXPKM" },
    { title: "iOS App", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4N9fmuypv7VCAsrEagzdxV_uDvaWxhGj4LzchMYBUReL-hI7fzwQYktsQMR5eAYoHa4YUaL0ZuCFBC7y5C0Lgm6Qwu7BurWA-itXyGVIHSs-Nx2RTVB6etnv7c8ixlGmg-y4htIxWNhgfRE2W77hMNpLqnXwVbs5jjnTcqFQRylOeVHaGN36U0mwaPBw7NnBqFy2KEaRXghuQAavKIkcUGIMV_KJxRyKltmbfa_odGcwQs-61udnq2IjRqpZarJ6wf9WHIZFpbcbS" },
    { title: "Flarelax Hosting", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0FzuDnBAUnD3J_IQ0hhtLCBFyeI15-luSZl0NdgWnjtUpkGZT9-nCU4p_GVfkg_8WfFGCXbsgVyuJVy6aLL2UaJxWMrZ5_t-UYreDaNiGiHv0Pn_sywyq0pH1iekMXML2spYJTaJxMph0CTz5j-ZPYHjmuk9Qet48YPZ3uruW1wi48gCu3j0CBCMhk1jDofNuY5W2xSsClsiR6Q7AbzCU0oIjHpHw5bOoVm8TW2JNsFAXE3W9n0OquR8xNT7cy4FxeFxXI0Qi6HrB" },
    { title: "Final Year Projects", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCREsi79HLCj7YhpobmGSnusovE4NoTZM-cjXPINlRbBHloD99290fGPSAMdJlWnqLnSAW6uJ9WmV40b4cadIsYZzjMdl2wq0N9SYjAIjucSxBd6jIgpg6WX-mYe3jUxUkDqzx7rNx3frkoaZgz4q2owok4diaZ9F38np5rDlgOQfLFLROgtXMkLtfXiMQH6ITduF_y9Mux6meiEDD33O9UDwW7hUhvlkk9Jw-9l0dNL31pOvv8lpNEZYYl1KmjX4pAfYroriW-zmE2" },
    { title: "Telegram Bot Development", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsdZioxMVsJoRIFnftja20yiSZwM5kM1OqZ2Y91Z52Uz899YXN3wCV9PUwBCvTPX448ZpIFSc6I13VDnXC5OdQ1X6-UH68g3UynE8Et3AwefmuaxgJsA9RMIhMzknpwQPiqod_tHDWsLthRt37iFZVst6GOK3qVrP90hYdaJIBCkkgcZF4a5ZesKOUaLsneIDMzsYcNJizOz7WWFnMqHFzpxM_bScgJZ3Z36_GFmPOJti4Wj5h1l-fu0f_VT4SWaljrtuGEP5-AYq2" },
    { title: "UI/UX Design", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY9Sm8Qe6izRl_j5bUoEY1TIy708fbtS-KZKiyHC5HryG9_y4qjAVPfpTDnW2AL84sQHCUxf3KnZ1HoDC8cByYYCe4GFa3KBM_cK2PmKX67ahAB5sXVa6PZ7HJJG89JMAJICJw74WIlmbLaJOp3PjYHySXKZVb1MGCnN95uwTacgiuKhP27tb3n4b5Ek0-QBOeJWMgMxincqruZq6NZBa8qj9snfLHq3mWq43cPssUO2cWgXt6kn_oGMm928g1h1cnUVFZ4LuXT830" },
    { title: "AI Chatbot / Automation", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc1CN8-dYf0hgVdo73W-muYvvo0kFSEqFKmjTIWQFJzEn0ZqOdKOqmIN-HA5u8Sv-DJUBQyd2ptmdcxX3qmW8HVJ-NS_rLSW9_AX363XMUhbDCldC0O-iVQ9Llf_IhwE9mMQTEixMOZHteuLTyNWinR3VQ-_ytZwfIBgCVwk_hO8hE8ks-wJ7IJ9vN70Gd9L7tAetVOSgsw0eSTWKWIByE20OQIxR8iGXwgmKaE25hJwaINf3JM-T2VFj4uXI6joJqGd7JAM3pzcZ4" },
    { title: "collaboration & Promo", subtitle: "90K+ FOLLOWERS", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAamm-sxgBw09fy-lnSF3y9EJhQOrqaB4f8ePWD8iTB0lwmv2Hhxxp661OB0DtG4K66g7XGW8g6CsU9UbIFUgaGFcwOaJIXE8NEZpKC1OE_UJ68_9nxmaG2qQNWVHcJBSNuTyvvz_Yu6nGB7ZNwsMedzRdG_h6ij0Lm-KLyFMIJvYd7GHuPZvBt1pMmPjs6PnDzG7yH60cDio7W_5lJWhCHHkYWQCgj4MlkA9RgzBMnQXy43yfzUk_tsxEHqnYkya9YsxG4kwHutMZj" },
    { title: "Deployments & Maintainance", subtitle: "(DevOps)", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnKGS_GZi02vLtSyTN2G7f4a_msLMl8ijjiGGz__9iUkQ1ktDsPmIXbHongwQhDUlsEY2rXN-k2UF-B-pNwDD7f4DkkdU4N9m_xfJk-MctqftDHqhp6-nG-q3LwJd_pmcuFcXnqM-Hf0t3wwr7AYCB-5VZaZSvBU0jEtzVqm1SHDCk43LqH5C7dfYegBRQ85dNvk1ttS_ZjsiXNDpl3mRR3utBcrZFVNOXYQbmZt9IsDhfDYQdhBLy2NCnWFfrrcyx-D14g0RVE7dO" }
];

const ServiceCard: React.FC<{ title: string; icon: string; subtitle?: string; }> = ({ title, icon, subtitle }) => {
    const isMultiLine = title.includes('Promo') || title.includes('Maintainance');
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square bg-gray-200 rounded-2xl p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 group">
                <img alt={title} className="w-full h-full object-contain group-hover:scale-110 transition-transform" src={icon} />
            </div>
            {isMultiLine ? (
                <p className="mt-4 font-medium text-sm text-center text-gray-800 leading-tight">
                    {title}
                    {subtitle && <br/>}
                    {subtitle && <span className="font-black text-gray-900 text-xs">{subtitle}</span>}
                </p>
            ) : (
                <p className="mt-4 font-medium text-base text-center text-gray-800">{title}</p>
            )}
        </div>
    )
};

const Services: React.FC = () => {
    return (
        <section className="py-20 bg-gray-100" id="services">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="font-display text-4xl md:text-5xl font-extrabold text-center mb-16 uppercase tracking-tight text-gray-900">Our Services</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
                    {services.map((service, index) => (
                        <ServiceCard key={index} title={service.title} icon={service.icon} subtitle={service.subtitle} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
