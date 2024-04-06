import React, { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";

import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";

const Layout: React.FC<{
  title?: string;
  children: any;
  location: { pathname: string };
}> = ({ children, location, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="bg-primary text-main-text transition-all duration-300 min-h-screen flex flex-col">
      <Header
        location={location}
        siteTitle={title || data.site.siteMetadata?.title}
      />
      <div className="grow mx-6 md:mx-0">{children}</div>
      <footer className="text-center py-2 text-sm">
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> &middot;{" "}
        <a href="https://github.com/Ianpig/gatsby-tailwind-typescript-starter">
          Mark Fazzio
        </a>
      </footer>
    </div>
  );
};

export default Layout;
