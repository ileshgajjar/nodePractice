var app = angular.module ('myApp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/home',
    {
      templateUrl : 'views/home.html'
    })
    .when('/directory',
   {
      templateUrl : 'views/directory.html',
      controller : 'myAppController'
   })
   .otherwise(
     {
        redirectTo :'/home'
     })

}]);

app.controller('myAppController',['$scope','$http',function($scope,$http){

  $scope.reset = function(){
    $scope.name = " ";
  };

  $scope.remove = function(a){
    var temp = $scope.user.indexOf(a);
    $scope.user.splice(temp,1);
  };

  $scope.addUser = function(){
    $scope.user.push({
      name : $scope.user.name,
      lname : $scope.user.lname,
      age : $scope.user.age
    });
    $scope.user.name = " ";
  $scope.user.lname = " ";
$scope.user.age = " ";
  };

  $scope.arr = ['ilesh','umang','tarang'];

/*  Now we are Using user.json to import this all JSON data using $http
$scope.user = [
    {
    name : "ilesh",
    lname : "gajjar",
    age : 22
    },
    {
      name : "umang",
      lname : "Desai",
      age : 20
    },
    {
      name : "tarang",
      lname : "PAtel",
      age : 24
    }
  ];
*/
   $http.get('data/user.json').success(function(data){
       $scope.user = data;
   });

}]);
