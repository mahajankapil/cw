
import React from 'react';

const ContactInfoItem: React.FC<{ icon: string; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <span className="material-icons text-blue-500 text-lg">{icon}</span>
        </div>
        <div>
            <h4 className="font-display font-medium text-2xl text-gray-800">{title}:</h4>
            {children}
        </div>
    </div>
);

const Contact: React.FC = () => {
    return (
        <section className="py-24 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="font-display text-4xl md:text-5xl font-extrabold text-center uppercase tracking-tight mb-8 text-gray-900">Contact Us</h2>
                <p className="max-w-4xl mx-auto text-center text-gray-600 mb-16 text-sm leading-relaxed">
                    If you have any questions or queries about me and my work, Get in touch with me with any issues regarding my services. Please feel free to contact me. You can use the form below or via any other social media. or at least send me an email. I will definitely reach out to you.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-10 pl-4 md:pl-12">
                        <ContactInfoItem icon="location_on" title="Location">
                            <p className="text-gray-500 mt-1 text-sm">Pune, Maharashtra</p>
                        </ContactInfoItem>
                        <ContactInfoItem icon="email" title="Email">
                            <a className="text-blue-500 hover:underline mt-1 block text-sm" href="mailto:kapilmahajan3003@gmail.com">kapilmahajan3003@gmail.com</a>
                        </ContactInfoItem>
                        <ContactInfoItem icon="phone" title="Call">
                            <a className="text-blue-500 hover:underline mt-1 block text-sm" href="tel:+918788177926">+91 8788177926</a>
                        </ContactInfoItem>
                        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md h-64 mt-8">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.55493349366!2d73.69814937413567!3d18.52456502525544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1738191234567!5m2!1sen!2sin"
                                width="100%" 
                                height="100%" 
                                style={{border: 0}}
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Pune Location Map"
                            ></iframe>
                        </div>
                    </div>
                    <div className="bg-white p-2">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-base font-medium text-gray-600 mb-2">Your Name:</label>
                                <input className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-1 focus:ring-accent-green focus:border-accent-green transition-all outline-none" type="text" />
                            </div>
                            <div>
                                <label className="block text-base font-medium text-gray-600 mb-2">Your Email:</label>
                                <input className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-1 focus:ring-accent-green focus:border-accent-green transition-all outline-none" type="email" />
                            </div>
                            <div>
                                <label className="block text-base font-medium text-gray-600 mb-2">Message:</label>
                                <textarea className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-1 focus:ring-accent-green focus:border-accent-green transition-all outline-none resize-none h-40"></textarea>
                            </div>
                            <div className="flex justify-center pt-4">
                                <button className="bg-accent-green hover:bg-green-500 text-white font-bold py-3 px-8 rounded shadow-md hover:shadow-lg transition-all" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
