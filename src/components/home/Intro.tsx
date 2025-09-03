import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

export default function Intro() {
  const sectionRef = useRef < HTMLElement > (null)
  const paragraphRef = useRef < HTMLParagraphElement > (null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!paragraphRef.current)
      return

    // Split the paragraph into words
    const paragraph = paragraphRef.current
    const text = paragraph.textContent || ''
    paragraph.innerHTML = text.split(' ').map(word => `<span class="word">${word}</span>`).join(' ')

    const words = paragraph.querySelectorAll('.word')

    // Set initial state - all words visible but faded
    gsap.set(words, { opacity: 0.2 })

    // Wait for the next frame to ensure Hero component is fully initialized
    const initTimer = setTimeout(() => {
      // Create timeline for word-by-word animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'center center',
          scrub: 0.1,
        },
      })

      // Animate each word to full opacity with smaller stagger
      tl.to(words, {
        opacity: 1,
        duration: 0.1,
        stagger: 0.005,
        ease: 'power2.out',
      })
    }, 50)

    return () => {
      clearTimeout(initTimer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24 xl:py-32">
      <section ref={sectionRef} className="container-wide mx-auto px-4 sm:px-6">
        <div className="">
          <h2
            ref={paragraphRef}
            className="font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight sm:leading-tight lg:leading-tight"
          >
            At Movara, we don't just talk strategy—we test it, challenge it,
            and make it work in the real world. Our gaming-centered workshops—from
            competitor wargaming to scenario planning—create a safe space to explore
            what could happen before it does.
          </h2>
        </div>
      </section>
    </div>
  )
}
