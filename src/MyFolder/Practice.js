import React from 'react'

function Secret() {
  return <h1>Secret information</h1>
}

function Regular() {
  return <h2>Normal information</h2>
}

function Practice(props) {
  return (
    <>
      {props.authorized ? <Secret /> : <Regular />}
    </>
  )
}

export default Practice