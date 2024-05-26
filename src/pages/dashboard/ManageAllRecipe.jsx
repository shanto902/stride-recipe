import axios from "axios";
import { useEffect, useState } from "react";
import RecipeRow from "../../components/cards/RecipeRow";
import toast from "react-hot-toast";

export default function ManageAllRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    async function load() {
      const response = await axios.get("http://localhost:3000/recipes");
      if (response?.status === 200) {
        setRecipes(response?.data);
      }
    }
    load();
  }, [refetch]);

  const deleteRecipe = async (id) => {
   try {
    await axios.delete(`http://localhost:3000/recipes/${id}`);
    setRefetch((prev) => !prev); 
    toast.success('Recipe Deleted Successfully')
   } catch (error) {
    toast.error(error.message)
   }// Trigger refetch
  };

  return (
    <div className="w-full mt-5 overflow-x-auto">
      <h1 className="mb-4 text-3xl text-center ">Mange All Recipe</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead >
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
            <RecipeRow key={recipe?.id} deleteRecipe={deleteRecipe} recipe={recipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
