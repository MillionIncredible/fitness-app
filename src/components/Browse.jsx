import React from 'react';
import styled from 'styled-components';
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

function Browse() {
   const programms = ['Head', 'Legs', 'Dance', 'Yoga', 'Aerobic', '100 Sit-Ups Challenge', '100 Push-Ups Challenge', 'ABS for Beginner', 'Booty and Legs', 'Full Body', 'Shoulders'];
   programms.sort();

   return (
      <Div>
         <div className="heading">
            <h2>Browse</h2>
            <p>Filter</p>
         </div>
        {programms.map((programm) => 
            <ProgrammDiv>
               <div className="test">
                  <img src={HeartLogo} alt="HeartLogo" />
                  <p>Neu</p>
               </div>
               <h2>{programm}</h2>
            </ProgrammDiv>)
         }
      </Div>
   );
}

export default Browse;