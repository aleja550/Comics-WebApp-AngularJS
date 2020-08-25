app.directive("appNavbar", function () {
  return {
    restrict: "E",
    templateUrl: "views/navbar.html",
    controller: ["$scope", function ($scope) {
      $scope.text = "";
      $scope.getText = function(){
        $scope.text = $scope.search;
      }
  }],
  };
});