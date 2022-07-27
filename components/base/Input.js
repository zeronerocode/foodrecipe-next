import React from 'react'

const Input = ({className, type, onChange, name, placeholder, value, defaultValue}) => {
  return (
    <input className={className} name={name} type={type} onChange={onChange} value={value} defaultValue={defaultValue} placeholder={placeholder}/>
  )
}

export default Input