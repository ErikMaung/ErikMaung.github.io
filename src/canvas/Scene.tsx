import { Mesh } from 'three'
import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

interface Props {
    position: [number, number, number];
    color: string;
    hoverColor: string;
    children?: React.ReactNode;
}

function Box({ position, color, hoverColor, children }: Props) {
    const meshRef = useRef<Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((_state, delta) => {
        meshRef.current.rotation.x += delta
        meshRef.current.rotation.y += delta * 1.5
    })

    return (
        <mesh
            ref={meshRef}
            position={position}
            scale={active ? 2.4 : 1.2}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            {children ?? <boxGeometry args={[1, 1, 1]} />}
            <meshStandardMaterial color={hovered ? hoverColor : color} />
        </mesh>
    )
}

function Scene() {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Box
                position={[0, 12, -14]}
                color='lightblue'
                hoverColor='cornflowerblue'
            />
            <Box
                position={[0, 2, -14]}
                color='lightblue'
                hoverColor='cornflowerblue'
            />
            <Box
                position={[0, -3, -12]}
                color='#deaefe'
                hoverColor='#97d'
            />
            <Box
                position={[0, -11, -12]}
                color='#deaefe'
                hoverColor='#97d'
            />
        </Canvas>

    )
}

export default Scene