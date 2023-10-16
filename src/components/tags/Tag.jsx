import { useDispatch, useSelector } from "react-redux";
import {
  tagSelected,
  tagRemoved,
} from "../../redux/features/filter/filterSlice";

export default function Tag({ title }) {
  const dispatch = useDispatch();
  const { selectedTags } = useSelector((state) => state.filterSlice);

  const isSelected = selectedTags.includes(title) ? true : false;

  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  return (
    <div className={style} onClick={handleSelect}>
      {title}
    </div>
  );
}

{
  /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
redux
</div> */
}
