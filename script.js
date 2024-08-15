const techCompanies = [
    {
        name: "Amazon",
        logo: "./images/amazon.png",
        category: "E-commerce",
        yearFounded: 1994,
        revenue: 469.8
    },
    {
        name: "Baidu",
        logo: "./images/baidu.png",
        category: "Software",
        yearFounded: 2000,
        revenue: 18.5
    },
    {
        name: "Google",
        logo: "./images/google.png",
        category: "Software",
        yearFounded: 1998,
        revenue: 282.8
    },
    {
        name: "Lenovo",
        logo: "./images/lenovo.png",
        category: "Hardware",
        yearFounded: 1984,
        revenue: 60.3
    },
    {
        name: "Microsoft",
        logo: "./images/microsoft.png",
        category: "Software",
        yearFounded: 1975,
        revenue: 211.9
    },
    {
        name: "Ripple",
        logo: "./images/ripple.png",
        category: "Fintech",
        yearFounded: 2012,
        revenue: 1.0
    },
    {
        name: "PiedPiper",
        logo: "./images/pied-piper.png",
        category: "Software",
        yearFounded: 2016,
        revenue: 0.5
    },
    {
        name: "Vocera",
        logo: "./images/vocera.png",
        category: "Healthcare",
        yearFounded: 2000,
        revenue: 0.8
    },
    {
        name: "Meta",
        logo: "./images/meta.png",
        category: "Social Media",
        yearFounded: 2004,
        revenue: 118.5
    },
    {
        name: "Yandex",
        logo: "./images/yandex.png",
        category: "Software",
        yearFounded: 1997,
        revenue: 12.6
    }
];


// DOM ELEMENTS

const logoListElement = document.getElementById("logoList");

const randomiseElement = document.getElementById("randomise");
const filterByTurnoverElement = document.getElementById("filterByTurnover");
const findLogoByNameDropdown = document.getElementById("findLogoByName");
const alphabeticallySortElement = document.getElementById("alphabeticallySort");
const companyProfitsReduceElement = document.getElementById("companyProfitsReduce");
const removeFirstCompanyShiftElement = document.getElementById("removeFirstCompanyShift");
const addFirstCompanyShiftElement = document.getElementById("addFirstCompanyShift");
const removeLastCompanyPopElement = document.getElementById("removeLastCompanyPop");
const removeSpecifiedCompanyDropdown = document.getElementById("removeSpecifiedCompany");

// EVENT LISTENERS

document.addEventListener("DOMContentLoaded", function(){
    renderArray(techCompanies);
});


// Randomise Element
randomiseElement.addEventListener("click", function(){
    const array = randomiseArray(techCompanies);
    renderArray(array);
});

// Filter by turnover
filterByTurnoverElement.addEventListener("click", function(){
    const array = filterByTurnover(techCompanies);
    renderArray(array);
});

// Find logo by name
findLogoByNameDropdown.addEventListener("change", findLogoByName);

// Alphabetically sort
alphabeticallySortElement.addEventListener("click", function(){
    const array = alphabeticallySort(techCompanies);
    renderArray(array);
});

// Company profits reduce
companyProfitsReduceElement.addEventListener("click", function(){
    const totalProfits = companyProfitsReduce(techCompanies);
    displayTotalProfits(totalProfits);
});

removeFirstCompanyShiftElement.addEventListener("click", function(){
    const array = removeFirstCompany(techCompanies);
    renderArray(array);
});

addFirstCompanyShiftElement.addEventListener("click", function(){
    const array = addFirstCompany(techCompanies);
    renderArray(array);
});

removeLastCompanyPopElement.addEventListener("click", function(){
    const array = removeLastCompany(techCompanies);
    renderArray(array);
});

removeSpecifiedCompanyDropdown.addEventListener("change", removeSpecifiedCompany);


// ARRAY RENDERING

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

// ARRAY FUNCTIONS

// Randomise Array

function randomiseArray(array) {  // Accept the array as an argument
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Pick a random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];    // Swap elements
    }
    return array;  // Return the shuffled array
}

function filterByTurnover(array){
    const sortedByRevenue = array.sort((a,b) => b.revenue - a.revenue);
    /*
    b.revenue - a.revenue: This subtracts the revenue of object a from the revenue of object b.
    If b.revenue is greater than a.revenue, the result is positive, meaning b should come before a (for descending order).
    If b.revenue is less than a.revenue, the result is negative, meaning a should come before b.
    */
    return sortedByRevenue;
}

function findLogoByName(){
    const selectedValue = findLogoByNameDropdown.value.toLowerCase();
    console.log("Selected value", selectedValue);

    const company = techCompanies.find(company => company.name.toLowerCase() === selectedValue);

    if(company){
        logoListElement.innerHTML = "";
        const logoImg = document.createElement("img");
        logoImg.src = company.logo;
        logoImg.alt = company.name + "logo";

        const companyName = document.createElement("span");
        companyName.textContent = company.name;

        logoListElement.appendChild(logoImg);
        logoListElement.appendChild(companyName);
    }
    else{
        console.log("company not found", selectedValue);
    }
}

function alphabeticallySort(array){
    const sortedAlphabeticaly = array.sort((a,b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1; // meaning a should come before b
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1; // meaning b should come before a
        return 0;
    })
    return sortedAlphabeticaly
}

function companyProfitsReduce(array){
    const totalProfits = array.reduce((total, item) => {
        return total + item.revenue;
    }, 0);
    return totalProfits;
}
function displayTotalProfits(total){
    const totalProfitsDisplay = document.getElementById("totalProfitsDisplay");
    totalProfitsDisplay.textContent = `The total company profits are ${total}` 
}

function removeFirstCompany(array){
    array.shift();
    return array;
}

function addFirstCompany(array){
    let newCompany =     {
        name: "Pied Piper 2",
        logo: "./images/pied-piper-2.png",
        category: "E-commerce",
        yearFounded: 1994,
        revenue: 432.8
    };
    array.unshift(newCompany);
    return array;
}

function removeLastCompany(array){
    array.pop();
    return array;
}

function removeSpecifiedCompany() {
    // Get the selected options from the multi-select dropdown
    const selectedOptions = Array.from(removeSpecifiedCompanyDropdown.selectedOptions).map(option => option.value.toLowerCase());
    
    // Filter the techCompanies array, keeping only those not selected
    const filteredCompanies = techCompanies.filter(company => !selectedOptions.includes(company.name.toLowerCase()));
    
    // Update the techCompanies array
    techCompanies.length = 0; // Clear the original array
    techCompanies.push(...filteredCompanies); // Push the filtered companies back into the original array

    // Re-render the updated array
    renderArray(techCompanies);
}