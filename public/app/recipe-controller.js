angular.module('ShoppingListApp').controller('RecipeController', RecipeController);

function RecipeController($window, $http) {
    var vm = this;
    $http.get('/api/getdata').success(function(data){
        vm.recipes = data;
    });
    vm.addToMenu = false;
    vm.addNewRecipe = function(newRecipe){
        vm.recipes.push({Name: newRecipe.Name, IngredientList: newRecipe.IngredientList, Directions: newRecipe.Directions});
    };
}