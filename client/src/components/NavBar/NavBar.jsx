import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

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
        <SearchBar />
      </div>
    </nav>
  );
}

export default NavBar;
