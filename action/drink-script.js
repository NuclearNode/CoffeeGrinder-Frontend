let temp = false;
let type = 'None';
let espresso = false;
let fruity = false;
let category = 'None';
let sugar = -1;
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
    console.log(type);
}

function updateFrap()
{
    console.log(type);
    type = 'Frappuccino'
    console.log(type);
}

function updateOther()
{
    console.log(type);
    type = 'Other';
    console.log(type);
}

function yesEspresso()
{
    console.log(espresso);
    espresso = true;
    console.log(espresso);
}

function noEspresso()
{
    console.log(espresso);
    espresso = false;
    console.log(espresso);
}

function yesFruity()
{
    console.log(fruity);
    fruity = true;
    console.log(fruity);
}

function noFruity()
{
    console.log(fruity);
    fruity = false;
    console.log(fruity);
}

function updateSugar1()
{
    sugar = .5;
}

function updateSugar2()
{
    sugar = 2.1;
}

function updateSugar3()
{
    sugar = 3.2;
}

function updateAmericano()
{
    category = 'Americano';
}

function updateBlackTea()
{
    category = 'Black';
}

function updateBrewed()
{
    category = 'Brewed';
}

function updateCappuccino()
{
    category = 'Cappuccino';
}

function updateCoffeeFrap()
{
    category = 'Coffee Frappuccino';
}

function updateColdBrew()
{
    category = 'Cold Brew';
}

function updateCremeFrap()
{
    category = 'Creme Frappuccino';
}

function updateEspressoShot()
{
    category = 'Espresso Shot';
}

function updateFlatWhite()
{
    category = 'Flat White';
}

function updateGreenTea()
{
    category = 'Green';
}

function update

function updateHotChocolate()
{
    console.log(category);
    category = 'Hot Chocolate';
    console.log(category);
}

function updateRefresher()
{
    category = 'StarbucksRefresher';
}

function updateIcedCoconutMilk()
{
    category = 'IcedCoconutMilk';
}



fetch('drinks.json').then(function(response) {
  return response.json();
}).then(function(json) {
    let drinks = json;
    console.log(drinks.length);
    
    let final_order = []
    for(var i = 0;i<drinks.length;i++)
    {
        if(drinks[i].type=='Tea')
            final_order.push(drinks[i]);
        var drink = drinks[i];
        console.log(drink.name);
    }
    
    
   
    
    /*displays the drinks json*/
    document.getElementById("results").innerHTML = 
        `
        <h1>${final_order.length} drinks suggested</h1>
        
        ${final_order.map(function(drink){
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



