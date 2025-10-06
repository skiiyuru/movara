import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import { z } from 'zod'

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  contactNumber: z.string().min(10, 'Contact number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  
  // Validation state
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

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
    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6">
        Get in Touch
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
            subject: String(formData.get('subject') || ''),
            contactNumber: String(formData.get('contactNumber') || ''),
            message: String(formData.get('message') || '')
          }
          
          // Validate form data with Zod
          const validationResult = contactFormSchema.safeParse(formDataObj)
          
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
          
          const subject = encodeURIComponent(formDataObj.subject)
          const body = encodeURIComponent(`Hi Movara team,

I would like to get in touch with you.

Details:
- Name: ${formDataObj.name}
- Email: ${formDataObj.email}
- Contact Number: ${formDataObj.contactNumber}
- Subject: ${formDataObj.subject}

Message:
${formDataObj.message}

Please let me know how you can help.

Best regards,
${formDataObj.name}`)

          // Open email client with pre-populated data
          window.location.href = `mailto:jmgichuki@movara.co?subject=${subject}&body=${body}`
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
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base ${
              errors.subject ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="What is this about?"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        <div>
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            required
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base ${
              errors.contactNumber ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your phone number"
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.contactNumber}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base resize-vertical ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell us how we can help you..."
          />
          {errors.message && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>
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
          Send Message
        </button>
      </form>
    </div>
  )
}
