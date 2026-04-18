import Image from "next/image";
import type { Dish } from "@/content/dishes";

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-cream-200 via-cream-100 to-curry/30 flex items-center justify-center overflow-hidden">
        {dish.image ? (
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="text-6xl md:text-7xl select-none" aria-hidden>
            {dish.emoji}
          </span>
        )}
        <span
          className={`absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${
            dish.tag === "veg"
              ? "bg-leaf/90 text-white"
              : "bg-curry/90 text-terracotta-700"
          }`}
        >
          {dish.tag === "veg" ? "🌱 Veg" : "🥚 Egg"}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-serif text-xl font-semibold">{dish.name}</h3>
        <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">
          {dish.description}
        </p>
        <p className="mt-4 text-xs uppercase tracking-widest text-ink-soft/60">
          Served with roti · daal · rice
        </p>
      </div>
    </div>
  );
}
