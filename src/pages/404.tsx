import React from "react";
import { Link, PageProps } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ContentWrapper from "../components/ContentWrapper";

const NotFoundPage = ({ location }: PageProps) => {
  return (
    <Layout location={location}>
      <Seo title="Not found" />
      <ContentWrapper>
        <h1 className="mb-4">Page not found</h1>
        <div>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </div>
      </ContentWrapper>
    </Layout>
  );
};

export default NotFoundPage;
