import React from 'react'
import Dashboard from '../screens/Dashboard'

function layout(props) {
  return (
    <>
      <Dashboard>{props.children}</Dashboard>
    </>
  )
}

export default layout
