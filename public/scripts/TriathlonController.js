angular.module('olympicApp').controller('TriathlonController', function($scope, DataService){
  $scope.olympian = DataService.data;

  DataService.callTriathlon();
});
