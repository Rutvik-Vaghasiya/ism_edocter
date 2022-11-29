import React from 'react'

export const Home = () => {
  return (
    <div>
          Home
          <form >
            <div>
              <label>Name:</label>
              <input type='text' id='Name' name='Name'/>
            </div>
            <div>
              <label>Age:</label>
              <input name='Age' id='Age'/>
            </div>
          </form>
    </div>
  )
}
