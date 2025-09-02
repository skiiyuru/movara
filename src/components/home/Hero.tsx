import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const wrapperRef = useRef < HTMLElement > (null)
  const svgRef = useRef < HTMLImageElement > (null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      animation: gsap.fromTo(
        svgRef.current,
        { scale: 1, opacity: 1 },
        {
          scale: 35,
          transformOrigin: 'center center',
          duration: 1,
          ease: 'back.out(1.7)',
        },
      ),
      start: 'top top',
      end: 'bottom top',
      scrub: 2.5,
      pin: true,
      anticipatePin: 1,
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [])

  return (
    <section ref={wrapperRef} className="hero-wrapper">
      <div className="hero-sticky-layer">
        <div className="hero-landing-screen">
          <div className="hero-video-container">
            <video autoPlay playsInline muted loop preload="auto">
              <source src="https://storage.coverr.co/videos/7RzPQrmB00s01rknm8VJnXahEyCy4024IMG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjI5MTg2NjA0fQ.M8oElp5VNO8bWEWmdF2nGiu3qDOOYRFfP8wkKvl8I20" />
            </video>
          </div>
          <div className="hero-content-wrap">
            <div className="hero-zoom">
              <img
                ref={svgRef}
                src="https://cdn.prod.website-files.com/623a9d0808ea9b85c0d013b1/623aa5147dfaa584a281f57f_mask-text.svg"
                loading="lazy"
                alt=""
                className="hero-svg"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
