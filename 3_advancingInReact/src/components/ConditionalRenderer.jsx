import React, { useState } from 'react'

const ConditionalRenderer = () => {
    const [x] = useState(true);
    const [y] = useState(false);

    const [name, setName] = useState("John");

    const [newName, setSecondName] = useState("Will")

    const ReplaceName = (firstName, secondName) => {
      setName(secondName);
      setSecondName(firstName);
    }

  return (
    <div>
        <h1>Would it be shown?</h1>
        {x && <p>If x is true, this will be shown</p>}
        {!y && <p>If y is false, this will be shown</p>}
        <h1>Testing the if in JSX</h1>
        {name === "John" ? (
          <div>
            <p>The name is John</p>
          </div>
        ) : (
          <div>
            <p>The name is {name}</p>
          </div>
        )}
        <button onClick={() => ReplaceName(name, newName)}>Change the name!</button>
    </div>
  )
}

export default ConditionalRenderer