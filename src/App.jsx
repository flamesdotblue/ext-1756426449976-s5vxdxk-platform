import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Filters from './components/Filters.jsx';
import CardGrid from './components/CardGrid.jsx';

const ALL_CATEGORIES = [
  'All',
  'Base Set',
  'Jungle',
  'Fossil',
  'Team Rocket',
  'Gym Heroes',
  'Neo Genesis',
  'Legendary',
  'EX Series',
  'Diamond & Pearl',
  'Black & White',
  'XY',
  'Sun & Moon',
  'Sword & Shield',
  'Scarlet & Violet',
  'Trainer',
  'Energy',
  'Promo'
];

const INITIAL_CARDS = [
  {
    id: 'base1-4',
    name: 'Charizard (Holo)',
    price: 399.99,
    category: 'Base Set',
    image: 'https://images.pokemontcg.io/base1/4.png'
  },
  {
    id: 'base1-2',
    name: 'Blastoise (Holo)',
    price: 249.99,
    category: 'Base Set',
    image: 'https://images.pokemontcg.io/base1/2.png'
  },
  {
    id: 'base1-3',
    name: 'Venusaur (Holo)',
    price: 189.99,
    category: 'Base Set',
    image: 'https://images.pokemontcg.io/base1/3.png'
  },
  {
    id: 'ju-1',
    name: 'Snorlax (Holo)',
    price: 89.99,
    category: 'Jungle',
    image: 'https://images.pokemontcg.io/jungle/11.png'
  },
  {
    id: 'fos-1',
    name: 'Dragonite (Holo)',
    price: 149.99,
    category: 'Fossil',
    image: 'https://images.pokemontcg.io/fossil/4.png'
  },
  {
    id: 'tr-1',
    name: 'Dark Charizard (Holo)',
    price: 129.99,
    category: 'Team Rocket',
    image: 'https://images.pokemontcg.io/rockets/4.png'
  },
  {
    id: 'sv-1',
    name: 'Miraidon ex',
    price: 29.99,
    category: 'Scarlet & Violet',
    image: 'https://images.pokemontcg.io/sv1/244.png'
  },
  {
    id: 'swsh-1',
    name: 'Pikachu VMAX',
    price: 59.99,
    category: 'Sword & Shield',
    image: 'https://images.pokemontcg.io/swsh4/44.png'
  },
  {
    id: 'xy-1',
    name: 'Charizard EX',
    price: 34.99,
    category: 'XY',
    image: 'https://images.pokemontcg.io/xy2/12.png'
  },
  {
    id: 'sunmoon-1',
    name: 'Umbreon GX',
    price: 44.99,
    category: 'Sun & Moon',
    image: 'https://images.pokemontcg.io/sm1/80.png'
  },
  {
    id: 'trainer-1',
    name: 'Professor Oak',
    price: 4.99,
    category: 'Trainer',
    image: 'https://images.pokemontcg.io/base1/88.png'
  },
  {
    id: 'energy-1',
    name: 'Double Colorless Energy',
    price: 2.49,
    category: 'Energy',
    image: 'https://images.pokemontcg.io/base1/96.png'
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('popular');

  const filtered = useMemo(() => {
    let items = INITIAL_CARDS.slice();

    if (selectedCategory && selectedCategory !== 'All') {
      items = items.filter((c) => c.category === selectedCategory);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter((c) => c.name.toLowerCase().includes(q));
    }

    if (sort === 'price-asc') items.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') items.sort((a, b) => b.price - a.price);
    if (sort === 'name') items.sort((a, b) => a.name.localeCompare(b.name));

    return items;
  }, [selectedCategory, query, sort]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white text-slate-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Filters
          categories={ALL_CATEGORIES}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          query={query}
          onQueryChange={setQuery}
          sort={sort}
          onSortChange={setSort}
        />
        <CardGrid cards={filtered} />
      </main>
      <footer className="mt-16 border-t bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} PokéMarket — Buy, Sell & Trade Pokémon Cards</p>
          <p>Not affiliated with Nintendo, Creatures, GAME FREAK, or The Pokémon Company.</p>
        </div>
      </footer>
    </div>
  );
}
