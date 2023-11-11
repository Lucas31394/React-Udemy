import { useState } from "react"

const ListRenderer = () => {

    const [list] = useState(["Lucas", "Thiago", "Gabriel", "Pedro"])

    const [users] = useState([
      {id: 1, name: "Lucas", age: 29},
      {id: 2, name: "Thiago", age: 28},
      {id: 3, name: "Gabriel", age: 25},
      {id: 4, name: "Pedro", age: 23}
    ])

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li>
          ))}
        </ul>
    </div>
  )
}

export default ListRenderer