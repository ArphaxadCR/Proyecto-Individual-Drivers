import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={style.navbar}>
      <div className={style.buttonContainer}>
        <Link className={style.linkButton} to={"/"}>
          Landing
        </Link>
        <Link className={style.linkButton} to={"/home"}>
          Home
        </Link>
        <Link className={style.linkButton} to={"/form"}>
          Crea tu Driver
        </Link>
      </div>
      <div>
        <p>Aquí va el searchBar</p>
      </div>
    </nav>
  );
}

export default NavBar;
