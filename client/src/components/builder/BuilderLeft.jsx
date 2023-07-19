import React from 'react'
import Prebuilt from './builder_left/Prebuilt'
import Custombuild from './builder_left/Custombuild'

export default function BuilderLeft() {
  return (
    <div 
      style={{ 
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'rgb(29, 29, 27)',
        width: '65%',
         }}>
      <Prebuilt />
      <Custombuild />
    </div>
  )
}
