import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "Personal",

    description: "Creative self-built projects and experiments where I explored modern UI, animations, and full-stack concepts.",

    bg: "bg-[url('./pexels2.jpg')] bg-cover bg-center",

    personalProjects: [
      {
        name: "Nox Threads",
        bg: "bg-[url('./project/noxThreads.png')] bg-cover bg-center",
        des: "E-commerce platform for custom T-shirts."
      },
      {
        name: "Movie Discovery",
        bg: "bg-[url('./project/movieDiscovery.png')] bg-cover bg-center",
        des: "Browse and explore trending movies."
      },
      {
        name: "Code Canvas",
        bg: "bg-[url('./project/CodeCanvas.png')] bg-cover bg-center",
        des: "A Developer community platform."

      }
    ]
  },
  {
    title: "Showcase",
    description:
      "Skill-driven practice projects including dashboards, landing pages, and interactive apps built to sharpen my craft.",
    bg: "bg-[url('./pexels.jpg')] bg-cover bg-center",
    personalProjects: [
      {
        name: "Hungry Campus",
        bg: "bg-[url('./project/hungeryCampus.png')] bg-cover bg-center",
        des: "Smart food ticketing for college canteens."
      },
      {
        name: "Movie Discovery",
        bg: "bg-[url('./project/movieDiscovery.png')] bg-cover bg-center",
        des: "Browse and explore trending movies."
      },
      {
        name: "Sales Tracking",
        bg: "bg-[url('./project/Admin.png')] bg-cover bg-center",
        des: "Smart food ticketing for college canteens."
      }
    ]
  },
  {
    title: "Learning",
    description:
      "Hands-on projects from my learning journey — from small apps to design systems — reflecting my growth as a developer.",
    bg: "bg-[url('./pexels3.jpg')] bg-cover bg-center",
    personalProjects: [
      {
        name: "Nox Threads",
        bg: "bg-[url('./project/noxThreads.png')] bg-cover bg-center",
        des: "E-commerce platform for custom T-shirts."
      },
      {
        name: "Movie Discovery",
        bg: "bg-[url('./project/movieDiscovery.png')] bg-cover bg-center",
        des: "Browse and explore trending movies."
      },
      {
        name: "Hungry Campus",
        bg: "bg-[url('./project/hungeryCampus.png')] bg-cover bg-center",
        des: "Smart food ticketing for college canteens."
      }
    ]
  },
];


function Projects() {
  const [active, setActive] = useState(0);
  const [showDesc, setShowDesc] = useState(0);
  const [pending, setPending] = useState(null); // track which one we want to switch to

  useEffect(() => {
    if (pending === null) return;

    // Step 1: hide current description
    setShowDesc(null);

    // Step 2: after desc slides down → switch active
    const timeout1 = setTimeout(() => {
      setActive(pending);
    }, 500);

    // Step 3: after title transition → show new description
    const timeout2 = setTimeout(() => {
      setShowDesc(pending);
      setPending(null);
    }, 1000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [pending]);

  const handleClick = (i) => {
    if (i === active) return;
    setPending(i);
  };

  return (
    <section id="projects" className="bg-stone-900 min-h-[100vh] flex items-center justify-center px-6" >
      <div className="bg-stone-300/10 w-350 h-[90vh] mx-auto my-auto px-4 rounded-3xl">
        <div className="m-10">
          <h2 className="text-6xl font-bold text-white mb-6 text-center">
            Projects
          </h2>
        </div>

        <div className="flex gap-4 w-full max-w-full overflow-hidden ml-3">
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`relative transition-all duration-700 ease-in-out rounded-3xl flex-shrink-0
                ${active === i ? "w-[70%]" : "w-[13%]"} h-[500px] text-white shadow-lg`}
            >
              {/* Background */}
              <div className={`absolute inset-0 ${p.bg} rounded-3xl bg-cover bg-center`} />
              <div className="absolute inset-0 bg-stone-900/35 border-2 border-stone-600/30 drop-shadow-2xl rounded-3xl" />

              {/* Content */}
              <div className="absolute p-8 flex flex-col w-full h-full">

                {/* Title */}
                <h2
                  className={`font-bold whitespace-nowrap transition-all duration-500 ease-in-out
                    ${active === i
                      ? "text-4xl mb-4 rotate-0 relative top-0 left-0 opacity-100"
                      : "absolute -rotate-90 top-1/2 left-3 -translate-y-1/2 text-4xl opacity-100"
                    }`}
                >
                  {p.title}
                </h2>

                {/* Description*/}
                <div
                  className={`transition-all duration-500 text-justify ease-in-out overflow-hidden
                    ${showDesc === i
                      ? "opacity-100 translate-y-0 max-h-[300px]"
                      : "opacity-0 translate-y-5 max-h-0"
                    }`}
                >
                  <p className="text-lg max-w-md leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Description*/}
                <div className={`transition-all duration-500 text-justify ease-in-out overflow-hidden
                    ${showDesc === i ? "opacity-100 translate-y-0 max-h-[300px]" : "opacity-0 translate-y-5 max-h-0"}`}>
                </div>



                {/* Personal Projects */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 transition-all duration-500 ease-in-out
    ${showDesc === i ? "opacity-100 translate-y-0 h-[270px]" : "opacity-0 translate-y-5 max-h-0"}
  `}
                >
                  {p.personalProjects?.map((proj, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-2xl shadow-md overflow-hidden bg-stone-900/90 hover:shadow-xl hover:shadow-stone-700/40 transition-all duration-500"
                    >
                      {/* Background */}
                      <div
                        className={`${proj.bg} w-full h-40 bg-cover bg-center group-hover:scale-105 transition-transform duration-500`}
                      />

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-white group-hover: transition-colors duration-300">
                          {proj.name}
                        </h3>
                        <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                          {proj.des}
                        </p>
                      </div>

                      {/* Hover Glow Border */}
                      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:transition-all duration-500 pointer-events-none" />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
