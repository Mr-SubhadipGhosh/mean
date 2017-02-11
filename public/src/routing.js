function routerConf($routeProvider, $locationProvider){
$locationProvider.hashPrefix('');
$routeProvider
    .when("/edit/:ID/:Name", {
        templateUrl : "./templateform.html"
    })
    .when("/add", {
        templateUrl : "./templateform.html"
    })
    .when("/list", {
        templateUrl : "./templatelist.html"
    })
    .otherwise({
        redirectTo: '/add'
      });
}
module.exports = routerConf;