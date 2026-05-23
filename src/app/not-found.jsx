"use client";
import Link from "next/link";



export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Animated Icon / Illustration using DaisyUI Badge & Countdown */}
        <div className="flex justify-center mb-6">
          <div className="stats shadow-lg bg-primary text-primary-content animate-bounce">
            <div className="stat">
              <div className="stat-title text-primary-content/70">Error</div>
              <div className="stat-value text-5xl">404</div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-base-content mb-2">
          Oops! Page Not Found
        </h1>
        <p className="text-base-content/70 mb-8">
          Apni je pageটি khujchen seta hoyto delete hoye গেছে ba link-e kono vul
          ache. Ektu check kore dekhun!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-primary shadow-md">
            Go Back Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-outline btn-secondary"
          >
            Try Again
          </button>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
