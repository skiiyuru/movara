import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import ActionLink from '@/components/ActionLink'

const workshops = [
  {
    id: 1,
    title: 'Align leaders fast around a clear strategy',
    description:
      'We guide your team to agree on the right priorities today and stay ahead of tomorrow’s disruption.',
    bullets: [
      'A clear long-term vision to work towards',
      'A one-page summary of direction and choices',
      'The main opportunities and initiatives to pursue',
      'Possible market shifts with clear trigger points',
      'Key risks and signals to monitor',
    ],
    ctaText: 'Learn More',
    href: '/workshops/align-leaders',
  },
  {
    id: 2,
    title: 'Translate strategy into executable tasks',
    description:
      'We help your team achieve alignment, break strategy into executable tasks with clear start and end dates, tie daily work to strategic goals, and set up the discipline needed for execution.',
    bullets: [
      'Annual or quarterly execution plans with clear outcomes',
      'Key performance measures linked to strategy',
      'Clear, accountable task owners with timelines for delivery',
      'A clear view of dependencies and risks',
      'A review rhythm to track progress and adjust',
    ],
    ctaText: 'Learn More',
    href: '/workshops/strategy-execution',
  },
  {
    id: 3,
    title: 'Strategy Issue Resolution',
    description:
      'When a critical issue is blocking progress, this workshop brings the right people together to cut through the noise, uncover the root causes, and agree on practical next steps.',
    bullets: [
      'A clear statement of the issue and its impact',
      'Root causes identified and agreed',
      'Options laid out with trade-offs made visible',
      'A decision or action plan to move forward',
    ],
    ctaText: 'Learn More',
    href: '/workshops/issue-resolution',
  },
  {
    id: 4,
    title: 'Stress-test your strategy (Wargaming)',
    description:
      'This immersive workshop lets you see how your strategy holds up under pressure. It simulates competitor moves and disruptions before they happen.',
    bullets: [
      'Competitor and disruption scenarios mapped out',
      'Realistic simulations of external moves',
      'Agreed response options and playbooks',
      'Adjusted priorities',
    ],
    ctaText: 'Learn More',
    href: '/workshops/competitive-wargaming',
  },
]

export default function WorkshopBooking() {
  const sectionRef = useRef < HTMLElement > (null)
  const gridRef = useRef < HTMLDivElement > (null)
  const formRef = useRef < HTMLFormElement > (null)
  const workshopRefs = useRef < Array < HTMLDivElement | null >> ([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current)
      return

    // Stagger animation for workshop cards
    const cards = workshopRefs.current.filter(Boolean)
    if (cards.length) {
      gsap.fromTo(cards, {
        y: 30,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      })
    }

    // Form fade-in animation
    if (formRef.current) {
      gsap.fromTo(formRef.current, {
        x: 20,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-20 bg-accent">
      <div className="container-wide mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-gray-700 mb-6">
            Clarity. Alignment. Execution.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Future-ready strategy workshops that deliver results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Workshop Grid - Takes up 2/3 of the space */}
          <div ref={gridRef} className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {workshops.map((workshop, index) => (
                <div
                  key={workshop.id}
                  ref={(el) => { workshopRefs.current[index] = el }}
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                    {workshop.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {workshop.description}
                  </p>
                  {Array.isArray(workshop.bullets) && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                      {workshop.bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {/* <ActionLink href={workshop.href} className="text-primary font-medium">
                    {workshop.ctaText}
                  </ActionLink> */}
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form - Takes up 1/3 of the space */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 sticky top-8">
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                Book Your Workshop
              </h3>
              <form
                ref={formRef}
                onSubmit={(e) => {
                  e.preventDefault()
                  console.warn('Workshop booking submitted')
                }}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="workshop" className="block text-sm font-medium text-gray-700 mb-2">
                    Workshop Type
                  </label>
                  <select
                    id="workshop"
                    name="workshop"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a workshop</option>
                    {workshops.map(workshop => (
                      <option key={workshop.id} value={workshop.id}>
                        {workshop.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Workshop
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
