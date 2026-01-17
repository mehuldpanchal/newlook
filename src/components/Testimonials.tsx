"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { placeholders } from "@/lib/placeholders";

const testimonials = [
  {
    id: 1,
    name: "John & Sarah Miller",
    location: "Fredericksburg, VA",
    rating: 5,
    text: "New Look completely transformed our driveway! The team was professional, punctual, and the quality of work exceeded our expectations. Our neighbors keep asking who did the work!",
    image: placeholders.testimonials.customer1,
    service: "Driveway Installation",
  },
  {
    id: 2,
    name: "Michael Thompson",
    location: "Stafford, VA",
    rating: 5,
    text: "Excellent experience from start to finish. The crew replaced our entire roof in just two days. Very impressed with their efficiency and attention to detail. Highly recommend!",
    image: placeholders.testimonials.customer2,
    service: "Roof Replacement",
  },
  {
    id: 3,
    name: "Lisa & David Chen",
    location: "Spotsylvania, VA",
    rating: 5,
    text: "We hired New Look for our patio project and couldn't be happier. The design team helped us create the perfect outdoor living space. Worth every penny!",
    image: placeholders.testimonials.customer3,
    service: "Patio Installation",
  },
  {
    id: 4,
    name: "Robert Williams",
    location: "King George, VA",
    rating: 5,
    text: "The retaining wall they built for us is not only functional but beautiful. It solved our drainage issues and added great curb appeal. Professional team!",
    image: placeholders.testimonials.customer4,
    service: "Retaining Wall",
  },
  {
    id: 5,
    name: "Jennifer Martinez",
    location: "Fredericksburg, VA",
    rating: 5,
    text: "New Look installed vinyl siding on our home and it looks brand new! The crew was respectful, cleaned up after themselves, and finished ahead of schedule.",
    image: placeholders.testimonials.customer5,
    service: "Vinyl Siding",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-gold fill-gold" : "text-dark-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  // Get visible testimonials for desktop (3 at a time)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-light">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231e3a8a' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-5">
            What Our Customers Say
          </h2>
          <p className="text-lg text-dark-500">
            Don&apos;t just take our word for it. Hear from our satisfied customers
            across Fredericksburg and surrounding areas.
          </p>

          {/* Google Reviews Badge */}
          <div className="flex items-center justify-center mt-6 gap-4">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                ))}
              </div>
              <span className="ml-2 font-semibold text-dark">5.0</span>
            </div>
            <a
              href="https://google.com/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-700 font-semibold"
            >
              Read More Reviews →
            </a>
          </div>
        </motion.div>

        {/* Desktop Carousel (3 cards) */}
        <div className="hidden lg:block relative">
          <div
            className="flex gap-6 transition-all duration-500"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-1 bg-white rounded-2xl shadow-xl p-8 relative"
              >
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />

                <StarRating rating={testimonial.rating} />

                <p className="text-dark-600 mt-4 mb-6 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 bg-light">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-dark">{testimonial.name}</p>
                    <p className="text-sm text-dark-400">
                      {testimonial.location}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            onClick={goToNext}
            className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>

        {/* Mobile Carousel (1 card) */}
        <div className="lg:hidden relative">
          <div
            className="overflow-hidden"
            onTouchStart={() => setIsAutoPlaying(false)}
            onTouchEnd={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-6 relative"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />

                <StarRating rating={testimonials[currentIndex].rating} />

                <p className="text-dark-600 mt-4 mb-6 leading-relaxed">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-light">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-dark">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-dark-400">
                      {testimonials[currentIndex].location}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonials[currentIndex].service}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center mt-6 gap-4">
            <button
              onClick={goToPrevious}
              className="bg-white shadow-md hover:shadow-lg p-2 rounded-full transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-dark-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="bg-white shadow-md hover:shadow-lg p-2 rounded-full transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

