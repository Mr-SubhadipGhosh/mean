module.exports= function ($http, $q) {
    this.test = 'emp1';

    this.getData = function () {
        $http.get("MOCK_DATA.json")
            .then(function (response) {
                this.data = response.data;
                //console.log('only http',this.data);
            });
    };
    this.getDataPromis = function () {
        var deferred = $q.defer();
        
        $http.get('MOCK_DATA.json').then(function (data) {
                deferred.resolve(data.data);
            },function (msg, code) {
                deferred.reject(msg);
            });
        return deferred.promise;
    }
}