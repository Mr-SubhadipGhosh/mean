module.exports =  function(){
    return {
        restrict: 'A',
        scope: false,
        require:'^ngModel',
        controller: function () {
            console.log('mydir' ,this);
            console.log('');
        },
       link:function(scope,elemnt,attr,ctrl){
           console.log('mydir link',ctrl);
           var textAccessor = 'ttttt';
          ctrl.$render = function () {
                        // If the current value is empty, clear the control.
                        // --
                        // NOTE: Each Control can provide its own $isEmpty() override;
                        // however, the default implementation checks for null / undefined
                        // values, which is sufficient for our use-case.
                        if ( ctrl.$isEmpty( ctrl.$viewValue ) ) {
                            return( elemnt.val( "none" ) );
                        }
                        // If the ngModel has a non-empty value, we can build the HTML for
                        // the control by evaluating the text-accessor in the context of
                        // the selected value.
                        elemnt.val( "********" );
                    };;
       }
    };
};
