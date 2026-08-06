import { Suspense } from "react";
import SearchContent from "./SearchContent";

export default function SearchPage() {
  return (
    <div className="pb-20">
      <Suspense fallback={<p>Carregando...</p>}>
        <SearchContent />
      </Suspense>
    </div>
  );
}