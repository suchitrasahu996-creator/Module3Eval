import { Link } from "react-router-dom";
export default function RestaurantCard({ data, admin, onDelete }) {
  return (
    <div>
      <h3>{data.name}</h3>
      <p>{data.address}</p>
      <p>{data.type}</p>
      <p>Parking:{data.parkinglot}</p>

      {admin && (
        <>
          <Link to={`/admin/restaurants/update/${data.id}`}>Update</Link>
          <button
            onClick={() => {
              if (confirm("Are you sure that you want to delete?")) {
                onDelete(data.id);
                alert("Deletd Successfully");
              }
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
