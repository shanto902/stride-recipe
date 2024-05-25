import { useEffect } from "react";
import Banner from "../components/home/Banner";
import { useState } from "react";
import RecipeCard from "../components/cards/RecipeCard";
import CategoryCard from "../components/cards/CategoryCard";
import PaddingContainer from "../layouts/PaddingContainer";

export default function Home() {
  const [recipes, setRecipes] = useState();
  const [categories, setCategories] = useState();
  useEffect(() => {
    async function load() {
      //get recipes
      const recipeRes = await fetch("http://localhost:3000/recipes");
      const recipeData = await recipeRes.json();
      setRecipes(recipeData);
      //get categories

      const categoryRes = await fetch("http://localhost:3000/categories");
      const categoryData = await categoryRes.json();

      setCategories(categoryData);
    }
    load();

  }, []);

  return (
    <PaddingContainer>
      <Banner />

        <h1 className="my-20 text-4xl text-center">Our Recipe Categories </h1>
        <div className="grid grid-cols-4 gap-6">
          {categories?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
        </div>
      
      <div className="mx-16">
        <h1 className="my-20 text-4xl text-center">Our Newest Recipes </h1>
        <div className="grid grid-cols-4 gap-6">
          {recipes
            ?.reverse()
            ?.slice(0, 4)
            ?.map((recipe) => (
              <RecipeCard key={recipe?.id} recipe={recipe} />
            ))}
        </div>
      </div>
    
    </PaddingContainer>
  );
}
