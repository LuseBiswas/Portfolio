"use client";
import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ActivityCard({ title, type, embedUrl, date }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      {type !== "LinkedIn" && (
        <div className="border-b border-neutral-200 p-[clamp(12px,1.6vw,20px)]">
          <div className="flex items-start justify-between gap-[clamp(8px,1vw,12px)]">
            <h3 className="text-[clamp(14px,1.6vw,18px)] font-semibold text-[#33322e]">
              {title}
            </h3>
            {date && (
              <div className="flex items-center gap-[clamp(4px,0.6vw,6px)] text-[clamp(10px,1.2vw,13px)] text-neutral-500">
                <Calendar className="w-[clamp(12px,1.4vw,14px)] h-[clamp(12px,1.4vw,14px)]" aria-hidden />
                <span className="whitespace-nowrap">{date}</span>
              </div>
            )}
          </div>
          <span className="mt-[clamp(4px,0.6vw,6px)] inline-block rounded-md bg-neutral-100 px-[clamp(6px,0.8vw,10px)] py-[clamp(2px,0.4vw,4px)] text-[clamp(10px,1.1vw,12px)] font-medium text-neutral-600">
            {type}
          </span>
        </div>
      )}

      {/* Embed Container */}
      <div className="relative w-full bg-neutral-50">
        {type === "LinkedIn" && (
          <div className="aspect-[4/3] w-full">
            <iframe
              src={embedUrl}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              title={title}
              loading="lazy"
            />
          </div>
        )}
        {type === "YouTube" && (
          <div className="aspect-video w-full">
            <iframe
              src={embedUrl}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function RecentActivities() {
  const activities = [
    {
      title: "This is what I learned today",
      type: "LinkedIn",
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7392579759941193728",
      date: "Nov 5, 2025",
    },
    {
      title: "This is what I learned today",
      type: "LinkedIn",
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7389577113324085248",
      date: "Nov 5, 2025",
    },
    {
      title: "Building in public",
      type: "YouTube",
      embedUrl: "https://www.youtube.com/embed/VIDEO_ID",
      date: "Nov 3, 2025",
    },
    // Add more activities here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => prev + 1);
  };

  // Desktop: check if we can show more (showing 2 at a time)
  const canGoNextDesktop = currentIndex < activities.length - 2;
  const canGoPrevDesktop = currentIndex > 0;

  // Mobile: check if we can show more (showing 1 at a time)
  const canGoNextMobile = currentIndex < activities.length - 1;
  const canGoPrevMobile = currentIndex > 0;

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // Show carousel on mobile (>1) and desktop (>2)
  const showMobileCarousel = activities.length > 1;
  const showDesktopCarousel = activities.length > 2;

  return (
    <section aria-labelledby="activities-heading" className="mt-[clamp(32px,4.5vw,80px)]">
      <h2
        id="activities-heading"
        className="font-dm-sans font-semibold text-[#33322e] text-[clamp(18px,2.6vw,40px)]"
      >
        Recent Activities
      </h2>

      {/* Desktop: Grid or Carousel */}
      <div className="hidden md:block">
        {showDesktopCarousel ? (
          <div className="relative mt-[clamp(16px,2.2vw,32px)]">
            {/* Navigation Buttons */}
            {canGoPrevDesktop && (
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-200 bg-white p-[clamp(8px,1vw,12px)] shadow-md transition-all hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                aria-label="Previous activity"
              >
                <ChevronLeft className="w-[clamp(18px,2vw,24px)] h-[clamp(18px,2vw,24px)] text-neutral-700" />
              </button>
            )}

            {canGoNextDesktop && (
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-full border border-neutral-200 bg-white p-[clamp(8px,1vw,12px)] shadow-md transition-all hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                aria-label="Next activity"
              >
                <ChevronRight className="w-[clamp(18px,2vw,24px)] h-[clamp(18px,2vw,24px)] text-neutral-700" />
              </button>
            )}

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="grid gap-[clamp(16px,2.4vw,32px)] grid-cols-2"
                >
                  <ActivityCard {...activities[currentIndex]} />
                  <ActivityCard {...activities[(currentIndex + 1) % activities.length]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="mt-[clamp(16px,2.2vw,32px)] grid gap-[clamp(16px,2.4vw,32px)] grid-cols-2">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        )}
      </div>

      {/* Mobile: Carousel or Single */}
      <div className="block md:hidden">
        {showMobileCarousel ? (
          <div className="relative mt-[clamp(16px,2.2vw,32px)]">
            {/* Navigation Buttons */}
            {canGoPrevMobile && (
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-200 bg-white p-2 shadow-md transition-all hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                aria-label="Previous activity"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-700" />
              </button>
            )}

            {canGoNextMobile && (
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-full border border-neutral-200 bg-white p-2 shadow-md transition-all hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                aria-label="Next activity"
              >
                <ChevronRight className="w-5 h-5 text-neutral-700" />
              </button>
            )}

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                >
                  <ActivityCard {...activities[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="mt-[clamp(16px,2.2vw,32px)]">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

