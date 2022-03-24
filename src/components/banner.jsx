import React, { Component } from 'react';
import './banner.css';

export default class Banner extends Component {
   render() {
      return (
         <div className="banner-container" id="about">
            <div className="text-area">
               <div className="text title-text">Hello.</div>
               <div className="banner-code-text subtitle-area">
                  <div className="about">
                     <div className="numbers">
                        1 <br />2<br /> 3
                     </div>

                     <div className="about-text">
                        I’m a <span className="dark-gray">(graduating)</span>
                        <span className="green"> computer science student</span>
                        <br /> with a passion for
                        <span className="blue"> problem solving</span>,
                        <br />
                        <span className="blue">learning</span> and
                        <span className="blue"> making cool stuff </span>
                        <span className="dark-gray">(and space!)</span>
                     </div>
                  </div>
                  <div className="button-area">
                     <button className="red">front end</button>
                     <button className="red">back end</button>
                     <button className="red">embedded</button>
                     <button className="red">design</button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
