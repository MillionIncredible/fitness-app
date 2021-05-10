import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import HeartLogo from "../assets/Heart.svg";


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

const PROGRAMS = gql`
  query GetProgramsAndSlugs {
      allProgram {
         title,
         slug {
            current
         }
      }
   }
`;

const Browse = () => {
   const { loading, error, data } = useQuery(PROGRAMS);
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error...</p>;
   if (!data) return <p>No data!</p>;

   const programsTitles = [];
   // const programsSlugs = [];
   data.allProgram.forEach(({ title/* , slug */}) => {
      programsTitles.push(title);
      // programsSlugs.push(slug.current);
   });

   programsTitles.sort((a, b) => {
      if (a < b) {
         return -1;
      }
      if (a > b) {
         return 1;
      }
      return 0;
   });
   
   const programs = programsTitles.map((title) =>
      <Link to={title}>
         <ProgrammDiv>
            <div className="test">
               <img src={HeartLogo} alt="HeartLogo" />
               <p>Neu</p>
            </div>
            <h2>{title}</h2>
         </ProgrammDiv>
      </Link>);

   return (
      <Div>
         <div className="heading">
            <h2>Browse</h2>
            <p>Filter</p>
         </div>
         {programs}
      </Div>
   );
}

export default Browse;