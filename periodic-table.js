// Store references to elements, popups, and popup contents
const elements = {}, popups = {}, popupContent = {};

// Populate the objects with references
for (let i = 1; i <= 118; i++) {
    elements[i] = document.getElementById(`${i}`);
    popups[i] = document.getElementById(`popup-${i}`);
    popupContent[i] = document.getElementById(`popup-content-${i}`);
}

// Show popup when an element is clicked
for (let i = 1; i <= 118; i++) {
    elements[i].addEventListener("click", () => {
        popups[i].style.display = "flex";
    });
}

// Close popup when clicking outside of it
window.addEventListener("click", (event) => {
    Object.keys(popups).forEach(i => {
        if (event.target === popups[i]) {
            // Add exit animation
            popups[i].classList.add('hidden-background');
            popupContent[i].classList.add('hidden-popup');

            // Hide popup after animation ends
            setTimeout(() => {
                popups[i].style.display = 'none';
                // Remove exit animation
                popups[i].classList.remove('hidden-background');
                popupContent[i].classList.remove('hidden-popup');
            }, 500);
        }
    });
});

// Chart animations
const chartIDs = [
    document.getElementById('atomic-radius-chart-container'),
    document.getElementById('ionization-chart-container'),
    document.getElementById('electron-affinity-chart-container'),
    document.getElementById('electronegativity-chart-container'),
    document.getElementById('density-chart-container'),
    document.getElementById('melting-boiling-point-chart-container')
];
const chartButtons = [
    document.getElementById('atomic-radius-chart-button'),
    document.getElementById('ionization-chart-button'),
    document.getElementById('electron-affinity-chart-button'),
    document.getElementById('electronegativity-chart-button'),
    document.getElementById('density-chart-button'),
    document.getElementById('melting-boiling-point-chart-button')
];
const chartAll = [
    document.getElementById('atomic-radius-chart'),
    document.getElementById('ionization-chart'),
    document.getElementById('electron-affinity-chart'),
    document.getElementById('electronegativity-chart'),
    document.getElementById('density-chart'),
    document.getElementById('melting-boiling-point-chart')
];
const chartTitles = [
    document.getElementById('atomic-radius-title'),
    document.getElementById('ionization-title'),
    document.getElementById('electron-affinity-title'),
    document.getElementById('electronegativity-title'),
    document.getElementById('density-title'),
    document.getElementById('melting-boiling-point-title')
];

chartButtons.forEach((button, i) => {
    button.addEventListener("click", () => {
        // Show the selected chart
        chartIDs[i].style.display = 'flex';

        // Get all other charts, chart elements, and titles
        chartIDs.forEach((chart, index) => {
            if (index !== i) {
                chartAll[index].classList.add('hidden-chart');
                chartTitles[index].classList.add('hidden-chart');
                
                // Hide with animation, then reset classes
                setTimeout(() => {
                    chart.style.display = 'none';
                    chartAll[index].classList.remove('hidden-chart');
                    chartTitles[index].classList.remove('hidden-chart');
                }, 500); // Match animation duration
            }
        });
    });
});

// Navi block animations
const helpButtonID = [
    document.getElementById("intro-nav-button"),
    document.getElementById("color-nav-button"),
    document.getElementById("element-nav-button"),
    document.getElementById("trend-nav-button")
];
const helpContainerID = [
    document.getElementById("intro-text-container"),
    document.getElementById("color-text-container"),
    document.getElementById("element-text-container"),
    document.getElementById("trend-text-container")
];
const helpTitleID = [
    document.getElementById("intro-help-text-title"),
    document.getElementById("color-help-text-title"),
    document.getElementById("element-help-text-title"),
    document.getElementById("trend-help-text-title")
]
const helpTextID = [
    document.getElementById("intro-help-text"),
    document.getElementById("color-help-text"),
    document.getElementById("element-help-text"),
    document.getElementById("intro-help-text")
]

helpButtonID.forEach((button, i) => {
    button.addEventListener("click", () => {
        // Show the selected chart
        helpContainerID[i].style.display = 'flex';

        // Get all other charts, chart elements, and titles
        helpContainerID.forEach((container, index) => {
            if (index !== i) {
                container.classList.add('hidden-container');
                
                // Hide with animation, then reset classes
                setTimeout(() => {
                    container.style.display = 'none';
                    container.classList.remove('hidden-container');
                }, 500); // Match animation duration
            }
        });
    });
});

