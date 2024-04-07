import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const SocialShare: React.FC<{
  url: string;
  title: string;
  description: string;
}> = ({ url, title, description }) => {
  return (
    <div className="flex gap-2">
      <FacebookShareButton
        className="h-fit hover:opacity-75"
        url={url}
        quote={description}
      >
        Share
      </FacebookShareButton>
      <TwitterShareButton
        className="h-fit hover:opacity-75"
        url={url}
        title={title}
      >
        Tweet
      </TwitterShareButton>
    </div>
  );
};

export default SocialShare;
