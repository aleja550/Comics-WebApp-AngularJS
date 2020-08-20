app.controller("HeroeController", [
  "$scope",
  "$routeParams",
  "heroesService",
  
  function ($scope, $routeParams, heroesService) {
    var heroesList = heroesService();
    $scope.heroe = heroesList.getHeroe($routeParams.id);
  },
]);
