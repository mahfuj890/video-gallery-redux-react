import { useDispatch, useSelector } from "react-redux";
import Tag from "./Tag";
import { useEffect } from "react";
import { fetchTags } from "../../redux/features/tags/tagsSlice";

export default function Tags() {
  const dispatch = useDispatch();
  const { isLoading, isError, tags, errorMessage } = useSelector(
    (state) => state.tags
  );

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    tags?.length > 0 && (
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          {tags?.map((item)=> (  <Tag key={item?.id} title={item?.title} />))}
        
        </div>
      </section>
    )
  );
}
