import React from 'react';
import { IMAGES } from '../constants';

const Contact = () => {
    return (
        <main className="bg-background-light dark:bg-background-dark min-h-screen">
            <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#181411] dark:text-white mb-4">Get in Touch</h1>
                            <p className="text-lg text-[#8a7560] dark:text-gray-400">Have a question about our crust or looking to book a party? We'd love to hear from you.</p>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-[#181411] dark:text-white">Name</label>
                                    <input className="w-full bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 rounded-xl focus:ring-primary focus:border-primary px-4 py-3 outline-none dark:text-white" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-[#181411] dark:text-white">Email</label>
                                    <input className="w-full bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 rounded-xl focus:ring-primary focus:border-primary px-4 py-3 outline-none dark:text-white" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-[#181411] dark:text-white">Subject</label>
                                <input className="w-full bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 rounded-xl focus:ring-primary focus:border-primary px-4 py-3 outline-none dark:text-white" placeholder="What's on your mind?" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-[#181411] dark:text-white">Message</label>
                                <textarea className="w-full bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 rounded-xl focus:ring-primary focus:border-primary px-4 py-3 outline-none dark:text-white" placeholder="Tell us more..." rows={5}></textarea>
                            </div>
                            <button className="w-full md:w-auto bg-primary hover:bg-[#e07b1a] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                                Send Message
                                <span className="material-symbols-outlined text-sm">send</span>
                            </button>
                        </form>
                    </div>
                    <div className="relative h-[600px] w-full">
                        <div className="w-full h-full bg-cover bg-center rounded-3xl shadow-2xl border-8 border-white dark:border-surface-dark" style={{ backgroundImage: `url("${IMAGES.contact}")` }}></div>
                         {/* Decorative Map Card Overlay (Visual representation) */}
                         <div className="absolute -bottom-10 -left-10 w-2/3 h-64 bg-white dark:bg-surface-dark rounded-3xl shadow-xl p-6 hidden xl:flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-800">
                            <div className="text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-2">location_on</span>
                                <h3 className="font-bold text-[#181411] dark:text-white">Main Flagship</h3>
                                <p className="text-[#8a7560] text-sm">123 Crust Avenue, Dough Town</p>
                            </div>
                         </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;