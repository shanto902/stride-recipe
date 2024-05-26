import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function DashboardLayout() {
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col py-10 drawer-content">
      <div className="w-full">  <Outlet />
      <Toaster   position="top-right"
  reverseOrder={false}/></div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="flex flex-col justify-between min-h-screen p-4 menu w-60 bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div>
          <li>
              <NavLink to={"/dashboard"} end>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/manage-recipes"}>Manage All Recipes</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/add-recipe"}>Add Recipe</NavLink>
            </li>
          </div>
          <div className="flex gap-4">
            <Link to={"/"} className="btn btn-neutral">
              Home
            </Link>
            <button className="btn btn-error" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
