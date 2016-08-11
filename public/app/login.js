var Login = angular.module('Login',[]);

Login.controller('LogInController', function($scope, $window, $log){
    $scope.username = "";
    $scope.password = "";

    $scope.submit = function(){
        var greeting = "awesome";
        $window.alert(greeting);
    };
});