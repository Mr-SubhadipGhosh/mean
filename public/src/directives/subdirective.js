module.exports =  function(){
    return {
        restrict: 'E',
        template: '<a>{{info}}</a>',
        scope: true,
        require:'^longLabel',
        controller: function () {
            console.log('sub ctrl' ,this);
        },
       link:function(scope,elemnt,attr,ctrl){
           console.log('sub',ctrl);
           scope.info = ctrl.info;
       }
    };
};
