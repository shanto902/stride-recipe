/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import RecipeCard from "../components/cards/RecipeCard";
import PaddingContainer from "../layouts/PaddingContainer";

const AllRecipes = () => {

    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        async function load() {
          //get recipes
          const recipeRes = await fetch("http://localhost:3000/recipes");
          const recipeData = await recipeRes.json();
          setRecipes(recipeData);
         
        }
        load();
    
      }, []);
  return (
    <PaddingContainer className={`my-10`}>
        
        <div className="grid grid-cols-4 gap-5">
            {
                recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)
            }
        </div>
    </PaddingContainer>
  )
}

export default AllRecipes