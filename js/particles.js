document.addEventListener('DOMContentLoaded', () => {
    //cargamos las particulas a nuetro div
    tsParticles.load("particles-js", {
        particles: {
            number: { value: 80 },
            color: { value: ["#E2E8F0", "#A78BFA", "#60A5FA"] },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.5 },
            opacity: { value: { min: 0.2, max: 0.8 } },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true, mode: "repulse"
                }
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.1
                }
            }
        }
    });
});
