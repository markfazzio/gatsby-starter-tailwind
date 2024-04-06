import React from "react";
import { Facebook, Twitter } from "react-feather";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const SocialShare: React.FC<{
  url: string;
  title: string;
  description: string;
}> = ({ url, title, description }) => {
  return (
    <div className="flex gap-2">
      <FacebookShareButton className="h-fit hover:opacity-75" url={url} quote={description}>
        <Facebook strokeWidth={1.25} />
      </FacebookShareButton>
      <TwitterShareButton className="h-fit hover:opacity-75" url={url} title={title}>
        <Twitter strokeWidth={1.25} />
      </TwitterShareButton>
    </div>
  );
};

export default SocialShare;
