import { useEffect } from "react";
import Banner from "../components/home/Banner";
import { useState } from "react";
import RecipeCard from "../components/cards/RecipeCard";
import PaddingContainer from "../layouts/PaddingContainer";

export default function Home() {
  const [recipes, setRecipes] = useState();
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
      setSelectedCategory(categoryData?.[0].category)
    }
    load();

  }, []);


  const filteredRecipes = selectedCategory
  ? recipes?.filter(recipe => recipe.category === selectedCategory)?.reverse()
  : recipes?.reverse();

  console.log(selectedCategory)
  return (
    <PaddingContainer>
      <Banner />

      <section className="grid grid-cols-12 gap-20 ">
      <div className="col-span-2 ">
      <h1 className="mb-5 text-4xl font-bold">Recipes </h1>
        <ul className="">
          {categories?.map((category) => <li   className={`text-lg  cursor-pointer hover:text-red-600 ${
        selectedCategory === category.title ? 'text-red-600 font-semibold' : 'font-medium'
      }`} key={category?.id} onClick={()=> setSelectedCategory(category?.title)}>{category.title}</li>)}
        </ul>
      </div>
      
      <div className="col-span-10">

        {filteredRecipes?.length > 0 ?
        <div className="grid grid-cols-3 gap-6">
          { filteredRecipes?.map((recipe) => (
              <RecipeCard key={recipe?.id} recipe={recipe} />
            ))}
        </div>:  <h2 className="mt-20 text-center">No Item available yet</h2>}
      </div>
      
      </section>
    
    </PaddingContainer>
  );
}
