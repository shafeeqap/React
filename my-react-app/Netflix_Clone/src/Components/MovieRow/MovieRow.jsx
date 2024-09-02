import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "../MovieItem/MovieItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Youtube from "react-youtube";
import Modal from "../Modal/Modal";


export default function MovieRow({ title, url, color }) {
  const [movies, setMovies] = useState([]);
  const rowId = Math.floor(Math.random() * 1000);
  const [urlId, setUrlId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);




  useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results));
  }, [url]);

  console.log(movies);

  const slide = (offset) => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovieClick = (id) => {
    console.log("Clicked movie ID:", id);
    const key = import.meta.env.VITE_TMDB_API_KEY;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
      )
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
          setIsModalOpen(true)
        } else {
          console.log("array empty");
        }
      })
      .catch((error) => {
        console.log("Error fethching movie video:", error);
      });
  };

  const closeModal = () =>{
    setIsModalOpen(false)
    setUrlId(id);
  }


  return (
    <>
      <h2 className="font-nsans-bold md:text-xl p-4 capitalize"style={{color:color}} >{title}</h2>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {urlId && <Youtube opts={opts} videoId={urlId.key} />}
      </Modal>

      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => slide(-500)}
          className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden
        group-hover:block cursor-pointer"
          size={40}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              handleMovieClick={handleMovieClick}
              openModal = {() => setIsModalOpen(true)}
            />
          ))}
        </div>
        <MdChevronRight
          onClick={() => slide(500)}
          className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden
        group-hover:block cursor-pointer"
          size={40}
        />
      </div>
    </>
  );
}