// Animation for the practice problems
const qButtonID = [
    document.getElementById("level-1-q-button"),
    document.getElementById("level-2-q-button"),
    document.getElementById("level-3-q-button")
]
const qTextID = [
    document.getElementById("lv1-q-text-container"),
    document.getElementById("lv2-q-text-container"),
    document.getElementById("lv3-q-text-container"),
]

qButtonID.forEach((button, i) => {
    button.addEventListener("click", () => {
        // Show the selected chart
        qTextID[i].style.display = 'flex';

        // Get all other charts, chart elements, and titles
        qTextID.forEach((container, index) => {
            if (index !== i) {
                container.classList.add('hidden-container');
                
                // Hide with animation, then reset classes
                setTimeout(() => {
                    container.style.display = 'none';
                    container.classList.remove('hidden-container');
                }, 500); // Match animation duration
            }
        });
    });
});

// color group dynamic add cus I'm too lazy
const colors = [
    '#ffffff', '#d9ffff', '#cc80ff', '#c2ff00', '#ffb5b5', 
    '#909090', '#3050f8', '#ff0d0d', '#90e050', '#b3e3f5', 
    '#ab5cf2', '#8aff00', '#bfa6a6', '#f0c8a0', '#ff8000', 
    '#ffff30', '#1ff01f', '#80d1e3', '#8f40d4', '#3dff00', 
    '#e6e6e6', '#bfc2c7', '#a6a6ab', '#8a99c7', '#9c7ac7', 
    '#e06633', '#f090a0', '#50d050', '#c88033', '#7d80b0', 
    '#c28f8f', '#668f8f', '#bd80e3', '#ffa100', '#a62929', 
    '#5cb8d1', '#702eb0', '#00ff00', '#94ffff', '#94e0e0', 
    '#73c2c9', '#54b5b5', '#3b9e9e', '#248f8f', '#0a7d8c', 
    '#006985', '#c0c0c0', '#ffd98f', '#a67573', '#668080', 
    '#9e63b5', '#d47a00', '#940094', '#429eb0', '#57178f', 
    '#00c900', '#70d4ff', '#ffffc7', '#d9ffc7', '#c7ffc7', 
    '#a3ffc7', '#8fffc7', '#61ffc7', '#45ffc7', '#30ffc7', 
    '#1fffc7', '#00ff9c', '#00e675', '#00d452', '#00bf38', 
    '#00ab24', '#4dc2ff', '#4da6ff', '#2194d6', '#267dab', 
    '#266696', '#175487', '#d0d0e0', '#ffd123', '#b8b8d0', 
    '#a6544d', '#575961', '#9e4fb5', '#ab5c00', '#754f45', 
    '#428296', '#420066', '#007d00', '#70abfa', '#00baff', 
    '#00a1ff', '#008fff', '#0080ff', '#006bff', '#545cf2', 
    '#785ce3', '#8a4fe3', '#a136d4', '#b31fd4', '#b31fba', 
    '#b30da6', '#bd0d87', '#c70066', '#cc0059', '#d1004f', 
    '#d90045', '#e00038', '#e6002e', '#eb0026', '#d3d3d3', 
    '#d3d3d3', '#d3d3d3', '#d3d3d3', '#d3d3d3', '#d3d3d3', 
    '#d3d3d3', '#d3d3d3', '#d3d3d3'
]

const high_constrast_colors = [
    1, 2, 3, 4, 5, 6, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
    31, 33, 34, 36, 38, 39, 40, 
    41, 42, 47, 48,
    52, 56, 57, 58, 59, 60, 
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 
    71, 72, 73, 78, 79, 
    80, 89, 
    90, 91, 
    109, 110,
    111, 112, 113, 114, 115, 116, 117, 118
]

// Dynamically assign colors based on the element ID
document.querySelectorAll('[id^="popup-content-"]').forEach((element) => {
    const idNumber = parseInt(element.id.replace('popup-content-', ''), 10) - 1; // Convert to zero-based index
    const color = colors[idNumber];

    if (color) {
        element.classList.add('color-group');
        element.style.setProperty('--bg-color', color); // Set a CSS variable
    }
});

