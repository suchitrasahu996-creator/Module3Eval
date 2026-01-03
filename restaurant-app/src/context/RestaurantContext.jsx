 import { createContext,useContext,useState,USeEffect, useEffect } from "react";
  import { getRestaurants,saveRestaurants } from "../utils/Storage";

  const RestaurantContext=createContext();
  export const RestaurantProvider=({children})=>{
    const [restaurants,setRestaurants]=useState([]);
     

    useEffect (()=>{
        setRestaurants(getRestaurants());
    },[]);


    const refresh =()=>setRestaurants(getRestaurants());


    const addRestaurant =(r)=>{
        const updated=[...restaurants,r];
        saveRestaurants(updated);
        setRestaurants(updated);
    };
    const updateRestaurant =(r)=>{
        const updated=restaurants.map((x)=>(x.id===r.id? r:x));
         saveRestaurants(updated);
         setRestaurants(updated);
    };

    const deleteRestaurant =(id)=>{
        const updated= restaurants.filter((r)=>r.id!==id);
        saveRestaurants(updated);
        setRestaurants(updated);
    };
    return(
        <RestaurantContext.Provider value={{restaurants,addRestaurant,updateRestaurant,deleteRestaurant}}>
            {children}
        </RestaurantContext.Provider>
    );
  };
  export const useRestaurants=()=>useContext(RestaurantContext);