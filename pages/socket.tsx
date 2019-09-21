import React from 'react';
import SocketDemo from '../components/SocketDemo';

const uri = 'http://localhost:8000';
const options = { transports: ['websocket'] };

export default class MyComponent extends React.Component {


    render() {
        return (
            <SocketDemo />
        );
    }
}
