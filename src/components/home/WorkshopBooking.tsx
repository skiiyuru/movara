import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import ActionLink from '@/components/ActionLink'
import { z } from 'zod'

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

// Validation schema
const workshopBookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  workshop: z.string().min(1, 'Please select a workshop'),
  date: z.string().min(1, 'Please select a preferred date'),
})

type WorkshopBookingForm = z.infer<typeof workshopBookingSchema>

export default function WorkshopBooking() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const workshopRefs = useRef<Array<HTMLDivElement | null>>([])
  
  // Validation state
  const [errors, setErrors] = useState<Record<string, string>>({})

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
    <section ref={sectionRef} className="w-full py-12 sm:py-16 lg:py-20 bg-accent">
      <div className="container-wide mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gray-700 mb-4 sm:mb-6 leading-tight">
            Clarity. Alignment. Execution.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Future-ready strategy workshops that deliver results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Workshop Grid - Takes up 2/3 of the space */}
          <div ref={gridRef} className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {workshops.map((workshop, index) => (
                <div
                  key={workshop.id}
                  ref={(el) => { workshopRefs.current[index] = el }}
                  className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4 leading-tight">
                    {workshop.title}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {workshop.description}
                  </p>
                  {Array.isArray(workshop.bullets) && (
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
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
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100 sticky top-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Book Your Workshop
              </h3>
              <form
                ref={formRef}
                onSubmit={(e) => {
                  e.preventDefault()
                  
                  // Get form data
                  const formData = new FormData(e.currentTarget)
                  const formDataObj = {
                    name: String(formData.get('name') || ''),
                    email: String(formData.get('email') || ''),
                    workshop: String(formData.get('workshop') || ''),
                    date: String(formData.get('date') || '')
                  }
                  
                  // Validate form data with Zod
                  const validationResult = workshopBookingSchema.safeParse(formDataObj)
                  
                  if (!validationResult.success) {
                    // Convert Zod errors to a simple error object
                    const newErrors: Record<string, string> = {}
                    validationResult.error.issues.forEach((issue) => {
                      if (issue.path[0]) {
                        newErrors[issue.path[0] as string] = issue.message
                      }
                    })
                    setErrors(newErrors)
                    return
                  }
                  
                  // Clear any previous errors
                  setErrors({})
                  
                  // Find the selected workshop title
                  const selectedWorkshop = workshops.find(w => w.id === Number.parseInt(formDataObj.workshop))
                  const workshopTitle = selectedWorkshop?.title || 'a workshop'

                  const subject = encodeURIComponent(`Booking Request for ${workshopTitle}`)
                  const body = encodeURIComponent(`Hi Movara team,

I would like to book a workshop with you.

Details:
- Name: ${formDataObj.name}
- Email: ${formDataObj.email}
- Workshop: ${workshopTitle}
- Preferred Date: ${formDataObj.date}

Please let me know the next steps and available time slots.

Best regards,
${formDataObj.name}`)

                  // Open email client with pre-populated data
                  window.location.href = `mailto:workshops@movara.com?subject=${subject}&body=${body}`
                }}
                className="space-y-4 sm:space-y-6"
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
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
                  )}
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
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="workshop" className="block text-sm font-medium text-gray-700 mb-2">
                    Workshop Type
                  </label>
                  <select
                    id="workshop"
                    name="workshop"
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base ${
                      errors.workshop ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a workshop</option>
                    {workshops.map(workshop => (
                      <option key={workshop.id} value={workshop.id}>
                        {workshop.title}
                      </option>
                    ))}
                  </select>
                  {errors.workshop && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.workshop}</p>
                  )}
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
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base ${
                      errors.date ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.date}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={Object.keys(errors).length > 0}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 transform text-base min-h-[44px] ${
                    Object.keys(errors).length > 0
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]'
                  }`}
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
