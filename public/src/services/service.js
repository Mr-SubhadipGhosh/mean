module.exports= function ($http, $q) {

    // this.getData = function () {
    //     $http.get("/api/todo")
    //         .then(function (response) {
    //            this.data = response.data;
    //            return this.data;
    //             //console.log('only http',this.data);
    //         });
    // };
    this.getDataPromis = function () {
        var deferred = $q.defer();        
        $http.get('/api/todo').then(function (data) {
                deferred.resolve(data.data);
            },function (msg, code) {
                deferred.reject(msg);
            });
        return deferred.promise;
    }
    this.postDataPromis = function (todoData) {
         var deferred = $q.defer();
         $http({
            method: 'POST',
            url: '/api/todo',
            data: todoData,
            headers: {'Content-Type': 'application/json'}
         }).then(function (data) {
                deferred.resolve(data.data);
            },function (msg, code) {
                deferred.reject(msg);
            });
        return deferred.promise;
    }
 this.putDataPromis = function (todoData,id) {
         var deferred = $q.defer();
         $http({
            method: 'PUT',
            url: '/api/todo/'+id,
            data: todoData,
            headers: {'Content-Type': 'application/json'}
         }).then(function (data) {
                deferred.resolve(data.data);
            },function (msg, code) {
                deferred.reject(msg);
            });
        return deferred.promise;
    }

}