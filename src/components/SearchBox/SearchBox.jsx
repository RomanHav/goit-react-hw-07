import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import { useSelector, useDispatch } from "react-redux";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleFilter = (e) => dispatch(changeFilter(e.target.value.trim()));

  return (
    <div className={css.searchBox}>
      <label htmlFor={filter}>Find contacts by name</label>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filter}
        onChange={handleFilter}
        id={filter}
      />
    </div>
  );
}
