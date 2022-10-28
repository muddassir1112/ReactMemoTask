import React, { useContext } from 'react'
import { userContext } from '../App'; //import Context
export const ComponentD = () => {
    const userName = useContext(userContext);

  return (
    <div>
        <p> In Component D </p>
        <p>&#x2193;</p>
        <h3>Hello {userName} !</h3> {/* Value Received for App.js*/}
    </div>
  )
}
