import React, { useEffect, useState } from "react";

export default function App() {
  const [lavanyas, setLavanyas] = useState([]);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lavanyas.length >= 60) {
        setFilled(true);
        clearInterval(interval);
        return;
      }

      const randomX = Math.random() * 90 + "%";
      const randomY = Math.random() * 90 + "%";
      const randomSize = Math.random() * 1.5 + 1 + "rem";
      const randomOpacity = Math.random() * 0.8 + 0.2;

      setLavanyas((prev) => [
        ...prev,
        {
          id: Math.random(),
          x: randomX,
          y: randomY,
          size: randomSize,
          opacity: randomOpacity,
        },
      ]);
    }, 600);

    return () => clearInterval(interval);
  }, [lavanyas]);

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 overflow-hidden flex justify-center items-center">
      {/* Central “Lavanya” */}
      <h1 className="text-6xl font-serif text-white drop-shadow-lg animate-pulse">
        Lavanya
      </h1>

      {/* Random “Lavanya” instances */}
      {lavanyas.map((l) => (
        <span
          key={l.id}
          className="absolute text-white font-semibold transition-opacity duration-1000 ease-in-out"
          style={{
            left: l.x,
            top: l.y,
            fontSize: l.size,
            opacity: l.opacity,
            fontFamily: "cursive",
            textShadow: "0 2px 8px rgba(255, 255, 255, 0.8)",
          }}
        >
          Lavanya
        </span>
      ))}

      {/* Optional soft overlay once full */}
      {filled && (
        <div className="absolute inset-0 bg-pink-200/20 backdrop-blur-sm flex justify-center items-center">
          <h2 className="text-4xl text-white font-serif animate-pulse">
            💗 Filled with Lavanya 💗
          </h2>
        </div>
      )}
    </div>
  );
}
