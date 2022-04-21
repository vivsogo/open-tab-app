import { NavLink } from "react-router-dom"

import React from "react"
const style ={
    width: "100%",
    margin:"5% 0 1%",
    padding:"1em",
    textDecoration:"none",
    color:"green",
    backgroundColor: "rgb(235, 199, 103)"
  


}
export const Navbar = () => {
  return (
    <div>
        <NavLink

         activeStyle={{
              fontWeight:"bold",
              color:"green"
         }}
            exact
            style={style}
            to= "/"
        >Home</NavLink>

<NavLink
         activeStyle={{
              fontWeight:"bold",
              color:"green"
         }}
            exact
            style={style}
            to= "/Drinks"
        >Drinks On Tab</NavLink>

<NavLink
         activeStyle={{
              fontWeight:"bold",
              color:"green"
         }}
            exact
            style={style}
            to= "/Drinks/new"
        >Add a New Drink</NavLink>

<NavLink
         activeStyle={{
              fontWeight:"bold",
              color:"green"
         }}
           exact
            style={style}
            to= "/About"
        >About</NavLink>
    </div>
  )
}
