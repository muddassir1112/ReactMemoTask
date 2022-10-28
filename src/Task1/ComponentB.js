import React from 'react'
import { ComponentC } from './ComponentC'

export const ComponentB = () => {
  return (
    <div>
        <p>Component B</p>
        <p>&#x2193;</p>
        <ComponentC/>
    </div>
  )
}
