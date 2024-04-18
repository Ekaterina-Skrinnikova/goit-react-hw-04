import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ listImages, openModal }) {
  return (
    <ul className={css.list}>
      {listImages.map((item) => {
        // console.log(item);
        return (
          <li
            className={css.item}
            onClick={() => openModal(item.urls.regular, item.description)}
            key={item.id}
          >
            <ImageCard image={item} />
          </li>
        );
      })}
    </ul>
  );
}
