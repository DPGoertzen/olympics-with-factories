angular.module('olympicApp').controller('WeightliftingController', function($scope, DataService){
  $scope.olympian = DataService.data;

  DataService.callWeightlifting();
});
