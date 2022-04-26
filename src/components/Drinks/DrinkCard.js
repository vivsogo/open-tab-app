import React from "react"
export const DrinkCard = ({drink}) => {
  return (
    <div style={{ border:"outset",color:"green",background:"rgb(235, 199, 103)",width:"30%",margin:"auto"}}>
     <h3>{drink.name}</h3>
     <img src={drink.image} style={{width: 200, height: 200, borderRadius: 200/ 2}}/>
     <h4>{drink.recipe}</h4>
     
     
    </div>
  )
}
