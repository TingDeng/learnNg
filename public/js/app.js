angular.module('learnNg', []);//[]for plugins, learnNg is ng app// javascript don't like -

angular.module('learnNg')
        .directive('navBar', function(){
  return {
    templateUrl: 'html/templates/nav.html',
  };
});//directory naming//replace evey code in  nav tag to nav-bar tag 
