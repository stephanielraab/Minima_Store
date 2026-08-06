export function ProductListSkeleton() {
  return (
    <section className="mt-16 md:mt-24">
      {/* Header skeleton */}
      <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#E4E2DE]">
        <div>
          <div className="h-2.5 w-16 bg-stone-200 rounded animate-pulse mb-3" />
          <div className="h-9 w-44 bg-stone-200 rounded animate-pulse" />
        </div>
        <div className="h-2.5 w-14 bg-stone-200 rounded animate-pulse" />
      </div>

      {/* Cards skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            {/* Image skeleton */}
            <div
              className="aspect-[3/4] bg-stone-200 animate-pulse"
              style={{ animationDelay: `${i * 80}ms` }}
            />
            {/* Info skeleton */}
            <div className="mt-3.5 space-y-2">
              <div
                className="h-2 w-12 bg-stone-200 rounded animate-pulse"
                style={{ animationDelay: `${i * 80}ms` }}
              />
              <div
                className="h-4 w-full bg-stone-200 rounded animate-pulse"
                style={{ animationDelay: `${i * 80 + 40}ms` }}
              />
              <div
                className="h-3 w-24 bg-stone-200 rounded animate-pulse"
                style={{ animationDelay: `${i * 80 + 80}ms` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
