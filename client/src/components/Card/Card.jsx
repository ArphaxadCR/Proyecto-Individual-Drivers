import style from "./Card.module.css";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className={style.card}>
      <p>Esto es una card</p>
      <Link to={"/detail/1"}>Ir a detail</Link>
    </div>
  );
}

export default Card;
