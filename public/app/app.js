var ShoppingListApp = angular.module('ShoppingListApp',[]);

ShoppingListApp.controller('TabController',function($http, $window){
    this.tab = 1;
    this.setTab=function(selectedTab){
      this.tab = selectedTab;  
    };
    this.isSet=function(givenTab){
        return this.tab === givenTab;
    };
    this.addRecipe = false;
    
    this.init = function(){
        $http.get("/api/isLoggedIn").then(function(response){
            if(!response.data)
                $window.location = "/login.html"
        });
    };
    this.init();
});

ShoppingListApp.controller('RecipeController', function(){
    this.recipes = [
         {
            "Name": "Smores",
            "IngredientList": "4 graham crackers, 1 chocolate bar, 4 marshmallows",
            "Directions": "1. Roast marshmallows. 2. Put chocolate and marshmallows on graham crackers. 3. Enjoy!"
        },
        {
            "Name": "Cereal",
            "IngredientList": "1 box of cereal, 1c of milk",
            "Directions": "Combine cereal and milk"
        }
    ]
    this.addToMenu = false;
    this.blah ={};
    this.addNewRecipe = function(recipe){
        recipes.push(recipe);
    };
});
ShoppingListApp.controller('WeekTabController', function(){
    var d = new Date();
    var n = d.getDay();
    this.tab = n;
    this.setTab=function(selectedTab){
      this.tab = selectedTab;  
    };
    this.isSet=function(givenTab){
        return this.tab === givenTab;
    };
});
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