for (let i = 1; i <= 118; i++) {
    // Use querySelector instead of querySelectorAll to select single element by ID
    const element = document.querySelector(`#popup-content-${i}`);
    if (element) {
        // Check if the ID is not in the high contrast list
        if (!high_constrast_colors.includes(i)) {
            // Select all blocks within the element-container class
            element.querySelectorAll('.element-container').forEach((block) => {
                block.style.color = "#f4f4f4"; // Set text color for low contrast colors
            });
        }
    }
}

// Add 'unavailable-block' class to elements containing specific "unavailable" text
document.querySelectorAll('div, span').forEach(el => {
    const textContent = el.textContent.trim();
    
    // Check if the text is exactly "unavailable" or contains specific phrases
    if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE && 
        (textContent === "unavailable" || 
         textContent.includes("χ is unavailable") || 
         textContent.includes("r is unavailable"))) {
        el.classList.add("unavailable-block");
    }
});

document.querySelectorAll('.info-container').forEach(el => {
    const wiki_link = el.querySelector('a');
    wiki_link.classList.add('wiki-link');
})

//orbit animation stuff
document.querySelectorAll('.element-container').forEach((container) => {
    container.addEventListener('mouseenter', () => {
        // Find the nearest popup-content parent and extract the ID number
        const parentPopupContent = container.closest('[id^="popup-content-"]');
        if (parentPopupContent) {
            const idNumber = parseInt(parentPopupContent.id.replace('popup-content-', ''), 10);

            // Determine the number of paths based on the ID
            const numPaths = 
                idNumber <= 2 ? 1 :
                idNumber <= 10 ? 2 :
                idNumber <= 18 ? 3 :
                idNumber <= 36 ? 4 :
                (idNumber >= 37 && idNumber <= 45) || (idNumber >= 47 && idNumber <= 54) ? 5 :
                idNumber === 46 ? 4 :
                idNumber <= 86 ? 6 :
                7;

            // Add orbiting paths
            for (let i = 0; i < numPaths; i++) {
                const orbitPath = document.createElement('div');
                orbitPath.className = `orbit-path-${i + 1}`;
                container.appendChild(orbitPath);
            }
        }

        // Set the background of .line elements to transparent
        document.querySelectorAll('.diagram-container .line-container .line').forEach(line => {
            line.style.backgroundColor = 'transparent';
        });
    });

    container.addEventListener('mouseleave', () => {
        // Remove all added orbit paths
        container.querySelectorAll('[class^="orbit-path-"]').forEach(path => path.remove());

        // Reset the background color of .line elements
        document.querySelectorAll('.diagram-container .line-container .line').forEach(line => {
            line.style.backgroundColor = '#333';
        });
    });
});

// create the progress bar element by the density text
document.querySelectorAll('.right-text.density-text').forEach((element) => {
    const progressBarDensity = document.createElement('div');
    const progressBarBackground = document.createElement('div');

    progressBarDensity.className = 'progress-bar';
    progressBarBackground.className = 'progress-bar-background';

    element.appendChild(progressBarDensity);
    element.appendChild(progressBarBackground);
})

// Calculate density and assign a density width
document.querySelectorAll('.right-text.density-text').forEach((divBlock) => {
    const textContent = divBlock.textContent || divBlock.innerText;
    const parentPopupContent = divBlock.closest('[id^="popup-content-"]');
    const idNumber = parseInt(parentPopupContent.id.replace('popup-content-', ''), 10);

    // Extract the number using a regular expression
    const numberMatch = textContent.match(/[\d.]+/); // Matches digits and decimals
    const extractedNumber = numberMatch ? parseFloat(numberMatch[0]) : null;

    // Define density cap and default group
    const densityCap = 24;
    let densityGroup = '2%';

    // Define IDs for the 2% density group
    const lowDensityIDs = [1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86];

    // Determine the density group
    if (lowDensityIDs.includes(idNumber)) {
        densityGroup = '2%';
    } else if (extractedNumber > densityCap) {
        densityGroup = '100%';
    } else if (extractedNumber !== null) {
        densityGroup = `${Math.round((extractedNumber / densityCap) * 100)}%`;
    }

    // Set the progress bar width
    const bar = divBlock.querySelector('.progress-bar');
    if (bar) {
        bar.style.setProperty('--width', densityGroup);
    }
});


