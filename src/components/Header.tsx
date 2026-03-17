
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { RootState } from "../utils/appstore";
import { useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LANG_SUPPORT, LOGO, USER_AVTAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage, Language } from "../utils/configSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store:RootState) => store.user);
  const showGptSearch = useSelector((store:RootState) => store.gpt.showGptSearch);

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

     const handleGptSearchClick = ()=>{
      //   toggle GPT Search
           dispatch(toggleGptSearchView());
     }
     const handleLanguageChange = (e : React.ChangeEvent<HTMLSelectElement>)=>
     {
      dispatch(changeLanguage(e.target.value as Language));
     }
  
  return (
    <div className='-mt-6 absolute top-0 left-0                w-full px-8 py-2 bg-gradient-to-b from-black z-50 flex  flex-col md:flex-row justify-between'>
    {/* // <div className="-mt-6 absolute top-0 left-0 w-full px-8 py-4 flex items-center bg-linear-to-b from-black z-20 flex-col md:flex-row justify-between"> */}
    {/* <div className="fixed top-0 left-0 w-full px-4 py-1.5 md:px-8 md:py-4 bg-gradient-to-b from-black/95 to-transparent z-50 flex items-center justify-between shadow-lg">   */}

      
      <img className='w-40 mx-auto md:mx-0' 
       src = {LOGO}
       alt="logo"
       />
      <div className='flex items-center gap-4'>
        {/* <button className="mx-2 my-4 px-4 py-2 bg-purple-700 rounded-lg"  */}
        { showGptSearch && (
        // <select className=" bg-black text-white border border-gray-400 px-4 py-2 rounded-lg"
        <select 
          className="bg-gray-900 hover:bg-gray-800 text-white m-2 h-8 flex justify-center items-center text-xs -mr-3 rounded-sm"
        onChange={handleLanguageChange}>
          {LANG_SUPPORT.map(lang => <option value={lang.identifier}>{lang.name}</option> )}
          
        </select>
       )}
       <button className="w-16 h-8 py-2 px-4 m-2 my-2 bg-white text-black font-medium flex justify-center items-center -mr-1 rounded-sm text-xs"
        onClick ={handleGptSearchClick}>{showGptSearch ? "Home Page" : "GPT Search"}
        </button>
        {/* {user?.uid && ( */}
  
          <img className="w-12 h-12" alt="usericon" src ={user?.photoURL||USER_AVTAR}/>
        <button className='bg-red-500' onClick = {handleSignOut}>Sign Out</button>
        
           {/* ) } */}
      </div>
      

    </div>
  )
}

export default Header
