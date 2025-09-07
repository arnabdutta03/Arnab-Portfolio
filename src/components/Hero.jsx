import { useEffect, useState } from "react";

function Hero() {
  const titles = ["Designer", "Developer", "Shutterbug", "Explorer", "Storyteller", "Dreamer"];
  const [scrollMessage, setScrollMessage] = useState("down");
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // 🔽 Detect scroll position (to toggle scroll message)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      if (scrollY + windowHeight >= fullHeight - 100) {
        setScrollMessage("up");
      } else if (scrollY <= 50) {
        setScrollMessage("down");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔽 Rotate titles
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // 🔽 Handle resize (switch between mobile & desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Desktop Hero
  const DesktopHero = () => (
    <section id="home" className="bg-[url(/ME.jpg)] bg-center bg-cover text-yellow-50 h-[100vh]">
      <div className="backdrop-blur-sm bg-green-950/10 max-w-108 h-65 p-10 rounded-2xl top-55 left-12 relative text-yellow-50">
        <h1 className="text-9xl font-medium pb-2">Hello</h1>
        <p className="text-xl">
          — it's Arnab Kr. Dutta, the{" "}
          <span className="bg-stone-700/80 rounded-xl p-2">{titles[index]}</span>
        </p>
      </div>

      <div className="backdrop-blur-sm bg-green-50/10 w-40 h-14 rounded-xl fixed top-165 left-330 text-yellow-50 flex items-center justify-center z-99 ">
        <p className="text-xl">{scrollMessage === "down" ? "Scroll Down" : "Scroll Up"}</p>
        <p className="mt-1 ml-1 text-2xl">{scrollMessage === "down" ? "↓" : "↑"}</p>
      </div>
    </section>
  );

  // ✅ Mobile Hero
  const MobileHero = () => (
    <section
      id="home"
      className="bg-[url(/ME.jpg)] bg-center bg-cover text-yellow-50 min-h-[100vh] flex flex-col justify-center items-center px-4"
    >
      <h1 className="backdrop-blur-sm bg-green-950/20  p-4 rounded-2xl text-6xl font-semibold mb-8">
        Hello
      </h1>

      <div className="backdrop-blur-sm bg-green-950/20 w-85 max-w-sm p-6 rounded-xl text-center mt-80 ">
        <p className="text-md">
          — it's Arnab Kr. Dutta, the{" "}
          <span className="bg-stone-700/80 rounded-lg px-2 py-1">{titles[index]}</span>
        </p>
      </div>

      {/* <div className="z-99 fixed mt-8 backdrop-blur-sm bg-green-50/20 px-3 py-2 top-142 left-68 rounded-lg flex items-center justify-center">
        <p className="text-base">{scrollMessage === "down" ? "Scroll ↓" : "Scroll ↑"}</p>
      </div> */}

    </section>
  );


  return isMobile ? <MobileHero /> : <DesktopHero />;
}

export default Hero;
