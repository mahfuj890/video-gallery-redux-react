import { useDispatch, useSelector } from "react-redux";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import { useEffect } from "react";
import { fetchVideoDetails } from "../redux/features/videoDetails/videoDetailsSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import NotFoundData from "../components/ui/NotFoundData";

export default function Video() {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { isLoading, isError, videos, errorMessage } = useSelector(
    (state) => state.videoDetails
  );

  useEffect(() => {
    dispatch(fetchVideoDetails(videoId));
  }, [dispatch, videoId]);

  //condition render
  let contentRender = null;
  if (isLoading) {
    contentRender = <Loading />;
  }
  if (!isLoading && isError) contentRender = <Error />;
  if (!isLoading && !isError && !videos?.id) contentRender = <NotFoundData />;
  if (!isLoading && !isError && videos?.id)
    contentRender = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer link={videos?.link} title={videos?.title} />

          <VideoDescription
            title={videos?.title}
            description={videos?.description}
            date={videos?.date}
            like={videos?.likes}
            unLinke={videos?.unlikes}
          />
        </div>

        <RelatedVideoList currentId={videos?.id} tags={videos?.tags} />
      </div>
    );

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {contentRender}
        </div>
      </section>
    </>
  );
}
