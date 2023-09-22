import Row from './component/Row';
import Banner from './component/Banner';
import Nav from './component/Nav';
import './App.css';
import requests from './request';


function App() {
  return (
    <div className="App">
        <Nav/>
        <Banner/>
          <Row 
            title="NETFLIX ORIGINALS" 
            fetchUrl={requests.fetchNetflixOrignals}
            /* i want to saw the image bigger in this row so that is can apply isLargeRow object that is true */
            isLargeRow = {true}
            />


          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Thriller Movie" fetchUrl={requests.fetchThrillerMovies} />
          <Row title="Documentataries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
