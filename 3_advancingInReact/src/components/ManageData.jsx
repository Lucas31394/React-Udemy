import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    console.log(someData);

    const [number, setNumber] = useState(15);

    console.log(number);

  return (
    <div>
        <div>
            <p>Variable value: {someData}</p>
            <button onClick={() => someData = 15}>Change variable value!</button>
        </div>
        <div>
            <p>UseState value: {number}</p>
            <button onClick={() => setNumber(25)}>Change useState value!</button>
        </div>
    </div>
  )
}

export default ManageData