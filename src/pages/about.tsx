import React from "react";
import { Link, PageProps } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ContentWrapper from "../components/ContentWrapper";

const About = ({ location }: PageProps) => {
  return (
    <Layout location={location}>
      <Seo title="Not found" />
      <ContentWrapper>
        <div>
          <h2 className="font-bold text-2xl mb-6">Hello, i am Ian.</h2>
          <p className="mb-4">
            I'm working for an AI software company. And i had ever worked as
            markerting, so i realize SEO a little bit.
          </p>
          <p className="mb-4">
            One day, my father's signature company needed to build a website to
            promote their business, so i started to learn how to create
            websites.
          </p>
          <p className="mb-4">
            Finally, i created the website and changed jobs to work as Frontend
            developer.
          </p>
          <p className="mb-4">Without further ado. Let's read my post.🤗</p>
          <div className="flex gap-2 my-4">
            <div>My social media :</div>
            <Link to={`https://www.linkedin.com/in/ian-chu-a32399a3/`}>
              Linkedin
            </Link>
            <div>·</div>
            <Link to={`https://www.facebook.com/chu1228/`}>Facebook</Link>
          </div>
        </div>
      </ContentWrapper>
    </Layout>
  );
};

export default About;
