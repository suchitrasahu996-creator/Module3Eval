import { useState,createContext,useContext } from "react";

const AuthContext =CreateContext();
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(
    JSON.parse(localStorage.getItem("user")) || null

);
const  login =(role)=>{
    const u={role};
    localStorage.setItem("user",JSON.stringify(u));
    setUser(u);

};
const logout =()=>{
    localStorage.removeItem("user");
    setUser(null);
};
return(
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
);
};
export const useAuth =() =>useContext(AuthContext);
