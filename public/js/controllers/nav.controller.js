angular.module('learnNg')
       .controller('NavController',NavController);

NavController.$inject = ['$scope'];

function NavController($scope) {
  $scope.loggedIn = false;
  $scope.login = function(){
    alert('You have been logged in!');
    $scope.loggedIn = true; 
  }
}
