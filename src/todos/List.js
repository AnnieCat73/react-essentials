import React from 'react'
import pi, { doublePi, triplePi } from './math';
import { add, multiply, subtract, divide } from './calculator.js'

function List() {
  return (
    <>
      <ul>
        <li>Bacon</li>
        <li>Jamon</li>
        <li>Noodles</li>
      </ul>
      <ul>
        <li>{pi}</li>
        <li>{doublePi()}</li>{/*must have ()  as function*/}
        <li>{triplePi()}</li>
      </ul>
      <ul>
        <li>{add(1, 2)}</li>
        <li>{multiply(2, 3)}</li>
        <li>{subtract(7, 2)}</li>
        <li>{divide(5, 2)}</li>
      </ul>
    </>

  );
}

export default List