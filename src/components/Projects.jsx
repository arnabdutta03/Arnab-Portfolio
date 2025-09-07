import { useState, useRef, useEffect } from "react";

const projects = [
  {
    title: "Personal",
    description:
      "Creative self-built projects and experiments where I explored modern UI, animations, and full-stack concepts.",
    bg: "bg-[url('/pexels2.jpg')] bg-cover bg-center",
    personalProjects: [
      { name: "Nox Threads", bg: "bg-[url('/project/noxThreads.png')] bg-cover bg-center", des: "E-commerce platform for custom T-shirts." },
      { name: "Movie Discovery", bg: "bg-[url('/project/movieDiscovery.png')] bg-cover bg-center", des: "Browse and explore trending movies." },
      { name: "Code Canvas", bg: "bg-[url('/project/CodeCanvas.png')] bg-cover bg-center", des: "A Developer community platform." }
    ]
  },
  {
    title: "Showcase",
    description:
      "Skill-driven practice projects including dashboards, landing pages, and interactive apps built to sharpen my craft.",
    bg: "bg-[url('/pexels.jpg')] bg-cover bg-center",
    personalProjects: [
      { name: "Hungry Campus", bg: "bg-[url('/project/hungeryCampus.png')] bg-cover bg-center", des: "Smart food ticketing for college canteens." },
      { name: "Movie Discovery", bg: "bg-[url('/project/movieDiscovery.png')] bg-cover bg-center", des: "Browse and explore trending movies." },
      { name: "Sales Tracking", bg: "bg-[url('/project/Admin.png')] bg-cover bg-center", des: "Smart food ticketing for college canteens." }
    ]
  },
  {
    title: "Learning",
    description:
      "Hands-on projects from my learning journey — from small apps to design systems — reflecting my growth as a developer.",
    bg: "bg-[url('/pexels3.jpg')] bg-cover bg-center",
    personalProjects: [
      { name: "Nox Threads", bg: "bg-[url('/project/noxThreads.png')] bg-cover bg-center", des: "E-commerce platform for custom T-shirts." },
      { name: "Movie Discovery", bg: "bg-[url('/project/movieDiscovery.png')] bg-cover bg-center", des: "Browse and explore trending movies." },
      { name: "Hungry Campus", bg: "bg-[url('/project/hungeryCampus.png')] bg-cover bg-center", des: "Smart food ticketing for college canteens." }
    ]
  }
];

function Projects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [active, setActive] = useState(window.innerWidth < 640 ? null : 0);
  const [showDesc, setShowDesc] = useState(window.innerWidth < 640 ? null : 0);
  const [pending, setPending] = useState(null);

  // 🔽 Handle desktop transitions
  useEffect(() => {
    if (pending === null) return;

    setShowDesc(null); // hide current
    const timeout1 = setTimeout(() => setActive(pending), 500);
    const timeout2 = setTimeout(() => {
      setShowDesc(pending);
      setPending(null);
    }, 1000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [pending]);

  // 🔽 Handle resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setActive(mobile ? null : 0);
      setShowDesc(mobile ? null : 0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (i) => {
    if (i === active) return;
    setPending(i);
  };

  const DesktopProjects = () => (
    <section id="projects" className="bg-stone-900 min-h-[100vh] flex items-center justify-center px-6">
      <div className="bg-stone-300/10 w-350 h-[90vh] mx-auto my-auto px-4 rounded-3xl">
        <div className="m-10">
          <h2 className="text-6xl font-bold text-white mb-6 text-center">Projects</h2>
        </div>
        <div className="flex gap-4 w-full max-w-full overflow-hidden ml-3">
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`relative transition-all duration-700 ease-in-out rounded-3xl flex-shrink-0 ${active === i ? "w-[70%]" : "w-[13%]"} h-[500px] text-white shadow-lg`}
            >
              <div className={`absolute inset-0 ${p.bg} rounded-3xl bg-cover bg-center`} />
              <div className="absolute inset-0 bg-stone-900/35 border-2 border-stone-600/30 drop-shadow-2xl rounded-3xl" />

              <div className="absolute p-8 flex flex-col w-full h-full">
                <h2 className={`font-bold whitespace-nowrap transition-all duration-500 ease-in-out ${active === i ? "text-4xl mb-4 rotate-0 relative top-0 left-0 opacity-100" : "absolute -rotate-90 top-1/2 left-3 -translate-y-1/2 text-4xl opacity-100"}`}>
                  {p.title}
                </h2>

                <div className={`transition-all duration-500 text-justify ease-in-out overflow-hidden ${showDesc === i ? "opacity-100 translate-y-0 max-h-[300px]" : "opacity-0 translate-y-5 max-h-0"}`}>
                  <p className="text-lg max-w-md leading-relaxed">{p.description}</p>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 transition-all duration-500 ease-in-out ${showDesc === i ? "opacity-100 translate-y-0 h-[270px]" : "opacity-0 translate-y-5 max-h-0"}`}>
                  {p.personalProjects?.map((proj, idx) => (
                    <div key={idx} className="group relative rounded-2xl shadow-md overflow-hidden bg-stone-900/90 hover:shadow-xl hover:shadow-stone-700/40 transition-all duration-500">
                      <div className={`${proj.bg} w-full h-40 bg-cover bg-center group-hover:scale-105 transition-transform duration-500`} />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-white group-hover: transition-colors duration-300">{proj.name}</h3>
                        <p className="text-sm text-gray-300 mt-2 leading-relaxed">{proj.des}</p>
                      </div>
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

  const MobileProjects = () => {
    const containerRef = useRef(null);

    useEffect(() => {
      if (!isMobile) return;
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setShowDesc(null);
          setActive(null);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMobile]);

    return (
      <section id="projects" className="bg-stone-900 min-h-[0vh] flex flex-col items-center px-4 py-10">
        <div className="w-full max-w-sm bg-stone-300/10 rounded-3xl p-6">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Projects</h2>
          <div ref={containerRef} className="flex flex-col gap-4">
            {projects.map((p, i) => {
              const isOpen = showDesc === i;
              return (
                <div key={i} className="relative rounded-3xl bg-stone-900/70 overflow-hidden shadow-md">
                  <div className={`absolute inset-0 ${p.bg} bg-cover bg-center`} />
                  <div className="absolute inset-0 bg-stone-900/35 rounded-3xl" />

                  <div className="relative flex items-center justify-between p-4 cursor-pointer"
                       onClick={() => isOpen ? (setShowDesc(null), setActive(null)) : (setActive(i), setShowDesc(i))}>
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                    {!isOpen ? <img src="./down.png" alt="Expand" className="w-5 h-5 ml-2" /> : <img src="./down.png" alt="Expand" className="w-5 h-5 ml-2 rotate-180" />}
                  </div>

                  <div className={`relative z-10 transition-all duration-500 overflow-hidden px-4 pb-4 text-gray-200 ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="mb-4 text-justify">{p.description}</p>
                    <div className="flex flex-col gap-4">
                      {p.personalProjects?.map((proj, idx) => (
                        <div key={idx} className="relative rounded-2xl overflow-hidden bg-stone-900/90 shadow-md group">
                          <div className={`${proj.bg} w-full h-36 bg-cover bg-center group-hover:scale-105 transition-transform duration-500`} />
                          <div className="p-4">
                            <h4 className="text-lg font-semibold text-white">{proj.name}</h4>
                            <p className="text-sm text-gray-300 mt-1">{proj.des}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  return isMobile ? <MobileProjects /> : <DesktopProjects />;
}

export default Projects;
