// Code CoordinatesButton Component Here

import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    onClick = (event)=> { //makes array
        const mouseCoordinates =  [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(mouseCoordinates)
    }

    render(){
        return (<button onClick={this.onClick}>Coordinates Button</button>)
    }

}