// Dealing with assigning solid, liquid, and gas elements
document.querySelectorAll('.electron-diagram').forEach((container) => {
    const phase = container.querySelector('.circle');
    const parentPopupContent = container.closest('[id^="popup-content-"]');
    const idNumber = parseInt(parentPopupContent.id.replace('popup-content-', ''), 10);

    // Assign phase class based on ID
    const gasIDs = [1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86];
    const liquidIDs = [35, 80];
    const phaseClass = gasIDs.includes(idNumber)
        ? 'gas'
        : liquidIDs.includes(idNumber)
        ? 'liquid'
        : 'solid';

    phase.classList.add(phaseClass);

    const colorlessIDs = [1, 2, 7, 8, 9, 10, 15, 18, 36, 54, 86];
    const yellowIDs = [16, 17];
    const slategrayIDs = [4, 30, 53, 76, 82];
    const redIDs = [35];
    const grayIDs = [27, 28, 32, 34, 41, 42, 72, 73, 74, 75, 78, 83];
    const goldIDs = [79];
    const copperIDs = [29]
    const blackIDs = [5, 6]
    const colorClass = colorlessIDs.includes(idNumber)
        ? 'colorless-element'
        : yellowIDs.includes(idNumber) ? 'yellow-element'
        : slategrayIDs.includes(idNumber) ? 'slategray-element'
        : redIDs.includes(idNumber) ? 'red-element'
        : grayIDs.includes(idNumber) ? 'gray-element'
        : goldIDs.includes(idNumber) ? 'gold-element'
        : copperIDs.includes(idNumber) ? 'copper-element'
        : blackIDs.includes(idNumber) ? 'black-element'
        : 'silver-element';
    
    phase.classList.add(colorClass);

    if (idNumber == 43 || idNumber == 61) {
        var radioactiveClass = 'radioactive';
    } else if (idNumber >= 83 && idNumber <= 118) {
        var radioactiveClass = 'radioactive'
    }

    phase.classList.add(radioactiveClass)
});

// Radioactive effect
document.querySelectorAll('.electron-diagram').forEach((element) => {
    if (element.querySelector('.radioactive')) {
        const radioactive_element = element.querySelector('.radioactive')
        // Function to create a small circle with a specific angle
        function createSmallCircle(angle) {
            const smallCircle = document.createElement('div');
            smallCircle.classList.add('small-circle');
        
            // Calculate the radial direction using the angle
            const radius = 250; // Distance the circle will travel
            const dx = radius * Math.cos(angle);
            const dy = radius * Math.sin(angle);
        
            // Set CSS custom properties to define the animation's end position
            smallCircle.style.setProperty('--dx', `${dx}px`);
            smallCircle.style.setProperty('--dy', `${dy}px`);
        
            // Append the small circle to the main circle
            element.appendChild(smallCircle);
        
            // Remove the small circle after animation ends
            setTimeout(() => {
                smallCircle.remove();
            }, 2000);
        }
        
        // Add hover effect to the main circle
        radioactive_element.addEventListener('mouseenter', () => {
            const interval = setInterval(() => {
                const angle = Math.random() * 2 * Math.PI; // Random angle in radians
                createSmallCircle(angle);
            }, 100);
        
            radioactive_element.addEventListener('mouseleave', () => {
                clearInterval(interval);
            }, { once: true });
        });
    }

    // Here's the liquid raining effect
    if (element.querySelector('.liquid')) {
        const liquid_element = element.querySelector('.liquid')

        function createRaindrop(shift) {
            const drop = document.createElement('div');
            drop.classList.add('raindrop');

            // Randomize the starting horizontal position within the main circle's width
            const randomX = shift * 50 - 25;

            // Set the drop's initial position and append it to the container
            drop.style.setProperty('--randomX', `${randomX}px`);
            element.appendChild(drop);

            setTimeout(() => {
                drop.remove();
            }, 1000);
        }
        
        liquid_element.addEventListener('mouseenter', () => {
            const interval = setInterval(() => {
                const shift = Math.random(); // Random angle in radians
                createRaindrop(shift);
            }, 100);
        
            liquid_element.addEventListener('mouseleave', () => {
                clearInterval(interval);
            }, { once: true });
        });   
    }
});

// Smooth anchor link jumping
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth details open and closing
document.querySelectorAll('details').forEach((detail) => {
    const content = detail.querySelector('.detail-text');
    detail.addEventListener('toggle', () => {
        if (detail.open) {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
        } else {
            content.style.maxHeight = '0';
            content.style.opacity = '0';
        }
    });
});
  