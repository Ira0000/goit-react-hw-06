import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/Contact/actions";
import { selectNameFilter } from "../../redux/Contact/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    dispatch(changeFilter(e.target.value.toLowerCase().trim()));
    // setSearchName(e.target.value);
  };

  const filter = useSelector(selectNameFilter);
  console.log(filter);

  const id = { useId };
  return (
    <div className={s.searchContainer}>
      <lable htmlFor={id}>Find contacts by name</lable>
      <input
        id={id}
        type="text"
        name="searchName"
        onChange={handleSearchInput}
      ></input>
    </div>
  );
};

export default SearchBox;
