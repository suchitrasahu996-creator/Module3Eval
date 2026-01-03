 import { useAuth } from "../context/AuthContext";
 import { useNavigate } from "react-router-dom";
 export default function Login(){
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin=(role)=>{
        login(role);
        navigate(role==="admin"? "/admin/dashboard" : "/customer/dashboard");

    };

    return(
        <div>
            <h2>welcome to Login Page </h2>
            <button onClick={()=>handleLogin("admim")}>Admin </button>
            <button onClick={()=>handleLogin("customer")}>Customer</button>
        </div>
    );
 }