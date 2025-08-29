import { Filter, Search } from 'lucide-react';

export default function Filters({ categories, selected, onSelect, query, onQueryChange, sort, onSortChange }) {
  return (
    <section id="browse" className="mt-12">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="relative w-full md:max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search cards by name..."
              className="w-full rounded-full border border-slate-300 pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 text-sm text-slate-600"><Filter size={16}/>Filters</div>
            <select
              className="rounded-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={sort}
              onChange={(e)=>onSortChange(e.target.value)}
            >
              <option value="popular">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={
                'px-3 py-1.5 rounded-full text-sm border transition ' +
                (selected === cat
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50')
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
