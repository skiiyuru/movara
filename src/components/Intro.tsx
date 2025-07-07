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

    // Create timeline for word-by-word animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'center center', // Animation completes when section reaches center
        scrub: 0.1, // Much faster response to scroll
      },
    })

    // Animate each word to full opacity with smaller stagger
    tl.to(words, {
      opacity: 1,
      duration: 0.1, // Faster duration
      stagger: 0.005, // Much faster stagger for quick word reveal
      ease: 'power2.out',
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-32 mx-auto">
      <div className="text-center px-4 md:px-18 lg:px-32">
        <p
          ref={paragraphRef}
          className="text-5xl leading-tight font-display text-gray-700"
        >
          At Movara, we don't just talk strategy—we test it, challenge it,
          and make it work in the real world. Our gaming-centered workshops—from
          competitor wargaming to scenario planning—create a safe space to explore
          what could happen before it does.
        </p>
      </div>
    </section>
  )
}
