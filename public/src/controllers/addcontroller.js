module.exports = function (serv, $routeParams) {
    var vm = this;
    vm.info = "Task";
    vm.serv = serv;
    vm.data=[];
    vm._itemid = $routeParams.ID;
    
    if (vm._itemid) {
        var item = vm.serv.data.filter(function (val) {
            return val._id === vm._itemid;
        });
        console.log(item);

        if (item.length > 0) {
            vm.task = item[0].task;
            vm.status = item[0].status;
        }
    }
    
    vm.saveIt = function () {  
        if(vm._itemid){
            serv.putDataPromis({task:vm.task, status:vm.status},vm._itemid);
        }
        else
            serv.postDataPromis({task:vm.task, status:vm.status});
        vm.resetIt();
    };
    vm.resetIt = function () {
        vm.task = '';
    };
};