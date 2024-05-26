import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Link, NavLink } from "react-router-dom";
import PaddingContainer from "../../layouts/PaddingContainer";
import { FaSignInAlt } from "react-icons/fa";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };

  
  return (
   <PaddingContainer className={`sticky top-0 z-10 bg-base-100 `}>
    <div className="flex justify-end w-full p-2">
    {!user?.email ? (
        <div className="flex gap-5">
          <Link to={"/login"}  className="flex items-center gap-2 hover:text-red-500">
         <FaSignInAlt/> Login
          </Link>
          <Link to={"/register"} >
           Registration
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <div>
            <p  onClick={handleLogout} className="cursor-pointer hover:text-red-500">
              Logout
            </p>
          </div>
          <div>
            <Link to={"/dashboard"} className="hover:text-red-500" >
              Dashboard
            </Link>
          </div>

          <div className="avatar placeholder">
            <div className="w-8 rounded-full bg-neutral text-neutral-content">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
   <hr />
  <div className="navbar">    <div className="navbar-start">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <Link to={`/all-recipes`}>All Recipes</Link>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <NavLink to={'/'} className="text-4xl">Food <span className="text-red-500 ">&</span> Cook</NavLink>
      </div>
      <div className="hidden navbar-end lg:flex">
      <ul className="flex items-center gap-6 px-1 font-semibold">
  <li>
    <Link to={`/all-recipes`} className="hover:text-red-500">All Recipes</Link>
  </li>
  <li>
    <Link to="/about" className="hover:text-red-500">About Us</Link>
  </li>
  <li>
    <a className="hover:text-red-500">Contact Us</a>
  </li>
</ul>

      </div></div>
     

  
   </PaddingContainer>
  );
}
