import React from 'react'
import {Link} from "react-router-dom"
import PizzaImage from "../assets/pizza.jpeg"
import"../styles/Home.css";

function Home() {
  return (
    <div className='home' style={{ backgroundImage:`url(${PizzaImage})` }}>
      <div className='headerContainer'>
      
        <h1>Tulips's Pizzeria</h1>
        <p>PIZZA TO FIX THAT CRAVING</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home