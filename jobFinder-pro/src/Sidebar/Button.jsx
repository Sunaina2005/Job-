import React from 'react'

const Button = ({onClickHandler, value, title}) => {
  return (
   <Button onClick={onClickHandler} value={value} className={`px-4 py-1 border text-base hover:bg-blue hover:text-white`}>{title}</Button>
  )
}

export default Button