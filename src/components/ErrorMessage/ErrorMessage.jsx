import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return <b className={css.error}>Ooops! There was an error! Please reload!</b>;
}
