import restObj  from "../utils/mockdata";
import Card from "./Card";
import React, { useState } from 'react';








const Search = () => {
    return <div className="search-container"></div>;
  };
  
  
  const Body = () => {
    const [restList , setrestList] = useState(restObj);
    return (
     
      <div className="body">
        <Search />

      <div className="filter">
        
        <button className="top-rest" onClick={
          ()=>{
          const filteredList = restList.filter( 
            (res) => res.info.avgRating > 4 );
              setrestList(filteredList);
             
        }
      }
   
         >Top Restaurant</button>
          </div>

        <div className="container">
       {
       restList.map(
        (restaurant) =>
        ( <Card key={restaurant.id} resData={restaurant} /> 
        )
        )
       } 
      </div>
      </div>
    );
  };

  export default Body;