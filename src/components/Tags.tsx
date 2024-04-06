import React from "react";
import { Link } from "gatsby";

import type { TagsType } from "../pages";

const Tags: React.FC<{ tags: TagsType[] }> = ({ tags }) => {
  return (
    <>
      {tags.map(({ value }, index) => (
        <div className="tag-item" key={value}>
          <Link to={`/tags/${value}`}>
            <span className="text-sm pb-2">{value}</span>
          </Link>
          {index < tags.length - 1 && <span className="px-0.5">·</span>}
        </div>
      ))}
    </>
  );
};

export default Tags;
