export default function RecipeCard({ recipe }) {
  return (
    <div className="">
      <figure>
        <img src={recipe.image} alt="food" className="object-cover w-full max-h-[200px] aspect-video rounded-2xl" />
      </figure>
      <div className="py-5">
        <h2 className="card-title">{recipe?.title}</h2>
        <h2 className="card-title">{recipe?.price}</h2>
        <p>
          {recipe?.description?.length > 30
            ? recipe?.description?.slice(0, 30)
            : recipe?.description}
        </p>
        <div className="justify-end card-actions">
          <div className="badge badge-outline">{recipe?.category}</div>
        </div>
      </div>
    </div>
  );
}
