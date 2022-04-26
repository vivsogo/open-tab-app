import { useState } from "react"
import { useHistory } from "react-router-dom"


export const DrinkForm = () => {
  const history = useHistory
  const[name,setName] =useState("")
  const[recipe,setRecipe]= useState("")
  const[image,setImage]= useState("")

  const handleSubmit =e=>{
    e.preventDefault()
    const newDrink={name,recipe,image}

    fetch("http://localhost:3004/Drinks",{
      methond:"POST",
      headers: {
        "content-Type":"application/json"
      },
      body: JSON.stringify(newDrink)
    })
    setName("")
    setRecipe("")
    setImage("")
    history.push("/drinks")


  }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <label htmlFor= "Drink">Drink </label>
        <input onChange={e=> setName(e.target.value)} type="text" name="Drink" id="name" vaule={name} required/><br />
        <label htmlFor= "recipe">Recipe</label>
        <input onChange={e=> setRecipe(e.target.value)} type="text" name="recipe" id="recipe" vaule={recipe} required/><br />
        <label htmlFor= "Image">Image URL</label>
        <input onChange={e=> setImage(e.target.value)} type="text" name="image" id="image" vaule={image} required /><br />
        <input type="submit" value="create"/>
      </form>
    </div>
  )
}
 