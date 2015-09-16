// Main AngularJS entry point.

(function() {
  'use strict';

  let app = angular.module('app', []);

  app.controller('AppCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.submit = function() {
      // TODO(amitburst): Add URL, and other, validation.
      if ($scope.longUrl) {
        $http.post('/url', {longUrl: $scope.longUrl})
          .then(function(response) {
            $scope.shortUrl = $window.location.origin + '/' + response.data.shortUrl;
          }, function(error) {
            // TODO(amitburst): Handle errors.
            console.log(error);
          });
      }
    };
  }]);
})();
