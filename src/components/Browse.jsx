/* eslint-disable no-underscore-dangle */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import HeartLogo from "../assets/Heart.svg";
import { GET_ALL_PROGRAMS_TITLES_AND_SLUGS } from "../graphql/queries"

const Div = styled.div`
  width: 99vw;
  display: flex;
  flex-flow: column;

  & .heading {
    & h2 {
      width: 275px;
      height: 29px;
      margin: 75px 122px 25px 17px;
    }

    & p {
      width: 31px;
      height: 15px;
      margin: 25px 366px 27px 17px;
    }
  }
`;

const ProgrammDiv = styled.div`
  width: 375px;
  height: 215px;
  background-color: var(--color-beige);
  border-radius: 5px;
  margin: 0 22px 20px 17px;
  display: flex;
  flex-flow: column;

  & .test {
    display: flex;

    & img {
      width: 16px;
      margin-left: 16px;
      margin-top: 12.06px;
    }

    & p {
      width: 32px;
      margin-left: 293px;
      margin-top: 12.06px;
    }
  }

  & h2 {
    align-self: center;
    margin-top: 67px;
  }
`;


const Browse = () => {
   const { loading, error, data } = useQuery(GET_ALL_PROGRAMS_TITLES_AND_SLUGS);
   if (loading) return <p>Loading...</p>;
   if (error) return <p>`Error: ${error.message}`</p>;
   if (!data) return <p>No data!</p>;

   // data.allProgram is immutable and throws an error when I try to sort it => Create a copy with '.slice()' of the array and sort that array
   const programsTitlesAndSlugs = data.allProgram.slice();

   programsTitlesAndSlugs.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (titleA < titleB) {
         return -1;
      }
      if (titleA > titleB) {
         return 1;
      }
      return 0;
   });

   const programs = programsTitlesAndSlugs.map((program) => (
      <Link to={{
         pathname: `/program/${program.slug.current}`,
         key: `${program.slug.current}`
      }}>
         <ProgrammDiv>
            <div className="test">
               <img src={HeartLogo} alt="HeartLogo" />
               <p>Neu</p>
            </div>
            <h2>{program.title}</h2>
         </ProgrammDiv>
      </Link>
   ));

   return (
      <Div>
         <div className="heading">
            <h2>Browse</h2>
            <p>Filter</p>
         </div>
         {programs}
      </Div>
   );
};

export default Browse;
