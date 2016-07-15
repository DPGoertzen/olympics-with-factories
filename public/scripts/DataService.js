angular.module('olympicApp').factory('DataService', function($http){

  var data = {};
//add handle success for each
  function handleSuccessArcher(response){
    data.archer = response.data;
  }
  function handleSuccessBoxer(response){
    data.boxer = response.data;
  }
  function handleSuccessPingpong(response){
    data.pingpong = response.data;
  }
  function handleSuccessTriathlete(response){
    data.triathlete = response.data;
  }
  function handleSuccessWeightlifter(response){
    data.weightlifter = response.data;
  }

  function handleFailure(response){
    console.log("THERE'S A TIREFIRE");
  }

  function makeCallArchery(){
    $http.get("/olympic/archery").then(handleSuccessArcher, handleFailure);
  }

  function makeCallBoxing(){
    $http.get("/olympic/boxing").then(handleSuccessBoxer, handleFailure);

  }

  function makeCallPingpong(){
    $http.get("/olympic/pingpong").then(handleSuccessPingpong, handleFailure);

  }

  function makeCallTriathlon(){
    $http.get("/olympic/triathlon").then(handleSuccessTriathlete, handleFailure);

  }

  function makeCallWeightlifting(){
    $http.get("/olympic/weightlifting").then(handleSuccessWeightlifter, handleFailure);

  }

  return {
    data: data,
    callArchery: makeCallArchery,
    callBoxing: makeCallBoxing,
    callPingpong: makeCallPingpong,
    callTriathlon: makeCallTriathlon,
    callWeightlifting: makeCallWeightlifting,

  }

});
