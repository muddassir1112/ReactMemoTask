import React, { memo } from 'react'

function ChildComponent() {
    console.log("hi")
  return (
    <div>
       To check the result please open Console of your Browser
    </div>
  )
}
export default memo(ChildComponent);
