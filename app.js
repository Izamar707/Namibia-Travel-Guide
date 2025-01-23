// Initialize Google Maps
function initMap() {
    const namibiaCenter = { lat: -22.559722, lng: 17.083611 }; // Coordinates for Namibia
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: namibiaCenter,
    });

    // Marker for Namibia center
    new google.maps.Marker({
        position: namibiaCenter,
        map,
        title: "Namibia",
    });
}

// Search functionality for destinations
function searchDestination() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const results = document.getElementById("search-results");
    const places = [
        "Windhoek",
        "Swakopmund",
        "Etosha National Park",
        "Skeleton Coast",
        "Sossusvlei",
    ];

    results.innerHTML = ""; // Clear previous results

    const filteredPlaces = places.filter(place => place.toLowerCase().includes(searchInput));

    if (filteredPlaces.length > 0) {
        filteredPlaces.forEach(place => {
            const li = document.createElement("li");
            li.textContent = place;
            results.appendChild(li);
        });
    } else {
        results.innerHTML = "<li>No destinations found</li>";
    }
}

// Event listener for search button
document.getElementById("search-button").addEventListener("click", searchDestination);

// Emergency numbers
const emergencyNumbers = [
    { service: "Police", number: "10111" },
    { service: "Ambulance", number: "10177" },
    { service: "Fire Brigade", number: "999" },
];

function displayEmergencyNumbers() {
    const emergencyList = document.getElementById("emergency-numbers");
    emergencyNumbers.forEach(({ service, number }) => {
        const li = document.createElement("li");
        li.textContent = `${service}: ${number}`;
        emergencyList.appendChild(li);
    });
}

// Load emergency numbers on page load
window.onload = displayEmergencyNumbers;
