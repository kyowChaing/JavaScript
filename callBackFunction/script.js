//Callback Function
//setTimeout() methode use to set timer, here time is used as milisecond
// setTimeout(function(){
//     console.log("Hello World");
// }, 5000);


//create JS Object array

/*let persons=[
    {firstName:"Rahim",lastName:"Islam"},
    {firstName:"Karim",lastName:"Islam"}
]

//Create function to Add new Person after 4 seconds
function addPerson(person){
    setTimeout( function(){
        persons.push(person); //Here push() is method of array and persond is Array type Variable
    },4000);
}

// Create Function to get persons data after 1 seconds and show it 
// into HTML Tage which ID is "output",  as a  list
function getPerson(){
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li> ${person.firstName} ${person.lastName}</li>`

        });
        document.getElementById('output').innerHTML=output;
    },1000);
}

//Calling functions

addPerson({firstName:"Jashim", lastName:"Islam"});
getPerson(); // Here only two persons data will show and addperson will not print
            // getPerson complet before addPerson because of setTimeout()
*/


// Convert Synchronous Process into Asynchronous process Using Callback function


let persons=[
    {firstName:"Karim",lastName:"Islam"},
    {firstName:"Rahim",lastName:"Islam"}
]

function addPerson(person,getPerson){
    setTimeout( function (){
        persons.push(person);
        getPerson();
    },2000);
    
}

function getPersons(){
    setTimeout(() => {
        let output="";
        persons.forEach(person => {
            output+=`<li>${person.firstName} ${person.lastName}</li>`
        });
        document.getElementById('output').innerHTML=output;
    },5000);
    
}

// getPersons() function calling into addPerson() function as a argument which is known as callback function

addPerson({firstName:"Jashim",lastName:"Islam"}, getPersons);
