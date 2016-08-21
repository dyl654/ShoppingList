angular.module('Login').controller('LogInController', function($http, $scope, $window, $log){
    $scope.username = "";
    $scope.password = "";

    $scope.submit = function(user){
        var greeting = user.name + user.password;
        $http.get("api/logIn?username="+user.name+"&password="+user.password).then(function(response){
            if(response.data){
                $window.location = "/";
            }else{
                $window.alert("Username/Password not found");
            }
        });
    };
    $scope.addNewUser = function (user) {
        $http.get("/api/addUser?username="+user.name +"&password="+user.password).then(function(response){
            if(response.data){
                $scope.submit(user);
            }
        });
    };
});