import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditRecipe = () => {
  const { id } = useParams();

  const [recipeDetails, setRecipeDetails] = useState();
  const [categories, setCategories] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    async function load() {
      const categoriesData = await axios.get(
        "http://localhost:3000/categories"
      );
      if (categoriesData?.status === 200) {
        setCategories(categoriesData?.data);
      }

      const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
      if (recipeData?.status === 200) {
        setRecipeDetails(recipeData?.data);
      }
    }

    load();
  }, [id]);


 

  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const price = parseFloat(form.price.value);
    const category = form.category.value;
    const description = form.description.value;
    const recipeData = {
      id,
      title,
      price,
      category,
      description,
    };

    try {
      await axios.patch(`http://localhost:3000/recipes/${id}`, recipeData);
    toast.success('Successfully Updated!');
    navigate('/dashboard/manage-recipes');
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full px-16">
      <h1 className="mb-4 text-4xl">Add Recipe</h1>
      <form onSubmit={handleCreateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input
            defaultValue={recipeDetails?.title}
            type="text"
            name="title"
            className="w-full px-5 py-3 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input
            type="number"
            name="price"
            defaultValue={recipeDetails?.price}
            className="w-full px-5 py-3 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Category </label>
          <select name="category" id="" className="w-full px-5 py-3 border">
            {categories?.map((category) => (
              <option
                key={category?.title}
                selected={category?.title === recipeDetails?.category}
                value={category?.title}
              >
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea
            defaultValue={recipeDetails?.description}
            name="description"
            className="w-full px-5 py-3 border"
          />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Add Recipe"}
            className="w-full px-5 py-3 border btn btn-neutral"
          />
        </div>
      </form>

    </div>
  );
};

export default EditRecipe;
