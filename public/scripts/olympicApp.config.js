angular.module('olympicApp').config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/archery', {
      templateUrl:'views/archery.html',
      controller:'ArcheryController'
    })
    .when('/boxing', {
      templateUrl:'views/boxing.html',
      controller:'BoxingController'
    })
    .when('/pingpong', {
      templateUrl:'views/pingpong.html',
      controller: 'PingpongController'
    })
    .when('/triathlon', {
      templateUrl:'views/triathlon.html',
      controller:'TriathlonController'
    })
    .when('/weightlifting', {
      templateUrl:'views/weightlifting.html',
      controller:'WeightliftingController'
    })
    $locationProvider.html5Mode(true);

})
