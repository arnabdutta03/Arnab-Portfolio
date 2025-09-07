import React from "react";
import { useEffect, useState } from "react";


function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // 🔽 Handle resize (switch between mobile & desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const DesktopAbout = () => (
    <section
      id="about"
      className="bg-stone-900 py-16 h-[100vh]">

      <div className="backdrop-blur-md bg-stone-300/10 max-w-350 h-[80vh] mx-auto px-4 grid md:grid-cols-3 items-center rounded-3xl">

        {/* Text Content */}
        <div className=" ml-18">
          <h2 className="text-6xl font-bold text-white mb-6 text-center">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-justify ">
            I specialize in turning ideas into fast, scalable, and visually striking web applications. With expertise in React, Node.js, and modern tools, I craft digital experiences that are not only functional but unforgettable. Ready to build something amazing?
          </p>


        </div>

        {/* Image / Avatar */}
        <div className="flex flex-col justify-center items-center gap-10">
          <p className="text-gray-300 leading-relaxed font-medium text-2xl text-center">
            <span className="text-white glow-hover-text">Hola, ¿Cómo Estás?</span>
          </p>
          <div className="flex justify-center">
            <img
              src="./profile.png"
              alt="Arnab Dutta"
              className="w-80 h-80 rounded-2xl shadow-lg object-cover"
            />
          </div>
          <a
            href="/MyResume.pdf"
            download="Arnab_Dutta_CV.pdf" //
            className="w-50 px-3 py-3 bg-white text-stone-800 font-bold rounded-2xl hover:bg-gray-300/80 transition inline-block text-center"
          >
            Download CV
          </a>

        </div>

        <div className="mr-20 mt-12">
          <div className="flex">
            <img src="./star.png" alt="star icon" className="w-8 h-8 mr-1.5" />
            <p className="text-gray-300 leading-relaxed mb-6 mt-0.5 text-justify">
              I build modern, user-friendly web applications with JavaScript, React.js, Node.js, and MongoDB — designed to look great and work flawlessly.
            </p>
          </div>
          <div className="flex">
            <img src="./star.png" alt="star icon" className="w-8 h-8 mr-1.5" />
            <p className="text-gray-300 leading-relaxed mb-6 mt-0.5 text-justify">
              My focus is creating fast, scalable, and reliable solutions that solve real-world problems while delivering smooth user experiences.
            </p>
          </div>
          <div className="flex">
            <img src="./star.png" alt="star icon" className="w-8 h-8 mr-1.5" />
            <p className="text-gray-300 leading-relaxed mb-6 mt-0.5 text-justify">
              I combine creativity with clean development practices to build responsive, performance-optimized, and future-ready products.
            </p>
          </div>
          <div className="flex">
            <img src="./star.png" alt="star icon" className="w-8 h-8 mr-1.5" />
            <p className="text-gray-300 leading-relaxed mb-6 mt-0.5 text-justify">
              Passionate about turning ideas into impact, I help bring your vision to life with digital solutions tailored to your goals.
            </p>
          </div>
        </div>


      </div>

    </section>
  );

  const MobileAbout = () => (
    <section
      id="about"
      className="bg-stone-900 py-12 min-h-screen px-4">

      <div className="backdrop-blur-md bg-stone-300/10 max-w-[95%] mx-auto py-8 grid gap-8 rounded-3xl">

        {/* Text Content */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className=" text-gray-300 w-60 m-auto leading-relaxed text-justify text-base text-sm">
            I specialize in turning ideas into fast, scalable, and visually striking web applications. With expertise in React, Node.js, and modern tools, I craft digital experiences that are not only functional but unforgettable. Ready to build something amazing?
          </p>
        </div>

        {/* Image / Avatar */}
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-gray-300 leading-relaxed font-medium text-xl sm:text-2xl text-center">
            <span className="text-white glow-hover-text">Hola, ¿Cómo Estás?</span>
          </p>
          <div className="flex justify-center">
            <img
              src="./profile.png"
              alt="Arnab Dutta"
              className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl shadow-lg object-cover"
            />
          </div>
          <a
            href="/MyResume.pdf"
            download="Arnab_Dutta_CV.pdf"
            className="m-auto sm:w-40 px-4 py-3 bg-white text-stone-800 font-bold rounded-2xl hover:bg-gray-300/80 transition text-center"
          >
            Download CV
          </a>
        </div>

        {/* Feature / Star Section */}
        <div className="space-y-4 w-60 m-auto">
          {[
            "I build modern, user-friendly web applications with JavaScript, React.js, Node.js, and MongoDB — designed to look great and work flawlessly.",
            "My focus is creating fast, scalable, and reliable solutions that solve real-world problems while delivering smooth user experiences.",
            "I combine creativity with clean development practices to build responsive, performance-optimized, and future-ready products.",
            "Passionate about turning ideas into impact, I help bring your vision to life with digital solutions tailored to your goals."
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-2">
              <img src="./star.png" alt="star icon" className="w-6 h-6 mt-1" />
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );

  return isMobile ? <MobileAbout /> : <DesktopAbout />;

}

export default About;
