function cakes(recipe, available) {

    var mustIngredients = Object.keys(recipe);
    var maxUseArray = mustIngredients.map(function(ingridient){return available[ingridient]?available[ingridient]/recipe[ingridient]:0});
    var first = maxUseArray[0];
    var maxAvailableCakes = maxUseArray.reduce(function(min,uses,first){return min>uses?uses:min});
    return Math.floor(maxAvailableCakes)
}
recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};

console.log(cakes(recipe,available));