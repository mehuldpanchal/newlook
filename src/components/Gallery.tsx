"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { placeholders } from "@/lib/placeholders";

const categories = ["All", "Driveways", "Patios", "Roofing", "Siding"];

const projects = [
  {
    id: 1,
    title: "Modern Paver Driveway",
    category: "Driveways",
    image: placeholders.gallery.driveway1,
    beforeImage: placeholders.gallery.driveway1Before,
    hasBeforeAfter: true,
  },
  {
    id: 2,
    title: "Stone Patio with Fire Pit",
    category: "Patios",
    image: placeholders.gallery.patio1,
    hasBeforeAfter: false,
  },
  {
    id: 3,
    title: "Asphalt Driveway Resurfacing",
    category: "Driveways",
    image: placeholders.gallery.driveway2,
    beforeImage: placeholders.gallery.driveway2Before,
    hasBeforeAfter: true,
  },
  {
    id: 4,
    title: "Complete Roof Replacement",
    category: "Roofing",
    image: placeholders.gallery.roofing1,
    hasBeforeAfter: false,
  },
  {
    id: 5,
    title: "Brick Walkway & Patio",
    category: "Patios",
    image: placeholders.gallery.patio2,
    hasBeforeAfter: false,
  },
  {
    id: 6,
    title: "Vinyl Siding Installation",
    category: "Siding",
    image: placeholders.gallery.siding1,
    beforeImage: placeholders.gallery.siding1Before,
    hasBeforeAfter: true,
  },
  {
    id: 7,
    title: "Circular Paver Driveway",
    category: "Driveways",
    image: placeholders.gallery.driveway3,
    hasBeforeAfter: false,
  },
  {
    id: 8,
    title: "Metal Roof Installation",
    category: "Roofing",
    image: placeholders.gallery.roofing2,
    hasBeforeAfter: false,
  },
  {
    id: 9,
    title: "Outdoor Kitchen Patio",
    category: "Patios",
    image: placeholders.gallery.patio3,
    hasBeforeAfter: false,
  },
  {
    id: 10,
    title: "Shingle Roof Replacement",
    category: "Roofing",
    image: placeholders.gallery.roofing3,
    beforeImage: placeholders.gallery.roofing3Before,
    hasBeforeAfter: true,
  },
  {
    id: 11,
    title: "James Hardie Siding",
    category: "Siding",
    image: placeholders.gallery.siding2,
    hasBeforeAfter: false,
  },
  {
    id: 12,
    title: "Stamped Concrete Driveway",
    category: "Driveways",
    image: placeholders.gallery.driveway4,
    hasBeforeAfter: false,
  },
];

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Background) */}
      <Image
        src={afterImage}
        alt={`${title} - After`}
        fill
        className="object-cover"
      />

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={`${title} - Before`}
          fill
          className="object-cover"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <ChevronLeft className="h-4 w-4 text-dark -mr-1" />
          <ChevronRight className="h-4 w-4 text-dark -ml-1" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-dark/80 text-white text-xs font-bold px-3 py-1 rounded">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-accent/80 text-white text-xs font-bold px-3 py-1 rounded">
        AFTER
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-5">
            Project Gallery
          </h2>
          <p className="text-lg text-dark-500">
            Browse through our completed projects and see the quality of our
            work. Click on images with the Before/After badge to see the
            transformation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all min-h-[44px] ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-light text-dark hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="masonry-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="masonry-grid-item"
              >
                <div
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div
                    className={`relative ${
                      index % 3 === 0 ? "h-80" : index % 3 === 1 ? "h-64" : "h-72"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-sm text-accent font-medium">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1">
                        {project.title}
                      </h3>
                    </div>

                    {/* Before/After Badge */}
                    {project.hasBeforeAfter && (
                      <div className="absolute top-4 right-4 bg-gold text-dark text-xs font-bold px-3 py-1 rounded-full">
                        Before/After
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center bg-primary hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-lg min-h-[56px]"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gold p-2 min-h-[44px] min-w-[44px] flex items-center justify-center z-10"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl h-[60vh] md:h-[70vh] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredProjects[currentIndex]?.hasBeforeAfter &&
              filteredProjects[currentIndex]?.beforeImage ? (
                <BeforeAfterSlider
                  beforeImage={filteredProjects[currentIndex].beforeImage!}
                  afterImage={filteredProjects[currentIndex].image}
                  title={filteredProjects[currentIndex].title}
                />
              ) : (
                <Image
                  src={filteredProjects[currentIndex]?.image || ""}
                  alt={filteredProjects[currentIndex]?.title || ""}
                  fill
                  className="object-contain"
                />
              )}
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <h3 className="text-xl font-bold">
                {filteredProjects[currentIndex]?.title}
              </h3>
              <p className="text-white/70">
                {filteredProjects[currentIndex]?.category}
              </p>
              <p className="text-white/50 text-sm mt-2">
                {currentIndex + 1} / {filteredProjects.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

