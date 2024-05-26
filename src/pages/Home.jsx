import { useEffect } from "react";
import Banner from "../components/home/Banner";
import { useState } from "react";
import PaddingContainer from "../layouts/PaddingContainer";
import LatestRecipeSlider from "../components/sliders/LatestRecipeSlider";
import CategoriesRecipes from "../components/home/CategoriesRecipes";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  const [selectedCategory, setSelectedCategory]= useState();
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

      if (categoryData.length > 0) {
        setSelectedCategory(categoryData[0].title);
      }
     
    }
    load();

  }, []);


  return (
    <PaddingContainer>
      <Banner />
      <LatestRecipeSlider recipes={recipes} />
    <CategoriesRecipes recipes={recipes} categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    
    </PaddingContainer>
  );
}
