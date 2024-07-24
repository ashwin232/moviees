import React from 'react'
import { useGlobalContext } from './context';

const Moviedata = () => {
    const {Movie}=useGlobalContext();
  return (
     <>
    {Movie.map((curMovie)=>{
      return(
        <div>
          <h2>{curMovie.Title}</h2>
        </div>
      );
    })} 
    </>
  )
}

export default Moviedata;