/* ---------------------------------------------PRODUCT---------------------------------------------*/

/*-----------------------------------------------------------------------------------------------*/
require("../../bower_components/angular-ui-router/release/angular-ui-router")

var app = angular.module('emJsAcademy', [
    require('./components').name,
    require('./states').name
]).config(function ($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/404');
}).run(function ($state, $rootScope, emWebApi) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
        console.error('$stateChangeError', event, toState, toParams, fromState, fromParams)
    });

/*    emWebApi.call('/user/account#getCountries').then(function (list) {
        console.log('here are the language list', list)
    },
    emWebApi.call('/casino#getGames', {expectedFields: 4 + 16}).then(function (list){
        console.log('here is the game list', list);
    }), function(err){
        console.log('err', err)
    })*/

});
window.global = {};

/*----------------------------------------Service------------------------------------------------------*/

// app.factory('requestGames', ['emWebApi', function(emWebApi) {
//     var parameters = { expectedFields: 1 + 2 + 4 + 8 + 16 + 32 + 65536 + 8192 + 33554432 };
//     return {
//         getGames: function () {
//             return emWebApi.call('/casino#getGames', parameters).then(function (list){
//                 return list;
//             })
//         }
//     }
// }])

// app.factory('requestVendors', ['emWebApi', function(emWebApi) {
//     return {
//         getVendors: function () {
//             return emWebApi.call('/casino#getGameVendors').then(function (vendorList){
//                 return vendorList;
//             })
//         }
//     }
// }])

// app.factory('requestCategories', ['emWebApi', function(emWebApi) {
//     return {
//         getCategories: function () {
//             return emWebApi.call('/casino#getGameCategories').then(function (categList){
//                 return categList;
//             })
//         }
//     }
// }])

// /*--------------------------------------Controller------------------------------------------------------*/

// app.controller('MainCtrl', ['$scope', 'requestGames', 'requestVendors', 'requestCategories', function($scope, requestGames, requestVendors, requestCategories){
//     $scope.gamesList = [];
//     $scope.vendorList = [];
//     requestGames.getGames().then(function(data){
//         $scope.gamesList = data;
//         console.log('first game name', data.games[0]);
//         console.log('scope gamelist', $scope.gamesList);
//         $scope.$apply();
  
//     });
//     requestVendors.getVendors().then(function(data) {
//         $scope.vendorList = data.vendors;
//         $scope.$apply();
//         console.log('vendor list', $scope.vendorList);

//     });
//     requestCategories.getCategories().then(function(data) {
//         $scope.categList = data.categories;
//         $scope.$apply();
//         console.log('categ list', $scope.categList);

//     });
// }]);

// /*--------------------------------------Directive-------------------------------------------------------*/

// app.directive('displayGame', ['requestGames', function() {
//     return {
//         restrict: 'E',
//         templateUrl: require('./components/games.html')
//     }
// }]);

