import React, { useRef } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import useIntersectionObserver from "../hooks/useIntersectionObserver";

import type { CategoriesType, TagsType } from "../pages/index";
import Tags from "./Tags";

const SideBar = () => {
  const {
    allMarkdownRemark: { tags, categories },
  }: {
    allMarkdownRemark: { tags: TagsType[]; categories: CategoriesType[] };
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          tags: group(field: frontmatter___tags) {
            value: fieldValue
          }
          categories: group(field: frontmatter___categories) {
            value: fieldValue
          }
        }
      }
    `
  );

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { rootMargin: "0px 0px -100%" });
  const isVisible = entry?.isIntersecting;

  const fixClassName = isVisible ? "sticky top-0" : "";

  return (
    <div ref={ref} className="h-full">
      <div className={`pt-2 ${fixClassName}`}>
        <div className="pb-6">
          <p className="text-base py-2 font-medium">Sponsor Creator</p>
          <a
            href="https://store.line.me/stickershop/author/1019955/zh-Hant"
            className="link text-base leading-6 font-medium py-1 text-center"
            target="_blank"
          >
            <StaticImage
              src="../images/hippostick.png"
              alt="line sticker hippo"
              width={150}
            />
            <p className="text-base text-center py-2">Line Sticker</p>
          </a>
        </div>
        <div className="pb-6">
          <p className="text-base py-2 font-medium">Category</p>
          <div>
            {categories.map(({ value }) => (
              <Link key={value} to={`/categories/${value}`}>
                <p className="text-sm pb-2">{value}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="pb-6">
          <p className="text-base py-2 font-medium">Tag</p>
          <div className="flex flex-wrap">
            <Tags tags={tags} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
