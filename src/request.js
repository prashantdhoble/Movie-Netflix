const API_KEY = "656f5346d134f0c1f88904843177ccac";

const requests ={
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:  `/discover/tv?api_key=${API_KEY}&vote_count.gte=200&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

/* https://www.themoviedb.org/talk/5daf6eb0ae36680011d7e6ee this data is taken from tmdb generes */