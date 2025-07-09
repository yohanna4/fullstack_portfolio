import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "Jan 2023 - Present",
      type: "Full-time",
      description: [
        "Led development of a microservices architecture serving 100K+ daily active users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 3 junior developers and conducted code reviews",
        "Collaborated with product team to define technical requirements and roadmap",
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker", "TypeScript"],
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "Mar 2022 - Dec 2022",
      type: "Full-time",
      description: [
        "Built and maintained customer-facing web applications using React and Node.js",
        "Developed RESTful APIs handling 10M+ requests per month",
        "Optimized database queries resulting in 40% performance improvement",
        "Integrated third-party payment systems (Stripe, PayPal) and analytics tools",
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Redis", "JavaScript", "AWS"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "Jun 2021 - Feb 2022",
      type: "Full-time",
      description: [
        "Developed responsive websites and web applications for 20+ clients",
        "Collaborated with designers to implement pixel-perfect UI/UX designs",
        "Improved website performance and SEO rankings for client projects",
        "Maintained and updated existing client websites and applications",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "SASS", "WordPress"],
    },
    {
      title: "Junior Web Developer",
      company: "WebDev Studio",
      location: "Austin, TX",
      period: "Aug 2020 - May 2021",
      type: "Full-time",
      description: [
        "Assisted in developing custom WordPress themes and plugins",
        "Created responsive landing pages and marketing websites",
        "Performed website maintenance and bug fixes",
        "Learned modern web development practices and frameworks",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "MySQL", "jQuery"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
