import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

const DashboardHome = () => {
  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <div className="flex items-center gap-10 px-10">
<div className="space-y-2">
  <h2><span className="font-bold ">Name:</span> {user?.displayName}</h2>
  <p><span className="font-bold ">Email:</span> {user?.email}</p>
</div>
<div className="avatar online">
        <div className="w-16 rounded-full">
        <img src={user.photoURL} alt="" />
        </div>
      </div>

    </div>
  )
}

export default DashboardHome