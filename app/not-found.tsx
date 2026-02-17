import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <span className="text-8xl font-bold text-mauk-green/10">404</span>
        <h1
          className="text-3xl sm:text-4xl font-bold text-mauk-green -mt-4 mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Seite nicht gefunden
        </h1>
        <p className="text-mauk-dark/70 max-w-md mx-auto mb-8">
          Die angeforderte Seite existiert leider nicht. Vielleicht finden Sie hier
          was Sie suchen:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-mauk-green hover:bg-mauk-green/90 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            <Home className="h-4 w-4" />
            Zur Startseite
          </Link>
          <Link
            href="/sortiment"
            className="inline-flex items-center justify-center gap-2 bg-mauk-cream hover:bg-mauk-cream/80 text-mauk-green px-6 py-3 rounded-full font-semibold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Sortiment entdecken
          </Link>
        </div>
      </div>
    </section>
  );
}
