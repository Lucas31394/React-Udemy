import React, { useState } from 'react'

const ConditionalRenderer = () => {
    const [x] = useState(true);
    const [y] = useState(false);

  return (
    <div>
        <h1>Would it be shown?</h1>
        {x && <p>If x is true, this will be shown</p>}
        {!y && <p>If y is false, this will be shown</p>}
    </div>
  )
}

export default ConditionalRenderer