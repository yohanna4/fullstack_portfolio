import { Button } from "@/components/ui/button"
import { Download, Code, Users, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate Full-Stack Software Developer with over 3 years of experience building scalable web
                applications and robust backend systems. I specialize in modern JavaScript frameworks and have a strong
                foundation in both frontend and backend technologies.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                My approach combines technical expertise with creative problem-solving to deliver high-quality solutions
                that exceed client expectations. I believe in writing clean, maintainable code and staying up-to-date
                with the latest industry trends.
              </p>

              <Button asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Clean Code Advocate</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Writing maintainable, well-tested code that scales with your business needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Collaborative Team Player
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Excellent communication skills and experience working in agile development teams.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Performance Focused</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Optimizing applications for speed, SEO, and exceptional user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
