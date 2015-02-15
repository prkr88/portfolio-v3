angular.module("templatescache", []).run(["$templateCache", function($templateCache) {$templateCache.put("global-footer.html","<footer>\n	<p><strike>Stalk</strike> contact me <a href=\"http://twitter.com/_prkr\" target=\"_blank\">@_prkr</a> or <a href=\"mailto:parker_michael@me.com\">by email</a></p>\n	<p>&#169; 2015</p>\n</footer>\n");
$templateCache.put("global-nav.html","	<nav>\n		<div class=\"title\">\n			<h1><a href=\"#/\">MR PRKR</a></h1>\n			<p><strike>Stalk</strike> contact me <a href=\"http://twitter.com/_prkr\" target=\"_blank\">@_prkr</a> or <a href=\"mailto:parker_michael@me.com\">by email</a></p>\n		</div>\n	</nav>");
$templateCache.put("home.html","<div class=\"homeLinks\">\n	<h1>Great design goes unnoticed. It’s about creating <span id=\"highlight\">seamless experiences</span> users should take for granted.</h1>\n	<div class=\"home-cta\"><a href=\"#/projects/\"><i class=\"fa fa-long-arrow-right\"></i></a></div>\n\n</h1>\n</div>\n");
$templateCache.put("project-template.html","<div class=\"back-all-projects\">\n	<a href=\"#/projects\">back to all projects </a>\n</div>\n\n<div ng-include=\" \'global-nav.html\' \"></div>\n\n\n<div class=\"project-container\">\n\n	<div class=\"gallery-container\" ng-style=\"galleryStyle\">\n		<div class=\"gallery-image\">\n			<img ng-hide=\"!isCurrentIndex($index)\" ng-repeat=\"image in projectLoaded.images\"  ng-src=\"{{image.url}}\" ng-click=\"showNext()\" ng-swipe-left=\"showNext()\" ng-swipe-right=\"showPrevious()\" width=\"100%\">\n		</div>\n		<div class=\"gallery-tools\">\n		<p ng-if=\"images.length > 1\">Swipe or click through: {{currentIndex+1}} of {{images.length}}</p>\n<!-- 			<h4 ng-hide=\"galleryExpanded\"ng-click=\"toggleGallery()\"><i class=\"fa fa-expand\"></i></h4>\n			<h4 ng-show=\"galleryExpanded\"ng-click=\"toggleGallery()\"><i class=\"fa fa-compress\"></i></h4> -->\n		</div>\n	</div>\n\n	<div class=\"project-copy\" ng-style=\"copyStyle\">\n		<h2>{{projectLoaded.name}}</h2>\n		<p id=\"client\">{{projectLoaded.client}}</p>\n\n		<p class=\"tag-container\"><i class=\"fa fa-tags\"></i> <span ng-repeat=\"tag in projectLoaded.tags\" class=\"tag\">{{tag.name}}</span></p>\n		<br/><br/>\n		<p class=\"description\" ng-bind-html=\"toTrusted(projectLoaded.description)\"></p>\n		<p class=\"description\" ng-if=\"!projectLoaded.description\">{{projectLoaded.synopsis}}</p>\n\n	</div>\n\n</div>\n\n<!-- <div ng-include=\" \'global-footer.html\' \"></div> -->");
$templateCache.put("projects.html","<div ng-include=\" \'global-nav.html\' \"></div>\n\n<div ng-hide=\"imagesAreLoaded\" class=\"loader fadeout\">Loading Projects...</div>\n<div ng-show=\"imagesAreLoaded\" masonry class=\"masonry-container fadein\" id=\"projects-masonry\">\n	  <div ng-repeat=\"project in projects\" class=\"masonry-brick\">\n		  <div class=\"brick-contents\">\n\n		    <img ng-src=\"{{project.images[0].url}}\" images-loaded=\"imgLoadedEvents\">\n		    <div class=\"brick-text\">\n		    	<h4>{{project.name}}</h4>\n		    	<p class=\"client\">{{project.client}}</p>\n		    	<p>{{project.synopsis}}</p>\n			  	<br/>\n			  	<p ng-show=\"{{project.publish}}\"><a ng-href=\"#/project/{{project.link}}\">view Project</a></p>\n			  	<p ng-hide=\"{{project.publish}}\">AVALIABLE SOON</p>\n		    </div>\n		  </div>\n	  </div>\n</div>\n\n");}]);