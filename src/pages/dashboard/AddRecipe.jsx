import axios from "axios";
import { useEffect, useState } from "react";

const AddRecipe = () => {
  const [categories, setCategories] = useState();
  const [id, setId] = useState(0);
  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/categories");
      if (data?.status === 200) {
        console.log(data?.data);
        setCategories(data?.data);
      }

      const res = await axios.get("http://localhost:3000/recipes");
      if (res?.status === 200) {
        console.log(res?.data);
        const count =Number(res?.data?.[res.data.length - 1].id);
        console.log(res?.data.id)
        setId(count + 1)
      }
    }
    

    load();
  }, []);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const price = parseFloat(form.price.value);
    const category = form.category.value;
    const description = form.description.value;
    const image = form.image.value;
    const stringId = id.toString();
    const recipeData = {
      id:stringId,
      title,
      price,
      category,
      description,
      image
    };

    await axios.post("http://localhost:3000/recipes", recipeData);
  };
  return (
    <div className="w-full px-16">
      <h1 className="mb-4 text-4xl">Add Recipe</h1>
      <form onSubmit={handleCreateRecipe} className="w-full">

        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input type="text" name="title" className="w-full px-5 py-3 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input
            type="number"
            name="price"
            className="w-full px-5 py-3 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Image URL </label>
          <input
            type="text"
            name="image"
            className="w-full px-5 py-3 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Category </label>
          <select name="category" id="" className="w-full px-5 py-3 border">
            {categories?.map((category) => (
              <option key={category?.id} value={category?.title}>
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea name="description" className="w-full px-5 py-3 border" />
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

export default AddRecipe;
