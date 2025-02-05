import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import api from "../api";
import Error from "../components/Error";
import Loader from "../components/Loader";

const Feed = () => {
  const [videos, setVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();

  const selectedCat = searchParams.get("category");

  useEffect(() => {
    const url = !selectedCat
      ? "/home"
      : selectedCat === "trending"
      ? "/trending"
      : `/search?query=${selectedCat}`;

    // yükleniyor state'ini güncelle
    setIsLoading(true);

    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCat]);

  return (
    <div className="flex">
      <Sidebar selectedCat={selectedCat} />
      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error} />
        ) : (
          videos.map(
            (i) => i.type === "video" && <Card key={i.videoId} video={i} />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
