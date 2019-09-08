import Page from "../templates/Page";
import Link from "next/link";
import Timer from "../components/Timer";
import MileCounter from "../components/MileCounter";
import { useState, useEffect, Dispatch, SetStateAction, useRef } from 'react';
import styled from "styled-components";



const getCoordinates: (arr: Coordinates[], callback: any) => void = (arr, callback) => {
    
    let response = null;
    var options = {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
    };

    function success(pos: any) {
        let crd = pos.coords;
        response = {
            lat: crd.latitude,
            lng: crd.longitude,
            utc: Date.now()
        } as Coordinates
        callback([...arr, response]);
        return;
    }
      
    function error(err: any) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
}

interface Coordinates {
    lat: number;
    lng: number;
    utc: number;
}

interface StartStopProps {
    isRunning: boolean,
    toggle: Dispatch<SetStateAction<boolean>>
}

const StartStop = (props: StartStopProps) => {
    const { isRunning, toggle } = props;
    return (
        isRunning 
            ? <Button onClick={() => toggle(false)}>Pause</Button>
            : <Button onClick={() => toggle(true)}>Start</Button>
    )
}
function useInterval(callback: any, delay: any) {
    const savedCallback = useRef() as any;
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  const startTime = Date.now();

const Running = () => {
    const [coordinates, setCoordinates] = useState([] as Coordinates[]);
    const [isRunning, setIsRunning] = useState(true);
    const [duration, setDuration]  = useState(0);

    useInterval(() => {
        if(isRunning) {
            getCoordinates(coordinates, setCoordinates);
            const currentTime = coordinates[coordinates.length-1] && coordinates[coordinates.length-1].utc;
            if(currentTime) {
                setDuration((currentTime - startTime) / 1000);
            }
            console.log(coordinates)
           
            //console.log(coordinates);

        } 
    }, 1000)

    

    return (
        <Page>
            <h1 style={{fontFamily: "sans-serif"}}>Run!</h1>
            <MileCounter />
            <Timer time={duration}/>
            <StartStop isRunning={isRunning} toggle={setIsRunning}/>
            <Link href="/finished"><ButtonLink>Stop</ButtonLink></Link>
            <Console>
            {
                coordinates.map(x => <LineItem key={x.utc}>Lat: {x.lat} | Lng: {x.lng} | UTC: {x.utc}</LineItem>)
            }
            </Console>
        </Page>
    )
}

const Button = styled.button`
    padding: 10px 30px ;
    border: none;
    background: orange;
    margin: 15px;
    font-family: sans-serif;
    font-size: 14px;
`;

const ButtonLink = styled.a`
    padding: 10px 30px ;
    border: none;
    background: orange;
    font-family: sans-serif;
    font-size: 14px;
`;
const Console = styled.ul`
    background: #16103a;
    min-height: 500px;
    max-height: 1024px;
    overflow: scroll;
    margin-block-start: 0;
    padding-inline-start: 0;
`;
const LineItem = styled.li`
    font-size: 10px;
    color: #fff;
    list-style-type: none;
    font-family: monospace;
    padding: 0;
`

export default Running