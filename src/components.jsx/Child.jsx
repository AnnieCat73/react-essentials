import React from 'react'

function Child(props) {
  return (
    <div style={{ backgroundColor: "cyan" }}>
      <h1>Child</h1>
      <button
        onClick={() => props.changeWord('ania')}
      >Click to change title
      </button>
    </div>
  )
}

export default Child