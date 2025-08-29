import { ShoppingCart } from 'lucide-react';

function formatPrice(n) {
  try {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
  } catch {
    return `$${n.toFixed(2)}`;
  }
}

function CardItem({ card }) {
  return (
    <div className="group rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="aspect-[4/5] bg-slate-50 overflow-hidden">
        <img src={card.image} alt={card.name} className="w-full h-full object-contain group-hover:scale-[1.02] transition" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold leading-tight">{card.name}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{card.category}</p>
          </div>
          <div className="text-right">
            <div className="text-indigo-600 font-bold">{formatPrice(card.price)}</div>
            <div className="text-[10px] text-slate-400">Market price</div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button className="flex-1 rounded-full bg-indigo-600 text-white text-sm px-3 py-2 hover:bg-indigo-700 inline-flex items-center justify-center gap-2">
            <ShoppingCart size={16}/>Buy
          </button>
          <button className="flex-1 rounded-full border text-sm px-3 py-2 hover:bg-slate-50">Trade</button>
        </div>
      </div>
    </div>
  );
}

export default function CardGrid({ cards }) {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-lg">Cards</h2>
        <span className="text-sm text-slate-500">{cards.length} results</span>
      </div>
      {cards.length === 0 ? (
        <div className="border rounded-xl p-10 text-center text-slate-500 bg-white">No cards match your filters.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((c) => (
            <CardItem key={c.id} card={c} />
          ))}
        </div>
      )}
    </section>
  );
}
