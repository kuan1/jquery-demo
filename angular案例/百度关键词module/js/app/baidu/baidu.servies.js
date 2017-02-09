angular.module("baidu")
	.config(["$sceDelegateProvider", function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            "self",
            "https://sp0.baidu.com/**"
        ])
    }])
	.service("search",["$http",function($http){
	this.getData = function(kw,fn){
		$http.jsonp(            
			"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + kw,
            {jsonpCallbackParam: 'cb'}
       	).then(
	       	function (response) {
	            fn(response.data)
	        },
	       	function(response){
	       		console.log("失败了...")
	       	}
       	)
	}
}])
