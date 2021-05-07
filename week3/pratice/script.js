fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then((response) => {
    if (response.ok) {
        return response.json();
    } else{
        throw new Error("NETWORK RESPONSE ERROR");
    
    }
})
.then(data=> {
    console.log(data);
   
})

.catch((error) => console.error("FETCH ERROR:", error));

function dispalyCocktail(data) {
    const cocktail = data.drink[0];
    const cocktailDiv = document.getElementById("cocktail");

const cocktailName = cocktail.strDrink;
const heading = document.createElement("h1");
heading.innerHTML= cocktailName;
cocktailDiv.appendChild(heading);


const cocktailImg= document.createElement("img")
cocktailImg.src = coctail.strDrinkThumb;
cocktailDiv. appendChild(cocktailImg);
cocument.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb +"')";


const cocktailIngredients = document.createElement("ul");
cocktailDiv.appendChild(cocktailIngredients);


const getIngredients = object.keys(cocktail)
    .filter(function(ingredient) {
        return ingredient.indexOf("strIngredient") == 0;

    })

        .reduce(function(ingredients, ingredient) {
            if (cocktail[ingredient] != null) {
                ingredients[ingredient] = cocktail[ingredient];
            }
            return ingredients;
        }, {});

        for (let key in getIngredients) {
            let value = getingredients [key];
            listItem = document.createElement("li");
            listItem.innerHTML = value; 
            cocktailIngredients.appendChild(listItem);
        }
        }

