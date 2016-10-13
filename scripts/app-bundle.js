define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Dirlidaca';
            config.map([
                { route: 'login', moduleId: './login/login', title: 'Login' },
                { route: '', moduleId: './home/home', title: "Home", name: 'home' }
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

define('home',["require", "exports"], function (require, exports) {
    "use strict";
    var Home = (function () {
        function Home() {
            this.title = "home";
            console.log("contructor");
        }
        Home.prototype.created = function () {
            console.log("created");
        };
        return Home;
    }());
    exports.Home = Home;
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

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
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

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"./resources/css/style.css\"></require>\n\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-user\"></i>\n        <span>DirliDaca</span>\n      </a>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-user\"></i>\n        <span>Welcome</span>\n      </a>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-user\"></i>\n        <span>Problems</span>\n      </a>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-user\"></i>\n        <span>Course</span>\n      </a>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-user\"></i>\n        <span>Edit Problem</span>\n      </a>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-user\"></i>\n        <span>IDE</span>\n      </a>\n\n      <a class=\"navbar-brand\" style=\"text-align:right\" href=\"#/login\">\n        <i class=\"fa fa-user\"></i>\n        <span>Login</span>\n      </a>\n    </div>\n  </nav>\n\n  <div class=\"container\">\n      <router-view class=\"col-md-8\"></router-view>\n  </div>\n</template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\n    <h1>\n        DirliDaca\n    </h1>\n\n</template>"; });
define('text!login/login.html', ['module'], function(module) { module.exports = "<template>\n    <h1 style=\"text-align: center\"> Login </h1>\n\n\n    <div class=\"panel-body\">\n        <form role=\"form\" class=\"form-horizontal\">\n            <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Username</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" placeholder=\"username\" class=\"form-control\" value.bind=\"username\">\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Password</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"password\" placeholder=\"password\" class=\"form-control\" value.bind=\"password\">\n                </div>\n            </div>\n\n        </form>\n\n        <div style=\"text-align: center\">\n            <button class=\"btn btn-success\" click.delegate=\"login()\" disabled.bind=\"!canLogin\">Login</button>\n        </div>\n    </div>\n\n</template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\n    <h1>\n        DirliDaca\n    </h1>\n\n</template>"; });
define('text!resources/css/style.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n\nsection {\n    margin: 0 20px;\n}\n\na:focus {\n    outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n    margin: 20px;\n}\n\n.contact-list {\n    overflow-y: auto;\n    border: 1px solid #ddd;\n    padding: 10px;\n}\n\n.panel {\n    margin: 20px;\n}\n\n.btn {\n    width: 200px;\n}\n\n.button-bar {\n    right: 0;\n    left: 0;\n    bottom: 0;\n    border-top: 1px solid #ddd;\n    background: white;\n}\n\n.button-bar > button {\n    float: right;\n    margin: 20px;\n}\n\nli.list-group-item {\n    list-style: none;\n}\n\nli.list-group-item > a {\n    text-decoration: none;\n}\n\nli.list-group-item.active > a {\n    color: white;\n}\n"; });
//# sourceMappingURL=app-bundle.js.map