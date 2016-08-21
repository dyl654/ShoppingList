angular.module('ShoppingListApp').controller('TabController', TabController);

function TabController($http, $window){
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
    this.logOut = function(){
        $http.get("/api/logOut").then(function(){
            $window.location = "/login.html";
        }).catch(function(error){
            $window.alert("uh oh" + error.message);
        });
    };
};