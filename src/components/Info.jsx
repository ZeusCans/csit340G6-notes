import { useContext } from 'react'
import { SettingsContext } from './SettingsContext.js'

function Info({ name }) {
  const { largeText, setLargeText } = useContext(SettingsContext)

  return (
    <footer className="fixed bottom-7 left-8 z-10 text-[13px] text-[#949494]">
      <p>Created by {name}</p>
      <button
        type="button"
        onClick={() => setLargeText((previousLargeText) => !previousLargeText)}
        className="mt-3 cursor-pointer text-[15px] font-normal text-[#b83f45] underline"
      >
        {largeText ? 'Normal text' : 'Large text'}
      </button>
    </footer>
  )
}

export default Info