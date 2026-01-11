import { useMemo } from 'react';
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

    const holidayData = [
        { date: '2026-01-01T00:00:00', name: "New Year's Day", textDate: "(Jan. 1st)", msg: "Happy New Year!" },
        { date: '2026-01-19T00:00:00', name: "MLK Day", textDate: "(Jan. 19th)", msg: "Honoring Dr. King's Legacy" },
        { date: '2026-02-14T00:00:00', name: "Valentine's Day", textDate: "(Feb. 14th)", msg: "Happy Valentine's Day!" },
        { date: '2026-02-16T00:00:00', name: "Presidents' Day", textDate: "(Feb. 16th)", msg: "Honoring the Presidency" },
        { date: '2026-02-17T00:00:00', name: "Lunar New Year", textDate: "(Feb. 17th)", msg: "Happy Lunar New Year!" },
        { date: '2026-03-03T00:00:00', name: "Holi", textDate: "(Mar. 3rd)", msg: "Happy Holi!" },
        { date: '2026-03-17T00:00:00', name: "St. Patrick's Day", textDate: "(Mar. 17th)", msg: "Happy St. Patrick's!" },
        { date: '2026-03-20T00:00:00', name: "Eid al-Fitr", textDate: "(Mar. 20th)", msg: "Eid Mubarak!" },
        { date: '2026-03-31T00:00:00', name: "Cesar Chavez Day", textDate: "(Mar. 31st)", msg: "Sí, Se Puede!" },
        { date: '2026-04-01T00:00:00', name: "April Fool's Day", textDate: "(Apr. 1st)", msg: "April Fool's Day" },
        { date: '2026-04-05T00:00:00', name: "Easter Sunday", textDate: "(Apr. 5th)", msg: "Happy Easter!" },
        { date: '2026-04-12T00:00:00', name: "Orthodox Easter", textDate: "(Apr. 12th)", msg: "Happy Easter!" },
        { date: '2026-04-22T00:00:00', name: "Earth Day", textDate: "(Apr. 22nd)", msg: "Happy Earth Day!" },
        { date: '2026-05-05T00:00:00', name: "Cinco de Mayo", textDate: "(May 5th)", msg: "¡Feliz Cinco de Mayo!" },
        { date: '2026-05-10T00:00:00', name: "Mother's Day", textDate: "(May 10th)", msg: "Happy Mother's Day!" },
        { date: '2026-05-25T00:00:00', name: "Memorial Day", textDate: "(May 25th)", msg: "Remembering our Heroes" },
        { date: '2026-05-27T00:00:00', name: "Eid al-Adha", textDate: "(May 27th)", msg: "Eid Mubarak!" },
        { date: '2026-06-19T00:00:00', name: "Juneteenth", textDate: "(Jun. 19th)", msg: "Happy Juneteenth!" },
        { date: '2026-06-21T00:00:00', name: "Father's Day", textDate: "(Jun. 21st)", msg: "Happy Father's Day!" },
        { date: '2026-07-04T00:00:00', name: "Independence Day", textDate: "(Jul. 4th)", msg: "Happy 4th of July!" },
        { date: '2026-09-07T00:00:00', name: "Labor Day", textDate: "(Sep. 7th)", msg: "Happy Labor Day!" },
        { date: '2026-10-12T00:00:00', name: "Indigenous Peoples' Day", textDate: "(Oct. 12th)", msg: "Honoring Heritage" },
        { date: '2026-10-31T00:00:00', name: "Halloween", textDate: "(Oct. 31st)", msg: "Happy Halloween!" },
        { date: '2026-11-08T00:00:00', name: "Diwali", textDate: "(Nov. 8th)", msg: "Happy Diwali!" },
        { date: '2026-11-11T00:00:00', name: "Veterans Day", textDate: "(Nov. 11th)", msg: "Thank you for your service!" },
        { date: '2026-11-26T00:00:00', name: "Thanksgiving", textDate: "(Nov. 26th)", msg: "Happy Thanksgiving!" },
        { date: '2026-12-04T00:00:00', name: "Start of Hanukkah", textDate: "(Dec. 4th)", msg: "Chag Sameach!" },
        { date: '2026-12-25T00:00:00', name: "Christmas Day", textDate: "(Dec. 25th)", msg: "Merry Christmas!" },
        { date: '2026-12-31T23:59:59', name: "New Year's Eve", textDate: "(Dec. 31st)", msg: "Happy New Year 2027!" },
    ];

    const activeHoliday = useMemo(() => {
        const now = new Date();
        return holidayData.find(h => {
            const endOfHoliday = new Date(h.date);
            endOfHoliday.setHours(23, 59, 59);
            return now <= endOfHoliday;
        }) || holidayData[0];
    }, []);

    const isToday = new Date().toDateString() === new Date(activeHoliday.date).toDateString();

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

                    {/* Use Format for Countdown: 2025-12-31T23:59:59 */}
                    <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'GeneralSans', textAlign: 'center' }}>
                        {isToday ? (
                            <div style={{ pointerEvents: 'auto' }}>
                                <h2 style={{ color: 'white', fontSize: 'max(6vw, 24px)', margin: 0 }}>
                                    {activeHoliday.msg}
                                </h2>
                                <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 'max(1.5vw, 14px)', marginTop: '10px' }}>
                                    {activeHoliday.name} {activeHoliday.textDate}
                                </p>
                            </div>
                        ) : (
                            <div style={{ pointerEvents: 'auto' }}>
                                <Countdown targetDate={activeHoliday.date} />
                                <p style={{ color: 'white', fontSize: 'max(3vw, 16px)', marginTop: '20px' }}>
                                    until {activeHoliday.name} <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{activeHoliday.textDate}</span>
                                </p>
                            </div>
                        )}
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