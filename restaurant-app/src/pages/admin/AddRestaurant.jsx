import { useState } from "react";
import { useRestaurants } from "../../context/RestaurantContext";
import { useNavigate } from "react-router-dom";

export default function AddRestaurant() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    type: "South Indian",
    parkinglot: "Yes",
    image: "",
  });

  const { addRestaurant } = useRestaurants();
  const navigate = useNavigate();

  const submit = () => {
    if (!form.name || !form.address) {
      alert("Form cannot be Empyty");
      return;
    }
    addRestaurant({ ...form, id: Date.now() });
    alert("Added Sucessfully");
    navigate("/admin/dashboard");
  };
  return (
    <div>
      <h2>ADD RESTAURANT</h2>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Address"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <button onClick={submit}>ADD</button>
    </div>
  );
}
