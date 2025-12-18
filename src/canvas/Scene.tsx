import { Mesh } from 'three'
import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Scroll, useScroll } from '@react-three/drei'
import Countdown from '../components/Countdown'

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

function SceneContent() {
    const scroll = useScroll()

    useFrame((state) => {
        // scroll.offset goes from 0 to 1 as you scroll
        const offset = scroll.offset

        // We move the camera down as the user scrolls
        state.camera.position.y = -offset * 10
    })

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Box position={[2, 3, -1]} />
            <Box
                position={[-2, -4, -4]}
                color='#feaebd'
                hoverColor='#e75973'
            />
            <Box
                position={[-1, -12, -12]}
                color='#fefbae'
                hoverColor='#caad4d'
            />
            <Box position={[-3, 2, -9]}
                color='#aaecc8'
                hoverColor='#5b8e72'
            />
            <Box
                position={[5, -3, -12]}
                color='#fecdae'
                hoverColor='#d6834f'
            />
            <Box
                position={[1, -13, -1]}
                color='#deaefe'
                hoverColor='#97d'
            />
            <Scroll html style={{ width: '100vw' }}>
                <main style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
                    <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1 style={{ pointerEvents: 'auto', color: 'white', fontSize: '12vw' }}>Erik Maung</h1>
                        <p style={{ pointerEvents: 'auto', color: 'lightgray', fontSize: '3vw' }}>Computing Systems</p>
                    </section>

                    {/* Use Format for Countdown: 2025-12-31T23:59:59 */}
                    <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'GeneralSans' }}>
                        <Countdown targetDate='2025-12-31T23:59:59' />
                        <p style={{ pointerEvents: 'auto', color: 'white', fontSize: '3vw' }}>January 1st, 2026</p>
                    </section>
                    <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'GeneralSans' }}>
                        <p style={{ pointerEvents: 'auto', color: 'white', fontSize: '6vw' }}>Coming Soon</p>
                    </section>
                </main>
            </Scroll>
        </>

    )
}

export const Scene = () => (
    <Canvas>
        <ScrollControls pages={3} damping={0.1}>
            <SceneContent />
        </ScrollControls>
    </Canvas>
)