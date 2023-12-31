import React, { useEffect, useState } from 'react'
import axios from '../axios';
import requests from '../request';
import "./Banner.css"

function Banner() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOrignals)
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
            );
            return request;
        }
        fetchData();

        console.log(movies)
    }, [])

    function truncate(str, n) {
       return str?.length >n?str.substr(0, n-1)+ "...":str;
    }
    
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}" ) `,
            backgroundPosition: "center center"
           
        }}>


            <div className="banner__contents">
                <h1 className="banner__title"> {movies.title || movies.name || movies.original_name} </h1>

                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h1 className="banner_description">
                {/*movies.overview */}
                {truncate(movies.overview,150)}
                </h1>
            </div>
          
            {/* making a empyty div for steaming by P-dhoble */}

            <div className="banner--fadeBottom"></div>

        </header>
    )
}

export default Banner