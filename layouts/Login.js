import React from 'react';
import {FullPage, Background} from './styles';

const LoginLayout = props => {
    return (
        <FullPage>
            {props.children}
            <Background params={{
                "particles": {
                    "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                    },
                    "color": {
                    "value": "#ffffff"
                    },
                    "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 1,
                        "color": "#ffffff"
                    },
                    "polygon": {
                        "nb_sides": 3
                    }
                    },
                    "line_linked": {
                    "enable": true,
                    "distance": 125,
                    "color": "#ffffff",
                    "opacity": 0.2,
                    "width": 1
                    },
                    "move": {
                    "enable": true,
                    "speed": 0.5,
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": true,
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                    },
                    "modes": {
                        "repulse": {
                            "distance": 75,
                            "duration": 0.5
                        }
                    }
                },
                "retina_detect": true
            }} />
        </FullPage>
    );
}
export default LoginLayout;