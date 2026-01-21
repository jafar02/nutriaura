import { useEffect, useState } from "react";

const slides = [
  "/banners/banner1.png",
  "/banners/banner2.png",
  "/banners/banner3.png",
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        marginLeft: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
      }}
    >
      <img
        src={slides[index]}
        alt="NutriAura Banner"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "520px",   
          display: "block",
          objectFit: "contain", 
        }}
      />
    </div>
  );
};

export default HeroSlider;
