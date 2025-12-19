import { Mesh } from 'three'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'


interface Props {
    position: [number, number, number];
    color?: string;
    hoverColor?: string;
    children?: React.ReactNode;
}

function Box({ position, color = 'lightblue', hoverColor = 'cornflowerblue', children }: Props) {
    const meshRef = useRef<Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((_state, delta) => {
        meshRef.current.rotation.x += delta * position[1] * 0.2
        meshRef.current.rotation.y += delta * position[0] * 0.2
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

export default Box