webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a href=\"#\" class=\"navbar-brand\">ELearning App</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/users\" routerLinkActive=\"active\">Users</a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a>\n                </li>\n            </ul>\n        <ul class=\"navbar-nav\">\n            <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n        </ul>\n    </div>\n</nav>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var department_component_1 = __webpack_require__("../../../../../src/app/department/department.component.ts");
var department_service_1 = __webpack_require__("../../../../../src/app/department/department.service.ts");
var authorization_component_1 = __webpack_require__("../../../../../src/app/authorization/authorization.component.ts");
var authorization_service_1 = __webpack_require__("../../../../../src/app/authorization/authorization.service.ts");
var token_interceptor_service_1 = __webpack_require__("../../../../../src/app/authorization/token-interceptor.service.ts");
var user_profile_component_1 = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
var jwt_interceptor_service_1 = __webpack_require__("../../../../../src/app/authorization/jwt-interceptor.service.ts");
var pagination_component_1 = __webpack_require__("../../../../../src/app/pagination/pagination.component.ts");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var dialog_component_1 = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
var role_service_1 = __webpack_require__("../../../../../src/app/shared/role.service.ts");
var routes = [
    /* {
      path: '',
      redirectTo: '/user-login',
      pathMatch: 'full'
    }, */
    {
        path: 'login',
        component: authorization_component_1.AuthorizationComponent
    },
    {
        path: 'users',
        component: user_component_1.UserComponent
    },
    {
        path: 'profile',
        component: user_profile_component_1.UserProfileComponent
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                authorization_component_1.AuthorizationComponent,
                department_component_1.DepartmentComponent,
                user_profile_component_1.UserProfileComponent,
                pagination_component_1.PaginationComponent,
                dialog_component_1.DialogComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                router_1.RouterModule.forRoot(routes), ng_bootstrap_1.NgbModule.forRoot()
            ],
            providers: [user_service_1.UserService, department_service_1.DepartmentService, authorization_service_1.AuthorizationService, token_interceptor_service_1.TokenInterceptorService, jwt_interceptor_service_1.JwtInterceptorService, {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: token_interceptor_service_1.TokenInterceptorService,
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: jwt_interceptor_service_1.JwtInterceptorService,
                    multi: true
                }, role_service_1.RoleService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/authorization/authorization.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authorization/authorization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n    <div class=\"col-md-6 mx-auto\">\n        <div class=\"alert alert-danger alert-dismissible fade show\" *ngIf=\"wrongUsernameOrPass\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"wrongUsernameOrPass = false;\">&times;</button>\n            <strong>Login failed!</strong> Incorrect username and/or password.\n        </div>\n        <div class=\"card rounded-0\">\n            <div class=\"card-header\">\n                <h3 class=\"mb-0\">Login</h3>\n            </div>\n            <div class=\"card-body\">\n                <form class=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\">\n                    <div class=\"form-group\">\n                        <label for=\"\">Username</label>\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"loginData.userName\" id=\"username\" name=\"username\" #username=\"ngModel\"\n                            name=\"username\" required>\n                        <span class=\"help-block\" *ngIf=\"username.touched && !username.valid\">\n                            <i>Username is required</i>\n                        </span>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">Password</label>\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"loginData.userPassword\" #password=\"ngModel\" id=\"password\" name=\"password\"\n                            name=\"password\" required>\n                        <span class=\"help-block\" *ngIf=\"password.touched && !password.valid\">\n                            <i>Password is required</i>\n                        </span>\n                    </div>\n                    <button class=\"btn btn-primary float-right\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authorization/authorization.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var authorization_service_1 = __webpack_require__("../../../../../src/app/authorization/authorization.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var AuthorizationComponent = /** @class */ (function () {
    function AuthorizationComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginData = {};
        this.wrongUsernameOrPass = false;
    }
    AuthorizationComponent.prototype.ngOnInit = function () {
    };
    AuthorizationComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.loginData.userName, this.loginData.userPassword)
            .subscribe(function (result) {
            if (result) {
                //login successful
                _this.router.navigate(['/users']);
            }
        }, function (error) {
            if (error.toString() === 'Ilegal login') {
                _this.wrongUsernameOrPass = true;
                console.log(error);
            }
            else {
                Observable_1.Observable.throw(error);
            }
        });
    };
    AuthorizationComponent = __decorate([
        core_1.Component({
            selector: 'app-authorization',
            template: __webpack_require__("../../../../../src/app/authorization/authorization.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authorization/authorization.component.css")]
        }),
        __metadata("design:paramtypes", [authorization_service_1.AuthorizationService,
            router_1.Router])
    ], AuthorizationComponent);
    return AuthorizationComponent;
}());
exports.AuthorizationComponent = AuthorizationComponent;


