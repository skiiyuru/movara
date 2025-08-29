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
    'bg-white', // Card 1 - White
    'bg-light-blue', // Card 2 - Light Blue
    'bg-light-gray', // Card 3 - Light Gray
    'bg-white' // Card 4 - White (alternating)
  ]

  return (
    <div className={`stacked-card ${cardColors[index]} rounded-lg shadow-lg overflow-hidden`}>
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="left lg:w-1/3 p-8 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark-gray mb-6">
            {service.title}
          </h2>
          
          {service.caseStudy && (
            <div className="case-study-wrapper">
              <p className="small text-sm font-medium text-warm-gray uppercase tracking-wide mb-3">
                {service.caseStudy.title}
              </p>
              <div className="case-study">
                <p className="small text-sm text-warm-gray mb-4">
                  {service.caseStudy.description}{' '}
                  <a href={service.caseStudy.link} className="text-primary hover:text-secondary transition-colors">
                    Read More.
                  </a>
                </p>
                <figure className="landscape contain is-dark w-20 h-12 bg-dark-gray rounded flex items-center justify-center">
                  <img 
                    className="contain w-full h-full object-contain p-2" 
                    src={service.caseStudy.image} 
                    alt="Case study logo"
                    width="80"
                    height="48"
                  />
                </figure>
              </div>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="right lg:w-2/3 p-8 lg:p-12">
          <div className="block-text card">
            <p className="text-lg text-warm-gray leading-relaxed mb-6">
              {service.description}
            </p>
            <p className="text-base text-warm-gray leading-relaxed">
              Our comprehensive approach helps you navigate uncertainty, align your teams, 
              and execute with discipline to achieve sustainable growth and market leadership.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
