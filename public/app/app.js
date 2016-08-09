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
    this.recipe = [
        {
            name: "Smores",
            ingredients: "4 graham crackers, 1 chocolate bar, 4 marshmallows",
            directions: "1. Roast marshmallows. 2. Put chocolate and marshmallows on graham crackers. 3. Enjoy!",
            addToMenu: false
        },
        {
            name: "Cereal",
            ingredients: "1 box of cereal, 1c of milk",
            directions: "Combine cereal and milk",
            addToMenu: false
        }
    ];
    this.changeAddToMenu = function(){
        if(this.recipe.addToMenu === true)
        {
            this.recipe.addToMenu = false;
        }else{
            this.recipe.addToMenu = true;
        }
    };
});
