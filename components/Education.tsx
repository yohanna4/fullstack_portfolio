import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Award, BookOpen } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2016 - 2020",
      gpa: "3.8/4.0",
      description: [
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering",
        "Senior Project: Built a full-stack web application for campus event management",
        "Dean's List: Fall 2018, Spring 2019, Fall 2019",
      ],
      achievements: ["Magna Cum Laude", "Computer Science Honor Society"],
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-123456",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-789012",
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MDB-DEV-345678",
    },
    {
      name: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2021",
      credentialId: "META-REACT-901234",
    },
  ]

  const courses = [
    {
      name: "Advanced React Patterns",
      provider: "Frontend Masters",
      date: "2023",
      hours: "8 hours",
    },
    {
      name: "Node.js Microservices",
      provider: "Udemy",
      date: "2023",
      hours: "12 hours",
    },
    {
      name: "System Design Interview",
      provider: "Educative",
      date: "2022",
      hours: "15 hours",
    },
    {
      name: "Docker & Kubernetes",
      provider: "Pluralsight",
      date: "2022",
      hours: "10 hours",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Education & Learning</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formal Education */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Formal Education</h3>
              {education.map((edu, index) => (
                <Card key={index} className="mb-6 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{edu.degree}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {edu.school}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <Badge variant="outline">GPA: {edu.gpa}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {edu.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                      <span className="font-semibold text-gray-900 dark:text-white">Achievements:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement) => (
                        <Badge key={achievement} variant="secondary">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Online Courses */}
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 mt-8">Continuous Learning</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                        {course.name}
                      </CardTitle>
                      <CardDescription>{course.provider}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                        <span>{course.date}</span>
                        <Badge variant="outline">{course.hours}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center">
                        <Award className="h-5 w-5 mr-2 text-yellow-600 dark:text-yellow-400" />
                        {cert.name}
                      </CardTitle>
                      <CardDescription>{cert.issuer}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-300">Issued:</span>
                          <Badge variant="outline">{cert.date}</Badge>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">ID: {cert.credentialId}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
