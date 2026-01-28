import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants';

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Hide header on auth pages for immersive feel
    if (['/login', '/signup', '/otp'].includes(location.pathname)) {
        return null;
    }

    const isActive = (path: string) => location.pathname === path ? 'text-primary' : 'text-[#181411] dark:text-white hover:text-primary';

    return (
        <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f5f2f0] dark:border-[#3d2e21] bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 md:px-10 py-3">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between whitespace-nowrap">
                <div className="flex items-center gap-8">
                    <Link to="/" className="flex items-center gap-4 text-primary">
                        <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
                            <span className="material-symbols-outlined text-primary">local_pizza</span>
                        </div>
                        <h2 className="text-[#181411] dark:text-white text-xl font-extrabold leading-tight tracking-tight">PizzaHub</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-9">
                        <Link to="/menu" className={`text-sm font-semibold leading-normal transition-colors ${isActive('/menu')}`}>Menu</Link>
                        <a href="#" className="text-[#8a7560] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors">Offers</a>
                        <Link to="/contact" className={`text-sm font-medium leading-normal transition-colors ${isActive('/contact')}`}>Contact</Link>
                        <Link to="/login" className={`text-sm font-medium leading-normal transition-colors ${isActive('/login')}`}>Sign In</Link>
                    </nav>
                </div>
                <div className="flex flex-1 justify-end gap-4 md:gap-6 items-center">
                    <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full border border-transparent focus-within:border-primary/50 transition-all">
                            <div className="text-[#8a7560] flex border-none bg-[#f5f2f0] dark:bg-[#3d2e21] items-center justify-center pl-4 rounded-l-lg">
                                <span className="material-symbols-outlined text-xl">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 border-none bg-[#f5f2f0] dark:bg-[#3d2e21] text-[#181411] dark:text-white focus:outline-0 focus:ring-0 h-full placeholder:text-[#8a7560] px-4 rounded-r-lg pl-2 text-sm" placeholder="Search pizza..." />
                        </div>
                    </label>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#f5f2f0] dark:bg-[#3d2e21] text-[#181411] dark:text-white hover:bg-primary/20 transition-colors relative">
                            <span className="material-symbols-outlined text-xl">shopping_cart</span>
                            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
                        </button>
                        <button onClick={() => navigate('/login')} className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#f5f2f0] dark:bg-[#3d2e21] text-[#181411] dark:text-white hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-xl">person</span>
                        </button>
                    </div>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20 cursor-pointer" style={{ backgroundImage: `url("${IMAGES.userAvatar}")` }}></div>
                </div>
            </div>
        </header>
    );
};

export const Footer = () => {
    const location = useLocation();
     // Hide footer on auth pages
     if (['/login', '/signup', '/otp'].includes(location.pathname)) {
        return null;
    }
    return (
        <footer className="mt-auto pt-10 border-t border-[#f5f2f0] dark:border-[#3d2e21] text-center bg-white dark:bg-background-dark pb-10">
            <div className="max-w-[1440px] mx-auto px-6">
                <p className="text-[#8a7560] dark:text-gray-400 text-sm font-medium mb-4">© 2024 PizzaHub Inc. All rights reserved.</p>
                <div className="flex justify-center gap-6">
                    <a href="#" className="text-[#8a7560] dark:text-gray-400 hover:text-primary transition-colors text-xs font-semibold uppercase tracking-wider">Privacy Policy</a>
                    <a href="#" className="text-[#8a7560] dark:text-gray-400 hover:text-primary transition-colors text-xs font-semibold uppercase tracking-wider">Terms of Service</a>
                    <a href="#" className="text-[#8a7560] dark:text-gray-400 hover:text-primary transition-colors text-xs font-semibold uppercase tracking-wider">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export const MobileCart = () => {
     const location = useLocation();
     if (['/login', '/signup', '/otp'].includes(location.pathname)) {
        return null;
    }
    return (
        <div className="fixed bottom-6 right-6 md:hidden z-50">
            <button className="bg-primary text-white size-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-3xl">shopping_cart</span>
                <span className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-1.5 py-0.5 rounded-full border-2 border-primary">3</span>
            </button>
        </div>
    );
};