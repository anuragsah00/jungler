(function () {
	var app = angular.module('Jungler', []);

	app.controller('SearchCtrl', function ($scope, $http) {
		$scope.baseSite = '';

		$scope.searchFromBaseSite = function () {
			$http.post('/crawl', $scope.baseSite)
				.success(function (websites) {

				});
		}

	});
})();