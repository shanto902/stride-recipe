import axios from "axios";
import { useEffect, useState } from "react";
import RecipeRow from "../../components/cards/RecipeRow";

export default function ManageAllRecipe() {
  const [recipes, setRecipes] = useState();
  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/recipes");
      if (data?.status === 200) {
        setRecipes(data?.data);
      }
    }
    load();
  }, []);
  return (
    <div className="w-full px-16 mt-10 overflow-x-auto">
      <h1 className="mb-4 text-3xl">Mange All Recipe</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recipes?.map((recipe) => (
            <RecipeRow key={recipe?.id} recipe={recipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
