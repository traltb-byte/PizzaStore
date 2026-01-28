import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IMAGES } from '../constants';

export const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-stretch bg-background-light dark:bg-background-dark">
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${IMAGES.loginHero}")` }}></div>
                <div className="absolute bottom-12 left-12 z-20 text-white">
                    <h1 className="text-4xl font-bold tracking-tight mb-2">The Perfect Slice.</h1>
                    <p className="text-lg opacity-90">Authentic wood-fired pizza delivered to your door.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col bg-white dark:bg-background-dark relative">
                <div className="absolute top-0 right-0 p-8">
                    <p className="text-sm font-normal leading-normal text-gray-500 dark:text-gray-400">
                        Don't have an account? 
                        <button onClick={() => navigate('/signup')} className="text-primary font-semibold hover:underline ml-1">Sign Up</button>
                    </p>
                </div>
                <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 py-20">
                    <div className="max-w-[440px] w-full mx-auto">
                        <div className="mb-10">
                            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => navigate('/')}>
                                <span className="material-symbols-outlined text-primary text-3xl">local_pizza</span>
                                <span className="text-xl font-bold text-[#333] dark:text-white">PizzaHub</span>
                            </div>
                            <h2 className="text-[#333] dark:text-white tracking-tight text-[32px] font-bold leading-tight mb-2">Welcome Back</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-base">Please enter your details to sign in to your account.</p>
                        </div>
                        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate('/otp'); }}>
                            <div className="flex flex-col gap-2">
                                <label className="text-[#333] dark:text-gray-200 text-sm font-semibold leading-normal">Email Address</label>
                                <input className="w-full rounded-lg text-[#333] dark:text-white border border-[#e6e0db] dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary h-14 placeholder:text-gray-400 px-4 text-base transition-all" placeholder="name@example.com" type="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-[#333] dark:text-gray-200 text-sm font-semibold leading-normal">Password</label>
                                    <a href="#" className="text-primary text-xs font-semibold hover:underline">Forgot Password?</a>
                                </div>
                                <input className="w-full rounded-lg text-[#333] dark:text-white border border-[#e6e0db] dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary h-14 placeholder:text-gray-400 px-4 text-base transition-all" placeholder="Enter your password" type="password" />
                            </div>
                            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-colors text-base mt-4 shadow-sm">
                                Login to Account
                            </button>
                        </form>
                        <div className="relative my-10">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white dark:bg-background-dark text-gray-500 uppercase tracking-widest text-[10px] font-bold">Or continue with</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <span className="text-sm font-semibold text-[#333] dark:text-white">Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <span className="text-sm font-semibold text-[#333] dark:text-white">Facebook</span>
                            </button>
                        </div>
                        <div className="mt-12 text-center">
                            <p className="text-[11px] text-gray-400 leading-relaxed">
                                By signing in, you agree to our <a className="underline" href="#">Terms of Service</a> and <a className="underline" href="#">Privacy Policy</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Signup = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-solid border-primary/10 px-6 md:px-10 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-3xl">local_pizza</span>
                        <h2 className="text-[#181411] dark:text-white text-xl font-extrabold leading-tight tracking-tight font-display">PizzaHub</h2>
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:inline text-sm text-[#8a7560] dark:text-gray-400">Already have an account?</span>
                        <button onClick={() => navigate('/login')} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold transition-all">
                            <span>Log In</span>
                        </button>
                    </div>
                </div>
            </header>
            <main className="flex-grow flex pt-20">
                <div className="flex flex-1 w-full">
                    <div className="hidden lg:flex lg:w-1/2 relative bg-primary/5 overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url("${IMAGES.signupHero}")` }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-20">
                            <h2 className="text-white text-4xl font-black mb-4">The Secret is in the Freshness</h2>
                            <p className="text-white/90 text-lg max-w-md">Every pizza starts with high-quality flour, sun-ripened tomatoes, and fresh garden basil. Join us to experience the difference.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20 bg-white dark:bg-background-dark">
                        <div className="w-full max-w-[480px] flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-[#181411] dark:text-white text-3xl font-black leading-tight font-display">Join the Pizza Family</h1>
                                <p className="text-[#8a7560] dark:text-gray-400 text-base font-normal">Fresh ingredients and hot pizzas are just a few clicks away.</p>
                            </div>
                            <form className="flex flex-col gap-4" onSubmit={(e) => {e.preventDefault(); navigate('/otp');}}>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#181411] dark:text-white text-sm font-semibold">Full Name</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#8a7560]">person</span>
                                        <input className="w-full rounded-lg border border-[#e6e0db] dark:border-gray-700 bg-white dark:bg-gray-900 px-11 py-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all dark:text-white outline-none" placeholder="Enter your full name" type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#181411] dark:text-white text-sm font-semibold">Email Address</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#8a7560]">mail</span>
                                        <input className="w-full rounded-lg border border-[#e6e0db] dark:border-gray-700 bg-white dark:bg-gray-900 px-11 py-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all dark:text-white outline-none" placeholder="yourname@email.com" type="email" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#181411] dark:text-white text-sm font-semibold">Phone Number</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#8a7560]">call</span>
                                        <input className="w-full rounded-lg border border-[#e6e0db] dark:border-gray-700 bg-white dark:bg-gray-900 px-11 py-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all dark:text-white outline-none" placeholder="+1 (555) 000-0000" type="tel" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#181411] dark:text-white text-sm font-semibold">Password</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#8a7560]">lock</span>
                                        <input className="w-full rounded-lg border border-[#e6e0db] dark:border-gray-700 bg-white dark:bg-gray-900 px-11 py-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all dark:text-white outline-none" placeholder="Min. 8 characters" type="password" />
                                    </div>
                                </div>
                                <button className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-primary hover:bg-[#e07b1a] text-white text-base font-bold transition-all shadow-lg shadow-primary/20">
                                    <span>Create Account</span>
                                </button>
                            </form>
                            <div className="relative flex items-center py-2">
                                <div className="flex-grow border-t border-[#e6e0db] dark:border-gray-700"></div>
                                <span className="flex-shrink mx-4 text-sm text-[#8a7560] font-medium">Or sign up with</span>
                                <div className="flex-grow border-t border-[#e6e0db] dark:border-gray-700"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 rounded-lg border border-[#e6e0db] dark:border-gray-700 h-12 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                    <span className="text-sm font-bold text-[#181411] dark:text-white">Google</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 rounded-lg border border-[#e6e0db] dark:border-gray-700 h-12 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                    <span className="text-sm font-bold text-[#181411] dark:text-white">Facebook</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export const OTP = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-300">
             <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm px-6 md:px-10 py-3 sticky top-0 z-50">
                <div className="flex items-center gap-3 text-primary cursor-pointer" onClick={() => navigate('/')}>
                    <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
                        <span className="material-symbols-outlined text-primary">local_pizza</span>
                    </div>
                    <h2 className="text-[#181411] dark:text-white text-lg font-bold leading-tight tracking-tight">Slice Heaven</h2>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-100 dark:bg-gray-800 text-[#181411] dark:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </button>
                </div>
            </header>
            <main className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-[440px] bg-white dark:bg-gray-900 rounded-xl shadow-xl shadow-black/5 p-8 md:p-12">
                    <div className="flex justify-center mb-6">
                        <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-4xl">local_pizza</span>
                        </div>
                    </div>
                    <div className="text-center mb-2">
                        <h1 className="text-[#181411] dark:text-white tracking-tight text-3xl font-bold leading-tight">Verify Your Phone</h1>
                    </div>
                    <div className="text-center mb-8">
                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                            We've sent a 6-digit code to <span className="font-semibold text-gray-700 dark:text-gray-200">+1 234 567 890</span>
                        </p>
                    </div>
                    <div className="flex justify-center mb-8">
                        <fieldset className="flex gap-2 sm:gap-3">
                            {[1,2,3,4,5,6].map(i => (
                                <input key={i} className="flex h-14 w-11 sm:w-12 text-center text-xl font-bold rounded-lg border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-900 focus:border-primary focus:ring-0 text-[#181411] dark:text-white transition-all outline-none" maxLength={1} type="text" />
                            ))}
                        </fieldset>
                    </div>
                    <div className="flex justify-center mb-6">
                        <button onClick={() => navigate('/menu')} className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]">
                            <span>Verify Code</span>
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Didn't receive the code? 
                            <button className="text-primary font-bold hover:underline ml-1 focus:outline-none">Resend Code</button>
                        </p>
                    </div>
                </div>
            </main>
            <footer className="p-8 text-center">
                <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
                    Powered by Slice Heaven Security
                </p>
            </footer>
        </div>
    );
};