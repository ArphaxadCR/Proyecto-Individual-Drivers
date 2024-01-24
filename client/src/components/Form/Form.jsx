import style from "./Form.module.css";

function Form() {
  return (
    <div className={style.mainContainer}>
      <h2 className={style.title}>¡Crea a tu Driver!</h2>
      <form className={style.form}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />

        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" />

        <label htmlFor="descripcion">Descripcion</label>
        <input type="text" id="descripcion" />

        <label htmlFor="imagen">Imagen</label>
        <input type="text" id="imagen" />

        <label htmlFor="nacionalidad">Nacionalidad</label>
        <input type="text" id="nacionalidad" />

        <label htmlFor="equipos">Equipos</label>
        <input type="text" id="equipos" />

        <label htmlFor="nacimiento">Fecha de nacimiento</label>
        <input type="date" id="nacimiento" />

        <button type="submit" className={style.button}>
          Crear
        </button>
      </form>
    </div>
  );
}

export default Form;
