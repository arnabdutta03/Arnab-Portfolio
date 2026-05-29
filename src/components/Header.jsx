import { useEffect, useState } from "react";

function Header() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeBar, setActiveBar] = useState("Home");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // detect active section
  useEffect(() => {

    const handleScroll = () => {

      const sections = document.querySelectorAll("section[id]");


      sections.forEach((section) => {
        const top = section.offsetTop - 200;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          const matched = navLinks.find(
            (link) => link.href === `#${id}`
          );

          if (matched) {
            setActiveBar(matched.name);
          }
        }
      });

      if (window.scrollY < 50) {
        setActiveBar("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  // ✅ Desktop Header
  const DesktopHeader = () => (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">

      <nav className="backdrop-blur-sm bg-black/10 px-8 py-3 rounded-full shadow-lg flex gap-10 font-medium text-stone-300">

        <img src="./star.png" alt="star" width={20} />
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActiveBar(link.name)}
            className={`hover:text-white hover:transition-colors duration-500 glow-hover ${activeBar === link.name ? "text-white glow-hover-text" : ""}`}
          >
            {link.name}
          </a>
        ))}
        <img src="./star.png" alt="star" width={20} />
      </nav>
    </header>
  );

  // ✅ Mobile Header
  const MobileHeader = () => (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full shadow-lg flex gap-4 font-medium text-stone-300">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActiveBar(link.name)}
            className={`text-xs hover:text-white hover:transition-colors duration-500 ${activeBar === link.name ? "text-white glow-hover-text" : ""
              }`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}

export default Header;


https://github.com/arnabdutta03/Arnab-Portfolio.git