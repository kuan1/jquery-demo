angular.module("myApp")
	.config(["$routeProvider",function($rp){
		$rp.when(
			"/a",
			{
				templateUrl:"a.html"
			}
		).when(
			"/b",
			{
				templateUrl:"b.html"
			}
		).when(
			"/c",
			{
				templateUrl:"c.html"
			}
		).otherwise(
			"/a"
		);
	}])
