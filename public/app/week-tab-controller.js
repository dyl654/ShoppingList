angular.module('ShoppingListApp').controller('WeekTabController', WeekTabController);
                                             
function WeekTabController(){
    var d = new Date();
    var n = d.getDay();
    this.tab = n;
    this.setTab=function(selectedTab){
      this.tab = selectedTab;  
    };
    this.isSet=function(givenTab){
        return this.tab === givenTab;
    };
}