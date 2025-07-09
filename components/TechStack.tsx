export default function TechStack() {
  const technologies = [
    { name: "HTML5", icon: "🌐", category: "Frontend" },
    { name: "CSS3", icon: "🎨", category: "Frontend" },
    { name: "TailwindCSS", icon: "💨", category: "Frontend" },
    { name: "JavaScript", icon: "⚡", category: "Frontend" },
    { name: "TypeScript", icon: "📘", category: "Frontend" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Express.js", icon: "🚀", category: "Backend" },
    { name: "NestJS", icon: "🐱", category: "Backend" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "MySQL", icon: "🐬", category: "Database" },
    { name: "Firebase", icon: "🔥", category: "Database" },
    { name: "Supabase", icon: "⚡", category: "Database" },
  ]

  const categories = ["Frontend", "Backend", "Database"]

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Tech Stack</h2>

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech) => (
                    <div
                      key={tech.name}
                      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center group hover:scale-105 transform transition-transform"
                    >
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tech.icon}</div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{tech.name}</h4>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
