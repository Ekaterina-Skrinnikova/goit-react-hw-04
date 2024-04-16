import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ listImages }) {
  return (
    <ul className={css.list}>
      {listImages.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <ImageCard image={item} />
          </li>
        );
      })}
    </ul>
  );
}
