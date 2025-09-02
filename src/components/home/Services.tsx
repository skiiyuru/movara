import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Observer } from 'gsap/Observer'
import ServiceCard from './ServiceCard'

const servicesData = [
  {
    id: 1,
    title: 'Build a Future-Ready Business',
    subtitle: 'Future Readiness & Navigating Uncertainty',
    description: 'The future is uncertain. But you can prepare for it. We guide you through interactive workshops to help you clarify your vision, explore different futures through scenario planning, and spot opportunities early to open new markets.',
    caseStudy: {
      title: 'Case Study',
      description: 'A tech startup hired Movara to design and implement their strategic planning framework.',
      link: '/work/future-ready',
      image: '/favicon.svg'
    }
  },
  {
    id: 2,
    title: 'Execute with Discipline Today',
    subtitle: 'Strategy Execution',
    description: 'A solid strategy is just the beginning—execution makes it real. Our hands-on execution workshops help you set the right milestones and KPIs, align your teams and priorities, and break down big annual goals into clear, actionable tasks.',
    caseStudy: {
      title: 'Case Study',
      description: 'A corporate client achieved 40% faster execution through our disciplined approach.',
      link: '/work/execution',
      image: '/favicon.svg'
    }
  },
  {
    id: 3,
    title: 'Transform with Technology',
    subtitle: 'Digital & AI Integration',
    description: 'Technology keeps moving fast—we help you keep up and get ahead. We work with you to assess your digital maturity, build a digital transformation roadmap, and integrate AI and emerging technologies in ways that drive growth.',
    caseStudy: {
      title: 'Case Study',
      description: 'Reduced non-performing loans in digital agriculture from 70% to under 10%.',
      link: '/work/digital-transformation',
      image: '/favicon.svg'
    }
  },
  {
    id: 4,
    title: 'Strategic Planning & Execution',
    subtitle: 'Comprehensive Strategy Support',
    description: 'From initial strategy development to final execution, we provide end-to-end support. Our comprehensive approach includes competitor analysis, market research, strategic planning, and ongoing execution support to ensure your success.',
    caseStudy: {
      title: 'Case Study',
      description: 'Helped a mid-size company increase market share by 35% in 18 months.',
      link: '/work/strategic-planning',
      image: '/favicon.svg'
    }
  }
]

export default function Services() {
  const containerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Observer)

    if (!containerRef.current) return

    const isMobile = window.innerWidth < 768
    if (isMobile) return

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]
    if (!cards.length) return

    // Constants
    const time = 0.5
    let animating = false

    // Set initial positions
    gsap.set(cards, {
      y: (index) => 20 * index,
      transformOrigin: "center top"
    })

    // Create timeline
    const tl = gsap.timeline({
      paused: true
    })

    // Add animations
    tl.add("card2")
    tl.to(cards[0], {
      scale: 0.85,
      duration: time,
      ease: "power2.out"
    })
    tl.from(cards[1], {
      y: () => window.innerHeight,
      duration: time,
      ease: "power2.out"
    }, "<")

    tl.add("card3")
    tl.to(cards[1], {
      scale: 0.9,
      duration: time,
      ease: "power2.out"
    })
    tl.from(cards[2], {
      y: () => window.innerHeight,
      duration: time,
      ease: "power2.out"
    }, "<")

    tl.add("card4")
    tl.to(cards[2], {
      scale: 0.95,
      duration: time,
      ease: "power2.out"
    })
    tl.from(cards[3], {
      y: () => window.innerHeight,
      duration: time,
      ease: "power2.out"
    }, "<")

    tl.add("card5")

    // Tween function
    function tweenToLabel(direction: string, isScrollingDown: boolean) {
      if (
        (!tl.nextLabel() && isScrollingDown) ||
        (!tl.previousLabel() && !isScrollingDown)
      ) {
        cardsObserver.disable()
        return
      }
      if (!animating && direction) {
        animating = true
        tl.tweenTo(direction, { onComplete: () => { animating = false } })
      }
    }

    // Create Observer
    const cardsObserver = Observer.create({
      wheelSpeed: -0.3, // Reduced sensitivity for damping
      onDown: () => {
        tweenToLabel(tl.previousLabel(), false)
      },
      onUp: () => {
        tweenToLabel(tl.nextLabel(), true)
      },
      tolerance: 50, // Increased tolerance for more damping
      preventDefault: true,
      onEnable(self: any) {
        let savedScroll = self.scrollY()
        self._restoreScroll = () => self.scrollY(savedScroll)
        document.addEventListener("scroll", self._restoreScroll, {
          passive: false
        })
      },
      onDisable: (self: any) => {
        document.removeEventListener("scroll", self._restoreScroll)
      }
    })

    cardsObserver.disable()

    // Create ScrollTrigger
    ScrollTrigger.create({
      trigger: containerRef.current,
      pin: true,
      start: "top top",
      end: "bottom top",
      onEnter: () => {
        if (cardsObserver.isEnabled) return
        cardsObserver.enable()
      },
      onEnterBack: () => {
        if (cardsObserver.isEnabled) return
        cardsObserver.enable()
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      cardsObserver.kill()
    }
  }, [])

  return (
    <div className="bg-cream">
      <section 
        ref={containerRef}
        className="stacking-cards relative py-20 px-4 md:px-8 lg:px-16"
      >
        <div className="container-wide mx-auto">
          <div className="text-center mb-16 text-gray-700">
            <h2 className="font-bold mb-6">
              Our Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              We equip tech-driven businesses to be future-ready through strategic planning, 
              disciplined execution, and digital transformation.
            </p>
          </div>

          <div className="relative">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="stacked-card mb-8 md:mb-0"
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
