import F1Logo from "../../assets/F1.svg";
import F1Video from "../../assets/F1Video.mp4";
import style from "./LandingPage.module.css";

import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <video className={style.video} playsInline autoPlay muted loop>
        <source src={F1Video} type="video/mp4" />
      </video>
      <div className={style.content}>
        <h1 className={style.title}>Proyecto Individual - Drivers</h1>
        <img src={F1Logo} alt="F1Logo" className={style.logo} />
        <br />
        <Link to={"/home"}>
          <button className={style.button}>Comenzar</button>
        </Link>
      </div>
    </>
  );
}

export default LandingPage;
