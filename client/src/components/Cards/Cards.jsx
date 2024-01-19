import style from "./Cards.module.css";
import Card from "../Card/Card";
function Cards() {
  return (
    <div className={style.cards}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
