module.exports = function(){
return{
    items: [{name:'test'}],
    saveIt : function(vm){
        var ifExists = this.items.filter(function(val){
            return val.id === vm.idField;
        });        
        console.log(ifExists);
        if(ifExists.length>0){
            this.items.forEach(function(val){
                if( val.id === ifExists[0].id){
                    val.name = vm.nameField;
                    val.addr = vm.addrField;
                }
            });       
        }
        else{
            vm.items.push({id:vm.idField, name: vm.nameField, addr: vm.addrField});
            this.items= vm.items;
            //console.log(this.items);
        }
    }
}
}