import { useEffect, useState } from 'react'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
import { SettingsContext } from './components/SettingsContext.js'

function App() {
  const [largeText, setLargeText] = useState(() => {
    const savedSetting = localStorage.getItem('largeText')

    return savedSetting ? JSON.parse(savedSetting) : false
  })

  useEffect(() => {
    localStorage.setItem('largeText', JSON.stringify(largeText))
  }, [largeText])

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