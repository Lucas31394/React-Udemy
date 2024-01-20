import React, { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
    //Data management
    const[name, setName] = useState();
    const[email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value)
    };

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sending the form...")
        console.log(name, email);
    };

  return (
    <div>
        {/* form creation */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder="Type your name." onChange={handleName}/>
            </div>
            {/* tag input inside label tag */}
            <label>
                <span>Email: </span>
                <input type="text" name="email" placeholder="Type your e-mail." onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <input type="submit" value="Send"/>
        </form>
    </div>
  )
}

export default MyForm