import React from "react";
import { useAsset } from "@livepeer/react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

interface props {
  id: any;
}

const Player: React.FC<props> = ({id}) => {
  const { data: asset } = useAsset(id);
  type arr = {src: any, type: string}
  const sources: arr[] = [
    {
      src: asset?.downloadUrl,
      type: "video/mp4",
    },
  ];
  return (
    <Plyr
      source={{
        type: "video",
        title: asset?.name,
        sources,
      }}
      options={{
        autoplay: true,
      }}
      autoPlay={true}
    />
  );
}

export default Player;