import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Particles from "react-particles-js"

// Components

import NavigationBar from "./components/NavigationBar"
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 900
              },
              shape: {
                type: 'stars',
                stroke: {
                  width: 1,
                  color: '#f9aa00',
                }
              }

            }
          }
        }}
      />
      <NavigationBar />
      <Header />
     
    </div>
  );
}

export default App;
