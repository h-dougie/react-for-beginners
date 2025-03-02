import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const response = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(response.data.movie);
    };

    getMovie();
    setLoading(false);
  }, [id]);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}

export default Detail;
