import React from 'react';
import { movies } from '../data';




const Movies = () => {
  return (
    <div>
       <h1>Movies Page</h1>
       {movies.map((mov)=>{
         return <div>
           <h2>Name: {mov.title}</h2>
           <h1>Time: {mov.time}</h1>
         

           <ul>{mov.genres.map((gen)=>{
             return <li>{gen}</li>
           })}</ul>
           </div>
       })}
    </div>
  );
};

export default Movies;
