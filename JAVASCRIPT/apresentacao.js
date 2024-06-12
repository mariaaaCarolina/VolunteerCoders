window.sr = ScrollReveal({ reset: true });

sr.reveal(".container", {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 2000,
});
sr.reveal(".causas-container", {
    origin: "top",
    distance: "70px",
    duration: 2000,
    delay: 200,
    easing: "ease",
});

sr.reveal(".half-section", {
    // origin: 'right',
    rotate: { x: 0, y: 80, z: 0 },
    delay: 200,
    duration: 2000,
});
sr.reveal(".linguagens-info", {
    // origin: 'left',
    rotate: { x: 0, y: 80, z: 0 },
    delay: 200,
    duration: 2000,
});

sr.reveal(".final-section-ong", {
    origin: "top",
    distance: "10px",
    duration: 2000,
    delay: 500,
    easing: "ease",
});
sr.reveal(".final-section-aluno", {
    origin: "top",
    distance: "10px",
    duration: 2000,
    delay: 400,
    easing: "ease",
});

const text = "VolunteerCoders ";
let index = 1;
let direction = 1;

function type() {
    if (index === text.length) {
        direction = -1; // volta
    } else if (index === 1) {
        direction = 1; // frente
    }

    document.getElementById("digitando").innerHTML = text.substring(
        0,
        index
    );

    if (direction === 1) {
        index++;
    } else {
        index--;
    }

    if (index === 0 || index === text.length) {
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 190);
    }
}

type();