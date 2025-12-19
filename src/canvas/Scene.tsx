import { Canvas, useFrame } from '@react-three/fiber'
import LinkCard from '../components/LinkCard'
import { Typewriter } from '../components/Typewriter'
import Box from '../components/Box'
import { ScrollControls, Scroll, useScroll } from '@react-three/drei'
import Countdown from '../components/Countdown'
import './Scene.css'

function SceneContent() {
    const scroll = useScroll()
    const titles = [
        "Scale AI: GenAI Tech Advisor",
        "MSCS at Georgia Tech",
        "UCLA Math of Computation BS",
        "Full Stack Engineer"
    ];

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
            <Box position={[1, 3, -1]} />
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
                position={[5, -1, -12]}
                color='#fecdae'
                hoverColor='#d6834f'
            />
            <Box
                position={[1, -13, -1]}
                color='#deaefe'
                hoverColor='#97d'
            />
            <Scroll html style={{ width: '100vw' }}>
                <main style={{ position: 'relative', height: '400vh', zIndex: 2, pointerEvents: 'none' }}>
                    <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', userSelect: 'none' }}>
                        <h1 style={{ pointerEvents: 'auto', color: 'white', fontSize: 'max(12vw, 16px)' }}>Erik Maung</h1>
                        <p style={{ pointerEvents: 'auto', color: 'lightgray', fontSize: 'max(3vw, 16px)' }}>
                            <Typewriter phrases={titles} showCursor={true} />
                        </p>
                    </section>

                    {/* Use Format for Countdown: 2025-12-31T23:59:59 */}
                    <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'GeneralSans' }}>
                        <Countdown targetDate='2025-12-31T23:59:59' />
                        <p style={{ pointerEvents: 'auto', color: 'white', fontSize: 'max(3vw, 16px)' }}>January 1st, 2026</p>
                    </section>

                    <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 style={{ color: 'white', fontSize: 'max(4vw, 32px)', marginBottom: '2rem' }}>Let's Connect</h2>

                        <div style={{ width: '90%', maxWidth: '500px', fontFamily: 'GeneralSans' }}>
                            <LinkCard
                                href="mailto:erikmaung1@gmail.com"
                                label="Email"
                                subtext="erikmaung1 [at] gmail [dot] com"
                            />
                            <LinkCard
                                href="https://www.linkedin.com/in/erik-maung/"
                                label="LinkedIn"
                                subtext="Professional network & experience"
                            />
                            <LinkCard
                                href="https://github.com/erikmaung"
                                label="GitHub"
                                subtext="Source code & open source projects"
                            />
                        </div>
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