
import { useRestaurants } from "../../context/RestaurantContext";
import RestaurantCard from "../../component/RestaurantCard";
import { Link } from "react-router-dom";

export default function AdminDashboard(){
    const {restaurants,deleteRestaurant}= useRestaurants();

    return(
        <div>
            <h3>Welcome to Admin Dashboard</h3>
            <Link  to="/admin/restaurants/add">ADD RESTAURANT</Link>

            {restaurants.map((r)=> (
                <RestaurantCard key={r.id} data={r} admin onDelete={deleteRestaurant}/>
            ))}
        </div>
    );
}