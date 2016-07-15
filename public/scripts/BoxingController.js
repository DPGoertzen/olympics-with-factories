angular.module('olympicApp').controller('BoxingController', function($scope, DataService){
  $scope.olympian = DataService.data;

  DataService.callBoxing();
});
