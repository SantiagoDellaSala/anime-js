import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import "./App.css";

function App() {
  const boxRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const timeline = anime.timeline({
      easing: "easeOutExpo",
      duration: 1000,
    });

    timeline.add({
      targets: titleRef.current,
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 800,
    });

    timeline.add(
      {
        targets: boxRef.current,
        translateX: [ -300, 0 ],
        rotate: '1turn',
        backgroundColor: "#00FFAA",
        scale: [0.5, 1.2],
        duration: 1200,
      },
      '-=400'
    );

    timeline.add({
      targets: boxRef.current,
      translateY: [
        { value: -20, duration: 200 },
        { value: 0, duration: 200 },
        { value: -10, duration: 150 },
        { value: 0, duration: 150 },
      ],
      easing: "easeOutQuad",
    });
  }, []);

  return (
    <div className="container">
      <h1 ref={titleRef}>Prueba de Anime.js 🎉</h1>
      <div ref={boxRef} className="box"></div>
    </div>
  );
}

export default App;
