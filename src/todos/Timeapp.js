import React from 'react';

const date = new Date();
const currentTime = date.getHours();

const customStyle = {
  color: ""
}

let greeting;
if (currentTime < 18) {
  greeting = "Good afternoon!";
  customStyle.color = "green";
} else if (currentTime > 24) {
  greeting = "Good evening!"

} else {
  greeting = "Good Night!"
}


const Timeapp = () => {
  return (
    <h1>{greeting}</h1>
  )
}

export default Timeapp;