export default angular.module('game.services.games', [])
.factory('requestGames', ['emWebApi', function(emWebApi) {
    var parameters = { expectedFields: 1 + 2 + 4 + 8 + 16 + 32 + 65536 + 8192 + 33554432 };
    return {
        getGames: function () {
            return emWebApi.call('/casino#getGames', parameters).then(function (list){
                return list;
            })
        }
    }
}])

.factory('requestVendors', ['emWebApi', function(emWebApi) {
    return {
        getVendors: function () {
            return emWebApi.call('/casino#getGameVendors').then(function (vendorList){
                return vendorList;
            })
        }
    }
}])

.factory('requestCategories', ['emWebApi', function(emWebApi) {
    return {
        getCategories: function () {
            return emWebApi.call('/casino#getGameCategories').then(function (categList){
                return categList;
            })
        }
    }
}])
