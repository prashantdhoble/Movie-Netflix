import React, { useState, useEffect } from 'react'
import axios from '../axios';
import './Row.css';
import YouTube from "react-youtube"
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    //if[],run once when the rrow loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // https://api.themoviedb.org/3 fetchurl
      setMovies(request.data.results);
      console.log(request)
      return request
    }
    fetchData()
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick =(movie)=>{
    if(trailerUrl){
      setTrailerUrl('')
    }else{
      movieTrailer(movie.name || "")
      .then(url =>{
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get("v"))
      })
      .catch((error)=>console.log(error))

     }
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* several row_posters */}

        {movies.map(movie => (
          <img
           key={movie.id} 
           onClick={ () =>handleClick(movie)}
           className= {`row__poster ${ isLargeRow && "row_posterLarge"}`}
           /*if we have larger Row it give a image large ${ isLargeRow && 'row__posterLarge'} */

           src={` ${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
           /* here we want a bigger image in netflix orignal and other will remain same and its width also changed */
           alt={movie.name} />
            
        ))
      }
      </div>
    
      {trailerUrl && <YouTube  videoId={trailerUrl} opts={opts}/>}

    </div>
  )
}

export default Row