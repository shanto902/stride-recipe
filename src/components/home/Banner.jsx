// import banner1 from "../../assets/image_01.jpeg";
import banner2 from "../../assets/banner.jpg";

export default function Banner() {
  return (
    <div
      className="hero min-h-[400px] rounded-3xl overflow-hidden my-10"
      style={{
        backgroundImage: `url(${banner2})`,
      }}
    >
      <div className="bg-black bg-opacity-50 hero-overlay"></div>
      <div className="text-white hero-content text-start">
        <div className="text-center ">
          <h1 className="mb-5 text-5xl font-bold">Choose from thousands of recipes</h1>
          <p className="max-w-xl mx-auto mb-5">
          Appropriately integrate technically sound value with scalable infomediaries negotiate sustainable strategic theme areas
          </p>
          <button className="mt-5 text-white btn btn-outline">Sign up today</button>
        </div>
      </div>
    </div>
  );
}
