var Login = angular.module('Login',[]);

Login.controller('LogInController', function($scope, $window, $log){
    $scope.username = "";
    $scope.password = "";

    $scope.submit = function(user){
        var greeting = user.name + user.password;
        $window.alert(greeting);
    };
});