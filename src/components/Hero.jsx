import { useEffect, useState } from "react";

function Hero() {

  const titles = ["Developer", "Designer", "Explorer", "Photographer", "Storyteller", "Dreamer"];
  const [scrollMessage, setScrollMessage] = useState("down");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {

      const scrollY = window.scrollY; // current scroll position
      const windowHeight = window.innerHeight; // visible screen height
      const fullHeight = document.body.scrollHeight; // total page height

      // If near bottom of the page → suggest scrolling UP
      if (scrollY + windowHeight >= fullHeight - 100) {
        setScrollMessage("up");
      }
      else if (scrollY <= 50) {
        // If near top of the page → suggest scrolling DOWN
        setScrollMessage("down");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length)
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="bg-[url(/ME.jpg)] bg-center bg-cover text-yellow-50 h-[100vh]">
      <div className="backdrop-blur-sm bg-green-950/10 w-120 h-64 p-10 rounded-2xl top-55 left-12 relative text-yellow-50">
        <h1 className="text-9xl font-medium">Hello</h1>
        <p className="text-xl">— it's Arnab Kumar Dutta, the <span className="text-[#6fffe9] text-shadow-[0px_0px_15px_#02c39a]">{titles[index]}</span></p>
      </div>

      <div className="backdrop-blur-sm bg-green-50/10 w-40 h-14 rounded-xl fixed top-165 left-330 text-yellow-50 flex items-center justify-center z-99 ">
        <p className="text-xl">
          {scrollMessage === "down" ? "Scroll Down" : "Scroll Up"}
        </p>
        <p className="mt-1 ml-1 text-2xl">
          {scrollMessage === "down" ? "↓" : "↑"}
        </p>
      </div>
    </section>
  );
}

export default Hero;
