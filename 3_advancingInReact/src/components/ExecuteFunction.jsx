import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Click here to execute the function.</button>
    </div>
  )
}

export default ExecuteFunction