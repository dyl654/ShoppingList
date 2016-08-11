var ShoppingListApp = angular.module('ShoppingListApp',[]);

ShoppingListApp.controller('TabController',function(){
    this.tab = 1;
    this.setTab=function(selectedTab){
      this.tab = selectedTab;  
    };
    this.isSet=function(givenTab){
        return this.tab === givenTab;
    };
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
    
});


