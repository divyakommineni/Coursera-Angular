(function () {
'use strict';
angular.module('lunchCheckerApp', [])
.controller('LunchMenuController', LunchMenuController);

LunchMenuController.$inject = ['$scope'];

function LunchMenuController($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.displayMessage = function (){
    $scope.message = checkLunckItems($scope.lunchMenu);
  };

  function checkLunckItems(string) {
    var totalStringValue = 0;
    var re = /\s*,\s*/;
    var itemList = string.split(re);
    if($scope.lunchMenu == ""){
      return "Please enter data first";
    }
    else if (itemList.length <= 3) {
      return "Enjoy!";
    }
    else if (itemList.length >= 3) {
      return "Too much!";
    }
  }
}
})();
