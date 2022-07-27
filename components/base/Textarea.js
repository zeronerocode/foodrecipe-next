import React from 'react'

const Textarea = ({className,onChange,name, placeholder, value, rows, defaultValue}) => {
  return (
    <textarea 
    className={className} 
    onChange={onChange} 
    name={name}
    rows={rows} 
    value={value} 
    placeholder={placeholder}
    defaultValue={defaultValue}
    >
    </textarea>
  )
}

export default Textarea