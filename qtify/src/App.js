import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import GridSection from "./components/GridSection/GridSection";
// api
import { fetchNewAlbums, fetchTopAlbums, fetchSongs } from "./api/api";
function App() {
  // 1)
  const [dataTopAlbums, setDataTopAlbums] = useState([]);
  // const [dataNewAlbum, setDataNewAlbum] = useState([]);
  // const [dataSong, setDataSong] = useState([]);
  // 2)
  const getDataTopAlbums = async () => {
    try {
      const res = await fetchTopAlbums();
      setDataTopAlbums(res);
    } catch (error) {
      console.error(error);
    }
  };
  // 3)
  useEffect(() => {
    getDataTopAlbums();
    // getDataNewAlbums();
    // getDataSongs()
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Header />
      <GridSection title={"Top Albums"} data={dataTopAlbums} type={"album"} />
    </div>
  );
}

export default App;
