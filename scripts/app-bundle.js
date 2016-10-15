define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Dirlidaca';
            config.map([
                { route: '', moduleId: './home/home', title: "Home", name: 'home' },
                { route: 'login', moduleId: './login/login', title: 'Login' },
                { route: 'problem', moduleId: './problem/problem', title: "Problems", name: 'problem' },
                { route: 'problem/:id', moduleId: './problem/problem-detail', title: "Problem", name: 'problem-detail' },
                { route: 'problem/new', moduleId: './problem/add-problem', title: "Problem", name: 'add-problem' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('api/api',["require", "exports", 'aurelia-framework', 'aurelia-fetch-client'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var Api = (function () {
        function Api(http) {
            this.problems = [];
            this.http = http;
        }
        Api.prototype.getProblems = function () {
            return this.http.fetch("http://localhost:8080/problem");
        };
        Api = __decorate([
            aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient, aurelia_fetch_client_1.json), 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], Api);
        return Api;
    }());
    exports.Api = Api;
});

define('home/home',["require", "exports"], function (require, exports) {
    "use strict";
    var Home = (function () {
        function Home() {
            this.title = "home";
        }
        Home.prototype.created = function () {
        };
        return Home;
    }());
    exports.Home = Home;
});

define('login/login',["require", "exports"], function (require, exports) {
    "use strict";
    var Login = (function () {
        function Login() {
        }
        Login.prototype.login = function () {
            console.log("Login");
        };
        Object.defineProperty(Login.prototype, "canLogin", {
            get: function () {
                return this.username && this.password;
            },
            enumerable: true,
            configurable: true
        });
        return Login;
    }());
    exports.Login = Login;
});

define('problem/add-problem',["require", "exports"], function (require, exports) {
    "use strict";
    var AddProblem = (function () {
        function AddProblem() {
        }
        AddProblem.prototype.created = function () {
        };
        Object.defineProperty(AddProblem.prototype, "canAdd", {
            get: function () {
                return this.name && this.description;
            },
            enumerable: true,
            configurable: true
        });
        AddProblem.prototype.addProblem = function () {
            console.log("Adding new Problem");
        };
        return AddProblem;
    }());
    exports.AddProblem = AddProblem;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('problem/problem-detail',["require", "exports", 'aurelia-framework', '../api/api'], function (require, exports, aurelia_framework_1, api_1) {
    "use strict";
    var ProblemDetail = (function () {
        function ProblemDetail(api) {
            this.api = api;
            console.log("chegou");
        }
        ProblemDetail.prototype.activate = function (params, routeConfig) {
            this.routeConfig = routeConfig;
        };
        ProblemDetail = __decorate([
            aurelia_framework_1.inject(api_1.Api), 
            __metadata('design:paramtypes', [api_1.Api])
        ], ProblemDetail);
        return ProblemDetail;
    }());
    exports.ProblemDetail = ProblemDetail;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('problem/problem',["require", "exports", 'aurelia-framework', '../api/api'], function (require, exports, aurelia_framework_1, api_1) {
    "use strict";
    var Problem = (function () {
        function Problem(api) {
            this.api = api;
        }
        Problem.prototype.created = function () {
            var _this = this;
            this.problems = [];
            this.api.getProblems().then(function (response) { return response.json(); })
                .then(function (data) {
                console.log("DADOS: " + data);
                _this.problems = [data];
            });
        };
        Problem = __decorate([
            aurelia_framework_1.inject(api_1.Api), 
            __metadata('design:paramtypes', [api_1.Api])
        ], Problem);
        return Problem;
    }());
    exports.Problem = Problem;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"./resources/css/style.css\"></require>\n\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-user\"></i>\n        <span>DirliDaca</span>\n      </a>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-user\"></i>\n        <span>Welcome</span>\n      </a>\n      <a class=\"navbar-brand\" href=\"#/problem\">\n        <i class=\"fa fa-user\"></i>\n        <span>Problems</span>\n      </a>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-user\"></i>\n        <span>Course</span>\n      </a>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-user\"></i>\n        <span>Edit Problem</span>\n      </a>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-user\"></i>\n        <span>IDE</span>\n      </a>\n\n      <a class=\"navbar-brand\" style=\"text-align:right\" href=\"#/login\">\n        <i class=\"fa fa-user\"></i>\n        <span>Login</span>\n      </a>\n    </div>\n  </nav>\n\n  <div class=\"container\">\n      <router-view class=\"col-md-8\"></router-view>\n  </div>\n</template>"; });
define('text!resources/css/style.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n\nsection {\n    margin: 0 20px;\n}\n\na:focus {\n    outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n    margin: 20px;\n}\n\n.problem-list {\n    overflow-y: auto;\n    border: 1px solid #ddd;\n    padding: 10px;\n}\n\n.panel {\n    margin: 20px;\n}\n\n.btn {\n    width: 200px;\n}\n\n.button-bar {\n    right: 0;\n    left: 0;\n    bottom: 0;\n    border-top: 1px solid #ddd;\n    background: white;\n}\n\n.button-bar > button {\n    float: right;\n    margin: 20px;\n}\n\nli.list-group-item {\n    list-style: none;\n}\n\nli.list-group-item > a {\n    text-decoration: none;\n}\n\nli.list-group-item.active > a {\n    color: white;\n}\n"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\n    <h1>\n        DirliDaca\n    </h1>\n\n</template>"; });
define('text!login/login.html', ['module'], function(module) { module.exports = "<template>\n    <h1 style=\"text-align: center\"> Login </h1>\n\n\n    <div class=\"panel-body\">\n        <form role=\"form\" class=\"form-horizontal\">\n            <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Username</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" placeholder=\"username\" class=\"form-control\" value.bind=\"username\">\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Password</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"password\" placeholder=\"password\" class=\"form-control\" value.bind=\"password\">\n                </div>\n            </div>\n\n        </form>\n\n        <div style=\"text-align: center\">\n            <button class=\"btn btn-success\" click.delegate=\"login()\" disabled.bind=\"!canLogin\">Login</button>\n        </div>\n    </div>\n\n</template>"; });
define('text!problem/add-problem.html', ['module'], function(module) { module.exports = "<template>\n\n    <h1>Add a new Problem</h1>\n\n    <div class=\"panel-body\">\n        <form role=\"form\" class=\"form-horizontal\">\n            <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Name</label>\n\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" placeholder=\"name\" class=\"form-control\" value.bind=\"name\">\n                </div>\n            </div>\n\n\n            <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Hint</label>\n\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" placeholder=\"hint\" class=\"form-control\" value.bind=\"hint\">\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Description</label>\n\n                <div class=\"col-sm-10\">\n                    <textarea placeholder=\"description\" class=\"form-control\" value.bind=\"description\"></textarea>\n                </div>\n            </div>\n        </form>\n\n        <div style=\"text-align: center\">\n            <button class=\"btn btn-success\" click.delegate=\"addProblem()\" disabled.bind=\"!canAdd\">Add Problem</button>\n        </div>\n\n    </div>\n\n</template>"; });
define('text!problem/problem-detail.html', ['module'], function(module) { module.exports = "<template>\n    <h1> Specific Problem</h1>\n    <h2>${name}</h2>\n    <h3>${description}</h3>\n</template>"; });
define('text!problem/problem.html', ['module'], function(module) { module.exports = "<template>\n    <h1>Registered Problems</h1>\n\n    <div class=\"problem-list\">\n        <ul class=\"list-group\">\n\n            <li repeat.for=\"problem of problems\" class=\"list-group-item\">\n                <a route-href=\"route: problem-detail; params.bind:{id:problem.id}\">\n                    <md class=\"list-group-item-heading\">${problem.name}</md>\n                    <md class=\"list-group-item-heading\">${problem.description}</md>\n                </a>\n            </li>\n\n        </ul>\n\n        <a route-href=\"route: add-problem\">\n            <button class=\"btn btn-success\">Add Problem</button>\n        </a>\n    </div>\n\n</template>"; });
//# sourceMappingURL=app-bundle.js.map