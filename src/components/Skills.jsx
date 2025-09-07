import { useEffect, useState } from "react";

function Skills() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // 🔽 Handle resize (switch between mobile & desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DesktopSkills = () => (
    <section id="skills" className="bg-stone-900 min-h-[100vh] flex items-center justify-center px-6">
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
            <div className="col-span-4 flex items-center justify-center rounded-[50px] bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl mb-2">
              <h1 className="text-3xl font-bold text-white glow-hover-tex">Frontend Tech Stack</h1>
            </div>

            {/* square Icons */}
            <div className="col-span-2 row-span-2 flex items-center justify-center rounded-[50px] bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-left">
              <img src="./logos/react.png" alt="React" className="w-40 h-40" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/vue.png" alt="Vue" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/photoshop.png" alt="Photoshop" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/tailwind.png" alt="Tailwind" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/html.png" alt="HTML" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-left">
              <img src="./logos/css.png" alt="CSS" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/figma.png" alt="Figma" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-left">
              <img src="./logos/vite.png" alt="Vite" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/canva.png" alt="Canva" className="w-15 h-15" />
            </div>
            {/* Add more icons as needed */}
          </div>

          {/* Grid Middle: Backend */}
          <div className="grid grid-cols-4 grid-rows-4 gap-5 h-full">
            {/* Header */}
            <div className="col-span-4 flex items-center justify-center rounded-[50px] bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl mb-2">
              <h1 className="text-3xl font-bold text-white">Backend Tech Stack</h1>
            </div>

            {/* square Icons */}
            <div className="col-span-2 row-span-2 flex items-center justify-center rounded-[50px] bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-left">
              <img src="./logos/node.png" alt="Node.js" className="w-40 h-40" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/js.png" alt="Javascript" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/ts.png" alt="Typescript" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/ex.png" alt="Express.js" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/mongodb.png" alt="MongoDB" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-left">
              <img src="./logos/next.png" alt="Next" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/laravel.png" alt="Laravel" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-left">
              <img src="./logos/docker.png" alt="DOCKER" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/cloud.png" alt="GCP" className="w-15 h-15" />
            </div>
            {/* Add more icons as needed */}
          </div>

          {/* Grid Right: Tools & Designing */}
          <div className="grid grid-cols-4 grid-rows-4 gap-5 h-full">
            {/* Header */}
            <div className="col-span-4 flex items-center justify-center rounded-[50px] bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl mb-2">
              <h1 className="text-3xl font-bold text-white">Tools</h1>
            </div>

            {/* square Icons */}
            <div className="col-span-2 row-span-2 flex items-center justify-center rounded-[50px] bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-left">
              <img src="./logos/github.png" alt="Github" className="w-40 h-40" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/git.png" alt="Git" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/vscode.png" alt="vscode" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/postman.png" alt="Postman" className="w-15 h-15" />
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-2xl hover-skills-right">
              <img src="./logos/npm.png" alt="npm" className="w-15 h-15" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );

  const MobileSkills = () => (
    <section id="skills" className="bg-stone-900 min-h-[100vh] flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-stone-300/10 w-full max-w-[350px] px-4 py-8 rounded-3xl">

        {/* Section Title */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Skills</h2>
        </div>

        {/* Frontend Stack */}
        <div className="mb-8">
          <h3 className=" text-2xl font-bold text-white mb-4 text-center rounded-[50px] bg-stone-700/60 border-2 border-stone-600/30 py-2 drop-shadow-2xl">
            Frontend Tech Stack
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <img src="./logos/react.png" alt="React" className="w-10 h-10 mx-auto" />
            <img src="./logos/vue.png" alt="Vue" className="w-10 h-10 mx-auto" />
            <img src="./logos/photoshop.png" alt="Photoshop" className="w-10 h-10 mx-auto" />
            <img src="./logos/tailwind.png" alt="Tailwind" className="w-10 h-10 mx-auto" />
            <img src="./logos/html.png" alt="HTML" className="w-10 h-10 mx-auto" />
            <img src="./logos/css.png" alt="CSS" className="w-10 h-10 mx-auto" />
            <img src="./logos/figma.png" alt="Figma" className="w-10 h-10 mx-auto" />
            <img src="./logos/vite.png" alt="Vite" className="w-10 h-10 mx-auto" />
            <img src="./logos/canva.png" alt="Canva" className="w-10 h-10 mx-auto" />
          </div>
        </div>

        {/* Backend Stack */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center rounded-[50px] bg-stone-700/60 border-2 border-stone-600/30 py-2 drop-shadow-2xl">
            Backend Tech Stack
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <img src="./logos/node.png" alt="Node.js" className="w-10 h-10 mx-auto" />
            <img src="./logos/js.png" alt="Javascript" className="w-10 h-10 mx-auto" />
            <img src="./logos/ts.png" alt="Typescript" className="w-10 h-10 mx-auto" />
            <img src="./logos/ex.png" alt="Express.js" className="w-10 h-10 mx-auto" />
            <img src="./logos/mongodb.png" alt="MongoDB" className="w-10 h-10 mx-auto" />
            <img src="./logos/next.png" alt="Next" className="w-10 h-10 mx-auto" />
            <img src="./logos/laravel.png" alt="Laravel" className="w-10 h-10 mx-auto" />
            <img src="./logos/docker.png" alt="Docker" className="w-10 h-10 mx-auto" />
            <img src="./logos/cloud.png" alt="GCP" className="w-10 h-10 mx-auto" />
          </div>
        </div>

        {/* Tools Stack */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center rounded-[50px] bg-stone-700/60 border-2 border-stone-600/30 py-2 drop-shadow-2xl">
            Tools
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <img src="./logos/github.png" alt="Github" className="w-10 h-10 mx-auto" />
            <img src="./logos/git.png" alt="Git" className="w-10 h-10 mx-auto" />
            <img src="./logos/vscode.png" alt="VSCode" className="w-10 h-10 mx-auto" />
            <img src="./logos/postman.png" alt="Postman" className="w-10 h-10 mx-auto" />
            <img src="./logos/npm.png" alt="npm" className="w-10 h-10 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );


  return isMobile ? <MobileSkills /> : <DesktopSkills />;
}

export default Skills;