/***/ }),

/***/ "../../../../../src/app/authorization/authorization.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var angular2_jwt_1 = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(http) {
        this.http = http;
        this.authUrl = "/login";
        this.headers = new http_1.HttpHeaders();
    }
    AuthorizationService.prototype.login = function (userName, userPassword) {
        return this.http.post(this.authUrl, JSON.stringify({ username: userName, password: userPassword }), { observe: 'response' })
            .map(function (response) {
            console.log(response);
            var token = response.headers.has("Authorization");
            console.log("token: " + token);
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({ userName: userName, token: response.headers.get('Authorization') }));
                return true;
            }
            else {
                return false;
            }
        }).catch(function (error) {
            if (error.status === 401) {
                return Observable_1.Observable.throw('Ilegal login');
            }
            else {
                return Observable_1.Observable.throw(error.json().error || 'Server error');
            }
        });
    };
    AuthorizationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    };
    AuthorizationService.prototype.getUser = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var user = currentUser && currentUser.userName;
        return user ? currentUser.userName : "";
    };
    AuthorizationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthorizationService.prototype.isAuthenticated = function () {
        var token = this.getToken();
        return angular2_jwt_1.tokenNotExpired(null, token);
    };
    AuthorizationService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        return token && token.length > 0;
    };
    AuthorizationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthorizationService);
    return AuthorizationService;
}());
exports.AuthorizationService = AuthorizationService;


/***/ }),

/***/ "../../../../../src/app/authorization/jwt-interceptor.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var authorization_service_1 = __webpack_require__("../../../../../src/app/authorization/authorization.service.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var JwtInterceptorService = /** @class */ (function () {
    function JwtInterceptorService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    JwtInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).do(function (event) {
            if (event instanceof http_1.HttpResponse) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof http_1.HttpErrorResponse) {
                if (err.status === 401) {
                    _this.router.navigate(['/login']);
                }
                else if (err.status === 403) {
                    alert("Unauthorized!");
                }
            }
        });
    };
    JwtInterceptorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [authorization_service_1.AuthorizationService,
            router_1.Router])
    ], JwtInterceptorService);
    return JwtInterceptorService;
}());
exports.JwtInterceptorService = JwtInterceptorService;


/***/ }),

/***/ "../../../../../src/app/authorization/token-interceptor.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var authorization_service_1 = __webpack_require__("../../../../../src/app/authorization/authorization.service.ts");
var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(auth) {
        this.auth = auth;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        req = req.clone({
            setHeaders: {
                Authorization: this.auth.getToken()
            }
        });
        return next.handle(req);
    };
    TokenInterceptorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [authorization_service_1.AuthorizationService])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());
exports.TokenInterceptorService = TokenInterceptorService;


/***/ }),

