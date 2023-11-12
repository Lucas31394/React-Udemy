import React from 'react'

const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>This is the container title</h2>
        {children}
        <p>{myValue}</p>
    </div>
  )
}

export default Container