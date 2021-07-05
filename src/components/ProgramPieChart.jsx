/* eslint-disable react/prop-types */
import React from "react";
import PieChart from 'react-simple-pie-chart';
import styled from 'styled-components';


const Div = styled.div`
    width: 100%;

    h3 {
        padding: 30px 0 0 24px;
    }
            
    .pieChartAndKey {
        display: flex;
        padding-top: 40px;

        .PieChartContainer {
            width: 159.43px;
            height: 159.44px;
            padding-left: 24px
        }

        .KeyContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 159.43px;
            height: 159.44px;

            ul {
                list-style: none;

                li {
                    margin-bottom: 18px;

                    .circleStrength {
                        display: inline-block ;
                        margin-right: 12px;
                        width: 14px;
                        height: 14px;
                        box-sizing: border-box;
                        border: 2px solid #7A8778;
                        background-color: #7A8778;
                        border-radius: 100%;
                    }

                    .circleCardio {
                        display: inline-block ;
                        margin-right: 12px;
                        width: 14px;
                        height: 14px;
                        box-sizing: border-box;
                        border: 2px solid #939C91;
                        background-color: #939C91;
                        border-radius: 100%;
                    }

                    .circleCoordination {
                        display: inline-block ;
                        margin-right: 12px;
                        width: 14px;
                        height: 14px;
                        box-sizing: border-box;
                        border: 2px solid #BBC8B9;
                        background-color: #BBC8B9;
                        border-radius: 100%;
                    }

                    .circleMobility {
                        display: inline-block ;
                        margin-right: 12px;
                        width: 14px;
                        height: 14px;
                        box-sizing: border-box;
                        border: 2px solid #D2DDD0;
                        background-color: #D2DDD0;
                        border-radius: 100%;
                    }
                }
            }
        }
 
    }
`;

const ProgramPieChart = (props) => {
    const { cardioCount } = props;
    const { coordinationCount } = props;
    const { mobilityCount } = props;
    const { strengthCount } = props;

    return (
        <Div className="pieChartContainer">
            <div>
                <h3>So ist das Programm aufgeteilt</h3>
            </div>
            <div className="pieChartAndKey">
                <div className="PieChartContainer">
                    <PieChart
                        slices={[
                            {
                                color: '#7A8778',
                                value: strengthCount,
                            },
                            {
                                color: '#939C91',
                                value: cardioCount,
                            },
                            {
                                color: '#BBC8B9',
                                value: coordinationCount,
                            },
                            {
                                color: '#D2DDD0',
                                value: mobilityCount,
                            }
                        ]}
                    />
                </div>
                <div className="KeyContainer">
                    <ul>
                        <li><div className="circleStrength" />Kraft</li>
                        <li><div className="circleCardio" />Cardio</li>
                        <li><div className="circleCoordination" />Koordination</li>
                        <li><div className="circleMobility" />Beweglichkeit</li>
                    </ul>
                </div>
            </div>
        </Div>
    )
};

export default ProgramPieChart;