"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, X } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  summary: string
  description: string
  technologies: string[]
  image: string
  liveDemo?: string
  github: string
  features: string[]
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      summary: "Full-stack e-commerce solution with payment integration",
      description:
        "A comprehensive e-commerce platform built with Next.js and Node.js, featuring user authentication, product management, shopping cart functionality, and secure payment processing with Stripe integration.",
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
      image: "/placeholder.svg?height=300&width=500",
      liveDemo: "https://ecommerce-demo.com",
      github: "https://github.com/yohanna4/ecommerce-platform",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for inventory management",
        "Responsive design for all devices",
      ],
    },
    {
      id: 2,
      title: "Task Management App",
      summary: "Collaborative project management tool with real-time updates",
      description:
        "A modern task management application that enables teams to collaborate effectively with real-time updates, drag-and-drop functionality, and comprehensive project tracking capabilities.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js", "Material-UI"],
      image: "/placeholder.svg?height=300&width=500",
      liveDemo: "https://taskmanager-demo.com",
      github: "https://github.com/yohanna4/task-manager",
      features: [
        "Real-time collaboration with Socket.io",
        "Drag-and-drop task management",
        "Team member assignment and notifications",
        "Project timeline and progress tracking",
        "File attachments and comments",
        "Mobile-responsive interface",
      ],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      summary: "Interactive weather application with location-based forecasts",
      description:
        "A beautiful weather dashboard that provides detailed weather information, forecasts, and interactive maps using modern web technologies and weather APIs.",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "TailwindCSS"],
      image: "/placeholder.svg?height=300&width=500",
      liveDemo: "https://weather-dashboard-demo.com",
      github: "https://github.com/yohanna4/weather-dashboard",
      features: [
        "Current weather conditions",
        "7-day weather forecast",
        "Interactive weather maps",
        "Location-based weather detection",
        "Weather charts and analytics",
        "Favorite locations management",
      ],
    },
    {
      id: 4,
      title: "Social Media API",
      summary: "RESTful API for social media platform with authentication",
      description:
        "A robust RESTful API built with NestJS that powers a social media platform, featuring user management, post creation, real-time messaging, and comprehensive security measures.",
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "JWT", "Redis", "Docker"],
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/yohanna4/social-media-api",
      features: [
        "JWT-based authentication system",
        "User profiles and friend connections",
        "Post creation and interaction (likes, comments)",
        "Real-time messaging system",
        "File upload and media handling",
        "Rate limiting and security measures",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="cursor-pointer hover:shadow-lg transition-shadow duration-300 group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{project.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline">+{project.technologies.length - 3} more</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                <Button variant="ghost" size="icon" onClick={() => setSelectedProject(null)}>
                  <X size={24} />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />

                  <div className="flex gap-4 mb-6">
                    {selectedProject.liveDemo && (
                      <Button asChild>
                        <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" asChild>
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedProject.description}</p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
