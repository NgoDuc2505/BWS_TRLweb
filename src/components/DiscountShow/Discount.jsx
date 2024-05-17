// import React from 'react'
import { Parallax } from "react-parallax";

function Discount() {
  return (
    <Parallax
    bgImage="img/study.jpg"
    style={{height: "300px"}}
    className='mt-5 rounded wow animate__animated animate__backInDown'
    strength={200}
    renderLayer={(percentage) => (
      <div>
        <div
          style={{
            position: "absolute",
            background: `rgba(99, 133, 160, ${percentage * 2})`,
            left: "50%",
            top: "50%",
            scale: `${percentage + 105}%`,
            borderRadius: "50%",
            transform: "translate(-50%,-50%)",
            width: percentage * 500,
            height: percentage * 500,
          }}
        />
        <div style={{ transform: `translateY(${percentage * 150}%)`, textAlign:"center", color:"#fff" }}>
          <h2 style={{opacity: `${percentage * 150}%`}}>Discount for 50%</h2>
          <button className="btn btn-info fs-5" style={{opacity: `${percentage * 150}%`}}>Get now !</button>
        </div>
      </div>
    )}
  >
  </Parallax>
  )
}

export default Discount