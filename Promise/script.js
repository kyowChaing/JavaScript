//promises is use instead callback function. during working with library and framework 
// mostly use promises instead callback function

// it hold until promisses method end

let persons = [
    {firstName:"Rahim",lastName:"Islam"},
    {firstName:"Karim",lastName:"Islam"}
]

function addPerson(person){
    let prom = new Promise(  //Creating Promise object by calling Promise cinstructor 
        function (resolve,reject){
            persons.push(person);
            let error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error:Something Wrong');
            }
        }
    );
    return prom;
    // persons.push(person);
}

function getPerson(){
    setTimeout(function(){
        let output ='';
        persons.forEach(function (person){
        output += `<li>${person.firstName} ${person.lastName}</li>`
        });
        document.getElementById('output').innerHTML=output;
    },500);
}

addPerson({firstName:"Jashim",lastName:"Islam"})
.then(getPerson)
.catch(function(err){console.log(err)});

