var ShoppingListApp = angular.module('ShoppingListApp',[]);

ShoppingListApp.directive('weekTab', function(){
   return{
       restrict: 'E',
       templateUrl: 'week-tab.html'
   }; 
});
ShoppingListApp.directive('weekdayCheckbox', function(){
   return{
       restrict: 'E',
       templateUrl: 'weekday-checkbox.html'
   }; 
});
ShoppingListApp.directive('addNewRecipe', function(){
   return{
       restrict: 'E',
       templateUrl: 'add-new-recipe.html'
   }; 
});
ShoppingListApp.directive('showRecipes', function(){
   return{
       restrict: 'E',
       templateUrl: 'show-recipes.html'
   }; 
});