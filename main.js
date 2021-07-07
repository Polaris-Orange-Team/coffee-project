"use strict"

function renderCoffee(coffee) {
    //changed to be div
    var html = '<div class="coffee text-nowrap">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    //changed to be ascending
    for(var i = 0; i < coffees.length ; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        else if (selectedRoast === "all") {
            filteredCoffees.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//function to search for coffee by name
function updateCoffeeAgain(e){
    e.preventDefault();
    var nameCoffee = nameSelection.value;
    var filteredcoffee = [];
    coffees.forEach(function (coffee){
        if(coffee.name.toLowerCase() === nameCoffee.toLowerCase()){
            filteredcoffee.push(coffee);
        }
        if(coffee.name.toLowerCase().includes(nameCoffee.toLowerCase())) {
            filteredcoffee.push(coffee);
        }});
    tbody.innerHTML = renderCoffees(filteredcoffee)
}

//function to add user coffee
function addCoffee(event){
    event.preventDefault();
    var usercoffee = {
        id: coffees.length,
        name: userName.value,
        roast: userRoast.value
    }
    coffees.push(usercoffee);
    tbody.innerHTML = renderCoffees(coffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
//name value for input to add coffee
var nameSelection = document.querySelector("#name-selection");

//user roast and name
var userRoast = document.querySelector("#user-roast");
var userName = document.querySelector("#user-name");
var submitButtonTwo = document.querySelector("#submit-2");

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);
nameSelection.addEventListener("input", updateCoffeeAgain);
submitButtonTwo.addEventListener("click", addCoffee);
