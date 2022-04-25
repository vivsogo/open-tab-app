import { useState } from "react"
export const DrinkForm = () => {
  const[name,setName] =useState(intialState)
  const[recipe,setRecipe]= useState(intialState)
  const[image,setImage]= useState(intialState)

  const handleSubmit =e=>{
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <label htmlFor= "Drink">Drink </label>
        <input type="text" name="Drink" id="name"/><br />
        <label htmlFor= "recipe">Recipe</label>
        <input type="text" name="recipe" id="recipe"/><br />
        <label htmlFor= "Image">Image URL</label>
        <input type="text" name="image" id="image"/><br />
        <input type="submit" value="create"/>
      </form>
    </div>
  )
}
