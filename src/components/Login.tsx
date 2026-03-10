import React, { useRef, useState } from 'react'

import { checkValidateData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import Header from './Header';
import { USER_AVTAR } from '../utils/constants';

const Login = () => {
   const [IsSignInForm, setIsSignInForm] = useState(true);
   const[errormessage, seterrormessage] = useState<string | null>(null);
    const navigate = useNavigate();
   const dispatch = useDispatch();

   const name = useRef<HTMLInputElement>(null);
   const email = useRef<HTMLInputElement>(null);
   const password = useRef<HTMLInputElement>(null);
   const handleButtonClick = () =>{
    if (!email.current || !password.current) return;
    // validate the form data
    const message = checkValidateData(email.current.value,password.current.value)
      seterrormessage(message);
       
      if(message) return;

      if(!IsSignInForm){
        // Sign Up Logic 
        createUserWithEmailAndPassword(
          auth, 
          email.current?.value || "", 
          password.current?.value || ""
        )
          .then((userCredential) => {
          const user = userCredential.user;
          //  if(!name.current) return ;
           
          updateProfile(user, {
          displayName: name.current?.value || "", 
          photoURL: USER_AVTAR
           })
           .then(() => {
             const user = auth.currentUser
            if(user){
            const {uid, email, displayName, photoURL}= user;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            }));
          }
          // //   //  navigate("/browse");
          })
          .catch((error) => {
            // An error occurred
             seterrormessage(error.message);
          });

        //   // console.log("hooooooo",user);
          setIsSignInForm(true);
        //   // navigate("/");
    
         })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
          // ..
        });
      }
       else{
            // Sign in 
         signInWithEmailAndPassword(
          auth,  
          email.current?.value || "", 
          password.current?.value || ""
        )
      //       .then((userCredential) => {
      //   // Signed in 
      //     const user = userCredential.user;
      //     // console.log("haaaaaaa",user);
      //     // navigate("/browse");
      //   // ...
      // })
        .catch((error) => {
          const errorCode = error.code;
            const errorMessage = error.message;
            seterrormessage(errorCode + "-" + errorMessage);

        });
        }


  };

  const toggleSignInForm = () =>{
    setIsSignInForm(!IsSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute' >
        <img 
        src ="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg"
        alt="logo"
        />
      </div>
      <form 
        onSubmit={(e) =>e.preventDefault()}
         className='absolute w-3/12 p-12 bg-black my-20 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-70'>
        <h1 className='py-4 text-white text-3xl'>{IsSignInForm ?"Sign In":"Sign Up"}</h1>
        {!IsSignInForm && <input type ="text" ref={name} placeholder="Name" className='p-4 my-4 w-full bg-gray-700'/>}
        <input 
        type ="text"
        ref={email}
        placeholder='Email Address' 
        className='p-4 my-4 w-full bg-gray-700'/>
        <input 
        type ="password" 
        ref={password}
        placeholder='Password' 
        className='p-4 my-4 w-full  bg-gray-700 '/>
        <p className='text-red-700 font-bold text-lg p-2'>{errormessage}</p>
        <button className='p-4 my-4 bg-red-700 text-white justify-center w-full rounded-lg' onClick={handleButtonClick}>{IsSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{IsSignInForm? "New on Netflix? Sign Up Now":"Already registered? Sign In now"}</p>
      </form>
    </div>
  )

}

export default Login
