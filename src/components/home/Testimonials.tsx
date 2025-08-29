'use client'

import { useState } from 'react'
import { testimonialsData } from '@/data/siteData'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex(prev => (prev + 1) % testimonialsData.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const currentTestimonial = testimonialsData[currentIndex]

  return (
    <section className="testimonial-block bg-white py-24">
      <div className="testimonial isSlider max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Testimonial Content */}
          <div className="left flex-1">
            <div className="wrapper">
              <span className="label text-gray-500 text-sm font-medium mb-6 block">
                What Our Clients Are Saying
              </span>

              <blockquote
                className={`text-2xl lg:text-3xl font-light text-gray-900 mb-8 leading-relaxed transition-opacity duration-500 ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              >
                "
                {currentTestimonial.quote}
                "
              </blockquote>

              <cite className={`has-image flex items-center gap-4 mb-8 transition-opacity duration-500 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
              >
                <figure className="portrait w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                  <img
                    className="w-full h-full object-cover"
                    src={currentTestimonial.author.image}
                    alt={currentTestimonial.author.name}
                  />
                </figure>
                <div>
                  <p className="small name text-sm font-medium text-gray-900">
                    {currentTestimonial.author.name}
                  </p>
                  <p className="small position text-sm text-gray-500">
                    {currentTestimonial.author.position}
                  </p>
                </div>
              </cite>

              <a
                href={currentTestimonial.caseStudy.href}
                className={`button primary inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-500 ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
                aria-label={currentTestimonial.caseStudy.title}
              >
                <span>{currentTestimonial.caseStudy.title}</span>
                <div className="icon">
                  <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill" d="M0.899902 5.05844H9.8249L5.4449 0.648438H6.9449L11.8499 5.59844L6.9299 10.5484H5.4299L9.82621 6.13844H0.899902V5.05844Z" fill="white"></path>
                  </svg>
                </div>
              </a>
            </div>

            {/* Navigation Arrows */}
            <div className="pagi flex gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="prev p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="55" height="55" rx="11.5" stroke="#072C3E"></rect>
                  <path d="M36.03 27.2082H21.554L22.324 27.8242L29.364 20.7402H27.164L19.97 28.0002L27.186 35.2602H29.386L22.324 28.1762L21.554 28.7922H36.03V27.2082Z" fill="#072C3E"></path>
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="next p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="-0.5" y="0.5" width="55" height="55" rx="11.5" transform="matrix(-1 0 0 1 55 0)" stroke="#072C3E"></rect>
                  <path d="M19.97 27.2082H34.446L33.676 27.8242L26.636 20.7402H28.836L36.03 28.0002L28.814 35.2602H26.614L33.676 28.1762L34.446 28.7922H19.97V27.2082Z" fill="#072C3E"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="right flex-1">
            <figure className={`landscape mb-6 rounded-lg overflow-hidden bg-gray-200 transition-opacity duration-500 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
            >
              <img
                className="w-full h-64 lg:h-80 object-cover"
                src={currentTestimonial.images.hero}
                alt={`${currentTestimonial.author.company} project`}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
