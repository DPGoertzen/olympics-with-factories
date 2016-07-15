angular.module('olympicApp').controller('PingpongController', function($scope, DataService){
  $scope.olympian = DataService.data;

  DataService.callPingpong();
});
