angular.module('olympicApp').controller('ArcheryController', function($scope, DataService){
  $scope.olympian = DataService.data;

  DataService.callArchery();
});
