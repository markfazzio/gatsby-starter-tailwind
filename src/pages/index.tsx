import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = ({ location }: PageProps<any>) => {
  return (
    <Layout location={location}>
      <Seo title="Home" />
      <main>
        <div className="container mx-auto">
          Hello! I am a minimal Gatsby/Typescript/Tailwind starter. Use wisely!
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
