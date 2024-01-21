import style from "./Cards.module.css";
import Card from "../Card/Card";

import { getDrivers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

function Cards() {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  return (
    <div className={style.cards}>
      {drivers.map((driver) => (
        <Card key={driver.id} driver={driver} />
      ))}
    </div>
  );
}

export default Cards;
