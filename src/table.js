import React from 'react'
import cars from './practice';

const [honda, tesla] = cars;
const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;

const { coloursByPopularity: [hondaTopColour] } = honda;
const { coloursByPopularity: [teslaTopColour] } = tesla;

function table() {

  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td style={{ color: "black", fontSize: "2rem" }}>{tesla.model}</td>
        <td>{tesla.TopSpeed}</td>
        <td>{tesla.TopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{honda.TopSpeed}</td>
        <td>{honda.TopColour}</td>
      </tr>
    </table>
  )
}

export default table;