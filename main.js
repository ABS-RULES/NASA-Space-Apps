const solarSystemContainer = document.getElementById('solar-system-container');

// Consolidated createPlanet function
function createPlanet(name, size, color, distance, orbitTime) {
    const planet = document.createElement('div');
    planet.classList.add('planet');
    planet.style.width = size + 'px';
    planet.style.height = size + 'px';
    planet.style.backgroundColor = color;
    planet.style.position = 'absolute';
    planet.style.left = '50%';
    planet.style.top = '50%';
    planet.style.borderRadius = '50%';
    planet.style.transformOrigin = distance + 'px'; // Set distance from sun
    planet.style.animationDuration = orbitTime + 's'; // Orbit time for animation

    solarSystemContainer.appendChild(planet);

    // Add interaction on click
    planet.addEventListener('click', () => {
        alert(`You clicked on planet ${name}!`);
    });
}

function createSun() {
    const sun = document.createElement('div');
    sun.classList.add('sun');
    sun.style.width = '150px'; // Adjust size as needed
    sun.style.height = '150px';
    sun.style.backgroundColor = '#ffcc00';
    sun.style.borderRadius = '50%';
    sun.style.position = 'absolute';
    sun.style.left = '50%';
    sun.style.top = '50%';
    sun.style.transform = 'translate(-50%, -50%)';

    solarSystemContainer.appendChild(sun);
}

// Create the planets with greater distances and orbit times
createPlanet('Mercury', 6, '#b0b0b0', 120, 5);
createPlanet('Venus', 10, '#f5a623', 300, 7);
createPlanet('Earth', 12, '#0077be', 500, 9);
createPlanet('Mars', 8, '#e44d2e', 450, 11);
createPlanet('Jupiter', 35, '#f7b236', 800, 14);
createPlanet('Saturn', 25, '#f9c74f', 1000, 17);
createPlanet('Uranus', 20, '#76d7c4', 1200, 20);
createPlanet('Neptune',15, '#5271ff', 1400, 22);

// Create the sun only once


// Call the sun creation only once
createSun();
