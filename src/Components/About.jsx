import React from "react";

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col md:flex-row items-center justify-around px-10 py-10 bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 ">

      {/* Background Blur Effects */}
      <div className="absolute w-72 h-72 bg-purple-500/30 blur-[100px] rounded-full top-10 left-10 animate-pulse"></div>

      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full bottom-10 right-10 animate-pulse"></div>

      {/* Left Content */}
      <div className="z-10 flex flex-col gap-6 max-w-lg text-white animate-[fadeIn_1s_ease-in]">

        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Hey there! 👋
        </h1>

        <p className="text-gray-300 font-bold leading-8">
          I'm currently a student at Priyadarshini Engineering College,
          building my skills and exploring new opportunities in technology.
          I’m passionate about learning and continuously improving myself
          through hands-on projects, new challenges, and practical experience.
        </p>

        <p className="text-gray-300 font-bold leading-8">
          Right now, I'm interested in exploring AI, coding, design, and
          DevOps. I enjoy understanding how technology works, creating
          solutions, and learning how different systems come together to build
          efficient and impactful products.
        </p>

      </div>

      {/* Right Card */}
      <div className="z-10 mt-10 md:mt-0 p-10 rounded-3xl 
backdrop-blur-lg bg-gray-900 shadow-2xl">

        <div className="rounded-3xl p-8 flex flex-col items-center  hover:scale-105 transition-all duration-500 ">

          {/* Floating Image */}
          <img
            className="w-48 h-48 rounded-full border-4 object-cover transition-all duration-75 animate-bouce"
            src="/gowtham.jpeg"
            alt="Gowtham"
          />

          <h2 className="text-white text-xl font-bold mt-6">
            Gowtham
          </h2>

          <p className="text-gray-300 mt-2">
            Always Learning & Building 🚀
          </p>

        </div>

      </div>

    </div>
  );
};

export default About;
