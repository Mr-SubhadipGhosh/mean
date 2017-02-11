module.exports =  function(){
    return {
        restrict: 'E',
        scope:{
            info:"=",
            label: "@"
        },
        templateUrl: './templatelonglabel.html',
        controller: function(){
            this.changeLabel= function() {
            } 
         }, 
        controllerAs: 'vm',
        bindToController: true,
        transclude: true,
        link: function(scope, element, attr){
            console.log('link',scope.label);
            element.css({'color':"red"});
        }
    };
};
