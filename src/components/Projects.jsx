import React, { useState } from "react";

const projects = [
  {
    title: "Personal",
    description:
      "The all-in-one plan for banking, saving, investing, and travel. Home or away, local or global — move freely between countries and currencies",
    bg: "bg-[url('./pexels.jpg')] bg-cover bg-center",
  },
  {
    title: "Business",
    description:
      "For those who want an account that does more for their money — there’s ABC Business",
    bg: "bg-[url('./pexels2.jpg')] bg-cover bg-center",
  },
  {
    title: "Freelance",
    description:
      "For those who want an account that does more for their money — there’s ABC Freelance",
    bg: "bg-[url('./pexels3.jpg')] bg-cover bg-center",
  },{
    title: "Personal",
    description:
      "The all-in-one plan for banking, saving, investing, and travel. Home or away, local or global — move freely between countries and currencies",
    bg: "bg-[url('./pexels.jpg')] bg-cover bg-center",
  },
  {
    title: "Business",
    description:
      "For those who want an account that does more for their money — there’s ABC Business",
    bg: "bg-[url('./pexels2.jpg')] bg-cover bg-center",
  },
  {
    title: "Freelance",
    description:
      "For those who want an account that does more for their money — there’s ABC Freelance",
    bg: "bg-[url('./pexels3.jpg')] bg-cover bg-center",
  },
];

function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="bg-stone-900 min-h-[100vh] flex items-center justify-center px-6">

      <div className=" bg-stone-300/10 w-350 h-[90vh] mx-auto my-auto px-4 rounded-3xl ">
        {/* Text Content */}
        <div className="m-10">
          <h2 className="text-6xl font-bold text-white mb-6 text-center">
            Projects
          </h2>
        </div>

        <div className="flex gap-4 w-full max-w-full overflow-hidden">
          {projects.map((p, i) => (
            <div key={i} onClick={() => setActive(i)}
              className={`relative transition-all duration-700 ease-in-out rounded-3xl flex-shrink-0
              ${active === i ? "w-[65%]" : "w-[15%]"} h-[500px] text-white shadow-lg overflow-hidden`}>

              <div className={`absolute inset-0 ${p.bg} rounded-3xl`} />
              <div className="absolute inset-0 bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl rounded-3xl" />

              {/* Text Content */}
              <div className={`absolute p-8 flex flex-col justify-center transform transition-all duration-700 ease-in-out
                              ${active === i ? "translate-y-0 opacity-100" : "transform transition-all duration-700 translate-y-10 opacity-0 "}`}>

                <h2 className="text-4xl font-bold mb-4">{p.title}</h2>
                <p className="text-lg max-w-md leading-relaxed">{p.description}</p>
              </div>


              {/* Title for inactive cards */}
              {active !== i && (
                <h2 className="absolute -rotate-90 text-4xl font-semibold top-60 whitespace-nowrap">
                  {p.title}
                </h2>
              )}
            </div>
          )
          )}
        </div>

      </div>
    </section>
  );
}

export default Projects;
