import { useState, useEffect, useRef } from 'react'
import { SpiralAnimation } from './SpiralAnimation'

export function SpiralDemo({ onFinish }: { onFinish: () => void }) {
  const [startVisible, setStartVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartVisible(true)

      setTimeout(() => {
        onFinish()
      }, 4000)
    }, 15000)

    return () => clearTimeout(timer)
  }, [onFinish])

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300); 
    return () => clearTimeout(timer);
  }, []);



   const [showHeading, setShowHeading] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const handleAnimationEnd = () => {
    setShowHeading(true);
  };

  useEffect(() => {
    if (showHeading && headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { scale: 0.3, opacity: 0 },
        { scale: 1.3, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" }
      );
    }
  }, [showHeading]);
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black">
      {/* Spiral Animation */}
      <div className="absolute inset-0">
        <SpiralAnimation  />
      </div>


      {/* Simple Elegant Text Button with Pulsing Effect */}
      <div
        className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
          transition-all duration-1500 ease-out
          ${startVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        <h2
          className={`
        text-white text-2xl tracking-[0.2em] uppercase font-extralight
        transition-all duration-1500 ease-in-out
        hover:tracking-[0.3em] animate-pulse
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
      `}
        >
          Slora.Ai
        </h2>
      </div>
    </div>
  )
}
