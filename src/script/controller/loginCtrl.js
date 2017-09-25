'use strict';
angular.module('app').controller('loginCtrl', ['cache', '$http', '$state', '$scope', function(cache, $http, $state, $scope) {
   $scope.submit = function(){
       $http.post('data/login.json',$scope.user).success(function(resp){
           cache.put('id',resp.id);
           cache.put('name',resp.name);
           cache.put('image',resp.image);
           $state.go('main');
       })
   }
}]);