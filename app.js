var nameApp = angular.module("nameApp", ["firebase"]);

nameApp.controller("nameCtrl", function($scope, $firebase) {

	var ref = new Firebase("https://practice-name.firebaseio.com/names");
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
    $scope.names = sync.$asArray();

    $scope.addName = function() {
    	$scope.names.$add({name: $scope.newName});
    	$scope.newName = "";
    }

});
