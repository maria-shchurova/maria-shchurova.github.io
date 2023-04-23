import React from "react"
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import "../App.css"

function Dust() {
  const particlesInit = async (main) => {
    console.log(main);
 
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="dust-container">
   
     <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
              options={{
            fpsLimit: 40,
            interactivity: {
                events: {
                  onHover: {
                    enable: true, // enables the hover event
                    mode: "attract", // make the particles run away from the cursor
                  },
                },
                modes: {
                  repulse: {
                    distance: 90, // distance of the particles from the cursor
                  },
                },
              },
            particles: {
              color: {
                value: "#c4c4c4"
              },
              number: {
                density: {
                  enable: true,
                  area: 1080
                },
                limit: 0,
                value: 250,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 1,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              shape: {
                type: 'circle',
       
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.5
                },
                value: 1
              },
              move: {
                enable: true, // enabling this will make particles move in the canvas
                speed: { min: 0.05, max: 0.5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
              },
            }
          }}
      />  
  </div>
  );
}
 
export default Dust;
 