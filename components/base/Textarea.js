import React from 'react'

const Textarea = ({className,onChange, placeholder, value, rows}) => {
  return (
    <textarea 
    className={className} 
    onChange={onChange} 
    rows={rows} 
    value={value} 
    placeholder={placeholder}>
    </textarea>
  )
}

export default Textarea