import './App.css';
import Row from './Row';
import React from 'react';
import requests from './requests';
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner /> 
      <Row title="FILMISTAAN ORIGINALS" fetchUrl={requests.fetchFimistaanOriginals}
      isLargeRow//it defalts to islarge=true
       />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.FetchCOmedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documantaries" fetchUrl={requests.fetchDocumentaries}/>
     </div>
  );
}
      
export default App;
