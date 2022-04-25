import {DrinkCard} from "./DrinkCard"
import React from "react"

export const DrinkList = ({drinks}) => {
  const drinkCards = drinks.map(drink => 
  <DrinkCard key={drink.id} drink={drink}/>)
  return (
         <div>
           <h2>Drinks</h2>
           <div style={{display:"flex", flexWrap:"wrap"}}>{drinkCards} </div>
          </div>
  ) 
}
//from object to component 
// for each drink were going to use map render a drink component  