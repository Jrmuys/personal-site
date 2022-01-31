import logo from './logo.svg';
import './App.css';
import PageHeader from './components/pageheader';
import Banner from './components/banner';
import SolarSystem from './components/solarSystem';
import Skills from './components/skills';

function App() {
   return (
      <div className="scroll-container">
         <div className="App">
            <PageHeader />
            <div className="body">
               <div className="body-left">
                  <Banner />
                  <Skills />
               </div>
               <div className="body-right">
                  <SolarSystem />
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
