/* eslint-disable react/prop-types */
export default function CategoryCard({ category }) {
  return (
    <li className="px-5 py-3 border rounded">
      <h1 className="text-center">{category?.title}</h1>
    </li>
  );
}
