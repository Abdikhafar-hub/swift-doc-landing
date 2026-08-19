import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-2xl text-center">
        <p className="rule-label justify-center">Error 404</p>
        <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. Try one of the public Swift
          Doc sections below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center bg-gold px-6 text-sm font-bold text-ink shadow-xs transition-all duration-300 hover:bg-gold-dark hover:text-ink hover:shadow-md"
          >
            Back to home
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center justify-center border border-hairline px-6 text-sm font-bold transition-colors hover:border-gold hover:text-gold"
          >
            Services
          </Link>
          <Link
            href="/resources"
            className="inline-flex min-h-12 items-center justify-center border border-hairline px-6 text-sm font-bold transition-colors hover:border-gold hover:text-gold"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center border border-hairline px-6 text-sm font-bold transition-colors hover:border-gold hover:text-gold"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
