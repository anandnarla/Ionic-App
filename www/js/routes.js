
angular.module('FingerPrintModule')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig($stateProvider,$urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  })
  .state('authFP', {
    url: '/authFP',
    templateUrl: 'templates/authenticateWithFP.html'
  })
  .state('authPwd',{
    url: '/authPwd',
    templateUrl: 'templates/authenticateWithPwd.html'
  })
  $urlRouterProvider.otherwise('/');
}
