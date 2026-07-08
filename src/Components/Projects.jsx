import { ExternalLink, Star, GitFork, Code2 } from "lucide-react";

const projects = [
  {
    title: "GreenCart",
    description:
      "GreenCart is a full-stack e-commerce grocery platform built with the MERN stack, designed to give users a smooth, modern online grocery shopping experience — from browsing products to secure checkout — with a dedicated dashboard for sellers to manage their listings and orders.",
    language: "MERN",
    languageColor: "bg-yellow-400",
    stars: 7,
    forks: 0,
    tags: [],
    github: "https://github.com/Gowthamstack/GreenCart/",
  },
];

function Github(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#020817] px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-10">
          My Projects
        </h2>
        <p>A collection of projects I've been working on. From web applications to open source contributions, here's what keeps me busy.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#071327] border border-gray-700 rounded-2xl p-7 hover:border-yellow-400 transition duration-300"
            >
              
              {/* Header */}
              <div className="flex justify-between items-start">
                <h3 className="text-white font-bold text-2xl">
                  {project.title}
                </h3>

                <ExternalLink
                  className="text-gray-400 hover:text-yellow-400 cursor-pointer"
                  size={22}
                />
              </div>

              {/* Description */}
              <p className="text-gray-400 mt-6 leading-7">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-700 mt-6 pt-5">

                <div className="flex justify-between">

                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${project.languageColor}`}
                    />
                    <span className="text-gray-300">
                      {project.language}
                    </span>
                  </div>

                  <div className="flex gap-4 text-gray-400">

                    <div className="flex items-center gap-1">
                      <Star size={16}/>
                      {project.stars}
                    </div>

                    <div className="flex items-center gap-1">
                      <GitFork size={16}/>
                      {project.forks}
                    </div>

                  </div>

                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 border border-gray-700 rounded-xl py-3 text-white hover:bg-yellow-500 hover:text-black transition"
                >
                  <Github size={18} />
                  View on GitHub
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}