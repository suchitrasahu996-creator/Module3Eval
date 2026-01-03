import {Routes,Route,Navigate} from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddRestaurant from "./pages/admin/AddRestaurant";
import UpdateRestaurant from "./pages/admin/UpdateRestaurant";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import ProtectedRoute from "./component/ProtectedRoute";

export default function App(){
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/admin/dashboard" element={<ProtectedRoute role="admin">
                <AdminDashboard/>
            </ProtectedRoute>}/>

            <Route path="/admin/restaurant/add" element= {<ProtectedRoute role="admin">
                <AddRestaurant/>
            </ProtectedRoute>}/>

            <Route path="/admin/restaurants/update/:id" element={<ProtectedRoute role="admin">
                <UpdateRestaurant/>
            </ProtectedRoute>}/>

            <Route path="/customer/dashboard" element={<ProtectedRoute role="customer">
                <CustomerDashboard/>
            </ProtectedRoute>}/>

            <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
    );
}
