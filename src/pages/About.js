import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' 
        style={{ backgroundImage:`url(${ MultiplePizzas})` }}>

        </div>
        <div className='aboutBottom'>
        <h1> ABOUT US</h1>
        <p>We all know why people love to eat pizza - it's delicious! Especially for our Tulips Pizza customers, who enjoy the freshest, most flavorful pizzas. But there's more to pizza than just taste. In fact, there is some truly fascinating science and benefits that can explain why pizza is so universally loved.
        One Pizza Can Be Eaten Over Several Different Meals, Making it Great For a Tight Budget
Pizza is an amazing food that doesn't just have to be eaten in one sitting! Eating pizza over several meals is a wonderful way to get creative with your cuisine while being frugal with your budget. One slice of pizza can become an easy breakfast, lunch, or dinner option.

One pizza can easily feed several people, allowing everyone to chow down and split the cost. Talk about an ideal solution for those looking to get more bang for their buck!

Pizza is an Affordable Meal That Includes Carbs, Salt, Sugar, Proteins, Vitamins, Etc.
Pizza is an affordable meal that is surprisingly diverse in terms of nutrition. It contains a combination of carbohydrates, proteins, salt, sugar, and even vitamins and minerals. And while some pizzas may be higher in sodium or fat than others, they can still be nutritious when prepared with the right ingredients and eaten in moderation.
        </p>
        </div>
    </div>
  )
}

export default About