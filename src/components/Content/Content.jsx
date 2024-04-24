import React from 'react'
import './content.css'
import {sum} from "../../handler/Content/main.js"
function Content() {
  
  sum(3,4);

  return (
    <div>
      <h2>Content</h2>
      <h3></h3>
    </div>
  )
}

export default Content