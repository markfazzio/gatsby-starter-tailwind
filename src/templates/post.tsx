import React, { useState, useEffect, useRef } from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ContentWrapper from "../components/ContentWrapper";
import PostPreNext from "../components/PostPreNext";
import SocialShare from "../components/SocialShare";
import Disqus from "../components/Disqus";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

import BreadCrumb from "../components/BreadCrumb";

import Tags from "../components/Tags";

export type NearByPost = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
};

type PostType = {
  site: {
    siteMetadata: {
      title: string;
    };
  };

  markdownRemark: {
    id: string;
    excerpt: string;
    html: string;
    frontmatter: {
      title: string;
      date: string;
      description: string;
      thumbnail: IGatsbyImageData;
      tags: string[];
      categories: string;
    };
    fields: {
      readingTime: {
        text: string;
      };
    };
  };
  previous: NearByPost | null;
  next: NearByPost | null;
};

const BlogPostTemplate = ({ data, location }: PageProps<PostType>) => {
  const [isShowDisqus, setIsShowDisqus] = useState(false);

  console.log(data);

  const { previous, next, markdownRemark: post, site } = data;

  const siteTitle = site.siteMetadata?.title || `Title`;

  const postImage = getImage(post.frontmatter.thumbnail);

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = entry?.isIntersecting;

  useEffect(() => {
    if (!isShowDisqus) {
      setIsShowDisqus(true);
    }
  }, [isVisible]);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div>
        <div className="lg:max-w-screen-lg mx-auto">
          <header>
            <h1 className="text-center py-4 my-10 font-bold" itemProp="headline">
              {post.frontmatter.title}
            </h1>
            {postImage && (
              <GatsbyImage
                className="mb-10"
                image={postImage}
                alt={post.frontmatter.title}
              />
            )}
          </header>
        </div>
        <ContentWrapper>
          <div className="mb-4">
            <BreadCrumb
              list={[
                {
                  url: `/categories/${post.frontmatter.categories}`,
                  label: post.frontmatter.categories,
                },
                {
                  url: location.pathname,
                  label: post.frontmatter.title,
                },
              ]}
            />
          </div>
          <div className="flex justify-between mb-8" ref={ref}>
            <div className="flex gap-1">
              <p className="font-medium">{post.frontmatter.date}</p>
              <div>·</div>
              <p>{post.fields.readingTime.text}</p>
            </div>
            <SocialShare
              url={location.href}
              title={post.frontmatter.title}
              description={post.frontmatter.description || post.excerpt}
            />
          </div>
          <article
            className="mb-8"
            itemScope
            itemType="http://schema.org/Article"
          >
            <section
              className="article"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          </article>
          <div className="flex justify-end mb-4">
            <Tags tags={post.frontmatter.tags.map((value) => ({ value }))} />
          </div>
          <div className="mb-4">
            <PostPreNext previous={previous} next={next} />
          </div>
          <div className="mb-8">
            {isShowDisqus && (
              <Disqus
                url={location.href}
                identifier={location.pathname.slice(1)}
                title={post.frontmatter.title}
              />
            )}
          </div>
        </ContentWrapper>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
        tags
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 1280)
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
