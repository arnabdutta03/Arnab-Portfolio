import { useEffect, useState } from "react";


const RotatingTitle = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // 🔽 Handle resize (switch between mobile & desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const titles = [
    "Designer",
    "Explorer",
    "Developer",
    "Decoder",
    "Shutterbug",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);

  }, []);

  const DesktopRotatingTitle = () => (
    <p className="text-xl">
      — it's Arnab Kr. Dutta, the{" "}
      <span className="bg-stone-700/80 rounded-xl p-2">{titles[index]}</span>
    </p>
  );

  const MobileRotatingTitle = () => (
    <p className="text-md">
      — it's Arnab Kr. Dutta, the{" "}
      <span className="bg-stone-700/80 rounded-lg px-2 py-1">{titles[index]}</span>
    </p>
  );

  return isMobile ? <MobileRotatingTitle /> : <DesktopRotatingTitle />;
};

export default RotatingTitle;