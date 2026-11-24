import { useState } from 'react'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
import { SettingsContext } from './components/SettingsContext.js'

function App() {
  const [largeText, setLargeText] = useState(false)

  return (
    <SettingsContext.Provider value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="Cansancio, Zeus B." />
      </div>
    </SettingsContext.Provider>
  )
}

export default App