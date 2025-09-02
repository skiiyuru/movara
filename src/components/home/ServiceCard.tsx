import ActionLink from "../ActionLink"

interface CaseStudy {
  title: string
  description: string
  link: string
  image: string
}

interface Service {
  id: number
  title: string
  subtitle: string
  description: string
  caseStudy: CaseStudy
}

interface ServiceCardProps {
  service: Service
  index?: number
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
    // Different background colors for each card
  const cardColors = [
    'bg-white', // Card 1 - White (works with primary title and dark text)
    'bg-blue-100', // Card 2 - Light blue (more prominent, complements primary title)
    'bg-gray-100', // Card 3 - Light gray (more visible, neutral)
    'bg-blue-100' // Card 4 - Light slate (more prominent, subtle)
  ]

  return (
    <div className={`stacked-card ${cardColors[index]} rounded-lg shadow-lg overflow-hidden`}>
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="left lg:w-1/2 p-8 lg:p-12">
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-700">
            {service.title}
          </h2>
          
          {service.caseStudy && (
            <ActionLink href={service.caseStudy.link}>
              {service.caseStudy.title}
            </ActionLink>
          )}
        </div>

        {/* Right Section */}
        <div className="right lg:w-1/2 p-8 lg:p-12">
          <p className="text-xl leading-relaxed mb-6 text-gray-700">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  )
} 
