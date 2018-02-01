import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';

export default class VRWorld extends Component {
    render() {
        // const { name } = this.props

        return (
        <div>
            <Entity primitive='a-torus' color="hotpink" position="0 1.25 -5" radius="2" />
            <Entity primitive='a-torus' color="orange" position="0 1.25 -5" radius="4" radius-tubular="0.2" />
            <Entity primitive='a-torus' color="blue" position="0 1.25 -5" radius="3" radius-tubular="0.2" />
            <Entity primitive='a-torus' color="red" position="0 1.25 -5" radius="5" radius-tubular="0.2" />

            <Entity primitive='a-text' value='Hello Alex!' position="-0.8 1.7 -2.9" color="black" width="7" />
            <Entity primitive='a-box' position="0.01 1.7 -3" rotation="0 0 0" width="2" height="0.5" depth="0.1" color="khaki" />

            <Entity primitive='a-cylinder' position=" 1 1 -3" rotation="0 45 0" radius="0.1" height="2" depth="0.2" color="magenta" />
            <Entity primitive='a-cylinder' position="-1 1 -3" rotation="0 45 0" radius="0.1" height="2" depth="0.2" color="magenta" />
            
            <Entity primitive='a-plane' position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" />
            <Entity primitive='a-sky' color="lightblue" />
        </div>
        )
    }
}
