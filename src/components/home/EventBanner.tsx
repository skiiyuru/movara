import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import type { ImageMetadata } from 'astro'
import posterImage from '@/assets/images/poster.jpeg'

// ─── Event Data ──────────────────────────────────────────────────────────────
// Update these props to reuse the component for future events.
export interface EventBannerProps {
  label?: string
  title?: string
  titleAccent?: string
  tagline?: string
  pillars?: { verb: string; noun: string }[]
  date?: string
  location?: string
  investment?: string
  registrationUrl?: string
  posterSrc?: string | ImageMetadata
  posterAlt?: string
}

const DEFAULTS: Required<EventBannerProps> = {
  label: 'Upcoming Event',
  title: 'The Execution',
  titleAccent: 'Room.',
  tagline: 'Spend one day making the strategic decisions that will shape your next quarter.',
  pillars: [
    { verb: 'Review', noun: 'Progress' },
    { verb: 'Interpret', noun: 'Market' },
    { verb: 'Diagnose', noun: 'Performance' },
    { verb: 'Build', noun: 'Plan' },
  ],
  date: 'Thursday, 17th September 2026',
  location: 'Nairobi \u2014 Venue confirmed upon registration',
  investment: 'KES 20,000 per participant',
  registrationUrl:
    'https://forms.gle/pqPTtG9CVMQyrkYU7',
  posterSrc: posterImage,
  posterAlt: 'The Execution Room event \u2014 leaders working through strategic plans at a table in Nairobi',
}

// ─── Icons ───────────────────────────────────────────────────────────────────
function CalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function InvestmentIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function EventBanner(props: EventBannerProps) {
  const p = { ...DEFAULTS, ...props }

  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Fade-in reveal for the content column
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // Image slides in from the right
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      // Stagger-in the pillar items
      gsap.from('.event-pillar', {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: pillarsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="event-banner"
      aria-label={`${p.label}: ${p.title} ${p.titleAccent}`}
      className="event-banner"
    >
      <div className="event-banner__inner container-wide mx-auto">
        {/* ── Content column ── */}
        <div ref={contentRef} className="event-banner__content">
          {/* Eyebrow label */}
          <p className="event-banner__eyebrow" aria-hidden="true">
            {p.label}
          </p>

          {/* Headline */}
          <h2 className="event-banner__heading">
            {p.title}
            <br />
            <em className="event-banner__heading-accent">{p.titleAccent}</em>
          </h2>

          {/* Tagline */}
          <p className="event-banner__tagline">{p.tagline}</p>

          {/* Rule */}
          <hr className="event-banner__rule" aria-hidden="true" />

          {/* Three pillars */}
          <div ref={pillarsRef} className="event-banner__pillars" role="list">
            {p.pillars.map((pillar, i) => (
              <div key={pillar.verb} className="event-pillar" role="listitem">
                <span className="event-pillar__number" aria-hidden="true">
                  {i + 1}.
                </span>
                <p className="event-pillar__text">
                  <strong>{pillar.verb}</strong> {pillar.noun}
                </p>
              </div>
            ))}
          </div>

          {/* Rule */}
          <hr className="event-banner__rule" aria-hidden="true" />

          {/* Event details */}
          <dl className="event-banner__details">
            <div className="event-banner__detail">
              <dt className="sr-only">Date</dt>
              <span className="event-banner__detail-icon" aria-hidden="true">
                <CalendarIcon />
              </span>
              <dd className="event-banner__detail-text">{p.date}</dd>
            </div>

            <div className="event-banner__detail">
              <dt className="sr-only">Location</dt>
              <span className="event-banner__detail-icon" aria-hidden="true">
                <PinIcon />
              </span>
              <dd className="event-banner__detail-text">{p.location}</dd>
            </div>

            <div className="event-banner__detail">
              <dt className="sr-only">Investment</dt>
              <span className="event-banner__detail-icon" aria-hidden="true">
                <InvestmentIcon />
              </span>
              <dd className="event-banner__detail-text">{p.investment}</dd>
            </div>
          </dl>

          {/* CTA */}
          <a
            id="event-register-cta"
            href={p.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="event-banner__cta"
          >
            Register Now
            <span className="event-banner__cta-arrow">
              <ArrowIcon />
            </span>
          </a>
        </div>

        {/* ── Poster column ── */}
        <div ref={imageRef} className="event-banner__poster-col">
          <img
            src={typeof p.posterSrc === 'string' ? p.posterSrc : (p.posterSrc as ImageMetadata)?.src}
            alt={p.posterAlt}
            className="event-banner__poster"
            loading="eager"
            decoding="async"
          />
          {/* Mobile-only CTA — the content column is hidden on small screens */}
          <a
            href={p.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="event-banner__cta event-banner__cta--mobile"
            aria-label="Register for The Execution Room"
          >
            Register Now
            <span className="event-banner__cta-arrow">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
