/* eslint-disable react/prop-types */
import React from "react";
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;

    h3 {
        padding: 30px 0 0 24px;
    }
            
    .pieChartAndKey {
        display: flex;
    }
`;

const ProgramPieChart = (props) => {
    const {test} = props;

    return (
        <Div className="pieChartContainer">
            <div>
                <h3>So ist das Programm aufgeteilt</h3>
            </div>
            <div className="pieChartAndKey">
                <div>
                    <p>PIE CHART</p>
                </div>
                <div>
                    <ul>
                        <li>Kraft</li>
                        <li>Cardio</li>
                        <li>Koordination</li>
                        <li>Beweglichkeit</li>
                        <li>{test}</li>
                    </ul>
                </div>
            </div>
        </Div>
    )
};

export default ProgramPieChart;