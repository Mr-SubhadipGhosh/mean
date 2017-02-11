module.exports= function(){
    this.lang = "";
    this.setLang = function(val){
        //console.log(val);
        this.lang= val;
    };
    this.xyz= function(){};
    this.$get= function(){       
        var itemObj =  function(){
            this.test = 'en';

            this.reSetLang = function(valLang){
                this.lang = valLang;
                //console.log('reset lang',this.lang);
            }
        };
        return  new itemObj();
    }
}