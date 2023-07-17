import React from 'react'
import NavTop from './NavTop'
import NavBottom from './NavBottom'
import NavMiddle from './NavMiddle'

export default function NavComponent() {
  return (
    <div className='nav'>
      <NavTop />
      <NavMiddle />
      <NavBottom />
    </div>
  )
}
