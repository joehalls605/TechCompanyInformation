const techCompanies = [
    {
        name: "Amazon",
        logo: "./images/amazon.png",
        category: "E-commerce",
        yearFounded: 1994,
        revenue: "469.8B"
    },
    {
        name: "Baidu",
        logo: "./images/baidu.png",
        category: "Software",
        yearFounded: 2000,
        revenue: "18.5B"
    },
    {
        name: "Google",
        logo: "./images/google.png",
        category: "Software",
        yearFounded: 1998,
        revenue: "282.8B"
    },
    {
        name: "Lenovo",
        logo: "./images/lenovo.png",
        category: "Hardware",
        yearFounded: 1984,
        revenue: "60.3B"
    },
    {
        name: "Meta",
        logo: "./images/meta.png",
        category: "Social Media",
        yearFounded: 2004,
        revenue: "118.5B"
    },
    {
        name: "Microsoft",
        logo: "./images/microsoft.png",
        category: "Software",
        yearFounded: 1975,
        revenue: "211.9B"
    },
    {
        name: "Ripple",
        logo: "./images/ripple.png",
        category: "Fintech",
        yearFounded: 2012,
        revenue: "1.0B"
    },
    {
        name: "PiedPiper",
        logo: "./images/pied-piper.png",
        category: "Software",
        yearFounded: 2016,
        revenue: "0.5B"
    },
    {
        name: "Vocera",
        logo: "./images/vocera.png",
        category: "Healthcare",
        yearFounded: 2000,
        revenue: "0.8B"
    },
    {
        name: "Yandex",
        logo: "./images/yandex.png",
        category: "Software",
        yearFounded: 1997,
        revenue: "12.6B"
    }
];


const randomiseElement = document.getElementById("randomise");
const logoListElement = document.getElementById("logoList");


randomiseElement.addEventListener("click", function(){
    const array = randomiseArray(techCompanies);
    renderArray(array);
});


function renderArray(array){
    logoListElement.innerHTML = "";

    array.forEach(company => {
        const listItem = document.createElement("li");
        logoListElement.style.listStyleType = 'none';

        // Create an image element for the logo
        const logoImg = document.createElement("img");
        logoImg.src = company.logo;
        logoImg.alt = company.name + "logo";

        const companyName = document.createElement("span");
        companyName.textContent = company.name;

        listItem.appendChild(logoImg);
        listItem.appendChild(companyName);

        logoListElement.appendChild(listItem);
    });
}


function randomiseArray(array) {  // Accept the array as an argument
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Pick a random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];    // Swap elements
    }
    return array;  // Return the shuffled array
}


