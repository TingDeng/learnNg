angular.module('learnNg')
      .controller('HomeController',HomeController); //first string is the name you give and registered and second one
HomeController.$inject = ['$scope'];
function HomeController($scope){
  $scope.danger = function(){
    alert('You have been owned!');
  }
}
