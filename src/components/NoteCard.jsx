import { memo, useContext, useState } from 'react'
import { SettingsContext } from './SettingsContext.js'

function NoteCard({ id, title, body, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { largeText } = useContext(SettingsContext)
  const titleClassName = largeText
    ? 'pr-8 text-[32px] font-normal break-words'
    : 'pr-8 text-[22px] font-normal break-words'
  const bodyClassName = largeText
    ? 'mt-3 text-[26px] break-words whitespace-pre-wrap text-[#4d4d4d]'
    : 'mt-3 text-[17px] break-words whitespace-pre-wrap text-[#4d4d4d]'

  return (
    <div>
      <h3 className={titleClassName}>{title}</h3>
      {isExpanded && (
        <p className={bodyClassName}>{body}</p>
      )}
      <button
        type="button"
        onClick={() => setIsExpanded((previousIsExpanded) => !previousIsExpanded)}
        className="mt-3 cursor-pointer text-[15px] font-normal text-[#b83f45] underline"
      >
        Show {isExpanded ? 'less' : 'more'}
      </button>
      <button
        type="button"
        onClick={() => onDelete(id)}
        className="absolute top-4 right-5 cursor-pointer text-[26px] leading-none text-[#949494] hover:text-[#c18585]"
      >
        ×
      </button>
    </div>
  )
}

export default memo(NoteCard)