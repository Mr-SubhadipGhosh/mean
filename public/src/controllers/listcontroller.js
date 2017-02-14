module.exports =  function($scope ,$location,emp, serv, fact){    
    var vm = this;
    vm.items= fact.items;
    vm.val = 0;
    vm.serv= serv;
    var pom = vm.serv.getDataPromis();
    pom.then(function (val) {
        console.log('Success: ' , val);
        vm.data = val;
        vm.serv.data = val;
    }, function (reason) {
        console.log('Failed: ' , val);
    });
    
    vm.editIt = function(id){
        console.log(id);
        $location.path('/edit/'+id);       
    };
};