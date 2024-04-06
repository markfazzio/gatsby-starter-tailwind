import React from "react";
import { Disqus } from "gatsby-plugin-disqus";

const CusotmDisqus: React.FC<{
  url: string;
  identifier: string;
  title: string;
}> = ({ url, identifier, title }) => {
  const disqusConfig = {
    url,
    identifier,
    title,
  };
  return <Disqus config={disqusConfig} />;
};

export default CusotmDisqus;
