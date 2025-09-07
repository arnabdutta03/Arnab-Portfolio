import React from "react";

function About() {
  return (
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
}

export default About;
