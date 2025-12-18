import './App.css'
import { Scene } from './canvas/Scene.tsx'

function App() {
  return (
    <div id="app-container" style={{ width: '100vw', height: '100vh', background: 'linear-gradient(#111, #113)' }}>
      <div id="canvas-container" style={{ width: '100vw', height: '100vh', position: 'absolute' }}>
        <Scene />
      </div>
    </div>
  )
}

export default App
