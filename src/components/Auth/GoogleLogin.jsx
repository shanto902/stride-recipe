import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLogin() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div >
      <button
        onClick={() => signInWithGoogle()}
        className=" px-5 py-3 w-full rounded-lg btn btn-outline relative"
      >
        <span className=" absolute top-1/2  left-3
          text-xl transform  -translate-y-1/2"><FcGoogle/></span>
      <span className=" flex gap-2 items-center justify-center">Login with Google</span>
      </button>
      
    </div>
  );  
}
