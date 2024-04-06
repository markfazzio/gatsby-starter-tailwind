import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Banner: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 py-4 pb-20">
      <div className="flex content-center justify-center justify-self-end flex-col md:pr-12">
        <p className="text-xl pb-2">Keep curiosity alive</p>
      </div>
      <div className="flex items-center	justify-start">
        <StaticImage
          src="../images/banner.png"
          alt="ian and hippo"
          width={240}
        />
      </div>
    </div>
  );
};

export default Banner;
