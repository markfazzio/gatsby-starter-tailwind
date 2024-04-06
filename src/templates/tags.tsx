import React from "react";
import { graphql, PageProps } from "gatsby";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Seo from "../components/Seo";
import PostItem from "../components/PostItem";
import SideBar from "../components/SideBar";

export type CategoriesType = {
  value: string;
};

export type TagsType = {
  value: string;
};

type DataWithPosts = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    nodes: [
      {
        excerpt: string;
        fields: {
          slug: string;
          readingTime: {
            text: string;
          };
        };
        frontmatter: {
          date: string;
          title: string;
          description: string;
          thumbnail: IGatsbyImageData;
          categories: string;
        };
      }
    ];
  };
};

const Tags = ({ pageContext, data, location }: PageProps<DataWithPosts>) => {
  const posts = data.allMarkdownRemark.nodes;
  const { tag } = pageContext as { tag: string };

  return (
    <Layout location={location}>
      <Seo title="Mark Fazzio" />
      <Banner />
      <main>
        <div className="container mx-auto py-4 sm:px-4 lg:max-w-screen-lg">
          <div className="pb-10">
            <h3 className="text-lg font-bold">
              Tag: {tag} ({posts.length})
            </h3>
          </div>
          <div className="grid md:grid-cols-6 md:gap-20">
            <div className="md:col-span-4">
              {posts.map((post) => {
                const title = post.frontmatter.title || post.fields.slug;
                const postImage = getImage(post.frontmatter.thumbnail);
                return (
                  <PostItem
                    key={post.fields.slug}
                    slug={post.fields.slug}
                    title={title}
                    description={post.frontmatter.description || post.excerpt}
                    postImage={postImage}
                    date={post.frontmatter.date}
                    category={post.frontmatter.categories}
                    readingTimeText={post.fields.readingTime.text}
                  />
                );
              })}
            </div>
            <div className="hidden md:block md:col-span-2">
              <SideBar />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
          categories
        }
      }
    }
  }
`;
