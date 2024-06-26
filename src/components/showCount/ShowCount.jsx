import React from 'react'

const ShowCount = ({ init }) => {
  return (
    <h2>
      `You clicked here {init} {init <= 1 ? 'Time' : 'Times'}`
    </h2>
  )
}

export default ShowCount
