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

//ShoppingListApp.directive("recipeDirective", function($scope){
//   return{
//        restrict: 'E',
//        templateUrl: 'recipe-tab.html'
////        controller: function($scope){
////            $scope.ingredient = "";
////            $scope.recipe = [
////                {
////                    name: "Smores",
////                    ingredients: "4 graham crackers, 1 chocolate bar, 4 marshmallows",
////                    directions: "1. Roast marshmallows. 2. Put chocolate and marshmallows on graham crackers. 3. Enjoy!",
////                    addToMenu: true
////                },
////                {
////                    name: "Cereal",
////                    ingredients: "1 box of cereal, 1c of milk",
////                    directions: "Combine cereal and milk",
////                    addToMenu: false
////                }
////            ];
////            $scope.addIngredient = function(ingredient){
////                alert(ingredient);
////
////            };
////        },
////       controllerAs: recipeDirect 
//       
//   }; 
//});
ShoppingListApp.controller('recipeController', function($scope){
    //$scope.ingredient = "";
    $scope.recipe = [
        {
            name: "Smores",
            ingredients: "4 graham crackers, 1 chocolate bar, 4 marshmallows",
            directions: "1. Roast marshmallows. 2. Put chocolate and marshmallows on graham crackers. 3. Enjoy!",
            addToMenu: true
        },
        {
            name: "Cereal",
            ingredients: "1 box of cereal, 1c of milk",
            directions: "Combine cereal and milk",
            addToMenu: false
        }
    ];
    $scope.addIngredient = function(ingredient){
        alert(ingredient);

    };
});
