import Page from "../templates/Page";
import Link from "next/link";
import Timer from "../components/Timer";
import MileCounter from "../components/MileCounter";
import { useState, useEffect, Dispatch, SetStateAction, useRef } from 'react';
import styled from "styled-components";
import { computeDistanceBetween, LatLng } from "spherical-geometry-js";


const getCoordinates: (arr: Coordinates[], callback: (arr: Coordinates[]) => void) => void = (arr, callback) => {
    
    let response = null;
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos: any) {
        let crd: Coordinates = pos.coords;
        console.log(crd);
        response = {
            latitude: crd.latitude,
            longitude: crd.longitude,
            accuracy: crd.accuracy,
            altitude: crd.altitude,
            altitudeAccuracy: crd.altitudeAccuracy,
            heading: crd.heading,
            speed: crd.speed,
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
    latitude: number;
    longitude: number;
    utc: number;
    altitude?: number | null;
    accuracy?: number;
    altitudeAccuracy?: number | null;
    heading?: number | null;
    speed?: number | null;
}

const sampleData: Coordinates[] = [
    {
        latitude: 39.0067718,
        longitude: -105.06114945,
        utc: 1567956461422
    },
    {
        latitude: 39.0069154,
        longitude: -105.0603721,
        utc: 1567956490407
    },
    {
        latitude: 38.9993031,
        longitude: -105.0402898,
        utc: 1567958139410
    }
]
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
    const [speed, setSpeed] = useState(0);
    const [distance, setDistance] = useState(0);

    useInterval(() => {
        if(isRunning) {
            getCoordinates(coordinates, setCoordinates);
            const current = coordinates[coordinates.length-1] && coordinates[coordinates.length-1]
            const previous = coordinates[coordinates.length-2] && coordinates[coordinates.length-2]

            const currentTime = current && current.utc;
            if(currentTime) {
                setDuration((currentTime - startTime) / 1000);
            }

            const currentSpeed = current && current.speed;
            if(currentSpeed){
                setSpeed(currentSpeed);
            }

            if(current && previous){
                const currentDistance = computeDistanceBetween(new LatLng(current.latitude, current.longitude), new LatLng(previous.latitude, previous.longitude));
                setDistance(distance + currentDistance);

            }
           
            //console.log(coordinates);

        } 
    }, 1000)

    

    return (
        <Page>
            <h1 style={{fontFamily: "sans-serif"}}>Run!</h1>
            <MileCounter />
            <Timer time={duration}/>
            <p><strong>Speed: </strong>{speed}</p>
            <p><strong>Distance: </strong>{distance}</p>
            <StartStop isRunning={isRunning} toggle={setIsRunning}/>
            <Link href="/finished"><ButtonLink>Stop</ButtonLink></Link>
            <Console>
            {
                coordinates.map((x,i) => {
                    const pointer = coordinates[coordinates.length - 1 -i];
                    return <LineItem key={pointer.utc}>Lat: {pointer.latitude} | Lng: {pointer.longitude} | UTC: {pointer.utc} | Speed: { pointer.speed || "null"}</LineItem>
                })
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
    max-height: 500px;
    overflow: scroll;
    margin-block-start: 0;
    padding-inline-start: 0;
`;
const LineItem = styled.li`
    font-size: 8px;
    color: #fff;
    list-style-type: none;
    font-family: monospace;
    padding: 0;
`

export default Running