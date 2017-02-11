module.exports =  function(){
    return function(val , prefix){         
        return prefix + "_" + val;
    };
};