import { useEffect, useState } from "react";

function Header() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeBar, setActiveBar] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const logging = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)
            console.log(logging)
            setActiveBar(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
          }
        });
      },
      { threshold: 0.5 } // section is "active" if 50% visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">

      <nav className="backdrop-blur-sm bg-black/10 px-8 py-3 rounded-full shadow-lg flex gap-10 font-medium text-stone-300">

        <img src="/star.png" alt="star" width={20} />
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActiveBar(link.name)}
            className={`hover:text-white hover:transition-colors duration-500 glow-hover ${activeBar === link.name ? "text-white glow-hover-text" : "" }`}
          >
            {link.name}
          </a>
        ))}
        <img src="/star.png" alt="star" width={20} className="glow-hover-text" />
      </nav>
    </header>
  );
}
export default Header;
