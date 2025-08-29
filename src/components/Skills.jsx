function Skills() {
  return (
    <section id="skills" className="bg-stone-900 h-[100vh] flex justify-center">
      <div className=" bg-stone-300/10 w-350 h-[80vh] mx-auto my-auto px-4 rounded-3xl">
        {/* Text Content */}
        <div className="m-10">
          <h2 className="text-6xl font-bold text-white mb-6 text-center">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-10 h-100 m-4">

          {/* Grid Left: Frontend */}
          <div className="grid grid-cols-4 grid-rows-4 gap-5 h-full">
            {/* Header */}
            <div className="col-span-4 flex items-center justify-center rounded-[50px] bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl mb-2">
              <h1 className="text-3xl font-bold text-white glow-hover-tex">Frontend Tech Stack</h1>
            </div>

            {/* square Icons */}
            <div className="col-span-2 row-span-2 flex items-center justify-center rounded-[50px] bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-left">
              <img src="/logos/react.png" alt="React" className="w-40 h-40" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/vue.png" alt="Vue" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/Bootstrap.png" alt="Bootstrap" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/tailwind.png" alt="Tailwind" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/html.png" alt="HTML" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-left">
              <img src="/logos/css.png" alt="CSS" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/figma.png" alt="Figma" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-left">
              <img src="/logos/vite.png" alt="Vite" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/canva.png" alt="Canva" className="w-15 h-15" />
            </div>
            {/* Add more icons as needed */}
          </div>

          {/* Grid Middle: Backend */}
          <div className="grid grid-cols-4 grid-rows-4 gap-5 h-full">
            {/* Header */}
            <div className="col-span-4 flex items-center justify-center rounded-[50px] bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl mb-2">
              <h1 className="text-3xl font-bold text-white">Backend Tech Stack</h1>
            </div>
            
            {/* square Icons */}
            <div className="col-span-2 row-span-2 flex items-center justify-center rounded-[50px] bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-left">
              <img src="/logos/node.png" alt="Node.js" className="w-40 h-40" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/js.png" alt="Javascript" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/ts.png" alt="Typescript" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/ex.png" alt="Express.js" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/mongodb.png" alt="MongoDB" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-left">
              <img src="/logos/next.png" alt="Next" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/laravel.png" alt="Laravel" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-left">
              <img src="/logos/docker.png" alt="DOCKER" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/cloud.png" alt="GCP" className="w-15 h-15" />
            </div>
            {/* Add more icons as needed */}
          </div>

          {/* Grid Right: Tools & Designing */}
          <div className="grid grid-cols-4 grid-rows-4 gap-5 h-full">
            {/* Header */}
            <div className="col-span-4 flex items-center justify-center rounded-[50px] bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl mb-2">
              <h1 className="text-3xl font-bold text-white">Tools</h1>
            </div>

            {/* square Icons */}
            <div className="col-span-2 row-span-2 flex items-center justify-center rounded-[50px] bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-left">
              <img src="/logos/github.png" alt="Github" className="w-40 h-40" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/git.png" alt="Git" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/vscode.png" alt="vscode" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/postman.png" alt="Postman" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700 border-2 border-stone-500/10 drop-shadow-2xl hover-skills-right">
              <img src="/logos/npm.png" alt="npm" className="w-15 h-15" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
