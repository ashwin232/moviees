import {React,useState,useEffect} from 'react'
import { useParams,NavLink } from 'react-router-dom';
import { Api_URL } from './context';

const Single = () => {
  const {id}=useParams();
  const [movie,setmovies]=useState("");
  const getMovies=async(url)=>{
        const res=await fetch(url);
        const data= await res.json();
        console.log(data)
            setmovies(data);
}

useEffect(()=>{getMovies(`${Api_URL}&i=${id}`);},[id])

  return (
    <>
    <div>
      <button>
        <NavLink to='/'>back</NavLink>
      </button>
    </div>
    <div>
      <img src={movie.Poster}/>
    </div>
    </>
  )
}

export default Single;