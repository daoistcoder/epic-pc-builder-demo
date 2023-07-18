import React from 'react'
import BuilderLeft from './builder/BuilderLeft'
import BuilderRight from './builder/BuilderRight'

export default function EpicBuilder() {
  return (
    <div className='builder' style={{display: 'flex'}}>
      <BuilderLeft />
      <BuilderRight />
    </div>
  )
}
