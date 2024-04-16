import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
// import ImageModal from "../ImageModal/ImageModal";
import { fetchImages } from "../../images-api";
import { Bars } from "react-loader-spinner";

import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  // const [isOpen, setIsOpen] = useState(false);

  const handleQuery = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, query]);

  return (
    <>
      <SearchBar onSubmit={handleQuery} />
      {error && (
        <b className={css.error}>Ooops! There was an error! Please reload!</b>
      )}

      {images.length > 0 && <ImageGallery listImages={images} />}
      {isLoading && (
        <Bars
          height="25"
          width="25"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass={css.container}
          visible={true}
        />
      )}

      {images.length > 0 && !isLoading && (
        <button className={css.btn} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </>
  );
}
