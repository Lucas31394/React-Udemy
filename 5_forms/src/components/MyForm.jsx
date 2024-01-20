import React from 'react'
import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/* form creation */}
        <form>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder="Type your name."/>
            </div>
            {/* tag input inside label tag */}
            <label>
                <span>Email: </span>
                <input type="text" name="email" placeholder="Type your e-mail."/>
            </label>
            <input type="submit" value="Send"/>
        </form>
    </div>
  )
}

export default MyForm