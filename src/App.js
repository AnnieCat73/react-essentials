import React from 'react';
import './App.css';
import kitchenTools from './kitchenTools.png'

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main (props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={kitchenTools} alt="Utensils" height={100}/>
      <img src={"https://github.com/AnnieCat73.png"} alt="Annie Indreiten" height={150}/>
      <ul style={{textAlign: "left", listStyleType: "none"}}>
        {props.dishes.map((dish) => <li key={dish.index}>{dish.title}</li>)}
      </ul>
      
    </section>
  )
}

function Footer (props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = ["Mac and Chesse", "Salmon", "Tofu and Vegetables"];

const dishObjects = dishes.map((dish, index) => ({id: index, title: dish}))

function App() {
  return (
    <div className="App">
      <Header name="Annie"/>
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
