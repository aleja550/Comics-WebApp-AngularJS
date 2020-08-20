var app = angular.module("mApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "./views/home.html",
    })
    .when("/heroes", {
      controller: "HeroesController",
      templateUrl: "./views/heroes.html",
    })
    .when("/about", { templateUrl: "./views/about.html" })
    .when("/heroe/:id", {
      controller: "HeroeController",
      templateUrl: "./views/heroe.html",
    })
    .otherwise({
      redirectTo: "/home",
    });
});
