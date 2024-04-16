import css from "./ImageCard.module.css";

export default function ImageCard({ image: { urls, description } }) {
  return (
    <div className={css.img}>
      <img src={urls.small} alt={description} width="250" height="200" />
    </div>
  );
}
