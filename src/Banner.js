import React, { useEffect, useState } from 'react';
import axios from './axios';//whenever u need to call basse url
import requests from './requests';
import './Banner.css';

function Banner() {
    const[movie,setMovie]=useState([]);
    useEffect(()=>
    {
        async function fetchData(){
            const request= await axios.get(requests.fetchFimistaanOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)//for randomly selection the movie at the top
                ]

            );
            return request;

        }
        fetchData();
    },[]);
    console.log(movie);
    
    /*truncate function to truncate ie 3 dots in paragraph*/
    function truncate(str,n){
        return str?.length>n ? str.substr(0,n-1)+"...":str;
    };
    // {/*this(bannerclass below) is aplied to background img
        //in react we can use javascript css as follows as style is used below*/}
    return (
        <header className="banner"
            style={{
            backgroundSize:"cover",//use all size of container
           
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,//? for hadling any crash situation elegantly
            backgroundPosition:"center center",

        }}>
            <div className="banner__contents">
                <h1>{movie?.title ||movie?.name||  movie?.original_name}</h1>{/* 
                inside div always comment in curly braces 
                sometimes api dont provide by nam , title so for handling errors*/}
              <div className="banner__buttons">
                  <button className="banner__button">Play</button>{/*can be autofilled using emmet*/}
                  <button className="banner__button">My List</button>
                 

                </div>
               <h1 className="banner__description">
                   {truncate(movie?.overview,150)}
               </h1>
            
        </div>
        <div className="banner__fadeBotttom"/>
        </header>
    );
}

export default Banner
