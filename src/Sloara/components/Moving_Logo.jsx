// import React from "react"
// import { Canvas, useFrame } from "@react-three/fiber"
// import { OrbitControls } from "@react-three/drei"

// export function MovingLogo({ position, texture }) {
//   const ref = React.useRef()
//   useFrame((state, delta) => {
//     ref.current.rotation.x += delta * 0.5
//     ref.current.rotation.y += delta * 0.5
//   })

//   return (
//     <mesh ref={ref} position={position}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={"#00ADB5"} />
//     </mesh>
//   )
// }




import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Scene() {
  return (
    <Canvas>
      <ambientLight />
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <OrbitControls />
    </Canvas>
  )
}
