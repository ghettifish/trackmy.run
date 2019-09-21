import React from 'react';
import dynamic from 'next/dynamic';
import socketIOClient from 'socket.io-client'


export default class SocketDemo extends React.Component {
    state = {
        endpoint: 'http://localhost:8000',
        news: ''
    }

    send = () => {
        const socket = socketIOClient(this.state.endpoint)
        socket.emit("news", "fuck yeah!")
    }
    onMessage(message: string) {
        console.log("Message " + message);
        return message;
    }

    componentDidMount() {
        const socket = socketIOClient(this.state.endpoint);
        socket.on('news', (message) => {
            this.setState({
                news: message
            })
        })
    }
    render() {
        return (
            <>
                <h1>My React SocketIO Demo.</h1>
                <h2>From server: {this.state.news}</h2>
                <button onClick={() => {
                    this.send()
                }}>Test</button>
            </>
        );
    }
}

