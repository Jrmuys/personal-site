import React, { Component } from 'react';
import './skills.css';

import ReactTooltip from 'react-tooltip';

export default class Skills extends Component {
   render() {
      return (
         <div className="right-justify">
            <div className="skills-container">
               <div className="card">
                  <div className="title">Embedded, Robotics, and IOT</div>
                  <div className="sub-title">
                     Create <span className="blue">&nbsp;fun&nbsp; </span> and
                     <span className="blue">&nbsp;connected&nbsp;</span>{' '}
                     projects
                  </div>
                  <div className="links">
                     <div className="link">Chess Timer</div>
                     <div className="link">Mars Rover</div>
                     <div className="link">Printer Enclosure</div>
                  </div>
                  <div className="tools-heading">Tools and languages</div>
                  <div className="logos">
                     {/* <div className="logo-img-container"> */}
                     <img
                        data-tip
                        data-for="python"
                        src="/images/logos/python.png"
                        alt="Python"
                     />
                     {/* </div> */}
                     <img
                        data-tip
                        data-for="c"
                        src="/images/logos/c.png"
                        alt="c/c++"
                     />
                     <img
                        data-tip
                        data-for="mqtt"
                        src="/images/logos/mqtt.png"
                        alt="MQTT"
                     />
                     <img
                        data-tip
                        data-for="arduino"
                        src="/images/logos/arduino.png"
                        alt="Arduino"
                     />
                     <div data-tip data-for="ros" className="img-container">
                        <img
                           style={{ width: '30px', height: '8px' }}
                           src="/images/logos/ros.png"
                           alt=""
                        />
                     </div>
                     <ReactTooltip id="python" place="bottom" effect="solid">
                        Python
                     </ReactTooltip>
                     <ReactTooltip id="c" place="bottom" effect="solid">
                        C, C++
                     </ReactTooltip>
                     <ReactTooltip id="mqtt" place="bottom" effect="solid">
                        MQTT
                     </ReactTooltip>
                     <ReactTooltip id="arduino" place="bottom" effect="solid">
                        Arduino
                     </ReactTooltip>
                     <ReactTooltip id="ros" place="bottom" effect="solid">
                        Robot Operating System
                     </ReactTooltip>
                  </div>
               </div>
               <div className="card">
                  <div className="title">Back End (and database)</div>
                  <div className="sub-title">
                     Create{' '}
                     <span className="blue">&nbsp;functional&nbsp; </span> and
                     <span className="blue">&nbsp;reliable&nbsp;</span> services
                  </div>
                  <div className="links">
                     <div className="link">3D Print Website</div>
                     <div className="link">Wayfinder</div>
                     <div className="link">Sprawl</div>
                  </div>
                  <div className="tools-heading">Tools and languages</div>
                  <div className="logos">
                     {/* <div className="logo-img-container"> */}
                     <img
                        data-tip
                        data-for="javascript"
                        src="/images/logos/javascript.png"
                        alt="javascript"
                     />
                     {/* </div> */}
                     <img
                        data-tip
                        data-for="nodejs"
                        src="/images/logos/nodejs.png"
                        alt="nodejs"
                     />
                     <img
                        data-tip
                        data-for="mongodb"
                        src="/images/logos/mongodb.png"
                        alt="mongodb"
                     />
                     <img
                        data-tip
                        data-for="sql"
                        src="/images/logos/sql.png"
                        alt="sql"
                     />
                     <div data-tip data-for="aws" className="img-container">
                        <img
                           // style={{ width: '30px', height: '8px' }}
                           src="/images/logos/aws.png"
                           alt="aws"
                        />
                     </div>
                     <ReactTooltip
                        id="javascript"
                        place="bottom"
                        effect="solid"
                     >
                        Javascript
                     </ReactTooltip>
                     <ReactTooltip id="nodejs" place="bottom" effect="solid">
                        Typescript
                     </ReactTooltip>
                     <ReactTooltip id="mongodb" place="bottom" effect="solid">
                        MongoDB
                     </ReactTooltip>
                     <ReactTooltip id="sql" place="bottom" effect="solid">
                        SQL
                     </ReactTooltip>
                     <ReactTooltip id="aws" place="bottom" effect="solid">
                        Amazon Web Services
                     </ReactTooltip>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
