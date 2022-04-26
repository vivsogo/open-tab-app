import { useState,useEffect } from "react"
import { DrinkCard } from "../components/Drinks/DrinkCard"
import { DrinkFilter } from "../components/Drinks/DrinkFilter"
import { DrinkForm } from "../components/Drinks/DrinkForm"
import {DrinkList} from "../components/Drinks/DrinkList"
export const DrinkContainer = () => {

  const [drinks,setDrinks] = useState([])
  const[filteredDrinks, setFilteredDrinks] = useState (drinks)
  const  fetchData = async ()=>{
    const resp= await fetch("http://localhost:3004/Drinks")
     const data = await resp.json()
     setDrinks(data)
     setFilteredDrinks(data)
    
  }
   useEffect(()=>{
     fetchData() 
   },[])

   const handleSearch = (searchValue) => {
     const filteredDrinks = drinks.filter(drink => drink.name.toLowerCase().startsWith(searchValue.toLowerCase()))
     console.log(filteredDrinks)
     setFilteredDrinks(filteredDrinks)
}
  return (
    <div>
      <DrinkFilter handleSearch={handleSearch}/>
      <DrinkList drinks={filteredDrinks}/> 
      
    </div>
  )
}
