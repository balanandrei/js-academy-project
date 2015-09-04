export default angular.module('game.controller.games', ['game.directive.displayGame'])
    .controller('MainCtrl', ['$scope', 'requestGames', 'requestVendors', 'requestCategories', 
    	function($scope, requestGames, requestVendors, requestCategories){
		    $scope.gamesList = [];
		    $scope.vendorList = [];
		    requestGames.getGames().then(function(data){
		        $scope.gamesList = data;
		        console.log('first game name', data.games[0]);
		        console.log('scope gamelist', $scope.gamesList);
		        $scope.$apply();
		  
		    });
		    requestVendors.getVendors().then(function(data) {
		        $scope.vendorList = data.vendors;
		        $scope.$apply();
		        console.log('vendor list', $scope.vendorList);

		    });
		    requestCategories.getCategories().then(function(data) {
		        $scope.categList = data.categories;
		        $scope.$apply();
		        console.log('categ list', $scope.categList);

		    });
}]);