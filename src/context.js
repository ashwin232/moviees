//context(Warehouse)
//provider(deliveryboy)
//consumer(you)
import React, { useContext, useEffect, useState } from "react";


const Api_URL=`https://www.omdbapi.com/?&apikey=5ddcde9c&s=titanic`


const Appcontext=React.createContext();

//we need to create a provider

const Appprovider=({children})=>{

const[isloading,setloading]=useState(true);
const [movie,setmovies]=useState([]);
const[isError,setError]=useState({show:"false",msg:""})

const getMovies=async(url)=>{
    try{
        const res=await fetch(url);
        const data= await res.json();
        console.log(data);
        if(data.response==="True"){
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

useEffect(()=>{getMovies(Api_URL)},[])

    return <Appcontext.Provider value={{isloading,isError,movie}}>
        {children}
    </Appcontext.Provider>
};

const useGlobalContext=()=>{
    return useContext(Appcontext)
}

export  {Appcontext,Appprovider,useGlobalContext};

