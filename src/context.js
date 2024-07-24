//context(Warehouse)
//provider(deliveryboy)
//consumer(you)
import React, { useContext, useEffect, useState } from "react";


export const Api_URL=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const Appcontext=React.createContext();

//we need to create a provider

const Appprovider=({children})=>{

const[isloading,setloading]=useState(true);
const [movie,setmovies]=useState([]);
const[isError,setError]=useState({show:"false",msg:""})
const[query,setquery]=useState("")

const getMovies=async(url)=>{
    try{
        const res=await fetch(url);
        const data= await res.json();
        console.log(data);
        if(data.Response==="True"){
            setloading(false);
             setmovies(data.Search);
        }
    }
    catch(error){
        setError({
            show:true,
            msg:"data.error"
        })
    }
}

useEffect(()=>{getMovies(`${Api_URL}&s=${query}`);},[query])

    return <Appcontext.Provider value={{movie,isloading,isError,setquery,query}}>
        {children}
    </Appcontext.Provider>
};

const useGlobalContext=()=>{
    return useContext(Appcontext)
}

export  {Appcontext,Appprovider,useGlobalContext};

