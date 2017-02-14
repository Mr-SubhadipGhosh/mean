var yourapp =  angular.module("yourapp",[]);

var routerConf = require('./routing');
var addctrl = require('./controllers/addcontroller');
var listctrl = require('./controllers/listcontroller');
var longLabel = require('./directives/directive');
var infoLabel = require('./directives/subdirective');
var ngmoddirective = require('./directives/ngmoddirective.js');
var fact = require('./factories/factory');
var fact2 = require('./factories/factory2');
var convert = require('./filters/filter');
var emp=require('./services/provider');
var serv = require('./services/service');

var myapp = angular.module("myapp",['yourapp','ngRoute']);
function conf(empProvider){
    var ll= 'english';
    empProvider.setLang(ll);
    empProvider.xyz();
    //console.log('config');
}
myapp.config(routerConf);


myapp.directive('longLabel',longLabel);
myapp.directive('infoLabel',infoLabel);
myapp.directive('myModel',ngmoddirective);
myapp.factory('fact',fact);
myapp.factory('newfact',fact2);
myapp.filter('convert',convert);
myapp.provider('emp',emp);
myapp.service('serv',serv);
myapp.controller('addctrl',addctrl);
myapp.controller('listctrl',listctrl);
