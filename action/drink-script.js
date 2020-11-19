let temp = false;
let type = 'None';

console.log(temp);


function updateHot()
{
    console.log(temp);
    temp = true;
    console.log(temp);
}


function updateCold()
{
    console.log(temp);
    temp = false;
    console.log(temp);
}

function updateCoffee()
{
    console.log(type);
    type = 'Coffee';
    console.log(type);
}

function updateTea()
{
    console.log(type);
    type = 'Tea'
}

function updateFrap()
{
    console.log(type);
    type = 'Frappuccino'
    console.log(type);
}


fetch('drinks.json').then(function(response) {
  return response.json();
}).then(function(json) {
    let drinks = json;
    console.log(drinks.length);
    
    for(var i = 0;i<drinks.length;i++)
    {
        var drink = drinks[i];
        console.log(drink.name);
    }
    
    
   
    
    /*displays the drinks json*/
    document.getElementById("results").innerHTML = 
        `
        <h1>${drinks.length} drinks suggested</h1>
        
        ${drinks.map(function(drink){
        return `<div class="card">
                    <img class="drink-photo" src="${drink.image}">
                    <h1>${drink.name}</h1>
                    <p>${drink.description}</p>
                </div>
        `
    }).join('')}

        `
    
   
        
  
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
  console.log(path.dir);
});



