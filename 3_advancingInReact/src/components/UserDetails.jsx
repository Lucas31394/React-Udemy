import React from 'react'

const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Job: {job}</p>
        
        {age >= 18 ? (
            <div>
                <p>{name} can get a driver's licence</p>
            </div>
        ) : (
            <div>
                <p>{name} can't get a driver's licence</p>
            </div>
        )}
    </div>
  )
}

export default UserDetails