"use client"

import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";


const ParticlesComponent = ({ children }) => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);

        // LOAD ANY ONE 
        // await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}

                options={{
                  fullScreen: {
                      enable: false,
                      zIndex: -1
                      // IMPORTANT
                  },
                  fpsLimit: 60,
                  particles: {
                      events: {
                        resize: {
                          enable: true,
                          delay: 0.5,
                        },
                      },
                      move: {
                        enable: true,
                        direction: 110,
                        straight: true,
                        speed: { min: 0.5, max: 2},
                      },
                      trail: {
                        enable: true,
                        fill: "#ffffff",
                        length: 10,
                        size: 10,
                      },
                      color: {
                          value: "#ffffff",
                      },
                      number: {
                          density: {
                              enable: true,
                              area: 800,
                          },
                          value: 40,
                      },
                      opacity: {
                          value: 0.5,
                          random: false,
                          speed: 40,
                          animation: {
                            enable: true,
                            count: 0,
                            decay: 100,
                            mode: "decrease",
                            speed: 10,
                          },
                      },
                      shape: {
                          type: "circle",
                      },
                      size: {
                          value: { min: 1, max: 3 },
                      },
                  },
                  detectRetina: true,
              }}

            />
            {children}
        </>
    )
}

export default ParticlesComponent
