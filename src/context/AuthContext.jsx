
import { Spinner } from "@nextui-org/react";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";




export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [user, setUser] = useState({
        isLogin: false,
        UserInfo: {},
    });

    const [loading, setloading] = useState(true)
    // Handle user state changes
    function onAuthChanged(user) {
        if (user) {
            setUser({ isLogin: true, 
                UserInfo:{
                    name:user?.displayName,
                    photoUrl:user?.photoURL,
                    email:user?.email,
                }
             })
        } else {
            setUser({ isLogin: false, UserInfo: {} })

        }

        // setUser(user);
        setloading(false);
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, onAuthChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    return (

        <AuthContext.Provider value={{ user, setUser }} >
            {
                loading ?
                    <div
                        className="w-full h-96 flex justify-center item-center" >
                        <Spinner />
                    </div>
                    :
                    children}
        </AuthContext.Provider>
    )





}

export default AuthContextProvider