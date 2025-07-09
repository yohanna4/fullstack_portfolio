import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Globe, Server, Headphones } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "High-Performance Website Development",
      description:
        "Custom websites built with modern frameworks, optimized for speed, SEO, and user experience. From landing pages to complex web applications.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-browser Compatibility"],
    },
    {
      icon: <Code className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: "SEO-Optimized & Localized Websites",
      description:
        "Websites that rank well in search engines and provide excellent user experience across different regions and languages.",
      features: ["Technical SEO", "Multi-language Support", "Local SEO", "Schema Markup"],
    },
    {
      icon: <Server className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      title: "Custom APIs & Backend Services",
      description:
        "Robust backend solutions including RESTful APIs, database design, authentication systems, and third-party integrations.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Third-party Integrations"],
    },
    {
      icon: <Headphones className="h-12 w-12 text-orange-600 dark:text-orange-400" />,
      title: "Ongoing Support & Communication",
      description:
        "Continuous support, maintenance, and clear communication throughout the project lifecycle and beyond.",
      features: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Bug Fixes"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Services Offered</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
