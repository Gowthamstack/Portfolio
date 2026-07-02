import React from "react";

const projects = [
  {
    title: "AI Chat Assistant",
    description:
      "Built an AI-powered chatbot that responds intelligently using modern AI models and APIs.",
    tech: ["React", "Node.js", "AI"],
  },
  {
    title: "DevOps Monitoring Dashboard",
    description:
      "Created a dashboard for monitoring applications with real-time metrics and system health tracking.",
    tech: ["Docker", "Kubernetes", "DevOps"],
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and developed my personal portfolio with responsive UI and animations.",
    tech: ["React", "Tailwind", "Design"],
  },
];

const Projects = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-8 py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-black">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white">
            My Projects 🚀
          </h1>

          <p className="text-gray-400 mt-4">
            Some projects I've built while learning and exploring technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:-translate-y-4 hover:scale-105 transition-all duration-500"
            >

              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  {project.title}
                </h2>

                <span className="text-2xl group-hover:rotate-12 transition">
                  ⚡
                </span>
              </div>

              <p className="text-gray-300 mt-5 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:scale-105 transition">
                View Project
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;