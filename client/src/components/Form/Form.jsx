/* eslint-disable react-hooks/exhaustive-deps */
import style from "./Form.module.css";
import { getTeams, postDriver } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import validation from "./validation";

function Form() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const teams = useSelector((state) => state.teams);

  const [driverData, setDriverData] = useState({
    forename: "",
    surname: "",
    description: "",
    image: "",
    nationality: "",
    teamIds: [],
    dob: "",
  });

  const [errors, setErrors] = useState({
    forename: "",
    surname: "",
    description: "",
    image: "",
    nationality: "",
    teamIds: "",
    dob: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const updatedTeamsIds = checked
        ? [...driverData.teamIds, value]
        : driverData.teamIds.filter((teamId) => teamId !== value);
      setDriverData({
        ...driverData,
        teamIds: updatedTeamsIds,
      });
      setErrors(validation({ ...driverData, teamIds: updatedTeamsIds }));
    } else {
      setDriverData({
        ...driverData,
        [name]: value,
      });
      setErrors(validation({ ...driverData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postDriver(driverData));
    setDriverData({
      forename: "",
      surname: "",
      description: "",
      image: "",
      nationality: "",
      teamIds: [],
      dob: "",
    });
  };

  console.log(errors);

  return (
    <div className={style.mainContainer}>
      <h2 className={style.title}>¡Crea a tu Driver!</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="forename">Nombre</label>
        <input
          type="text"
          id="forename"
          name="forename"
          onChange={handleChange}
        />
        {errors.forename && <p className={style.error}>{errors.forename}</p>}

        <label htmlFor="surname">Apellido</label>
        <input
          type="text"
          id="surname"
          name="surname"
          onChange={handleChange}
        />
        {errors.surname && <p className={style.error}>{errors.surname}</p>}

        <label htmlFor="description">Descripcion</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
        />
        {errors.description && (
          <p className={style.error}>{errors.description}</p>
        )}

        <label htmlFor="image">Imagen</label>
        <input type="text" id="image" name="image" onChange={handleChange} />
        {errors.image && <p className={style.error}>{errors.image}</p>}

        <label htmlFor="nationality">Nacionalidad</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          onChange={handleChange}
        />
        {errors.nationality && (
          <p className={style.error}>{errors.nationality}</p>
        )}

        <label htmlFor="dob">Fecha de nacimiento</label>
        <input type="date" id="dob" name="dob" onChange={handleChange} />
        {errors.dob && <p className={style.error}>{errors.dob}</p>}

        <label htmlFor="teamIds">Equipos</label>
        {/* <input type="text" id="equipoteamIds" name="equipoteamIds" /> */}
        <div className={style.cheboxTeams}>
          {teams.map((team) => {
            return (
              <div key={team.id}>
                <input
                  type="checkbox"
                  id={team.id}
                  name={team.nombre}
                  value={team.id}
                  checked={driverData.teamIds.includes(String(team.id))}
                  onChange={handleChange}
                />
                <label className={style.labelCheck} htmlFor={team.id}>
                  {team.nombre}
                </label>
              </div>
            );
          })}
        </div>
        {errors.teamIds && <p className={style.error}>{errors.teamIds}</p>}

        <button
          type="submit"
          className={style.button}
          disabled={Object.keys(errors).length > 0}
        >
          Crear
        </button>
      </form>
    </div>
  );
}

export default Form;
