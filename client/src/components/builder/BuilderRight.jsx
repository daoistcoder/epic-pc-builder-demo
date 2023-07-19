import React from 'react'
import InvoiceComponent from './builder_right/InvoiceComponent'

export default function BuilderRight() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(39, 39, 37)',
        width: '35%'
      }}>
      <InvoiceComponent />
    </div >
  )
}
