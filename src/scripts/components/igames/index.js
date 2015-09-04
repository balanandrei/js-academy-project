export default angular.module("casino", [
    require ('./controllers/controllers').name,
    require ('./directives/display-games').name,
    require ('./services/get-data').name
])