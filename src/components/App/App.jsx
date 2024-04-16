import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchImages } from "../../images-api";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleQuery = async (newQuery) => {
    try {
      setIsLoading(true);
      const data = await fetchImages(newQuery);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
    console.log(newQuery);
  };

  return (
    <>
      <SearchBar onSubmit={handleQuery} />
      {error && <b>Ooops!</b>}
      {isLoading && <b>Please wait, loading images...</b>}

      {images.length > 0 && <ImageGallery listImages={images} />}

      <button>LoadMoreBtn</button>
    </>
  );
}
