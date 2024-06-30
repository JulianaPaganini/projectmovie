import { useEffect, useState } from "react";
import api from "../../services/api";

import { Background, Info, Poster, Container } from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";

function Home() {
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[3]);
    }


    async function getTopMovies() {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      setTopMovies(results[3]);
    }

    getMovies()
    getTopMovies()
  }, []);

  return (
    <>
      {movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        >
          <Container>
          <Info>
           <h1>{movie.title}</h1>
           <p>{movie.overview}</p>
           <div>
             <Button red={true}>Assista Agora</Button>
             <Button red={false}>Assista o Trailler</Button>  
           </div>
          </Info>
          <Poster>
           <img
           alt="capa-do-filme"
           src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
           />    
          </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} ></Slider>}
    </>
  );
}

export default Home;
