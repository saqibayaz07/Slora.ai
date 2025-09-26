import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-black text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 w-full bg-black/80 backdrop-blur-md z-50 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav className="flex gap-4">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} />
          {/* Multiple moving cubes/logos */}
          <MovingLogo position={[-2, 0, 0]} />
          <MovingLogo position={[2, 1, -1]} />
          <MovingLogo position={[0, -2, 1]} />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
        <p className="text-lg text-gray-300 max-w-lg">
          Animated background with moving logos and sticky header.
        </p>
      </div>
    </section>
  )
}