/***/ "../../../../../src/app/department/department.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/department/department.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  department works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/department/department.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent() {
    }
    DepartmentComponent.prototype.ngOnInit = function () {
    };
    DepartmentComponent = __decorate([
        core_1.Component({
            selector: 'app-department',
            template: __webpack_require__("../../../../../src/app/department/department.component.html"),
            styles: [__webpack_require__("../../../../../src/app/department/department.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DepartmentComponent);
    return DepartmentComponent;
}());
exports.DepartmentComponent = DepartmentComponent;


/***/ }),

/***/ "../../../../../src/app/department/department.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DepartmentService = /** @class */ (function () {
    function DepartmentService() {
    }
    DepartmentService = __decorate([
        core_1.Injectable()
    ], DepartmentService);
    return DepartmentService;
}());
exports.DepartmentService = DepartmentService;


/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 999;\r\n  }\r\n  \r\n  .dialog {\r\n    z-index: 1000;\r\n    position: fixed;\r\n    right: 0;\r\n    left: 0;\r\n    top: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    min-height: 200px;\r\n    width: 90%;\r\n    max-width: 620px;\r\n    max-height: 90%;\r\n    overflow-y: auto;\r\n    background-color: #fff;\r\n    padding: 12px;\r\n    -webkit-box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\r\n            box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .dialog {\r\n      top: 40px;\r\n    }\r\n  }\r\n  \r\n  .dialog__close-btn {\r\n    border: 0;\r\n    background: none;\r\n    color: #2d2d2d;\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    font-size: 1.2em;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\">\n    <ng-content></ng-content>\n    <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\">X</button>\n  </div>\n  <div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.closable = true;
        this.visibleChange = new core_1.EventEmitter();
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "closable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "visible", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DialogComponent.prototype, "visibleChange", void 0);
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialog/dialog.component.css")],
            animations: [
                animations_1.trigger('dialog', [
                    animations_1.transition('void => *', [
                        animations_1.style({ transform: 'scale3d(.3, .3, .3)' }),
                        animations_1.animate(100)
                    ]),
                    animations_1.transition('* => void', [
                        animations_1.animate(100, animations_1.style({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;


/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-pagination  (pageChange)=\"onSelect($event)\"\n    [(collectionSize)]=\"totalPages\" \n    [(page)]=\"page\" \n    [maxSize]=\"5\" \n    [rotate]=\"true\" \n    [ellipses]=\"false\" \n    [boundaryLinks]=\"true\">\n</ngb-pagination>"

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.page = 1;
        this.collectionSize = 0;
        this.emitPageNum = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.onSelect = function (event) {
        this.page = event - 1;
        this.onSelectPage(event - 1);
    };
    PaginationComponent.prototype.onSelectPage = function (page) {
        this.emitPageNum.emit(page);
    };
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "totalPages", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "emitPageNum", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'app-pagination',
            template: __webpack_require__("../../../../../src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;


/***/ }),

/***/ "../../../../../src/app/shared/role.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.path = "/api/roles";
    }
    RoleService.prototype.getAllRoles = function () {
        return this.http.get(this.path);
    };
    RoleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RoleService);
    return RoleService;
}());
exports.RoleService = RoleService;


/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n  <div class=\"row my-2\">\n      <div class=\"col-lg-8 order-lg-2\">\n          <ul class=\"nav nav-tabs\">\n              <li class=\"nav-item\">\n                  <a href=\"\" data-target=\"#profile\" data-toggle=\"tab\" class=\"nav-link active\">Profile</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a href=\"\" data-target=\"#edit\" data-toggle=\"tab\" class=\"nav-link\">Edit</a>\n              </li>\n          </ul>\n          <div class=\"tab-content py-4\">\n              <div class=\"tab-pane active\" id=\"profile\">\n                  <h5 class=\"mb-3\">User Profile</h5>\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <h6>First name</h6>\n                          <p>\n                              name\n                          </p>\n                          <h6>Last name</h6>\n                          <p>\n                              ln\n                          </p>\n                          <h6>Username</h6>\n                          <p>\n                              uname\n                          </p>\n                          <h6>Date of birth</h6>\n                          <p>\n                              date\n                          </p>\n                          <h6>Phone number</h6>\n                          <p>\n                              ph\n                          </p>\n                      </div>\n                     \n                  </div>\n                  <!--/row-->\n              </div>\n              <div class=\"tab-pane\" id=\"edit\">\n                  <form role=\"form\">\n                      <div class=\"form-group row\">\n                          <label class=\"col-lg-3 col-form-label form-control-label\">First name</label>\n                          <div class=\"col-lg-9\">\n                              <input class=\"form-control\" type=\"text\" value=\"Jane\">\n                          </div>\n                      </div>\n                      <div class=\"form-group row\">\n                          <label class=\"col-lg-3 col-form-label form-control-label\">Last name</label>\n                          <div class=\"col-lg-9\">\n                              <input class=\"form-control\" type=\"text\" value=\"Bishop\">\n                          </div>\n                      </div>\n                      <div class=\"form-group row\">\n                          <label class=\"col-lg-3 col-form-label form-control-label\">Username</label>\n                          <div class=\"col-lg-9\">\n                              <input class=\"form-control\" type=\"text\" value=\"email@gmail.com\">\n                          </div>\n                      </div>\n                      <div class=\"form-group row\">\n                          <label class=\"col-lg-3 col-form-label form-control-label\">Phone number</label>\n                          <div class=\"col-lg-9\">\n                              <input class=\"form-control\" type=\"text\" value=\"\">\n                          </div>\n                      </div>\n                      <div class=\"form-group row\">\n                          <label class=\"col-lg-3 col-form-label form-control-label\">Address</label>\n                          <div class=\"col-lg-9\">\n                              <input class=\"form-control\" type=\"text\" value=\"\" placeholder=\"Street\">\n                          </div>\n                      </div>\n                      <div class=\"form-group row\">\n                          <label class=\"col-lg-3 col-form-label form-control-label\">Role</label>\n                          <div class=\"col-lg-9\">\n                              <select id=\"user_time_zone\" class=\"form-control\" size=\"0\">\n                                  <option value=\"Hawaii\">(GMT-10:00) Hawaii</option>\n                                  <option value=\"Alaska\">(GMT-09:00) Alaska</option>\n                                  <option value=\"Pacific Time (US &amp; Canada)\">(GMT-08:00) Pacific Time (US &amp; Canada)</option>\n                                  <option value=\"Arizona\">(GMT-07:00) Arizona</option>\n                                  <option value=\"Mountain Time (US &amp; Canada)\">(GMT-07:00) Mountain Time (US &amp; Canada)</option>\n                                  <option value=\"Central Time (US &amp; Canada)\" selected=\"selected\">(GMT-06:00) Central Time (US &amp; Canada)</option>\n                                  <option value=\"Eastern Time (US &amp; Canada)\">(GMT-05:00) Eastern Time (US &amp; Canada)</option>\n                                  <option value=\"Indiana (East)\">(GMT-05:00) Indiana (East)</option>\n                              </select>\n                          </div>\n                      </div>\n                      <div class=\"form-group row\">\n                          <label class=\"col-lg-3 col-form-label form-control-label\"></label>\n                          <div class=\"col-lg-9\">\n                              <input type=\"reset\" class=\"btn btn-secondary\" value=\"Cancel\">\n                              <input type=\"button\" class=\"btn btn-primary\" value=\"Save Changes\">\n                          </div>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n      <div class=\"col-lg-4 order-lg-1 text-center\">\n          <img src=\"//placehold.it/150\" class=\"mx-auto img-fluid img-circle d-block\" alt=\"avatar\">\n          <h6 class=\"mt-2\">Upload a different photo</h6>\n          <label class=\"custom-file\">\n              <input type=\"file\" id=\"file\" class=\"custom-file-input\">\n              <span class=\"custom-file-control\">Choose file</span>\n          </label>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hand {\r\n    cursor: pointer;\r\n}\r\n\r\ninput.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n\r\ninput.not-unique {\r\n    border: 1px solid red;\r\n}\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\n  <table class=\"table table-hover\">\n    <thead class=\"thead-light\">\n      <tr>\n        <th></th>\n        <th></th>\n        <th>No.</th>\n        <th>First name\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('firstName')\"></i>\n        </th>\n        <th>Last name\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('lastName')\"></i>\n        </th>\n        <th>Username\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('username')\"></i>\n        </th>\n        <th>Date of birth\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('dateOfBirth')\"></i>\n        </th>\n        <th>Address\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('address')\"></i>\n        </th>\n        <th>Phone number\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('phoneNumber')\"></i>\n        </th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr [ngClass]=\"{'table-danger': !u.active}\" *ngFor=\"let u of users; let i = index\">\n        <td>\n            <button type=\"button\" *ngIf=\"u.active\" (click)=\"changeUserStatus(u.userId)\" title=\"Deactivate account\" class=\"btn btn-sm btn-outline-danger\">Deactivate</button>\n            <button type=\"button\" *ngIf=\"!u.active\" (click)=\"changeUserStatus(u.userId)\" title=\"Activate account\" class=\"btn btn-sm btn-outline-success\">Activate</button>\n        </td>\n        <td>\n          <img src='profile-images/{{u.imagePath}}' height=\"100\" width=\"100\">\n        </td>\n        <td>{{i + 1}}</td>\n        <td>{{u.firstName}}</td>\n        <td>{{u.lastName}}</td>\n        <td>{{u.username}}</td>\n        <td>{{u.dateOfBirth}}</td>\n        <td>{{u.address}}</td>\n        <td>{{u.phoneNumber}}</td>\n        <td style=\"display: block;\">\n          <div *ngFor=\"let r of u.roleName\">\n            <span class=\"badge badge-primary\">\n              <small>{{r}}</small>\n            </span>\n            <br>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div style=\"text-align: center;\">\n    <app-pagination [(totalPages)]=\"totalPages\" (emitPageNum)=\"selectPageNum($event)\"></app-pagination>\n    <button class=\"btn btn-primary hand\" (click)=\"showDialog = !showDialog;resetAddForm();getRoles();\">New user</button>\n    <div>\n      Show:\n      <select class=\"form-control\" [(ngModel)]=\"userStatus\" (change)=\"onSelectUserStatus()\">\n        <option value=\"all\" selected=\"selected\">All users</option>\n        <option value=\"active\">Active only</option>\n        <option value=\"notactive\">Not active</option>\n      </select>\n    </div>\n    <br>\n    <div class=\"input-group\">\n        <input type=\"text\" (keyup)=\"onSelectUserStatus()\" class=\"form-control\" [(ngModel)]=\"searchTerm\" placeholder=\"Search\" aria-describedby=\"basic-addon1\">\n      </div>\n  </div>\n</div>\n\n\n\n<app-dialog [(visible)]=\"showDialog\">\n  <h4>Add user</h4>\n  <hr>\n  <form (ngSubmit)=\"postNewUser()\" class=\"form-horizontal\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label class=\"control-label\" for=\"username\">Username</label>\n      <input id=\"username\" name=\"username\" [ngClass]=\"{'not-unique':!isUnique}\" type=\"text\" placeholder=\"Username...\" (keyup)=\"isUsernameUnique()\" class=\"form-control input-md\" [(ngModel)]=\"newUser.username\" required\n        #username=\"ngModel\" maxlength=\"20\">\n      <span class=\"help-block\" *ngIf=\"username.touched && !username.valid\">\n        <i>Username is required.</i>\n      </span>\n      <span class=\"help-block\" *ngIf=\"username.touched && !isUnique\">\n        <i>This username is taken.</i>\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"control-label\" for=\"firstName\">First name</label>\n      <input id=\"firstName\" name=\"firstName\" type=\"text\" placeholder=\"First name...\" class=\"form-control input-md\" [(ngModel)]=\"newUser.firstName\" required\n        #firstName=\"ngModel\" maxlength=\"20\">\n      <span class=\"help-block\" *ngIf=\"firstName.touched && !firstName.valid\">\n        <i>First name is required.</i>\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"control-label\" for=\"lastName\">Last name</label>\n      <input id=\"lastName\" name=\"lastName\" type=\"text\" placeholder=\"Last name...\" class=\"form-control input-md\" [(ngModel)]=\"newUser.lastName\" required\n        #lastName=\"ngModel\" maxlength=\"20\">\n      <span class=\"help-block\" *ngIf=\"lastName.touched && !lastName.valid\">\n        <i>Last name is required.</i>\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"control-label\" for=\"address\">Address</label>\n      <input id=\"address\" name=\"address\" type=\"text\" placeholder=\"Address...\" class=\"form-control input-md\" [(ngModel)]=\"newUser.address\" #address=\"ngModel\"\n        maxlength=\"30\">\n      <span class=\"help-block\" *ngIf=\"address.touched && !address.valid\">\n        <i>Can't contain more than 30 characters.</i>\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"control-label\" for=\"phoneNumber\">Phone number</label>\n      <input id=\"phoneNumber\" name=\"phoneNumber\" type=\"text\" placeholder=\"Phone number...\" class=\"form-control input-md\" [(ngModel)]=\"newUser.phoneNumber\"\n        #phoneNumber=\"ngModel\" maxlength=\"20\">\n      <span class=\"help-block\" *ngIf=\"phoneNumber.touched && !phoneNumber.valid\">\n        <i>Can't contain more than 20 characters.</i>\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"control-label\" for=\"dp\">Date of birth</label>\n      <div class=\"input-group\">\n        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n            <img src=\"assets/img/calendar-icon.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"rolesSelect\" class=\"control-label\">Select roles</label>\n      <select name=\"rolesSelect\" [(ngModel)]=\"newUser.roleId\" multiple class=\"form-control\" id=\"rolesSelect\" required>\n        <option *ngFor=\"let r of roles\" value=\"{{r.roleId}}\">{{r.name}}</option>\n      </select>\n    </div>\n\n    <hr>\n    <div style=\"text-align: center\">\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid || !isUnique\">Add</button>\n      <button type=\"button\" (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\n    </div>\n  </form>\n\n</app-dialog>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var role_service_1 = __webpack_require__("../../../../../src/app/shared/role.service.ts");
var UserComponent = /** @class */ (function () {
    function UserComponent(userService, roleService) {
        this.userService = userService;
        this.roleService = roleService;
        this.users = [];
        this.roles = [];
        this.newUser = {
            username: "",
            dateOfBirth: ""
        };
        this.showDialog = false;
        this.sortDirection = "asc";
        this.isAscending = true;
        this.sortParam = "userId";
        this.isUnique = true;
        this.pageNum = 0;
        this.sizeNum = 2;
        this.totalPages = 0;
        this.userStatus = 'all';
        this.searchTerm = '';
        this.message = "";
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    UserComponent.prototype.onSelectUserStatus = function () {
        if (this.userStatus === "all") {
            this.getAllUsers();
        }
        ;
        if (this.userStatus === "active") {
            this.getActiveUsers();
        }
        ;
        if (this.userStatus === "notactive") {
            this.getNotActiveUsers();
        }
        ;
    };
    UserComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAll(this.pageNum, this.sizeNum, this.sortParam, this.sortDirection, this.searchTerm).subscribe(function (response) { return (_this.users = response.body, _this.totalPages = Number(response.headers.get('total-pages') * 10)); }, function (error) { return console.log(error); });
    };
    UserComponent.prototype.getActiveUsers = function () {
        var _this = this;
        this.userService.getActiveUsers(this.pageNum, this.sizeNum, this.sortParam, this.sortDirection, this.searchTerm).subscribe(function (response) { return (_this.users = response.body, _this.totalPages = Number(response.headers.get('total-pages') * 10)); }, function (error) { return console.log(error); });
    };
    UserComponent.prototype.getNotActiveUsers = function () {
        var _this = this;
        this.userService.getNotActiveUsers(this.pageNum, this.sizeNum, this.sortParam, this.sortDirection, this.searchTerm).subscribe(function (response) { return (_this.users = response.body, _this.totalPages = Number(response.headers.get('total-pages') * 10)); }, function (error) { return console.log(error); });
    };
    UserComponent.prototype.isUsernameUnique = function () {
        var _this = this;
        this.userService.isUsernameUnique(this.newUser.username).subscribe(function (response) { return _this.isUnique = response; }, function (error) { return console.log(error); });
    };
    UserComponent.prototype.postNewUser = function () {
        var _this = this;
        if (this.model.month <= 9) {
            this.model.month = "0" + this.model.month;
        }
        if (this.model.day <= 9) {
            this.model.day = "0" + this.model.day;
        }
        this.newUser.dateOfBirth = this.model.year + "-" + this.model.month + "-" + this.model.day;
        this.userService.postNewUser(this.newUser).subscribe(function (response) { return [_this.users.push(response), _this.resetAddForm()]; }, function (error) { return console.log(error); });
    };
    UserComponent.prototype.changeUserStatus = function (id) {
        var _this = this;
        this.userService.changeUserStatus(id).subscribe(function (response) { return [_this.message = response, alert(_this.message), _this.onSelectUserStatus()]; }, function (error) { return console.log(error); });
    };
    UserComponent.prototype.selectPageNum = function (pageNum) {
        this.pageNum = pageNum;
        this.onSelectUserStatus();
    };
    UserComponent.prototype.onSort = function (sortParam) {
        this.isAscending = !this.isAscending;
        this.isAscending ? this.sortDirection = "asc" : this.sortDirection = "desc";
        this.sortParam = sortParam;
        this.onSelectUserStatus();
    };
    UserComponent.prototype.resetAddForm = function () {
        this.isUnique = true;
        this.addUserForm.resetForm();
    };
    UserComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getAllRoles().subscribe(function (response) { return _this.roles = response; }, function (error) { return console.log(error); });
    };
    __decorate([
        core_1.ViewChild('f'),
        __metadata("design:type", forms_1.NgForm)
    ], UserComponent.prototype, "addUserForm", void 0);
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            role_service_1.RoleService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.path = "/api/users";
    }
    UserService.prototype.getAll = function (page, size, sortParam, sortDirection, term) {
        return this.http.get(this.path + "?term=" + term + "&page=" + page + "&size=" + size + "&sort=" + sortParam + "," + sortDirection, { observe: 'response' });
    };
    UserService.prototype.getActiveUsers = function (page, size, sortParam, sortDirection, term) {
        return this.http.get(this.path + "/active?term=" + term + "&page=" + page + "&size=" + size + "&sort=" + sortParam + "," + sortDirection, { observe: 'response' });
    };
    UserService.prototype.getNotActiveUsers = function (page, size, sortParam, sortDirection, term) {
        return this.http.get(this.path + "/not-active?term=" + term + "&page=" + page + "&size=" + size + "&sort=" + sortParam + "," + sortDirection, { observe: 'response' });
    };
    UserService.prototype.postNewUser = function (newUser) {
        return this.http.post(this.path + "/sign-up", newUser);
    };
    UserService.prototype.isUsernameUnique = function (username) {
        return this.http.post(this.path + "/username-unique/" + username, null);
    };
    UserService.prototype.changeUserStatus = function (id) {
        return this.http.put(this.path + "/" + id, null, { responseType: 'text' });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map