import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../redux/features/filter/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

export default function Search() {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.filterSlice);
  const [input, setInput] = useState(searchText);

  //Router Dom
  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    // if user is not in home page, redirect to home page
    if (!match) {
      navigate("/");
    }
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
