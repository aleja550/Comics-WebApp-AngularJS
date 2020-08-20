app.controller("HeroesController", [
  "$scope",
  "heroesService",
  
  function ($scope, heroesService) {
    var heroesList = heroesService();
    $scope.heroes = heroesList.getHeroes();
  },
]);
