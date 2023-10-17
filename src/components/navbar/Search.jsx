import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../redux/features/filter/filterSlice";

export default function Search() {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.filterSlice);

  const [input, setInput] = useState(searchText);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
