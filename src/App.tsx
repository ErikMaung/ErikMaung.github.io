import './App.css'
import Scene from './canvas/Scene.tsx'
import Countdown from './components/Countdown.tsx'

function App() {
  return (
    <div id="app-container" style={{ width: '100vw', height: '200vh', background: 'linear-gradient(#111, #113)' }}>
      <div id="canvas-container" style={{ width: '100vw', height: '200vh', position: 'absolute' }}>
        <Scene />
      </div>

      <main style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
        <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ pointerEvents: 'auto', color: 'white', fontSize: '12vw' }}>Erik Maung</h1>
          <p style={{ pointerEvents: 'auto', color: 'lightgray', fontSize: '3vw' }}>Computing Systems</p>
        </section>

        {/* Use Format for Countdown: 2025-12-31T23:59:59 */}
        <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'GeneralSans' }}>
          <Countdown targetDate='2025-12-31T23:59:59'/>
          <p style={{ pointerEvents: 'auto', color: 'white', fontSize: '2vw' }}>January 1st, 2026&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;12:00am PST</p>
        </section>
      </main>
    </div>
  )
}

export default App
