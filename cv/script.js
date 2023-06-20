const sectionHeight = document.querySelector('section');
const particles = document.querySelector('#particles-js-one');

function setHeight() {
    let hight = sectionHeight.scrollHeight;
        particles.style.height = `${hight}` + 'px';
}
setHeight();

let tl = gsap.timeline({defaults: {duration: .7, opacity: 0}});

tl.from('.node', {y: 200, x: 200})
tl.from('.frontend', {y: 200, x: -200})
tl.from('.introduction', {y: -200, x: 200})
tl.from('.bootstrap', {y: -200, x: -200})


particlesJS("particles-js-one", {
    "particles": {
        "number": {
            "value": 250,
            "density": {
                "enable": true,
                "value_area": 1800
            }
        },
        "color": {
            "value": "#000"
        },
        "shape": {
            "type": ["circle", "triangle", "edge", "star"],
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#fff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 50,
                "size": 5,
                "duration": 1,
                "opacity": 7,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
