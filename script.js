
const destinations = [
    { name: "Paris", image: "https://cloudinary.fclmedia.com/fctg/image/fetch/w_1600,c_fill,q_auto,g_auto,fl_progressive/https://cloudinary.fclmedia.com/fctg/image/fetch/q_80,w_600,g_auto,c_fill,f_jpg,fl_progressive/https://smartcdn.dam.gettyimages.com/EZ72ETKZ/at/n993h8ws35gsjgh8wrkkb29/Paris_Activity_Arc_de_triomphe.jpg", activities: "Eiffel Tower, Louvre Museum", cost: "$1500", duration: "5 days" },
    { name: "New York", image: "https://www.planetware.com/photos-large/USNY/new-york-city-statue-of-liberty.jpg", activities: "Statue of Liberty, Central Park", cost: "$1800", duration: "7 days" },
    { name: "Tokyo", image: "https://thumbs.dreamstime.com/b/travel-advertising-world-famous-landmarks-japan-generative-ai-design-background-instagram-facebook-wall-painting-325019336.jpg", activities: "Mount Fuji, Tokyo Tower", cost: "$2000", duration: "6 days" },
    { name: "jaipur", image: "https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Jal-Mahal-Jaipur.jpg", activities: "Mount Fuji, Tokyo Tower", cost: "$2000", duration: "6 days"},
    { name: "shimla", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWUKMCgPkHheFU6InCctI0cgnSTXR2dpcC20OUzxoQZUVrFUn0aPFy5OWdbTYG5Y6qC8&usqp=CAU", activities: "Mount Fuji, Tokyo Tower", cost: "$2000", duration: "6 days"},
    { name: "manali", image: "https://images.herzindagi.info/image/2021/Nov/manali-places-to-visit.jpg", activities: "Mount Fuji, Tokyo Tower", cost: "$2000", duration: "6 days"},
    { name: "varanasi", image: "https://kashiyatra.in/wp-content/uploads/2023/02/kashi-vishwanath-850x580.jpg", activities: "Mount Fuji, Tokyo Tower", cost: "$2000", duration: "6 days"},
    { name: "agra", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBzAhhS6hg2aIpZmSOPnKGrB_KtAU3AMgU4aUM3IlLkNGTG1m_qAXsw8VNUACvNyaRX0&usqp=CAU", activities: "Mount Fuji, Tokyo Tower", cost: "$2000", duration: "6 days"},
    { name: "dubai", image: "https://i0.wp.com/traveldrinkdine.com/wp-content/uploads/2015/11/2699006878_6bd82a7239_o.jpg", activities: "Mount Fuji, Tokyo Tower", cost: "$2000", duration: "6 days"},
    { name: "great wall of chaina", image: "https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg", activities: "Mount Fuji, Tokyo Tower", cost: "$2000", duration: "6 days"},
    { name: "bali", image: "https://www.wheregoesrose.com/wp-content/uploads/2023/04/Bali-Handara-Gate-north-bali.jpg", activities: "Mount Fuji, Tokyo Tower", cost: "$2000", duration: "6 days"},
    { name: "london", image: "https://www.dangerous-business.com/wp-content/uploads/2022/07/DSC04309.jpg", activities: "Mount Fuji, Tokyo Tower", cost: "$2000", duration: "6 days"},
    { name: "bhutan", image: "https://cdn.drukasia.com/www/images/media/DrukAsia_082613_tiger-nest.jpg", activities: "Mount Fuji, Tokyo Tower", cost: "$2000", duration: "6 days"},
    { name: "shreelanka", image: "https://www.spendlifetraveling.com/wp-content/uploads/2019/02/must_visit_places_sri_lanka_sigiriya.jpg", activities: "Mount Fuji, Tokyo Tower", cost: "$2000", duration: "6 days"},
    
];

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");
const itineraryList = document.getElementById("itineraryList");
const clearItineraryBtn = document.getElementById("clearItineraryBtn");

function displaySearchResults(query) {
    searchResults.innerHTML = ""; 
    const filteredDestinations = destinations.filter(dest => dest.name.toLowerCase().includes(query.toLowerCase()));

    filteredDestinations.forEach(dest => {
        const card = document.createElement("div");
        card.classList.add("result-card");

        card.innerHTML = `
            <img src="${dest.image}" alt="${dest.name}">
            <div class="details">
                <h3>${dest.name}</h3>
                <p>Activities: ${dest.activities}</p>
                <p>Cost: ${dest.cost}</p>
                <p>Duration: ${dest.duration}</p>
                <button onclick="addToItinerary('${dest.name}')">Add to Itinerary</button>
            </div>
        `;
        searchResults.appendChild(card);
    });
}


function addToItinerary(destination) {
    let itinerary = JSON.parse(localStorage.getItem("itinerary")) || [];
    itinerary.push(destination);
    localStorage.setItem("itinerary", JSON.stringify(itinerary));
    displayItinerary();
}


function displayItinerary() {
    const itinerary = JSON.parse(localStorage.getItem("itinerary")) || [];
    itineraryList.innerHTML = "";

    itinerary.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        itineraryList.appendChild(li);
    });
}


clearItineraryBtn.addEventListener("click", () => {
    localStorage.removeItem("itinerary");
    displayItinerary();
});


searchBtn.addEventListener("click", () => {
    const query = searchInput.value;
    if (query) {
        displaySearchResults(query);
    }
});


document.addEventListener("DOMContentLoaded", displayItinerary);
