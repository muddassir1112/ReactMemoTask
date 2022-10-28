import React from 'react'
import { ComponentB } from './ComponentB'
export const ComponentA = () => {
  return (
    <div>
        <h1><u>Question-1</u></h1>
    <h2>Here is a scenario where the App component has username which it wants to pass to the component D as a prop without passing it through the intermediate components. Make use of Context API to perform this.</h2>
        <p>Component A</p>
        <p>&#x2193;</p>
        <ComponentB/>
    </div>
  )
}
