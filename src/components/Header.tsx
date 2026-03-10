
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { RootState } from "../utils/appstore";
import { useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVTAR } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store:RootState) => store.user);

 const handleSignOut = () =>{
      
  const auth = getAuth();
  signOut(auth)
  .then(() => {
    // Sign-out successful.
    // navigate("/");
  }).catch((error) => {
    // An error happened.
    navigate("/errorpage")
  });
  };

   useEffect(() =>{
    
     const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // const {uid, email, displayName, photoURL}= user;
      dispatch(
       addUser(
        {uid: user.uid,
         email: user.email,
         displayName: user.displayName, 
         photoURL:user.photoURL 
        }));
        navigate("/browse");
      // ...
    } else {
      // User is signed out
       dispatch(removeUser());
       navigate("/");
      
    }
  });
    return () => unsubscribe();
  
     },[dispatch, navigate])
  
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' 
       src = {LOGO}
       alt="logo"
       />
      <div className=' flex items-center gap-4 p-2 m-2'>
        <select className=" bg-black text-white border border-gray-400 px-4 py-2 rounded"
        >
          <option value="English">English</option>
          <option value="Hindi">हिन्दी</option>
        </select>
        {user?.uid && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="usericon" src ={user?.photoURL||USER_AVTAR}/>
        <button className='bg-red-500' onClick = {handleSignOut}>Sign Out</button>
        </div>
           ) }
      </div>
      

    </div>
  )
}

export default Header
