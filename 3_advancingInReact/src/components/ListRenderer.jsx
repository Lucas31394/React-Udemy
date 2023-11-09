import { useState } from "react"

const ListRenderer = () => {

    const [list] = useState(["Lucas", "Thiago", "Gabriel", "Pedro"])

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRenderer