import React, { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    //Data management
    const[name, setName] = useState(user ? user.name : "");
    const[email, setEmail] = useState(user ? user.email : "");
    const[bio, setBio] = useState(user ? user.bio : "");
    const[role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value)
    };

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sending the form...")
        console.log(name, email, bio, role);
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    };

  return (
    <div>
        {/* form creation */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder="Type your name." onChange={handleName} value={name} />
            </div>
            {/* tag input inside label tag */}
            <label>
                <span>Email: </span>
                <input type="text" name="email" placeholder="Type your e-mail." onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <span>Bio: </span>
                <textarea name="bio" placeholder="User biography" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            <label>
                <span>Role: </span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrator</option>
                </select>
            </label>
            <input type="submit" value="Send"/>
        </form>
    </div>
  )
}

export default MyForm