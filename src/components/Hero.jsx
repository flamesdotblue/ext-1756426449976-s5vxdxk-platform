export default function Hero() {
  return (
    <section className="relative pt-12 sm:pt-16 lg:pt-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-10 w-72 h-72 bg-indigo-200/40 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 left-0 w-80 h-80 bg-rose-200/40 blur-3xl rounded-full" />
      </div>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Catch deals. Trade smarter. Collect legends.
        </h1>
        <p className="mt-4 text-slate-600 text-lg">
          The modern marketplace for Pokémon cards. Buy, sell and trade across vintage and modern sets with transparent pricing.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#browse" className="rounded-full bg-indigo-600 text-white px-6 py-3 text-sm font-medium hover:bg-indigo-700">Start Browsing</a>
          <a href="#sell" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium hover:bg-slate-50">Sell a Card</a>
        </div>
        <div className="mt-8 grid grid-cols-3 max-w-md mx-auto text-xs text-slate-500">
          <div className="py-2">Live prices</div>
          <div className="py-2">Verified sellers</div>
          <div className="py-2">Secure trades</div>
        </div>
      </div>
    </section>
  );
}
