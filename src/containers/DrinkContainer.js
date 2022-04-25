import { useState,useEffect } from "react"
import { DrinkCard } from "../components/Drinks/DrinkCard"
import { DrinkForm } from "../components/Drinks/DrinkForm"
import {DrinkList} from "../components/Drinks/DrinkList"
export const DrinkContainer = () => {

  const [drinks,setDrinks] = useState([])
  const  fetchData = async ()=>{
    const resp= await fetch("http://localhost:3004/Drinks")
     const data = await resp.json()
     setDrinks(data)
    
  }
   useEffect(()=>{
     fetchData() 
   },[])
  return (
    <div>
      <DrinkList drinks={drinks}/> 
    </div>
  )
}
