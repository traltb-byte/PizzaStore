import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PIZZAS } from '../constants';

const Menu = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = [
        { name: 'Signature Pizzas', icon: 'local_pizza' },
        { name: 'Veggie Options', icon: 'eco' },
        { name: 'Sides', icon: 'lunch_dining' },
        { name: 'Drinks', icon: 'local_bar' },
        { name: 'Desserts', icon: 'icecream' }
    ];

    const filters = [
        { name: 'All', icon: null },
        { name: 'Meat Lovers', icon: null },
        { name: 'Spicy', icon: 'local_fire_department', color: 'text-red-500' },
        { name: 'Gluten Free', icon: null },
        { name: 'New Arrivals', icon: null }
    ];

    return (
        <main className="max-w-[1440px] mx-auto flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-64 flex-shrink-0 border-r border-[#f5f2f0] dark:border-[#3d2e21] bg-white dark:bg-background-dark p-6 sticky top-16 h-fit md:h-[calc(100vh-64px)] overflow-y-auto no-scrollbar">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col">
                        <h1 className="text-[#181411] dark:text-white text-lg font-bold leading-normal">Menu Categories</h1>
                        <p className="text-[#8a7560] dark:text-gray-400 text-xs font-medium leading-normal">Browse our fresh ingredients</p>
                    </div>
                    <nav className="flex flex-col gap-2">
                        {categories.map((cat, idx) => (
                            <button key={idx} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${idx === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'hover:bg-[#f5f2f0] dark:hover:bg-[#3d2e21] text-[#181411] dark:text-white'}`}>
                                <span className={`material-symbols-outlined transition-transform group-hover:scale-110 ${idx === 0 ? '' : 'text-primary'}`}>{cat.icon}</span>
                                <p className="text-sm font-semibold">{cat.name}</p>
                            </button>
                        ))}
                    </nav>
                    <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
                        <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Special Offer</p>
                        <p className="text-sm font-bold mb-1 dark:text-white">Buy 2 Get 1 Free</p>
                        <p className="text-xs text-[#8a7560] dark:text-gray-400">On all Signature pizzas every Tuesday.</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <section className="flex-1 bg-white dark:bg-background-dark/30 p-4 md:p-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                    <div className="flex flex-col gap-2">
                        <p className="text-[#181411] dark:text-white text-4xl font-extrabold leading-tight tracking-tight">Signature Pizzas</p>
                        <p className="text-[#8a7560] dark:text-gray-400 text-base max-w-2xl">Our hand-crafted signatures made with 48-hour fermented dough and locally sourced premium ingredients.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#3d2e21] border border-[#f5f2f0] dark:border-[#3d2e21] text-sm font-medium shadow-sm dark:text-white hover:bg-gray-50 dark:hover:bg-[#4d3a2b] transition-colors">
                            <span className="material-symbols-outlined text-lg">filter_list</span>
                            Filter
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#3d2e21] border border-[#f5f2f0] dark:border-[#3d2e21] text-sm font-medium shadow-sm dark:text-white hover:bg-gray-50 dark:hover:bg-[#4d3a2b] transition-colors">
                            Sort: Popularity
                        </button>
                    </div>
                </div>

                {/* Filter Chips */}
                <div className="flex gap-3 pb-6 flex-wrap">
                    {filters.map((filter, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setActiveFilter(filter.name)}
                            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-bold cursor-pointer transition-colors ${activeFilter === filter.name ? 'bg-primary text-white' : 'bg-[#f5f2f0] dark:bg-[#3d2e21] text-[#181411] dark:text-white hover:bg-primary/20'}`}
                        >
                            {filter.icon && <span className={`material-symbols-outlined text-sm ${filter.color || ''}`}>{filter.icon}</span>}
                            {filter.name}
                        </button>
                    ))}
                </div>

                {/* Pizza Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {PIZZAS.map((pizza) => (
                        <div key={pizza.id} onClick={() => navigate(`/product/${pizza.id}`)} className="group flex flex-col gap-4 bg-white dark:bg-surface-dark p-3 rounded-2xl border border-transparent hover:border-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/5 cursor-pointer">
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                                <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${pizza.image}")` }}></div>
                                {pizza.isBestseller && (
                                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/70 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 dark:text-white">
                                        <span className="material-symbols-outlined text-sm text-primary">star</span>
                                        Bestseller
                                    </div>
                                )}
                                {pizza.isSpicy && (
                                    <div className="absolute top-3 left-3 bg-red-500/90 backdrop-blur-md px-2 py-1 rounded-md text-[10px] text-white font-bold uppercase tracking-widest flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">local_fire_department</span>
                                        Spicy
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col flex-1 px-1">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-[#181411] dark:text-white text-lg font-bold leading-tight truncate pr-2">{pizza.name}</h3>
                                    <span className="text-primary font-bold whitespace-nowrap">${pizza.price.toFixed(2)}</span>
                                </div>
                                <p className="text-[#8a7560] dark:text-gray-400 text-sm font-normal leading-relaxed mb-4 line-clamp-2">{pizza.description}</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex -space-x-2 overflow-hidden">
                                        <div className="inline-block h-6 w-6 rounded-full bg-[#f5f2f0] dark:bg-[#3d2e21] flex items-center justify-center border-2 border-white dark:border-[#2d2218]">
                                            <span className="material-symbols-outlined text-[10px] dark:text-white">timer</span>
                                        </div>
                                        <span className="pl-4 text-[11px] font-semibold text-[#8a7560] dark:text-gray-400">{pizza.prepTime}</span>
                                    </div>
                                    <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Menu;