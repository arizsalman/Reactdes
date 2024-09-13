// import { useNavigate } from "react-router";

// function Login() {

    
//    const navigate = useNavigate()
//   const goToSiginPage=()=>navigate("/sigin")
//     return (
//         <div>

//             <section className="bg-gray-50 dark:bg-gray-900">
//                 <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//                     <a
                        
//                         className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
//                     >
//                         <img
//                             className="w-8 h-8 mr-2"
//                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
//                             alt="logo"
//                         />
//                         Devsiz
//                     </a>
//                     <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//                         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                                 Sign in to your account
//                             </h1>
//                             <form className="space-y-4 md:space-y-6" action="#">
//                                 <div>
//                                     <label
//                                         htmlFor="email"
//                                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                                     >
//                                         Your email
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         id="email"
//                                         className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                         placeholder="name@company.com"
//                                         required=""
//                                     />
//                                 </div>
//                                 <div>
//                                     <label
//                                         htmlFor="password"
//                                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                                     >
//                                         Password
//                                     </label>
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         id="password"
//                                         placeholder="••••••••"
//                                         className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                         required=""
//                                     />
//                                 </div>
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-start">
//                                         <div className="flex items-center h-5">
//                                             <input
//                                                 id="remember"
//                                                 aria-describedby="remember"
//                                                 type="checkbox"
//                                                 className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                                                 required=""
//                                             />
//                                         </div>
//                                         <div className="ml-3 text-sm">
//                                             <label
//                                                 htmlFor="remember"
//                                                 className="text-gray-500 dark:text-gray-300"
//                                             >
//                                                 Remember me
//                                             </label>
//                                         </div>
//                                     </div>
//                                     <a
                                       
//                                         className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
//                                     >
//                                         Forgot password?
//                                     </a>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="w-full text-blue bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                                 >
//                                     Sign in
//                                 </button>
//                                 <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                                     Don’t have an account yet?{" "}

//                                     <button onClick={goToSiginPage}

//                                         className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                                     >
//                                         Sign up
//                                     </button>
//                                 </p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </div>
//     )


// }



// export default Login;




import { Input, Button } from "@nextui-org/react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";


function Login() {
    const [email, setEmail] = useState("")
    const [pasword, setPasword] = useState("")
    const [loading, setloading] = useState(false)

    const navigate =useNavigate()

    const handleSignInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("Result=>", result);

                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("user=>", user);
                  navigate('/')
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("error =>", errorCode, errorMessage);

                // ...
            });
    }

    const handleSignIn=async()=>{
        try {
            setloading(true) 
            await 
             signInWithEmailAndPassword( auth,email ,pasword ).then(()=>{
                navigate('/');
                setloading(false)
            })
        } catch (err) {
            setloading(false)
            console.log(err);
            
        }
    }
    return (
        <div className="my-10 ">
            <form className="flex flex-col item-center" >
                <Input
                    isRequired
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue="ariz@gmail.com"
                    className="w-2/3 sm:w-full my-4"
                />
                <Input
                    isRequired
                    type="pasword"
                    label="Pasword"
                    value={pasword}
                    onChange={(e) => setPasword(e.target.value)}
                    defaultValue="ariz@gmail.com"
                    className="w-2/3 sm:w-full my-4"
                />
                <Button 
                 onClick={handleSignIn} 
                 isLoading={loading}
                 color="primary" size="lg" className="w-1/2">SignIn</Button>

                <h1 className="text-center my-8"> Or</h1>

                <Button onClick={handleSignInWithGoogle} color="primary" size="lg" className="w-1/2">Sign In With Google  </Button>
            </form>
        </div>
    )
}
export default Login;