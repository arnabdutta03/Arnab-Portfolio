import React from 'react'

function Projects() {
  return (
    <section id="projects" className="relative h-screen bg-black flex justify-center items-center overflow-hidden">
      <div className="backdrop-blur- bg-black/30 border border-black/40 w-full h-full z-10 flex items-center justify-center text-4xl text-white font-bold select-none">
        Projects
      </div>

      {/* Gradient Triangles Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Top Right Large Gradient Triangle */}
        <svg className="absolute top-[-80px] left-[60%] z-0"
          width="500" height="370"
          viewBox="0 0 500 370"
          style={{ transform: "rotate(40deg)" }}>
          <defs>
            <linearGradient id="triangle-gradient-1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#0e7490" />
            </linearGradient>
          </defs>
          <polygon points="250,0 500,370 0,370" fill="url(#triangle-gradient-1)" />
        </svg>

        {/* Top Left Medium Gradient Triangle */}
        <svg className="absolute top-[-60px] left-[5%] z-0"
          width="380" height="270"
          viewBox="0 0 380 270"
          style={{ transform: "rotate(60deg)" }}>
          <defs>
            <linearGradient id="triangle-gradient-2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0e7490" />
            </linearGradient>
          </defs>
          <polygon points="190,0 380,270 0,270" fill="url(#triangle-gradient-2)" />
        </svg>

        {/* Bottom Triangle Example */}
        <svg className="absolute top-[60%] left-[30%] z-0"
          width="500" height="370"
          viewBox="0 0 500 370"
          style={{ transform: "rotate(150deg)" }}>
          <defs>
            <linearGradient id="triangle-gradient-3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#0e7490" />
            </linearGradient>
          </defs>
          <polygon points="250,0 500,370 0,370" fill="url(#triangle-gradient-3)" />
        </svg>

      </div>
    </section>



  )
}

export default Projects