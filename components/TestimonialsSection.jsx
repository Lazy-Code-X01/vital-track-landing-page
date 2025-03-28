"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    author: "John Doe",
    institution: "Covenant university",
    image: "/dp.png",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    author: "Jane Smith",
    institution: "Covenant university",
    image: "/dp.png",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    author: "Mike Johnson",
    institution: "Covenant university",
    image: "/dp.png",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
          What to expect
        </h2>

        {/* Testimonials Carousel */}
        <div className="relative px-4 md:px-0">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-12 z-10 p-2 hover:opacity-75 transition-opacity"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-12 z-10 p-2 hover:opacity-75 transition-opacity"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-0 md:px-12"
                >
                  <div className="max-w-3xl mx-auto">
                    <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 text-center mb-6 md:mb-8">
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center justify-center gap-3 md:gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="rounded-full w-12 h-12 md:w-14 md:h-14"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm md:text-base">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-500 text-xs md:text-sm">
                          {testimonial.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-red-500 w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
