import { useDispatch, useSelector } from "react-redux";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../../redux/features/relatedVideos/relatedVideoSlice";
import Error from "../ui/Error";
import NotFoundData from "../ui/NotFoundData";
import Loading from "../ui/Loading";

export default function RelatedVideoList({ currentId, tags }) {
  console.log(tags, "RelatedVideoList - currentId:", currentId);
  const dispatch = useDispatch();
  const { videos, isLoading, isError } = useSelector(
    (state) => state?.videoRelated
  );
  console.log("RelatedVideoList - videos:", videos);

  useEffect(() => {
    dispatch(fetchRelatedVideos(tags, currentId));
  }, [dispatch, tags, currentId]);

  //Render Conditions
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <Error />;
  if (!isLoading && !isError && videos?.length <= 0) content = <NotFoundData />;
  if (!isLoading && !isError && videos?.length > 0)
    content = videos?.map((item) => (
      <RelatedVideoListItem key={item?.id} video={item} />
    ));

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
