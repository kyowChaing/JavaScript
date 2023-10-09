//fetch is another way to get data from external which use instead AJAX
//fetch by defaul built in with browser, which is function of window object

document.getElementById("get_data").addEventListener("click",getData);

function getData(){
    fetch('http://api.icndb.com/jokes/random')
        .then(res=>res.json()) // fetch function return promise type data as text or json formate, here store response , 
        .then(data=>{console.log(data);})// using Arrow Function
        .catch(err=>{console.log(err);})
    }