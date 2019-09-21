import Page from "../templates/Page";
import Link from "next/link";
import Timer from "../components/Timer";
import MileCounter from "../components/MileCounter";
import { useState, useEffect, Dispatch, SetStateAction, useRef } from 'react';
import styled from "../components/styles/theme";
import { computeDistanceBetween, LatLng } from "spherical-geometry-js";
import Distance from "../components/Distance";
import Speed from "../components/Speed";
import FullPage from "../components/FullPage";
const io = require('socket.io-client');
const socket  = io('https://where-is-nic.herokuapp.com');

const CurrentRun = () => {

    const [currentRun, setCurrentRun] = useState({distance: 0, speed: 0, duration: 0})

    useEffect(() => {
        socket.on('currentRun', (details) => {
            console.log(details);
            setCurrentRun(JSON.parse(details));
          })
     }, [currentRun]);

  
    return (
        <Page>
            <FullPage>
                <div>
                    <h1>Nic's Current Run.</h1>
                    <Timer time={currentRun.duration}/>
                    <Speed speed={currentRun.speed}/>
                    <Distance meters={currentRun.distance} />
                </div>
            </FullPage>
        </Page>
    )
}

interface InfoProps {
    isRunning: boolean;
}
const InfoText = styled.p<InfoProps>`
    visibility: ${props => props.isRunning ? "hidden" : "visible"};
    color: ${props => props.theme.green};
    text-transform: uppercase;
    font-size: 18px;
`

const Button = styled.button`
    padding: 10px 30px ;
    background: none;
    color: ${props => props.theme.green};
    border: solid 1px ${props => props.theme.green};
    margin: 15px;
    font-family: sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 2px;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
`

const ButtonLink = styled.a`
    display: block;
    padding: 10px 30px ;
    border: none;
    background: ${props => props.theme.green};
    font-family: sans-serif;
    font-size: 14px;
`;
const Console = styled.ul`
    background: #16103a;
    min-height: 500px;
    max-height: 500px;
    overflow: scroll;
    margin-block-start: 0;
    padding-inline-start: 0;
    li {
        font-size: 8px;
        color: #fff;
        list-style-type: none;
        font-family: monospace;
        padding: 0;
    }
`;


export default CurrentRun