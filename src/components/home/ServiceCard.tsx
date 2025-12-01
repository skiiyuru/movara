// @ts-nocheck
import ActionLink from '../ActionLink'

export default function ServiceCard(props) {
  const { service, index = 0 } = props || {}
  // Different background colors for each card
  const cardColors = [
    'bg-white', // Card 1 - White (works with primary title and dark text)
    'bg-blue-100', // Card 2 - Light blue (more prominent, complements primary title)
    'bg-gray-100', // Card 3 - Light gray (more visible, neutral)
    'bg-blue-100', // Card 4 - Light slate (more prominent, subtle)
  ]

  // Prefer image from data; fallback to a reliable Unsplash static image URL
  const fallbackImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=60'

  return (
    <div className={`stacked-card ${cardColors[index]} rounded-lg shadow-lg overflow-hidden`}>
      <div className="flex flex-col lg:flex-row-reverse">
        {/* Media Section */}
        <div className="lg:w-1/2">
          <div className="h-48 sm:h-56 md:h-72 lg:h-full w-full">
            <img
              src={service.image}
              alt={service.title || 'Service image'}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6 text-gray-700 font-semibold leading-tight">
            {service.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 text-gray-700">
            {service.description}
          </p>
          {service.caseStudy && (
            <ActionLink href={service.caseStudy.link}>
              {service.caseStudy.title}
            </ActionLink>
          )}
        </div>
      </div>
    </div>
  )
}
