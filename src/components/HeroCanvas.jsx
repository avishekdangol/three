import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { PropTypes } from "prop-types"

import CanvasLoader from './CanvasLoader'

const Model = ({ isMobile }) => {
  const canvas = useGLTF('./gaming_desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor="black"
      />
      <pointLight intensity={1}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={canvas.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, 0, -2.2] : [0, 0, -1.5]}
        rotation={[0, 0.2, -0.15]}
      />
    </mesh>
  )
}

Model.propTypes = {
  isMobile: PropTypes.bool.isRequired
}

const HeroCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = event => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      className="cursor-grab"
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Model isMobile = { isMobile }/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default HeroCanvas