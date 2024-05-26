/* eslint-disable react/prop-types */
export default function RecipeCard({ recipe }) {
  return (
    <div className="">
      <figure>
        <img src={recipe.image} alt="food" className="object-cover w-full max-h-[200px] aspect-video rounded-2xl" />
      </figure>
      <div className="py-5">
  <div className="flex items-center justify-between">
  <h2 className="card-title">{recipe?.title}</h2>
        <p className="text-sm">{recipe?.price} $</p>
  </div>
        <p className=" line-clamp-1">

            {recipe?.description}
        </p>
        <div className="justify-end card-actions">
        
        </div>
      </div>
    </div>
  );
}
