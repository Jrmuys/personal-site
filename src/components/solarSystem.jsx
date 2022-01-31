import React, { Component, createRef } from 'react';
import './banner.css';
import Canvas from './canvas';
import './solarSystem.css';

export default class SolarSystem extends Component {
   frameCount = 240;
   // context = canvas.getContext('2d');

   // constructor(props) {
   //    super(props);
   //    this.canvas = createRef();
   // }

   render() {
      return (
         <div className="orbit-container">
            <Canvas id="solar-system"></Canvas>
            <img src="../images/Untitled-2.gif" alt="" />
         </div>
      );
   }
}
