angular.module('learnNg', ['ngRoute']);//[]for plugins, learnNg is ng app// javascript don't like - put ngRoute so app can use this routeProvider

angular.module('learnNg')
        .directive('navBar', function(){
  return {
    templateUrl: 'html/templates/nav.html',
    controller:'NavController'
  };
});//directory naming//replace evey code in  nav tag to nav-bar tag

angular.module('learnNg')
          .config(function($routeProvider){
            $routeProvider
            .when('/', {
              templateUrl:'html/views/home.html',
              controller:'HomeController'
            })
            .when('/about', {
              templateUrl:'html/views/about.html'
            })
            .when('/contact', {
              templateUrl:'html/views/contact.html'
            })
            .when('/post', {
              templateUrl:'html/views/post.html'
            })
            .otherwise({
              redirectTo:'/'
            });

          });
//angular-route mean need to put ngRoute, checkout cdn
//localhost:[port]/#/test, so put # before/
//copy all html from header to footer and delete the original htmls and put them in views, but for index.html will keep navbar and ng-views, and index will be a template and
// views will be in the middle
