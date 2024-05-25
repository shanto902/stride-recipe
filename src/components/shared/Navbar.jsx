import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="sticky top-0 z-10 px-16 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>All Recipes</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <NavLink to={'/'} className="text-2xl">Food & Cook</NavLink>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="flex items-center gap-6 px-1">
          <li>
            <a>All Recipes</a>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      {!user?.email ? (
        <div className="flex gap-4 navbar-end">
          <Link to={"/login"} className="btn">
            Login
          </Link>
          <Link to={"/register"} className="btn">
            Registration
          </Link>
        </div>
      ) : (
        <div className="flex gap-4 navbar-end">
          <div>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div>
            <Link to={"/dashboard"} className="btn">
              Dashboard
            </Link>
          </div>

          <div className="avatar placeholder">
            <div className="w-8 rounded-full bg-neutral text-neutral-content">
              <span>AS</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
