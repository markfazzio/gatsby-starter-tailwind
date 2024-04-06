import React from "react";
import { Link } from "gatsby";

const BreadCrumb: React.FC<{ list: { url: string; label: string }[] }> = ({
  list,
}) => {
  return (
    <div className="flex gap-1">
      {list.map(({ url, label }, index) => (
        <>
          <Link className="font-medium" to={url}>
            {label}
          </Link>
          {index !== list.length - 1 && <div className="font-thin	">/</div>}
        </>
      ))}
    </div>
  );
};

export default BreadCrumb;
