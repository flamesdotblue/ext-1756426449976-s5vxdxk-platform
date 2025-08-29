import { ShoppingCart, Search } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="pokeball" className="w-6 h-6" />
          <a href="#" className="font-extrabold tracking-tight text-xl">PokéMarket</a>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#browse" className="text-slate-700 hover:text-slate-900">Browse</a>
          <a href="#sell" className="text-slate-700 hover:text-slate-900">Sell</a>
          <a href="#trade" className="text-slate-700 hover:text-slate-900">Trade</a>
          <a href="#about" className="text-slate-700 hover:text-slate-900">About</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm hover:bg-slate-50"><Search size={16}/>Quick Search</button>
          <button className="relative rounded-full bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-700">
            <ShoppingCart size={16} className="inline -mt-0.5 mr-2"/>
            Cart
            <span className="absolute -top-2 -right-2 text-[10px] bg-rose-500 text-white rounded-full px-1.5 py-0.5">0</span>
          </button>
        </div>
        <button aria-label="Menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border" onClick={() => setOpen(v=>!v)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="#browse" className="py-1">Browse</a>
            <a href="#sell" className="py-1">Sell</a>
            <a href="#trade" className="py-1">Trade</a>
            <a href="#about" className="py-1">About</a>
            <button className="mt-2 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm"><Search size={16}/>Quick Search</button>
            <button className="rounded-md bg-indigo-600 text-white px-3 py-2 text-sm">Cart</button>
          </div>
        </div>
      )}
    </header>
  );
}
