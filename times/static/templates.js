angular.module("times").run(["$templateCache", function($templateCache) {$templateCache.put("/static/src/html/card.html","<div class=\"a-card\">\n    <img ng-src=\"../f/{{card.id}}\" class=\"img-responsive thumbnail\">\n	<a href=\"../f/{{card.id}}\"><p>{{card.filename}}</p></a>\n    <p>{{card.size/1024/1024|number: 2}} MB</p>\n</div>");
$templateCache.put("/static/src/html/dashboard.html","<div class=\"container dashboard\">\n	<div class=\"row\">\n		<div class=\"col-sm-12\">\n			<div class=\"big_item\" style=\"background: linear-gradient(135deg, #00BFB6, #14D685);\">\n				<div class=\"left\">\n					<a ui-sref=\"main.passages\"><span class=\"h1\">{{data.posts.all}}</span> 篇文章</a>\n				</div>\n				<ul class=\"right\">\n					<li><a ui-sref=\"main.passages\">待审阅: {{data.posts.toView}}</a></li>\n					<li><a ui-sref=\"main.passages\">待发布: {{data.posts.toPublish}}</a></li>\n					<li><a ui-sref=\"main.passages\">已发布: {{data.posts.published}}</a></li>\n				</ul>\n			</div>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-sm-6\">\n			<div class=\"big_item\" style=\"background: linear-gradient(135deg, #FF3A3A, #FFC623)\">\n				<div class=\"left\">\n					<a ui-sref=\"main.resource\"><span class=\"h1\">{{data.resource}}</span> 个图片资源</a>\n				</div>\n			</div>\n		</div>\n		<div class=\"col-sm-6\">\n			<div class=\"big_item\" style=\"background: linear-gradient(135deg, #3AD2FF, #009CBF)\">\n				<div class=\"left\">\n					<a ng-href><span class=\"h1\">{{data.hits.index}}</span> 首页访问量</a>\n				</div>\n				<ul class=\"right\">\n					<li>前三排名</li>\n					<li ng-repeat=\"page in main.hits.max\">{{page.page}}:{{page.hit}}</li>\n				</ul>\n			</div>\n		</div>\n	</div>\n</div>\n");
$templateCache.put("/static/src/html/framework.html","<div class=\"framework \">\n    <ul class=\"col-sm-4 col-md-3 col-lg-2 nav nav-bar nav-pills nav-stacked main-side\">\n        <li class=\"header text-center\">成电时光</li>\n        <li><a ui-sref=\"main.dashboard\">仪表盘</a></li>\n        <li><a ui-sref=\"main.passages\">文章列表</a></li>\n        <li><a ui-sref=\"main.resource\">资源列表</a></li>\n        <li class=\"text-center\"><small>由凝聚网络安全实验室提供</small></li>\n    </ul>\n    <div class=\"col-sm-8 col-md-9 col-lg-10 main\">\n        <div class=\"actions\">\n            <div class=\"btn btn-default pull-left\"><i class=\"glyphicon glyphicon-menu-left\"></i></div>\n            <h3 class=\"pull-left\">{{title}}</h3>\n            <div class=\"btn-group pull-right\">\n                <a ui-sref=\"logout\" class=\"btn btn-danger \">退出</a>                \n            </div>\n        </div>\n        <div class=\"content\" ui-view>\n        </div>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>\n<toast></toast>\n");
$templateCache.put("/static/src/html/login.html","<style>\n    .wrapper {\n      background: #F0F0F3;\n      height: 100%;\n      display: flex;\n    }\n    body, html{\n        height: 100%;\n    }\n    .login-box {\n        background: #fff;\n        border: 1px solid #ddd; \n        padding: 40px 20px 0 20px;\n        margin: auto\n    }\n</style>\n<div class=\"wrapper\">\n    <div class=\"login-box col-sm-6 col-md-4 col-lg-3\">\n        <form>\n            <h1 class=\"text-center\">Login</h1>\n            <div class=\"form-group\">\n                <div class=\"large-12 columns\">\n                    <input class=\"form-control\" type=\"text\" ng-model=\"username\" name=\"username\" placeholder=\"用户名\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"large-12 columns\">\n                    <input class=\"form-control\" type=\"password\" ng-model=\"password\" name=\"password\" placeholder=\"密码\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"large-12 large-centered columns\">\n                    <input type=\"submit\" class=\"btn btn-block btn-primary\" ng-click=\"login()\" value=\"登录\"/>\n                    <small class=\"error\" ng-show=\"err_msg\">{{err_msg}}</small>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-sm-12 text-center\">\n                    <small>Powered by CNSS(凝聚网络安全工作室).</small>\n                </div>\n            </div>\n        </form>\n\n    </div>\n</div>");
$templateCache.put("/static/src/html/new_passages.html","<div class=\"container\">\n	<div class=\"form form-horizontal\">\n		<div class=\"form-group\">\n			<label class=\" col-sm-2 control-label\">标题</label>\n			<div class=\"col-sm-10\">\n				<input type=\"text\" ng-model=\"passage.title\" class=\"form-control col-sm-9\" >\n			</div>\n		</div>\n		<div class=\"form-group\">\n			<label class=\" col-sm-2 control-label\">预定发布日期</label>\n			<div class=\"col-sm-10\">\n				<div class=\"input-group\" class=\"form-control\">\n					<div class=\"dropdown\" ng-class=\"{open: opened}\">\n					  <a class=\"dropdown-toggle\">\n					    <div class=\"input-group\" ng-click=\"opened = !opened\">\n					    	<span class=\"form-control input\">{{passage.published | date: \"yyyy-MM-dd\"}}</span>\n					    	<span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n					    </div>\n					  </a>\n					  <ul class=\"dropdown-menu\">\n					    <datetimepicker ng-model=\"passage.published\" data-datetimepicker-config=\"{minView: \'day\'}\" on-set-time=\"opened = false\"/>\n					  </ul>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class=\"form-group\">\n			<label class=\"col-sm-2 control-label\">首页题图</label>\n			<div class=\"col-sm-10\">\n				<div class=\"row\">\n					<div class=\"col-sm-12\">\n						<img ng-src=\"{{passage.header}}\" alt=\"\" class=\"img-responsive thumbnail\" ng-show=\"passage.header\">\n					</div>\n				</div>\n				<div class=\"row\">\n					<div class=\"col-sm-12\">\n						<div class=\"btn btn-block btn-default\" ng-click=\"upload()\">\n							{{ passage.header ? \"修改\" : \"添加\"}}\n						</div>\n					</div>\n				</div>\n				\n			</div>\n		</div>\n		<div class=\"form-group\">\n			<label class=\" col-sm-2 control-label\">作者</label>\n			<div class=\"col-sm-10\">\n				<div>\n					<span class=\"alert alert-warning\" ng-repeat=\"item in passage.author\" style=\"display:inline-block\">\n						<b>{{item.job}}</b>:{{item.name}}\n						<button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"float: none\" ng-click=\"delete(item)\"><span>&times;</span></button>\n					</span>\n				</div>\n				\n				<div class=\"container-fluid\">\n					<div class=\"col-sm-5\">\n						<input type=\"text\" class=\"form-control\" ng-model=\"job\" placeholder=\"角色\">\n					</div>\n					<div class=\"col-sm-5\">\n						<input type=\"text\" ng-keypress=\"$event.keyCode == 13 ? add() : 0\" class=\"form-control\" ng-model=\"name\" placeholder=\"姓名\">\n					</div>\n					<div class=\"col-sm-2\">\n						<div class=\"btn btn-success\" ng-click=\"add()\">添加</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class=\"form-group\">\n			<label class=\" col-sm-2 control-label\">文章内容</label>\n			<div class=\"col-sm-10\">\n				<textarea froala=\"froalaOptions\" ng-model=\"passage.content\"></textarea>\n			</div>\n		</div>\n		<div class=\"form-group\">\n			<div class=\"col-sm-10 col-sm-offset-2\">\n				<div class=\"btn btn-primary\" ng-click=\"save()\">保存</div>\n			</div>\n		</div>\n	</div>\n	\n 	\n</div>");
$templateCache.put("/static/src/html/passages.html","<div class=\"container\">\n	<div class=\"panel panel-default\">\n		<div class=\"panel-heading\">操作</div>\n		<div class=\"panel-body\">\n			<a class=\"btn btn-lg btn-success\" ui-sref=\"main.new_passages\">新建文章</a>\n		</div>\n	</div>\n\n	<div class=\"panel panel-default\">\n		<div class=\"panel-heading\">文章</div>\n		<div class=\"panel-body\">\n			<table class=\"table\">\n				<thead>\n					<tr>\n						<td>序号</td>\n						<td>来源</td>\n						<td>状态</td>\n						<td>标题</td>\n						<td>题图</td>\n						<td>日期</td>\n						<td>操作</td>\n					</tr>\n				</thead>\n				<tbody>\n					<tr ng-repeat=\"p in passages\">\n						<td><a ng-href=\"/p/{{p.id}}\" target=\"_blank\">{{p.id}}</a></td>\n						<td>{{p.creator}}</td>\n						<td class=\"{{p.status}}\">\n							<select ng-model=\"p.status\" ng-change=\"update_status(p)\" class=\"form-control\">\n								<option value=\"toView\">待审</option>	\n								<option value=\"toPublish\">待发布</option>\n								<option value=\"published\">已发布</option>\n							</select>\n						</td>\n						<td>{{p.title}}</td>\n						<td style=\"width: 40%\"><img ng-src=\"{{p.header}}\" class=\"img-responsive thumbnail\"></td>\n						<td><time am-time-ago=\"p.created\"></time></td>\n						<td>\n							<div class=\"btn-group\">\n								<a ng-href=\"passage/{{p.id}}\" class=\"btn btn-warning\">编辑</a>\n								<a ng-click=\"del(p)\" class=\"btn btn-danger\" ng-href=\"#\">删除</a>\n							</div>\n						</td>\n					</tr>\n				</tbody>\n			</table>\n		</div>\n	</div>\n</div>");
$templateCache.put("/static/src/html/resource.html","<div class=\"container\">\n	<div class=\"col-sm-12\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" ng-click=\"show_board =!show_board\">\n                上传文件\n            </div>\n            <div class=\"panel-content\" ng-show=\"show_board\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <td>文件名</td>\n                            <td>大小</td>\n                            <td>进度</td>\n                            <td>操作</td>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr ng-repeat=\"item in uploader.queue\">\n                            <td>\n                                <span ng-show=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                                <span ng-show=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                                <span ng-show=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                            	{{item.file.name}}\n                            </td>\n                            <td>{{item.file.size/1024|number:2}}KB</td>\n                            <td>\n                            	<div class=\"progress\" style=\"margin-bottom: 0;\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" ng-style=\"{ \'width\': item.progress + \'%\' }\"></div>\n                                </div>\n                            </td>\n                            <td nowrap>\n                                    <button type=\"button\" class=\"btn btn-warning btn-xs\" ng-click=\"item.cancel()\" ng-disabled=\"!item.isUploading\">\n                                        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                                    </button>\n                                    <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"item.remove()\">\n                                        <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                                    </button>\n                                </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div>\n                	选择文件（可以多选）：<input type=\"file\" nv-file-select=\"\" uploader=\"uploader\" multiple  /><br/>\n\n                	<div class=\"progress\" style=\"\">\n                        <div class=\"progress-bar\" role=\"progressbar\" ng-style=\"{ \'width\': uploader.progress + \'%\' }\"></div>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>                \n    </div>\n    <div class=\"col-sm-12\">	\n    	<!-- 使用瀑布流 -->\n    	<div deckgrid source=\"resource\" cardTemplate=\"/static/src/html/card.html\" class=\"deckgrid\"></div>\n	</div>\n    <div class=\"col-xs-12 text-center\"> \n        <ul class=\"pagination\">\n          <li>\n            <a ng-click=\"get(page - 1)\" aria-label=\"Previous\">\n              <span aria-hidden=\"true\" >&laquo;</span>\n            </a>\n          </li>\n          <li><a href=\"#\">{{page}}</a></li>\n          <li>\n            <a ng-click=\"get(page + 1)\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">&raquo;</span>\n            </a>\n          </li>\n        </ul>\n    </div>\n</div>");
$templateCache.put("/static/src/html/selector.html","<div class=\"model-header\">\n	<h3 class=\"modal-title\">选择图片</h3>\n</div>\n<div class=\"model-body\">\n	<tabset justified=\"true\">\n		<tab heading=\"上传图片\">\n			<div class=\"container-fluid\">\n				<div class=\"alert alert-default\">选择要上传的内容</div>\n				<div class=\"col-sm-12\" style=\"\">\n					<div class=\"well container-fluid\">\n						<div class=\"col-sm-4\" ng-repeat=\"file in finished\">\n							<img ng-src=\"{{file}}\" alt=\"\" class=\"img-responsive thumbnail\">\n						</div>\n					</div>\n				</div>\n                <div>\n                	选择文件（可以多选）,选择完成后自动上传：<input type=\"file\" nv-file-select=\"\" uploader=\"uploader\" multiple /><br/>\n                	<div class=\"progress\" style=\"\">\n                        <div class=\"progress-bar\" role=\"progressbar\" ng-style=\"{ \'width\': uploader.progress + \'%\' }\">\n                        	{{finished.length}} / {{uploader.queue.length}}\n                        </div>\n                    </div>\n                </div>\n			</div>\n		</tab>\n		<tab heading=\"选择图片\" select=\"fillData(1)\">\n			<div class=\"col-sm-6 col-sm-offset-6\">\n				<div class=\"input-group\">\n					<div class=\"input-group-addon\">\n						筛选\n					</div>\n					<input type=\"text\" class=\'form-control\' ng-model=\"keyword\"   ng-model-options=\"{debounce: {default:500, blur:0}}\" ng-change=\"fillData(page, keyword)\">\n				</div>	\n			</div>\n			<div class=\"row\">\n				<div class=\"container-fluid\">\n					<div class=\"col-sm-3\" ng-repeat=\"pic in pics\" ng-click=\"toggle(pic)\" ng-class=\"{selected:pic.in}\">\n						<img ng-src=\"{{pic.path}}\" alt=\"\" class=\"img-responsive thumbnail\">	\n						<p>{{pic.filename}}</p>\n					</div>\n				</div>\n			</div>\n			<div class=\"col-sm-12 text-center\">\n				<ul class=\"pagination\">\n				  <li>\n				    <a ng-click=\"fillData(page - 1)\" aria-label=\"Previous\">\n				      <span aria-hidden=\"true\" >&laquo;</span>\n				    </a>\n				  </li>\n				  <li><a href=\"#\">{{page}}</a></li>\n				  <li>\n				    <a ng-click=\"fillData(page + 1)\" aria-label=\"Next\">\n				      <span aria-hidden=\"true\">&raquo;</span>\n				    </a>\n				  </li>\n				</ul>\n			</div>\n		</tab>\n	</tabset>\n\n</div>\n<div class=\"modal-footer\">\n	<button class=\"btn btn-primary\" ng-click=\"ok()\">确认</button>\n</div>");
$templateCache.put("/static/src/html/uploading.html","<input type=\"file\" ng-show=\"!uploading\">\n<div ng-show=\"!uploading\" class=\"btn btn-success\" ng-click=\"Upload()\">上传</div>\n<div class=\"progress\" ng-show=\"uploading\">\n    <div class=\"progress-bar\" style=\"width: {{percent}}%;\"></div>\n</div>");}]);