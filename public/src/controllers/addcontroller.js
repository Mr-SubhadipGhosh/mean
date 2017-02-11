module.exports =  function($scope ,$location,emp, newfact, serv, fact, $routeParams){    
    var vm = this;
    vm.info="Name";
    console.log(newfact.items);
    var _itemid = $routeParams.ID; 
    console.log($routeParams.Name);
    //console.log('controller', emp.test );
   // emp.reSetLang('german');

    vm.items= fact.items;
    vm.val = 0;
vm.pinField ="dfd";

if(_itemid){
     var item = vm.items.filter(function(val){
            return val.id === _itemid;
        });  
        
        console.log(item);
        if(item.length>0){
            vm.idField = item[0].id;
            vm.nameField = item[0].name;
            vm.addrField = item[0].addr;
        }
    }

    serv.getData();
    var pro = serv.getDataPromis();
    pro.then(function(val){
        //console.log('success',val);
    },function(err){
        //console.log('fail',err);
    });
    vm.saveIt = function(){
        console.log(vm.pinField);
        fact.saveIt(vm);
        vm.resetIt();
        vm.val = vm.val + 1;
    };
    vm.resetIt = function(){
        vm.idField = '';
        vm.nameField = '';
        vm.addrField = '';
    };
    $scope.$watch('vm.val', function(newval,oldval){
        console.log(oldval,newval);
    });
};