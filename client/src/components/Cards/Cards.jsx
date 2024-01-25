/* eslint-disable react-hooks/exhaustive-deps */
import style from "./Cards.module.css";
import Card from "../Card/Card";

import {
  getDrivers,
  filterBDAPI,
  orderNombre,
  orderNacimiento,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

function Cards() {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);
  const driver = useSelector((state) => state.driver);

  const [aux, setAux] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDrivers = drivers.slice(indexOfFirstItem, indexOfLastItem);

  function handleFilterBDAPI(e) {
    dispatch(filterBDAPI(e.target.value));
  }

  function orderName(e) {
    dispatch(orderNombre(e.target.value));
    setAux(!aux);
  }

  function orderDob(e) {
    dispatch(orderNacimiento(e.target.value));
    setAux(!aux);
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.orderAndFilterControllers}>
        <select
          name="filterDBAPI"
          id="filterDBAPI"
          onChange={handleFilterBDAPI}
        >
          <option value="All">Todos los Drivers</option>
          <option value="API">Origen API</option>
          <option value="DB">Origen DB</option>
        </select>
        <select name="filterTeams" id="filterTeams">
          <option value="All">Todos los Teams</option>
          <option value="Teams">Teams xd</option>
        </select>
        <select name="orderNacimiento" id="orderNacimiento" onChange={orderDob}>
          <option value="All">Ordenar por fecha de nacimiento</option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>
        <select
          name="orderAlfabetico"
          id="orderAlfabetico"
          onChange={orderName}
        >
          <option value="All">Ordenar por nombre</option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>
      </div>
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
