import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDriver } from "../../redux/actions";
import { useEffect } from "react";
import imagenPorDefecto from "../../assets/imagenPorDefecto.jpg";

function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const driver = useSelector((state) => state.driver);

  useEffect(() => {
    dispatch(getDriver(id));
  }, [id, dispatch]);

  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  return (
    <div className={style.detail}>
      {!uuidRegex.test(id) ? (
        <div className={style.card}>
          <img
            className={style.image}
            src={driver.image?.url || imagenPorDefecto}
            alt="ImagenAPI"
          />
          <h2 className={style.driverRef}>{driver.driverRef}</h2>
          <p>
            <span className={style.preText}>Número:</span> {driver.number}
          </p>
          <p>
            <span className={style.preText}>Código:</span> {driver.code}
          </p>
          <p>
            <span className={style.preText}>Nombre:</span>{" "}
            {driver.name?.forename}
          </p>
          <p>
            <span className={style.preText}>Apellido:</span>{" "}
            {driver.name?.surname}
          </p>
          <p>
            <span className={style.preText}>Fecha de nacimiento:</span>{" "}
            {driver.dob}
          </p>
          <p>
            <span className={style.preText}>Nacionalidad:</span>{" "}
            {driver.nationality}
          </p>
          <p>
            <span className={style.preText}>Escuderias:</span> {driver.teams}
          </p>
          <p className={style.description}>{driver.description}</p>
        </div>
      ) : (
        <div className={style.card}>
          <img
            className={style.image}
            src={
              driver.image && driver.image.url
                ? driver.image.url
                : imagenPorDefecto
            }
            alt="ImagenBDD"
          />
          <p>
            <span className={style.preText}>Nombre: </span>
            {driver.forename}
          </p>
          <p>
            <span className={style.preText}>Apellido: </span>
            {driver.surname}
          </p>
          <p>
            <span className={style.preText}>Descripción: </span>
            {driver.description}
          </p>
          <p>
            <span className={style.preText}>Nacionalidad: </span>
            {driver.nationality}
          </p>
          <p>
            <span className={style.preText}>Fecha de nacimiento: </span>
            {driver.dob}
          </p>
          <p>
            <span className={style.preText}>Equipos: </span>
            {driver.Teams?.map((team) => team.nombre).join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
