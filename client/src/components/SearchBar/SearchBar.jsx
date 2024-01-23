import style from "./SearchBar.module.css";
import { useState } from "react";
import { getDriver, getDriverByName } from "../../redux/actions";
import { useDispatch } from "react-redux";

function SearchBar() {
  let [searchWord, setSearchWord] = useState("");

  const dispatch = useDispatch();

  function handleInput(e) {
    setSearchWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    searchWord = searchWord.trim();

    const numericRegex = /^\d+$/;
    const wordRegex = /^[a-zA-Z]+$/;

    const isNumeric = numericRegex.test(searchWord);
    const isWord = wordRegex.test(searchWord);

    if (searchWord && isNumeric) {
      dispatch(getDriver(searchWord));
    } else if (searchWord && isWord) {
      dispatch(getDriverByName(searchWord));
    }
  }

  return (
    <div className={style.searchBar}>
      <h2>Encuentra a tu Driver</h2>
      <div className={style.inputContainer}>
        <input className={style.input} type="text" onChange={handleInput} />
        <button className={style.button} onClick={handleSubmit}>
          Buscar
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
