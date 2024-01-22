/* eslint-disable react/prop-types */
import style from "./Card.module.css";
// import { Link } from "react-router-dom";
import imagenPorDefecto from "../../assets/imagenPorDefecto.jpg";
import { Link } from "react-router-dom";

function Card(props) {
  const idRegex1 =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  return (
    <div className={style.card}>
      {!idRegex1.test(props.driver.id) ? (
        <>
          <Link to={`/detail/${props.driver.id}`}>
            <img
              className={style.img}
              src={props.driver.image?.url || imagenPorDefecto}
              alt=""
            />
          </Link>
          <h2 className={style.name}>{props.driver.driverRef}</h2>
          <p className={style.paragraph}>{props.driver.teams}</p>
        </>
      ) : (
        <>
          <Link to={`/detail/${props.driver.id}`}>
            <img
              className={style.img}
              src={
                props.driver.image && props.driver.image.url
                  ? props.driver.image.url
                  : imagenPorDefecto
              }
              alt="Imag"
            />
          </Link>
          <h2 className={style.name}>{props.driver.forename}</h2>
          <h3>{props.driver.surname}</h3>
        </>
      )}
    </div>
  );
}

export default Card;
