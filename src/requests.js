const API_KEY= "398c5583364a39c9f36c630aa9eaaaf4";

const requests={
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchFimistaanOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    FetchCOmedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;

