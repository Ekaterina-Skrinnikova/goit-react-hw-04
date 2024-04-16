import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ listImages }) {
  return (
    <ul>
      {listImages.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard image={item} />
          </li>
        );
      })}
    </ul>
  );
}
