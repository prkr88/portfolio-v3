angular.module("templatescache", []).run(["$templateCache", function($templateCache) {$templateCache.put("home.html","<div ng-hide=\"imagesAreLoaded\" class=\"loader fadeout\">Loading Projects...</div>\n<div ng-show=\"imagesAreLoaded\" masonry class=\"masonry-container fadein\" id=\"projects-masonry\">\n	  <div ng-repeat=\"project in projects\" class=\"masonry-brick\">\n		  <div class=\"brick-contents\">\n		    <img ng-src=\"{{project.images[0].url}}\" images-loaded=\"imgLoadedEvents\">\n		    <div class=\"brick-text\">\n		    	<h4>{{project.name}}</h4>\n		    	<p>{{project.synopsis}}</p>\n			  	<br/>\n			  	<p><a href=\"#/\">Coming Soon</a></p>\n		    </div>\n		  </div>\n	  </div>\n</div>");
$templateCache.put("view1.html","<h1> This is view 1 </h1>");
$templateCache.put("view2.html","<h1>This is view 2 </h1>");
$templateCache.put("view3.html","<h1> View 3 </h1>\n<p> The route params are: {{routeId}}</p>");}]);