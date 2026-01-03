import {Routes,Route,Navigate} from "react-router-dom";

export default function App(){
    return(
        <Rotues>
            <Route path="/login" element={<Login/>}/>
            <Route path="/admin/dashboard" element={<ProtectedRoute role="admin">
                <AdminDashboard/>
            </ProtectedRoute>}/>

            <Route path="/admin/restaurant/add" element= {<ProtectedRoute role="admin">
                <AddRestaurant/>
            </ProtectedRoute>}/>

            <Rotues path="/admin/restaurants/update/:id" element={<ProtectedRoute role="admin">
                <UpdatedRestauartant/>
            </ProtectedRoute>}/>

            <Route path="/customer/dashboard" element={<ProtectedRoute role="customer">
                <CustomerDashboard/>
            </ProtectedRoute>}/>

            <Route path="*" element={<Navigate to="/login"/>}/>
        </Rotues>
    );
}
