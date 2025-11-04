"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <main>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary-cta to-accent bg-clip-text text-transparent">
              Welcome to Webild
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Modern component library with beautiful design and seamless animations.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="primary-button text-secondary-cta px-8 py-3 rounded-full font-medium transition-all hover:scale-105">
                Get Started
              </button>
              <button className="secondary-button text-foreground px-8 py-3 rounded-full font-medium transition-all hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}