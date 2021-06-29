import React,{useState,useEffect} from 'react';
import axios from './axios';
import './Row.css';
//import YouTube from "react-youtube";
//import movieTrailer from 'movie-trailer';
const base_url="https://image.tmdb.org/t/p/original/";//every post url is appended to base url(base url is same string in every url)

function Row({ title,fetchUrl,isLargeRow}) {
    const [movies,setMovis] = useState([]);

    //usestate for a snippet of code which runs on a specific condintion
    //so run a piece of code when row loads
    useEffect(()=> {
        /*if [],means run once when the row loads and dont run it again if u pass [movies ]then it will run once when row load and then runn= everytime 
        when movie change*/
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovis(request.data.results);
            return request;

        }
        fetchData();

        //this async is used whenever u r making call to the third party as it takes time so it allow programm to wait

    },[fetchUrl]);//it is used as evry time the fetchurl changes then we need to re render the use effect
     console.log(movies);
     //this all cods can be seen from documentation of react youtube npm
     /*const opts={
         height:"390",
         width:"100%",
         playerVars:{
         autoplay: 1,},
      
    };*/
    /*eslint no-undef:"off"*/
    /*const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
        movieTrailer(movie?.name || "")
        //FIND THE MOVIETRILER BY NAME
        .then((url)=>{
            const urlParams=new URLSearchParams(new URL(url).search);
           setTrailerUrl( urlParams.get('v'));//anything that comrs in url after v is v=Xtshfsru
        })
        .catch((error)=>console.log(error));
    }
    };*/

    return (
        <div className="row">
           <h2>{title}</h2> 
           <div className="row_posters">

               {movies.map(movie=>(
               <img
               key={movie.id}//just for optimizing
               onClick={()=>handleClick(movie)}//when imaage is clicked
               className={`row__poster ${isLargeRow && "row__posterLarge"}`}
               //everythind comes under row poster class but if its large row then the class name will be row poster large
                src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                //the ternary operator is user if u using trending row then use poster path else backdrop
                //`` this is strin entapilation which is java script feature
               //we write javascript wihtin curly barckets and anything string  within those js is written in srting entapilation and a variable 
               //containing string is displayed using dollar$ sign 
               ))}
           </div>
          {/*trailerUrl&& <YouTube videoId={trailerUrl} opts={opts}/>*/} 

        </div>//when we have trailer url then show u tube video thats what && does ir if trailer url is true then
    )
}

export default Row 
