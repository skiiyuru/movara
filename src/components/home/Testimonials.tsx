'use client'

import { useState } from 'react'
import ActionLink from '@/components/ActionLink'
import { testimonialsData } from '@/data/siteData'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating)
      return
    setIsAnimating(true)
    setIsFadingOut(true)
    const DURATION = 500
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % testimonialsData.length)
      setIsFadingOut(false)
      setTimeout(() => setIsAnimating(false), DURATION)
    }, DURATION)
  }

  const prevTestimonial = () => {
    if (isAnimating)
      return
    setIsAnimating(true)
    setIsFadingOut(true)
    const DURATION = 500
    setTimeout(() => {
      setCurrentIndex(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length)
      setIsFadingOut(false)
      setTimeout(() => setIsAnimating(false), DURATION)
    }, DURATION)
  }

  const currentTestimonial = testimonialsData[currentIndex]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 xl:py-32">
      <div className="container-wide mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 lg:items-stretch lg:min-h-[70vh]">
          {/* Left Column - Testimonial Content */}
          <div className="left flex-1 flex flex-col">
            <div className="wrapper">
              <span
                className="label text-xs sm:text-sm font-medium mb-4 sm:mb-6 block"
                style={{ color: 'var(--color-warm-gray)' }}
              >
                What Our Clients Are Saying
              </span>

              <blockquote
                className={`font-display mb-6 sm:mb-8 transition-opacity duration-500 ${
                  isFadingOut ? 'opacity-0' : 'opacity-100'
                }`}
                style={{
                  fontSize: 'clamp(1.25rem, 4vw, 2.5rem)',
                  fontWeight: 'var(--font-weight-light)',
                  color: 'var(--color-dark-gray)',
                  lineHeight: '1.2',
                }}
              >
                "
                {currentTestimonial.quote}
                "
              </blockquote>

              <cite className={`has-image flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 transition-opacity duration-500 ${
                isFadingOut ? 'opacity-0' : 'opacity-100'
              }`}
              >
                <figure className="w-12 h-12 sm:w-14 sm:h-14 rounded overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    className="w-full object-cover"
                    src={currentTestimonial.author.image}
                    alt={currentTestimonial.author.name}
                  />
                </figure>

                <p
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: 'var(--color-dark-gray)' }}
                >
                  {currentTestimonial.author.name}
                  {' '}
                  <br />
                  <span
                    style={{ color: 'var(--color-warm-gray)' }}
                  >
                    {currentTestimonial.author.position}
                  </span>
                </p>
              </cite>

              <ActionLink
                href={currentTestimonial.caseStudy.href}
                className={`${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
                ariaLabel={currentTestimonial.caseStudy.title}
              >
                {currentTestimonial.caseStudy.title}
              </ActionLink>
            </div>

            {/* Navigation Arrows */}
            <div className="pagi flex gap-3 sm:gap-4 mt-8 sm:mt-12 lg:mt-auto">
              <button
                onClick={prevTestimonial}
                className="p-2 sm:p-3 border rounded-xl hover:bg-gray-50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                style={{
                  borderColor: 'var(--color-primary)',
                  transition: 'var(--transition-normal)',
                }}
                aria-label="Previous testimonial"
              >
                <svg width="16" height="14" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="matrix(-1 0 0 1 12 0)">
                    <path className="fill" d="M0.899902 5.05844H9.8249L5.4449 0.648438H6.9449L11.8499 5.59844L6.9299 10.5484H5.4299L9.82621 6.13844H0.899902V5.05844Z" fill="var(--color-primary)"></path>
                  </g>
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 sm:p-3 border rounded-xl hover:bg-gray-50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                style={{
                  borderColor: 'var(--color-primary)',
                  transition: 'var(--transition-normal)',
                }}
                aria-label="Next testimonial"
              >
                <svg width="16" height="14" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.899902 5.05844H9.8249L5.4449 0.648438H6.9449L11.8499 5.59844L6.9299 10.5484H5.4299L9.82621 6.13844H0.899902V5.05844Z" fill="var(--color-primary)"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="right flex-1 flex">
            <figure
              className={`landscape rounded-lg overflow-hidden bg-gray-200 transition-opacity duration-500 w-full h-48 sm:h-64 lg:h-full ${
                isFadingOut ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ borderRadius: 'var(--radius-md)' }}
            >
              <img
                className="w-full h-full object-cover"
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
