/* eslint-disable import/prefer-default-export */
import { gql } from "@apollo/client";

export const GET_ALL_PROGRAMS_TITLES_AND_SLUGS = gql`
  query GetProgramsAndSlugsQuery {
    allProgram {
      title
      slug {
        current
      }
    }
  }
`;

export const GET_PROGRAM_BY_SLUG = gql`
  query GetProgramBySlugQuery($slug: String!) {
    allProgram(where: { slug: { current: { eq: $slug } } }) {
      title
      workouts {
        Workout {
          title,
          categories
        }
      }
      difficulty
      focus
      duration
      description
    }
  }
`;
