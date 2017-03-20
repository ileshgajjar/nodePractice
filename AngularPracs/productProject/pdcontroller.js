var app = angular.module('application',['ngRoute']);

app.run(function($rootScope){
$rootScope.mynewArray = [];
$rootScope.edititem= -1;
});


app.config(function($routeProvider){

  $routeProvider
  .when('/',{
    redirectTo : " /home "
  })
   .when('/home',{
     templateUrl :'home.html' ,
     controller : 'homeController'
   })
   .when('/login',{
     templateUrl : 'login.html' ,
     controller : 'loginController'
   })
   .when('/pdlist',{
     templateUrl : 'productList.html' ,
     controller : 'pdListController'
   })
   .when('/pddesc',{
     templateUrl : 'productDesc.html' ,
     controller : 'pdDescController'
   })
   .otherwise({
       template : "Page Not Found"
   });
}]);  //end of app.config()

app.controller('homeController',['$scope',function($scope){


}]);

app.controller('logiController',['$scope',function($scope){


}]);

app.controller('pdListController',['$scope',function($scope){
  $scope.mynewArray=$rootScope.mynewArray;
  $scope.delete = function(i){

    $scope.mynewArray.splice(i,1);

  }

  $scope.edit = function(i){
       $rootScope.edititem = i;
     $location.path("/pddesc");
  }



}]);

app.controller('pdDescController',['$scope',function($scope){

  if(i!= -1 )
  {

    $scope.name=$rootScope.mynewArray[i].pname;
    $scope.cost=$rootScope.mynewArray[i].price;
    $scope.description=$rootScope.mynewArray[i].desc;

  }
  $scope.display = function(){
    var i =$rootScope.edititem;
    if(i!=-1)
    {

      $rootScope.mynewArray[i] = {'pname':$scope.name,'price':$scope.cost,'desc':$scope.description};
      $rootScope.edititem=-1;
    }
  else{
    $rootScope.mynewArray.push({'pname':$scope.name,'price':$scope.cost,'desc':$scope.description});

     }
  $location.path("/pdlist");
  }

}]);
