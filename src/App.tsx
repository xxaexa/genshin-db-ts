import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Artifact, Character, Weapon } from './pages'
import { Navbar } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="artifact" element={<Artifact />} />
        <Route path="character" element={<Character />} />
        <Route path="weapon" element={<Weapon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
