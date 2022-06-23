import React from 'react'

const Input = ({className, type, onChange, placeholder, value}) => {
  return (
    <input className={className} type={type} onChange={onChange} value={value} placeholder={placeholder}/>
  )
}

export default Input