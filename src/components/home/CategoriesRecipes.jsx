/* eslint-disable react/prop-types */
import RecipeCard from "../cards/RecipeCard"

const CategoriesRecipes = ({recipes, categories, selectedCategory, setSelectedCategory}) => {

    const filteredRecipes =selectedCategory ? recipes?.filter(recipe => recipe.category === selectedCategory)?.reverse() : recipes
  return (
    <section className="relative grid grid-cols-12 gap-20 my-10">
    <div className="sticky col-span-2 ">


    <h1 className="mb-5 text-4xl font-bold">Recipes</h1>
      <ul>
        {categories?.map((category) => <li   className={`text-lg  cursor-pointer hover:text-red-600 ${
      selectedCategory === category.title ? 'text-red-600 font-semibold' : 'font-medium'
    }`} key={category?.id} onClick={()=> setSelectedCategory(category?.title)}>{category.title}</li>)}
      </ul>
    </div>
    
    <div className="min-h-[60vh] col-span-10 px-10 ">

      {filteredRecipes?.length > 0 ?
      <div className="grid grid-cols-3 gap-6">
        { filteredRecipes?.map((recipe) => (
            <RecipeCard key={recipe?.id} recipe={recipe} />
          ))}
      </div>:  <h2 className="mt-20 text-center">No Item available yet</h2>}
    </div>
    
    </section>
  )
}

export default CategoriesRecipes