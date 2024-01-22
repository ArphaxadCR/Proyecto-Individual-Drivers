// import style from "./Detail.module.css";
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
    <div>
      {!uuidRegex.test(id) ? (
        <>
          <img src={driver.image?.url || imagenPorDefecto} alt="ImagenAPI" />
          <h2>{driver.driverRef}</h2>
          <p>{driver.number}</p>
          <p>{driver.code}</p>
          <p>{driver.name?.forename}</p>
          <p>{driver.name?.surname}</p>
          <p>{driver.dob}</p>
          <p>{driver.nationality}</p>
          <p>{driver.teams}</p>
          <p>{driver.description}</p>
        </>
      ) : (
        <>
          <img
            src={
              driver.image && driver.image.url
                ? driver.image.url
                : imagenPorDefecto
            }
            alt="ImagenBDD"
          />
          <p>{driver.forename}</p>
          <p>{driver.surname}</p>
          <p>{driver.description}</p>
          <p>{driver.nationality}</p>
          <p>{driver.dob}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
