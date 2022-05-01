import React from 'react'
import pi, { doublePi, triplePi } from './math';

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
    </>

  );
}

export default List