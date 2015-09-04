export default angular.module('game.directive.displayGame', ['game.services.games'])
.directive('displayGame', ['requestGames', function() {
    return {
        restrict: 'E',
        templateUrl: require('../views/games.html')
    }
}]);

