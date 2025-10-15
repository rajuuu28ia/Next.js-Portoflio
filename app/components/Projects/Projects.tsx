'use client';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#'
    },
    {
      title: '3D Portfolio Website',
      description: 'Interactive portfolio with stunning 3D animations using Three.js and React Three Fiber.',
      tech: ['React', 'Three.js', 'WebGL', 'GSAP'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management system with team features and notifications.',
      tech: ['React', 'Firebase', 'Tailwind', 'TypeScript'],
      link: '#'
    },
    {
      title: 'AI Chat Application',
      description: 'Modern chat application powered by AI with natural language processing capabilities.',
      tech: ['Next.js', 'OpenAI', 'WebSocket', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather forecast application with interactive maps and detailed analytics.',
      tech: ['React', 'API Integration', 'Chart.js', 'Maps'],
      link: '#'
    },
    {
      title: 'Social Media Platform',
      description: 'Feature-rich social networking platform with posts, stories, and real-time messaging.',
      tech: ['Next.js', 'GraphQL', 'AWS', 'Redis'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
      <div className="max-w-[1920px] mx-auto w-full">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 lg:mb-5">
            Featured Projects
          </h2>
          <div className="w-24 sm:w-32 lg:w-40 h-1 lg:h-2 bg-gray-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/10 backdrop-blur-sm rounded-xl border border-gray-800/30 overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="h-56 lg:h-64 bg-gradient-to-br from-gray-600/20 to-gray-500/20 flex items-center justify-center">
                <span className="text-6xl sm:text-7xl lg:text-8xl group-hover:scale-110 transition-transform duration-300">
                  💻
                </span>
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-800/30 text-gray-300 rounded-full text-sm sm:text-base lg:text-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-gray-400 hover:text-gray-300 transition-colors text-base sm:text-lg lg:text-xl font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
