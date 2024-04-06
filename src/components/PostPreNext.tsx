import React from "react";
import { Link } from "gatsby";

import { NearByPost } from "../templates/post";

const PostPreNext = ({
  previous,
  next,
}: {
  previous: NearByPost | null;
  next: NearByPost | null;
}) => {
  return (
    <nav>
      <ul className="md:flex md:justify-between">
        <li className="flex grow">
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li className="flex grow justify-end">
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default PostPreNext;
