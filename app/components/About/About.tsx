'use client';

import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("@/app/components/Lanyard/Lanyard"), {
  ssr: false,
});

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
      <div className="max-w-[1920px] mx-auto w-full">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 lg:mb-5">
            About Me
          </h2>
          <div className="w-24 sm:w-32 lg:w-40 h-1 lg:h-2 bg-gray-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left Column - Lanyard 3D Component */}
          <div className="flex justify-center items-center">
            <Lanyard />
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 sm:mb-5 lg:mb-6">
              Full Stack Developer & Creative Coder
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-4 leading-relaxed">
              I'm a passionate developer with expertise in building modern web applications.
              I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-4 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I create
              seamless user experiences that are not only functional but also aesthetically pleasing.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-4 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or learning something new in the ever-evolving tech world.
            </p>

            <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-4">
              <div className="bg-gray-900/20 p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-800/30">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-400 mb-3">5+</div>
                <div className="text-base sm:text-lg lg:text-xl text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-900/20 p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-800/30">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-400 mb-3">50+</div>
                <div className="text-base sm:text-lg lg:text-xl text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
