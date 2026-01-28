import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES, PIZZAS } from '../constants';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark">
            <div className="max-w-[1200px] mx-auto w-full px-6">
                <div className="@container">
                    <div className="flex flex-col gap-10 py-12 lg:flex-row lg:items-center">
                        <div className="flex flex-col gap-8 flex-1 lg:justify-center">
                            <div className="flex flex-col gap-4 text-left">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">Authentic Italian</span>
                                <h1 className="text-[#181411] dark:text-white text-5xl font-extrabold leading-tight tracking-[-0.033em] xl:text-7xl">
                                    The Art of the <span className="text-primary">Perfect Crust</span>
                                </h1>
                                <p className="text-[#181411]/70 dark:text-white/70 text-lg font-normal leading-relaxed max-w-[500px]">
                                    Experience the authentic taste of hand-stretched dough and premium Italian ingredients delivered to your doorstep.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => navigate('/menu')} className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                                    <span className="truncate">Order Now</span>
                                </button>
                                <button onClick={() => navigate('/menu')} className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 border-2 border-primary/20 bg-transparent text-[#181411] dark:text-white text-base font-bold hover:bg-primary/5 transition-all">
                                    <span className="truncate">View Menu</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex-1">
                            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-3xl shadow-2xl" style={{ backgroundImage: `url("${IMAGES.homeHero}")` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto w-full px-6 pt-16">
                <div className="flex justify-between items-end border-b border-primary/10 pb-6">
                    <div>
                        <h2 className="text-[#181411] dark:text-white text-3xl font-extrabold leading-tight tracking-[-0.015em]">Chef's Specials</h2>
                        <p className="text-[#181411]/60 dark:text-white/60 mt-2">Hand-picked flavors from our kitchen to yours</p>
                    </div>
                    <button onClick={() => navigate('/menu')} className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                        View Full Menu <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto w-full px-6 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PIZZAS.slice(0, 3).map((pizza, i) => (
                        <div key={i} onClick={() => navigate(`/product/${pizza.id}`)} className="group flex flex-col gap-4 pb-6 bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-primary/5 dark:border-white/5 transition-all hover:shadow-xl cursor-pointer">
                            <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${pizza.image}")` }}></div>
                            <div className="px-6 py-2 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <p className="text-[#181411] dark:text-white text-xl font-bold truncate">{pizza.name}</p>
                                    <p className="text-primary text-lg font-extrabold">${pizza.price.toFixed(2)}</p>
                                </div>
                                <p className="text-[#181411]/60 dark:text-white/60 text-sm leading-normal line-clamp-2">{pizza.description}</p>
                                <button className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg h-11 bg-primary/10 text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all gap-2">
                                    <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto w-full px-6 py-20">
                <div className="bg-primary/10 dark:bg-primary/20 rounded-[2rem] overflow-hidden">
                    <div className="flex flex-col items-center gap-8 px-6 py-16 md:px-10 md:py-24 text-center">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-[#181411] dark:text-white text-4xl font-extrabold leading-tight tracking-[-0.033em] md:text-5xl max-w-[720px]">
                                Craving a slice?
                            </h2>
                            <p className="text-[#181411]/70 dark:text-white/70 text-lg font-medium max-w-[500px] mx-auto">
                                Join our newsletter and get <span className="text-primary font-bold">20% off</span> your first order. Delivered fresh, every time.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                            <input className="flex-1 rounded-xl border-none h-14 px-6 bg-white dark:bg-background-dark shadow-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your email" type="email" />
                            <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                                <span className="truncate">Get My Discount</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;