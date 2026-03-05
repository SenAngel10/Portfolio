document.addEventListener('DOMContentLoaded', () => {
    let gridSkill = document.getElementById('skill-container');
    let lenguajes = [
        { nombre: "JavaScript", icon: "devicon-javascript-plain" },
        { nombre: "HTML", icon: "devicon-html5-plain" },
        { nombre: "CSS", icon: "devicon-css3-plain" },
        { nombre: "Docker", icon: "devicon-docker-plain" },
        { nombre: "FastAPI", icon: "devicon-fastapi-plain" },
        { nombre: "Git", icon: "devicon-git-plain" }
    ];

    function displayskill() {
        let html = "";

        for (let i = 0; i < lenguajes.length; i++) {
            html = html + `

                <div class="skill-card" >
                    <div class="skill-icon">
                        <i class="${lenguajes[i].icon}"></i>
                        
                    </div>
                        <p class="skill-name">${lenguajes[i].nombre}</p>
                </div>

            `;
        }
        gridSkill.innerHTML = html;
    }
    displayskill();
});