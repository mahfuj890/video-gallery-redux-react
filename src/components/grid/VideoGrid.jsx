import { useDispatch, useSelector } from "react-redux";
import VideoGridItem from "./VideoGridItem";
import { useEffect } from "react";
import { fetchVideos } from "../../redux/features/videos/videoSlice";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import NotFoundData from "../ui/NotFoundData";

export default function VideGrid() {
  //Action dispatched
  const dispatch = useDispatch();

  //Get videos properties return initial state
  const { isLoading, isError, videos, errorMessage } = useSelector(
    (state) => state.videos
  );

  const { selectedTags, searchText } = useSelector(
    (state) => state.filterSlice
  );

  useEffect(() => {
    dispatch(fetchVideos({ selectedTags, searchText }));
  }, [dispatch, selectedTags, searchText]);

  //Render Conditions
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <Error />;
  if (!isLoading && !isError && videos?.length <= 0) content = <NotFoundData />;
  if (!isLoading && !isError && videos?.length > 0)
    content = videos?.map((item) => (
      <VideoGridItem key={item?.id} video={item} />
    ));

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}

          {/* <div className="col-span-12">some error happened</div> */}
        </div>
      </section>
    </section>
  );
}
