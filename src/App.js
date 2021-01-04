import {useState, useEffect} from "react"
import './App.css';
import Header from "./components/Header/index"
import axios from "axios";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=9999516024fcedf9b329414356aebb69&page=${currentPage}`)
    .then((res) => setData(res.data))
  },[currentPage],)
  const [data, setData] = useState()
  console.log(data)
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  }
  return (
    <>
      <Header />
      <div className="App">
        {data && data.results.map((data) => (
          <div className="card" style={{display: "flex", flexDirection: "column", alignItems: "center", width: "300px"}}>
            <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt="poster"/>
            <h3>{data.original_title}</h3>
            <p>Release Date: {data.release_date}</p>
            <h4>Overview:</h4>
            <p>{data.overview}</p>
          </div>
        ))
        }
        
      </div>
      {currentPage !== 1 && <button onClick={previousPage}>Previous Page</button>}
      <button onClick={nextPage}>Next Page</button>
    </>
  );
}

export default App;
