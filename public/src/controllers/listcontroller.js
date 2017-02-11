module.exports =  function($scope ,$location,emp, serv, fact){    
    var vm = this;
    vm.items= fact.items;
    vm.val = 0;
    var pro = serv.getDataPromis();
    pro.then(function(val){
        //console.log('success',val);
    },function(err){
        //console.log('fail',err);
    });   
    vm.editIt = function(id){
        $location.path('/edit/'+id+'/test');
       
    };
};