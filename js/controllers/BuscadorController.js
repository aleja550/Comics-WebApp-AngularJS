app.controller("BuscadorController", [
  "$scope",
  "$routeParams",
  "heroesService",

  function ($scope, $routeParams, heroesService) {
    $scope.search = $routeParams.search
    var heroesList = heroesService();
    $scope.heroes = heroesList.getHeroes();
  },
]);