import React from 'react'
import Typewriter from 'typewriter-effect'
import './TypewriterAnimation.css'

const TypewriterAnimation = () => {
  return (
    <div className='container'>
      <h1>
        <Typewriter options={{
          autoStart: true,
          loop: true,
          delay: 50,
          strings: ["I am a web developer"]
        }}/>
      </h1>
    </div>
  )
}

export default TypewriterAnimation