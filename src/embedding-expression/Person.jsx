import React from 'react'
import "./Welcome.css"
import { PiTrainSimpleFill } from 'react-icons/pi'
const Person = () => {
  const person_data = {
    name: 'Ajay',
    age: 20,
    isStudent: 'yes'
 
  }

  return (
    <div>
      <table border='1' cellPadding='10' cellSpacing='10'>
        <thead>   <PiTrainSimpleFill/>   <PiTrainSimpleFill/>   <PiTrainSimpleFill/>   <PiTrainSimpleFill/> 
          <tr>
            <th>name</th>
            <th>Age</th>
            <th>isStudent</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{person_data.name}</td>
            <td>{person_data.age}</td>
            <td>{person_data.isStudent}</td>
            


          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Person
