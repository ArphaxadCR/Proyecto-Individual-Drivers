/* eslint-disable react-hooks/exhaustive-deps */
import style from "./Cards.module.css";
import Card from "../Card/Card";

import { getDrivers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

function Cards() {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);
  const driver = useSelector((state) => state.driver);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDrivers = drivers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={style.mainContainer}>
      <div className={style.cards}>
        {
          /*Aquí es donde vamos a tener que hacer el cambio*/
          driver.id ? (
            <Card key={driver.id} driver={driver} />
          ) : (
            currentDrivers.map((driver) => (
              <Card key={driver.id} driver={driver} />
            ))
          )
        }
      </div>

      <div className={style.paginationControls}>
        <button
          className={style.paginationButton}
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          First
        </button>
        <button
          className={style.paginationButton}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span>{currentPage}</span>
        <button
          className={style.paginationButton}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= drivers.length}
        >
          &gt;
        </button>
        <button
          className={style.paginationButton}
          onClick={() =>
            setCurrentPage(Math.ceil(drivers.length / itemsPerPage))
          }
          disabled={currentPage === Math.ceil(drivers.length / itemsPerPage)}
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default Cards;
