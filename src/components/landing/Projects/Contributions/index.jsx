import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import { Wrapper, Grid, Item, Content, Stats } from "../styles";

export const Contributions = () => {
  const { theme } = useContext(ThemeContext);

  const {
    github: {
      search: { edges },
    },
  } = useStaticQuery(graphql`
    {
      __typename
      github {
        search(
          query: "author:benji011 is:public is:pr created:>2020-01-01"
          type: ISSUE
          first: 8
        ) {
          edges {
            node {
              ... on GitHub_PullRequest {
                id
                author {
                  login
                  url
                }
                closed
                merged
                title
                url
                repository {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <ul className="contributions-section">
      {edges.map(({ node }) => (
        <li key={node.id}>
          <a
            className={
              theme === "light" ? "pr-title-light-title" : "pr-title-dark-title"
            }
            href={node.repository.url}
            target="_blank"
          >
            [{node.repository.name}]{" - "}
          </a>
          <a
            className={theme === "light" ? "pr-title-light" : "pr-title-dark"}
            href={node.url}
            target="_blank"
          >
            {node.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
