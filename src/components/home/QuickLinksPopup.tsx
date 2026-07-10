"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";

type QuickLink = {
  title: string;
  description: string;
  href: string;
  label: string;
  image: string;
};

const QUICK_LINKS: QuickLink[] = [
  {
    title: "Learn Organic Farming",
    description: "TCBT Jaivik Kisan ke organic farming form par seedha pahunchiye.",
    href: "https://forms.zohopublic.in/tcbtjaivikkisan1/form/LearnOrganicFarming/formperma/BvAhyL6jdGoyyx3enkffbqJEyHbjeKL19hCMKzCSqDA",
    label: "Open Form",
    image: "/quick-links-poster.jpg",
  },
  {
    title: "Join the Zoho Meeting",
    description: "Panchmahabhut aur krishi charcha ke liye live meeting mein join karein.",
    href: "https://meet.zoho.in/vtnx-gyl-hjt",
    label: "Join Meeting",
    image: "/quick-links-meeting.jpg",
  },
];

export default function QuickLinksPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 300);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const interval = window.setInterval(() => {
      goToNext();
    }, 15000);

    return () => window.clearInterval(interval);
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
  };

  const goToPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? QUICK_LINKS.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === QUICK_LINKS.length - 1 ? 0 : current + 1
    );
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;
    const minSwipeDistance = 40;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) < minSwipeDistance) {
      return;
    }

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  if (!isOpen) {
    return null;
  }

  const slide = QUICK_LINKS[activeIndex];

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/45 px-2 py-3 backdrop-blur-sm sm:items-center sm:px-3 sm:py-4 md:px-6 md:py-6">
      <div className="relative w-[min(82vw,46rem)] overflow-hidden rounded-2xl bg-white shadow-2xl sm:w-full sm:max-w-6xl sm:rounded-3xl">
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close quick links popup"
          className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition hover:bg-gray-100"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="bg-linear-to-r from-emerald-700 via-green-600 to-lime-600 px-2.5 py-2.5 text-white sm:px-6 md:px-8 md:py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-100">
            Quick Links
          </p>
          <h2 className="mt-1.5 text-base font-bold sm:text-2xl md:text-[2rem]">
            Featured Action for Farmers
          </h2>
        </div>

        <div className="relative p-2 sm:p-4 md:p-5">
          <div className="relative flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous quick link"
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 shadow-sm transition hover:bg-emerald-50 sm:inline-flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous quick link"
              className="absolute left-1 top-1/2 z-10 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-200 bg-white/95 text-emerald-700 shadow-sm transition hover:bg-emerald-50 sm:hidden"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>

            <div
              className="group flex min-h-[unset] w-full flex-1 flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:min-h-[280px] sm:flex-row md:min-h-[310px] sm:rounded-3xl touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-emerald-50 sm:aspect-auto sm:w-[42%] sm:min-h-[280px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 78vw, 42vw"
                  className="object-contain object-center transition duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex w-full flex-col justify-between gap-2 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-2.5 sm:w-[58%] sm:p-4 md:p-5">
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="inline-flex w-fit rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 sm:px-4 sm:py-2 sm:text-sm">
                    Quick Access
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-gray-900 sm:text-xl md:text-[1.7rem]">
                      {slide.title}
                    </h3>
                    <p className="hidden max-w-2xl text-[11px] leading-4 text-gray-600 sm:block sm:text-sm md:text-[0.98rem]">
                      {slide.description}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-2 shadow-sm ring-1 ring-emerald-100 sm:p-4">
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div className="sm:hidden">
                      <p className="text-xs font-semibold text-emerald-700">
                        {slide.label}
                      </p>
                    </div>

                    <div className="hidden sm:block">
                      <p className="text-sm font-semibold text-emerald-700">
                        {slide.label}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Opens the attached registration form
                      </p>
                    </div>

                    <a
                      href={slide.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700 sm:h-12 sm:w-12"
                      aria-label="Open form"
                    >
                      <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next quick link"
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 shadow-sm transition hover:bg-emerald-50 sm:inline-flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next quick link"
              className="absolute right-1 top-1/2 z-10 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-200 bg-white/95 text-emerald-700 shadow-sm transition hover:bg-emerald-50 sm:hidden"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-3 flex justify-center gap-2">
            {QUICK_LINKS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to quick link ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-emerald-600" : "w-2.5 bg-emerald-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
