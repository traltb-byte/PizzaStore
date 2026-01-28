import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { IMAGES, PIZZAS } from '../constants';
import { Pizza } from '../types';

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const pizza: Pizza = PIZZAS.find(p => p.id === id) || PIZZAS[0];
    
    const [size, setSize] = useState('M');
    const [crust, setCrust] = useState('Thin Crust');
    const [quantity, setQuantity] = useState(1);

    const priceMultiplier = size === 'S' ? 0.8 : size === 'L' ? 1.2 : 1;
    const crustAddon = crust === 'Stuffed' ? 2.00 : 0;
    const finalPrice = ((pizza.price * priceMultiplier) + crustAddon) * quantity;

    return (
        <main className="max-w-[1200px] mx-auto px-6 py-8">
            <nav className="flex items-center gap-2 mb-8 text-sm font-medium">
                <Link to="/" className="text-[#8a7560] hover:text-primary transition-colors">Home</Link>
                <span className="text-[#8a7560] material-symbols-outlined text-xs">chevron_right</span>
                <Link to="/menu" className="text-[#8a7560] hover:text-primary transition-colors">Menu</Link>
                <span className="text-[#8a7560] material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-primary">{pizza.name}</span>
            </nav>
            
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left: Images */}
                <div className="lg:w-1/2">
                    <div className="sticky top-28">
                        <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 bg-white dark:bg-background-dark border border-[#f5f2f0] dark:border-[#3a2e22]">
                            <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${IMAGES.productMain}")` }}></div>
                        </div>
                        <div className="mt-6 flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                            {[IMAGES.productThumb1, IMAGES.productThumb2, pizza.image].map((img, idx) => (
                                <div key={idx} className="size-20 rounded-lg border-2 border-transparent hover:border-primary overflow-hidden shrink-0 cursor-pointer transition-all">
                                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("${img}")` }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Details & Config */}
                <div className="lg:w-1/2 flex flex-col">
                    <div className="mb-6">
                        <div className="flex justify-between items-start">
                            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-[#181411] dark:text-white">{pizza.name}</h1>
                            <div className="text-2xl font-bold text-primary">${(pizza.price * priceMultiplier + crustAddon).toFixed(2)}</div>
                        </div>
                        <p className="text-lg text-[#8a7560] dark:text-[#c0b0a0] leading-relaxed">
                            {pizza.description}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#181411] dark:text-white mb-4">Select Size</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { id: 'S', label: '10" (6 Slices)' },
                                { id: 'M', label: '12" (8 Slices)' },
                                { id: 'L', label: '14" (10 Slices)' }
                            ].map((s) => (
                                <button 
                                    key={s.id} 
                                    onClick={() => setSize(s.id)} 
                                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all group ${size === s.id ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-[#f5f2f0] dark:border-[#3a2e22] hover:border-primary'}`}
                                >
                                    <span className={`text-lg font-bold ${size === s.id ? 'text-primary' : 'text-[#181411] dark:text-white'}`}>{s.id}</span>
                                    <span className={`text-xs ${size === s.id ? 'text-primary/80' : 'text-[#8a7560]'}`}>{s.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#181411] dark:text-white mb-4">Crust Type</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Thin Crust', 'Hand Tossed', 'Stuffed'].map((c) => (
                                <button 
                                    key={c}
                                    onClick={() => setCrust(c)}
                                    className={`px-6 py-2 rounded-full border-2 text-sm font-bold transition-all ${crust === c ? 'border-primary bg-primary text-white' : 'border-[#f5f2f0] dark:border-[#3a2e22] text-[#8a7560] dark:text-[#c0b0a0] hover:border-primary'}`}
                                >
                                    {c} {c === 'Stuffed' && '(+ $2.00)'}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-10">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[#181411] dark:text-white">Customize Toppings</h3>
                            <button className="text-xs font-bold text-primary hover:underline">Reset to Default</button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-surface-dark border border-[#f5f2f0] dark:border-[#4a3e32]">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="text-sm font-semibold text-[#181411] dark:text-white">Salami</span>
                                </div>
                                <button className="material-symbols-outlined text-xs text-[#8a7560] hover:text-red-500">remove</button>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f2f0] dark:bg-[#2a1e12] border border-dashed border-[#8a7560]/30 cursor-pointer hover:border-primary">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#8a7560]">add_circle</span>
                                    <span className="text-sm font-semibold text-[#8a7560]">Cheese</span>
                                </div>
                                <span className="text-[10px] font-bold text-primary">+$1.50</span>
                            </div>
                             <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f2f0] dark:bg-[#2a1e12] border border-dashed border-[#8a7560]/30 cursor-pointer hover:border-primary">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#8a7560]">add_circle</span>
                                    <span className="text-sm font-semibold text-[#8a7560]">Olives</span>
                                </div>
                                <span className="text-[10px] font-bold text-primary">+$0.75</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-[#f5f2f0] dark:border-[#3a2e22] flex flex-wrap items-center gap-6">
                        <div className="flex items-center bg-[#f5f2f0] dark:bg-[#3a2e22] rounded-xl p-1 h-14">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="size-12 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-background-dark transition-all text-[#181411] dark:text-white">
                                <span className="material-symbols-outlined">remove</span>
                            </button>
                            <span className="w-12 text-center text-lg font-bold text-[#181411] dark:text-white">{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} className="size-12 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-background-dark transition-all text-[#181411] dark:text-white">
                                <span className="material-symbols-outlined">add</span>
                            </button>
                        </div>
                        <button className="flex-1 h-14 bg-primary text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98]">
                            <span className="material-symbols-outlined">shopping_bag</span>
                            Add to Cart — ${finalPrice.toFixed(2)}
                        </button>
                    </div>
                </div>
            </div>

            {/* Recommendations */}
            <div className="mt-24">
                <h2 className="text-2xl font-bold mb-8 text-[#181411] dark:text-white">You might also like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                     {PIZZAS.slice(0, 4).map((rec) => (
                        <div key={rec.id} onClick={() => navigate(`/product/${rec.id}`)} className="group cursor-pointer">
                            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-white dark:bg-surface-dark border border-[#f5f2f0] dark:border-[#4a3e32]">
                                <div className="w-full h-full bg-cover transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${rec.image}")` }}></div>
                            </div>
                            <h4 className="font-bold text-[#181411] dark:text-white">{rec.name}</h4>
                            <p className="text-sm text-[#8a7560]">${rec.price.toFixed(2)}</p>
                        </div>
                     ))}
                </div>
            </div>
        </main>
    );
};

export default Product;