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
exports.push([module.i, ".hand {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a href=\"#\" class=\"navbar-brand\">ELearning App</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/users\" routerLinkActive=\"active\">Users</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/preExamOTypes\" routerLinkActive=\"active\">PreExamOTypes</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/documents\" routerLinkActive=\"active\">Documents</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav\">\r\n            <a class=\"nav-link\" *ngIf=\"!isLoggedIn\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n        </ul>\r\n        <ul class=\"navbar-nav\" *ngIf=\"isLoggedIn\">\r\n            <a class=\"nav-link hand\" (click)=\"logOut()\">LogOut</a>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var authorization_service_1 = __webpack_require__("../../../../../src/app/authorization/authorization.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(auth, route) {
        this.auth = auth;
        this.route = route;
        this.title = 'app';
        this.isLoggedIn = false;
        this.isLogged();
    }
    AppComponent.prototype.isLogged = function () {
        this.isLoggedIn = this.auth.isLoggedIn();
    };
    AppComponent.prototype.logOut = function () {
        this.auth.logout();
        this.isLoggedIn = false;
        this.route.navigate(['/login']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [authorization_service_1.AuthorizationService,
            router_1.Router])
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
var student_pre_exam_obligation_component_1 = __webpack_require__("../../../../../src/app/student-pre-exam-obligation/student-pre-exam-obligation.component.ts");
var professor_pre_exam_obligation_component_1 = __webpack_require__("../../../../../src/app/professor-pre-exam-obligation/professor-pre-exam-obligation.component.ts");
var professor_pre_exam_obligation_records_component_1 = __webpack_require__("../../../../../src/app/professor-pre-exam-obligation-records/professor-pre-exam-obligation-records.component.ts");
var user_profile_component_1 = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
var jwt_interceptor_service_1 = __webpack_require__("../../../../../src/app/authorization/jwt-interceptor.service.ts");
var pagination_component_1 = __webpack_require__("../../../../../src/app/pagination/pagination.component.ts");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var dialog_component_1 = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
var role_service_1 = __webpack_require__("../../../../../src/app/shared/role.service.ts");
var user_profile_service_1 = __webpack_require__("../../../../../src/app/user-profile/user-profile.service.ts");
var auth_guard_guard_1 = __webpack_require__("../../../../../src/app/auth-guard.guard.ts");
var pre_exam_obligation_records_service_1 = __webpack_require__("../../../../../src/app/student-pre-exam-obligation/pre-exam-obligation-records.service.ts");
var pre_exam_o_type_component_1 = __webpack_require__("../../../../../src/app/pre-exam-o-type/pre-exam-o-type.component.ts");
var pre_exam_o_type_service_1 = __webpack_require__("../../../../../src/app/pre-exam-o-type/pre-exam-o-type.service.ts");
var pre_exam_obligation_service_1 = __webpack_require__("../../../../../src/app/professor-pre-exam-obligation/pre-exam-obligation.service.ts");
var edocuments_component_1 = __webpack_require__("../../../../../src/app/edocuments/edocuments.component.ts");
var edocument_service_1 = __webpack_require__("../../../../../src/app/edocuments/edocument.service.ts");
var student_course_component_1 = __webpack_require__("../../../../../src/app/student-course/student-course.component.ts");
var professor_course_component_1 = __webpack_require__("../../../../../src/app/professor-course/professor-course.component.ts");
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
        component: user_component_1.UserComponent,
        canActivate: [auth_guard_guard_1.AuthGuard]
    },
    {
        path: 'profile/:id',
        component: user_profile_component_1.UserProfileComponent,
        canActivate: [auth_guard_guard_1.AuthGuard]
    },
    {
        path: 'documents',
        component: edocuments_component_1.EdocumentsComponent,
        canActivate: [auth_guard_guard_1.AuthGuard]
    },
    {
        path: 'preExamOTypes',
        component: pre_exam_o_type_component_1.PreExamOTypeComponent
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
                student_pre_exam_obligation_component_1.StudentPreExamObligationComponent,
                professor_pre_exam_obligation_component_1.ProfessorPreExamObligationComponent,
                professor_pre_exam_obligation_records_component_1.ProfessorPreExamObligationRecordsComponent,
                user_profile_component_1.UserProfileComponent,
                pagination_component_1.PaginationComponent,
                dialog_component_1.DialogComponent,
                pre_exam_o_type_component_1.PreExamOTypeComponent,
                edocuments_component_1.EdocumentsComponent,
                student_course_component_1.StudentCourseComponent,
                professor_course_component_1.ProfessorCourseComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                router_1.RouterModule.forRoot(routes), ng_bootstrap_1.NgbModule.forRoot()
            ],
            providers: [user_service_1.UserService, department_service_1.DepartmentService, authorization_service_1.AuthorizationService, token_interceptor_service_1.TokenInterceptorService, jwt_interceptor_service_1.JwtInterceptorService, pre_exam_obligation_records_service_1.PreExamObligationRecordsService, pre_exam_o_type_service_1.PreExamOTypeService, pre_exam_obligation_service_1.PreExamObligationervice, {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: token_interceptor_service_1.TokenInterceptorService,
                    multi: true
                }, {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: jwt_interceptor_service_1.JwtInterceptorService,
                    multi: true
                }, role_service_1.RoleService, user_profile_service_1.UserProfileService, auth_guard_guard_1.AuthGuard, edocument_service_1.EdocumentService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/auth-guard.guard.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var authorization_service_1 = __webpack_require__("../../../../../src/app/authorization/authorization.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [authorization_service_1.AuthorizationService,
            router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


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

module.exports = "<div class=\"row pt-5\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n        <div class=\"alert alert-danger alert-dismissible fade show\" *ngIf=\"wrongUsernameOrPass\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"wrongUsernameOrPass = false;\">&times;</button>\r\n            <strong>Login failed!</strong> Incorrect username and/or password.\r\n        </div>\r\n        <div class=\"card rounded-0\">\r\n            <div class=\"card-header\">\r\n                <h3 class=\"mb-0\">Login</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form class=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Username</label>\r\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"loginData.userName\" id=\"username\" name=\"username\" #username=\"ngModel\"\r\n                            name=\"username\" required>\r\n                        <span class=\"help-block\" *ngIf=\"username.touched && !username.valid\">\r\n                            <i>Username is required</i>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"loginData.userPassword\" #password=\"ngModel\" id=\"password\" name=\"password\"\r\n                            name=\"password\" required>\r\n                        <span class=\"help-block\" *ngIf=\"password.touched && !password.valid\">\r\n                            <i>Password is required</i>\r\n                        </span>\r\n                    </div>\r\n                    <button class=\"btn btn-primary float-right\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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
                // login successful
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

module.exports = "<p>\r\n  department works!\r\n</p>\r\n"

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

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\">\r\n    <ng-content></ng-content>\r\n    <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\">X</button>\r\n  </div>\r\n  <div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

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

/***/ "../../../../../src/app/edocuments/edocument.service.ts":
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
var EdocumentService = /** @class */ (function () {
    function EdocumentService() {
    }
    EdocumentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], EdocumentService);
    return EdocumentService;
}());
exports.EdocumentService = EdocumentService;


/***/ }),

/***/ "../../../../../src/app/edocuments/edocuments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edocuments/edocuments.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  edocuments works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/edocuments/edocuments.component.ts":
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
var EdocumentsComponent = /** @class */ (function () {
    function EdocumentsComponent() {
    }
    EdocumentsComponent.prototype.ngOnInit = function () {
    };
    EdocumentsComponent = __decorate([
        core_1.Component({
            selector: 'app-edocuments',
            template: __webpack_require__("../../../../../src/app/edocuments/edocuments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edocuments/edocuments.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EdocumentsComponent);
    return EdocumentsComponent;
}());
exports.EdocumentsComponent = EdocumentsComponent;


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

module.exports = "<ngb-pagination class=\"\"  (pageChange)=\"onSelect($event)\"\r\n    [(collectionSize)]=\"totalPages\" \r\n    [(page)]=\"page\" \r\n    [maxSize]=\"5\" \r\n    [rotate]=\"true\" \r\n    [ellipses]=\"false\" \r\n    [boundaryLinks]=\"true\">\r\n</ngb-pagination>"

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

/***/ "../../../../../src/app/pre-exam-o-type/pre-exam-o-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pre-exam-o-type/pre-exam-o-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\n    <table class=\"table table-hover\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th>Name</th>\n          <th>Edit/Remove</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let t of preExamOTypes\">\n          <td>{{t.name}}</td>\n          <td>\n            <button class=\"btn btn-success hand\" (click)=\"onEditType(t.preExamObligationTypeId)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button> ⧸ \n            <button class=\"btn btn-danger hand\" (click)=\"onRemove(t.preExamObligationTypeId)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <button class=\"btn btn-primary hand\" (click)=\"onAddType()\">New Type</button>\n  </div>\n<app-dialog [(visible)]=\"showDialog\">\n    <h4>Add type</h4>\n    <hr>\n    <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #f=\"ngForm\">\n  \n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"name\">Name</label>\n        <input id=\"name\" name=\"name\" type=\"text\" placeholder=\"name...\" class=\"form-control input-md\" [(ngModel)]=\"newType.name\" required\n          #name=\"ngModel\" maxlength=\"20\">\n        <span class=\"help-block\" *ngIf=\"name.touched && !name.valid\">\n          <i>name is required.</i>\n        </span>\n      </div>\n\n      <hr>\n      <div style=\"text-align: center\">\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Add</button>\n        <button type=\"button\" (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\n      </div>\n    </form>\n  \n</app-dialog>\n\n<app-dialog [(visible)]=\"showEditDialog\">\n  <h4>Edit type</h4>\n  <hr>\n  <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #fe=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label class=\"control-label\" for=\"name\">Name</label>\n      <input id=\"editName\" name=\"editName\" type=\"text\" [(value)]=\"newType.name\" placeholder=\"name...\" class=\"form-control input-md\" [(ngModel)]=\"newType.name\"  required\n        #editName=\"ngModel\" maxlength=\"20\" >\n      <span class=\"help-block\" *ngIf=\"editName.touched && !editName.valid\">\n        <i>name is required.</i>\n      </span>\n    </div>\n\n    <hr>\n    <div style=\"text-align: center\">\n      <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">Edit</button>\n      <button type=\"button\" (click)=\"showEditDialog = !showEditDialog\" class=\"btn\">Close</button>\n    </div>\n  </form>\n\n</app-dialog>\n\n<app-dialog [(visible)]=\"showRemoveDialog\">\n    <h4>Remove type</h4>\n    <hr>\n        <label class=\"control-label\" for=\"name\">Are u sure u want to remove this type</label>\n      <hr>\n      <div style=\"text-align: center\">\n        <button class=\"btn btn-danger\" (click)=\"onRemoveConfirmed()\">Remove</button>\n        <button type=\"button\" (click)=\"showRemoveDialog = !showRemoveDialog\" class=\"btn\">Close</button>\n      </div>\n   \n  \n  </app-dialog>"

/***/ }),

/***/ "../../../../../src/app/pre-exam-o-type/pre-exam-o-type.component.ts":
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
var pre_exam_o_type_service_1 = __webpack_require__("../../../../../src/app/pre-exam-o-type/pre-exam-o-type.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var PreExamOTypeComponent = /** @class */ (function () {
    function PreExamOTypeComponent(preExamOTypeService) {
        this.preExamOTypeService = preExamOTypeService;
        this.preExamOTypes = [];
        this.newType = {
            preExamObligationTypeId: 0,
            name: "",
            active: true
        };
        this.showDialog = false;
        this.showEditDialog = false;
        this.showRemoveDialog = false;
        this.actionForModal = "";
    }
    PreExamOTypeComponent.prototype.ngOnInit = function () {
        this.getPreExamOTypes();
    };
    PreExamOTypeComponent.prototype.onPopulateJsonType = function (name) {
        this.newType.name = name;
    };
    PreExamOTypeComponent.prototype.onGetById = function (id) {
        var _this = this;
        this.preExamOTypeService.getOne(id)
            .subscribe(function (response) { return (_this.onPopulateJsonType(response.body.name)); }, function (error) { return console.log(error); });
    };
    PreExamOTypeComponent.prototype.getPreExamOTypes = function () {
        var _this = this;
        this.preExamOTypeService.getAll().subscribe(function (response) { return (_this.preExamOTypes = response.body); }, function (error) { return console.log(error); });
    };
    PreExamOTypeComponent.prototype.onPostNewType = function () {
        var _this = this;
        this.preExamOTypeService.postNewType(this.newType).subscribe(function (response) { return [_this.preExamOTypes.push(response), _this.resetAddForm()]; }, function (error) { return console.log(error); });
    };
    PreExamOTypeComponent.prototype.onEditType = function (id) {
        this.resetEditForm();
        this.newType.preExamObligationTypeId = id;
        this.actionForModal = "edit";
        this.onGetById(this.newType.preExamObligationTypeId);
        this.showEditDialog = !this.showEditDialog;
    };
    PreExamOTypeComponent.prototype.onAddType = function () {
        this.resetAddForm();
        this.newType.preExamObligationTypeId = null;
        this.newType.active = true;
        this.showDialog = !this.showDialog;
        this.actionForModal = "add";
    };
    PreExamOTypeComponent.prototype.resetAddForm = function () {
        this.addTypeForm.resetForm();
    };
    PreExamOTypeComponent.prototype.resetEditForm = function () {
        this.editTypeForm.resetForm();
    };
    PreExamOTypeComponent.prototype.onPutType = function () {
        var _this = this;
        this.preExamOTypeService.changeType(this.newType).subscribe(function (response) { return [_this.getPreExamOTypes(), _this.resetEditForm()]; }, function (error) { return console.log(error); });
    };
    PreExamOTypeComponent.prototype.onRemove = function (id) {
        this.showRemoveDialog = !this.showRemoveDialog;
        this.newType.preExamObligationTypeId = id;
    };
    PreExamOTypeComponent.prototype.onRemoveConfirmed = function () {
        var _this = this;
        this.preExamOTypeService.changeActive(this.newType.preExamObligationTypeId).subscribe(function (response) { return [_this.getPreExamOTypes()]; }, function (error) { return console.log(error); });
        this.showRemoveDialog = !this.showRemoveDialog;
    };
    PreExamOTypeComponent.prototype.onSubmit = function () {
        if (this.actionForModal === 'edit') {
            this.onPutType();
            this.resetEditForm();
            this.showEditDialog = !this.showEditDialog;
        }
        if (this.actionForModal === 'add') {
            this.onPostNewType();
            this.resetAddForm();
            this.showDialog = !this.showDialog;
        }
    };
    __decorate([
        core_1.ViewChild('f'),
        __metadata("design:type", forms_1.NgForm)
    ], PreExamOTypeComponent.prototype, "addTypeForm", void 0);
    __decorate([
        core_1.ViewChild('fe'),
        __metadata("design:type", forms_1.NgForm)
    ], PreExamOTypeComponent.prototype, "editTypeForm", void 0);
    PreExamOTypeComponent = __decorate([
        core_1.Component({
            selector: 'app-pre-exam-o-type',
            template: __webpack_require__("../../../../../src/app/pre-exam-o-type/pre-exam-o-type.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pre-exam-o-type/pre-exam-o-type.component.css")]
        }),
        __metadata("design:paramtypes", [pre_exam_o_type_service_1.PreExamOTypeService])
    ], PreExamOTypeComponent);
    return PreExamOTypeComponent;
}());
exports.PreExamOTypeComponent = PreExamOTypeComponent;


/***/ }),

/***/ "../../../../../src/app/pre-exam-o-type/pre-exam-o-type.service.ts":
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
var PreExamOTypeService = /** @class */ (function () {
    function PreExamOTypeService(http) {
        this.http = http;
        this.path = "/api/pre-exam-obligation-types";
    }
    PreExamOTypeService.prototype.getAll = function () {
        return this.http.get(this.path, { observe: 'response' });
    };
    PreExamOTypeService.prototype.postNewType = function (newType) {
        return this.http.post(this.path, newType);
    };
    PreExamOTypeService.prototype.getOne = function (id) {
        return this.http.get(this.path + "/" + id, { observe: 'response' });
    };
    PreExamOTypeService.prototype.changeType = function (type) {
        return this.http.put(this.path, type);
    };
    PreExamOTypeService.prototype.changeActive = function (id) {
        return this.http.put(this.path + "/" + id, null, { responseType: 'text' });
    };
    PreExamOTypeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PreExamOTypeService);
    return PreExamOTypeService;
}());
exports.PreExamOTypeService = PreExamOTypeService;


/***/ }),

/***/ "../../../../../src/app/professor-course/professor-course.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/professor-course/professor-course.component.html":
/***/ (function(module, exports) {

module.exports = "<app-professor-pre-exam-obligation [(userId)]=\"userId\" [(courseId)]=\"courseId\"></app-professor-pre-exam-obligation>\r\n"

/***/ }),

/***/ "../../../../../src/app/professor-course/professor-course.component.ts":
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
var ProfessorCourseComponent = /** @class */ (function () {
    function ProfessorCourseComponent() {
    }
    ProfessorCourseComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ProfessorCourseComponent.prototype, "userId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ProfessorCourseComponent.prototype, "courseId", void 0);
    ProfessorCourseComponent = __decorate([
        core_1.Component({
            selector: 'app-professor-course',
            template: __webpack_require__("../../../../../src/app/professor-course/professor-course.component.html"),
            styles: [__webpack_require__("../../../../../src/app/professor-course/professor-course.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfessorCourseComponent);
    return ProfessorCourseComponent;
}());
exports.ProfessorCourseComponent = ProfessorCourseComponent;


/***/ }),

/***/ "../../../../../src/app/professor-pre-exam-obligation-records/professor-pre-exam-obligation-records.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/professor-pre-exam-obligation-records/professor-pre-exam-obligation-records.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  professor-pre-exam-obligation-records works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/professor-pre-exam-obligation-records/professor-pre-exam-obligation-records.component.ts":
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
var ProfessorPreExamObligationRecordsComponent = /** @class */ (function () {
    function ProfessorPreExamObligationRecordsComponent() {
    }
    ProfessorPreExamObligationRecordsComponent.prototype.ngOnInit = function () {
    };
    ProfessorPreExamObligationRecordsComponent = __decorate([
        core_1.Component({
            selector: 'app-professor-pre-exam-obligation-records',
            template: __webpack_require__("../../../../../src/app/professor-pre-exam-obligation-records/professor-pre-exam-obligation-records.component.html"),
            styles: [__webpack_require__("../../../../../src/app/professor-pre-exam-obligation-records/professor-pre-exam-obligation-records.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfessorPreExamObligationRecordsComponent);
    return ProfessorPreExamObligationRecordsComponent;
}());
exports.ProfessorPreExamObligationRecordsComponent = ProfessorPreExamObligationRecordsComponent;


/***/ }),

/***/ "../../../../../src/app/professor-pre-exam-obligation/pre-exam-obligation.service.ts":
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
var PreExamObligationervice = /** @class */ (function () {
    function PreExamObligationervice(http) {
        this.http = http;
        this.path = "/api/pre-exam-obligations";
    }
    PreExamObligationervice.prototype.getAll = function () {
        return this.http.get(this.path, { observe: 'response' });
    };
    PreExamObligationervice.prototype.postNewObligation = function (newType) {
        return this.http.post(this.path, newType);
    };
    PreExamObligationervice.prototype.getOne = function (id) {
        return this.http.get(this.path + "/" + id, { observe: 'response' });
    };
    PreExamObligationervice.prototype.changeObligation = function (type) {
        return this.http.put(this.path, type);
    };
    PreExamObligationervice.prototype.changeActive = function (id) {
        return this.http.put(this.path + "/" + id, null, { responseType: 'text' });
    };
    PreExamObligationervice.prototype.getAllByCourse = function (cId) {
        return this.http.get(this.path + "/" + "course" + "/" + cId, { observe: 'response' });
    };
    PreExamObligationervice = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PreExamObligationervice);
    return PreExamObligationervice;
}());
exports.PreExamObligationervice = PreExamObligationervice;


/***/ }),

/***/ "../../../../../src/app/professor-pre-exam-obligation/professor-pre-exam-obligation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/professor-pre-exam-obligation/professor-pre-exam-obligation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\n    <table class=\"table table-hover\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Max points</th>\n          <th>Set date/Grade</th>\n          <th>Edit/Remove</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let p of preExamObligations\">\n          <td>{{p.name}}</td>\n          <td>{{p.preExamOTypeName}}</td>\n          <td>{{p.maxPoints}}</td>\n          <td>\n            <button class=\"btn btn-info hand\" (click)=\"onSetDate(p.preExamOId)\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></button> ⧸ \n            <button class=\"btn btn-warning hand\" (click)=\"onGrade(p.preExamOId)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n          </td>\n          <td>\n            <button class=\"btn btn-success hand\" (click)=\"onEditPEO(p.preExamOId)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button> ⧸ \n            <button class=\"btn btn-danger hand\" (click)=\"onRemove(p.preExamOId)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <button class=\"btn btn-primary hand\" (click)=\"onAddObligation()\">New Pre exam obligation</button>\n   \n  </div>\n\n \n<app-dialog [(visible)]=\"showDialog\">\n    <h4>Add Pre exam obligation</h4>\n    <hr>\n    <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #f=\"ngForm\">\n  \n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"name\">Name</label>\n        <input id=\"name\" name=\"name\" type=\"text\" placeholder=\"name...\" class=\"form-control input-md\" [(ngModel)]=\"newPreExamObligation.name\" required\n          #name=\"ngModel\" maxlength=\"20\">\n        <span class=\"help-block\" *ngIf=\"name.touched && !name.valid\">\n          <i>name is required.</i>\n        </span>\n      </div>\n      <div class=\"form-group\">\n          <label class=\"control-label\" for=\"maxPoints\">Max points</label>\n          <input id=\"maxPoints\" name=\"maxPoints\" type=\"number\" [(value)]=\"newPreExamObligation.maxPoints\" placeholder=\"maxPoints...\" class=\"form-control input-md\" [(ngModel)]=\"newPreExamObligation.maxPoints\"  required\n            #maxPoints=\"ngModel\" >\n          <span class=\"help-block\" *ngIf=\"maxPoints.touched && !maxPoints.valid\">\n            <i>maxPoints is required and must be a number.</i>\n          </span>\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"typesSelect\" class=\"control-label\">Select type</label>\n          <select name=\"typesSelect\" [(ngModel)]=\"newPreExamObligation.preExamOTypeId\" id=\"typesSelect\" required class=\"form-control input-md\">\n            <option *ngFor=\"let t of types\" value=\"{{t.preExamObligationTypeId}}\">{{t.name}}</option>\n          </select>\n      </div>\n\n      <hr>\n      <div style=\"text-align: center\">\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Add</button>\n        <button type=\"button\" (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\n      </div>\n    </form>\n  \n</app-dialog>\n\n<app-dialog [(visible)]=\"showEditDialog\">\n  <h4>Edit Pre exam obligation</h4>\n  <hr>\n  <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #fe=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label class=\"control-label\" for=\"name\">Name</label>\n      <input id=\"editName\" name=\"editName\" type=\"text\" [(value)]=\"newPreExamObligation.name\" placeholder=\"name...\" class=\"form-control input-md\" [(ngModel)]=\"newPreExamObligation.name\"  required\n        #editName=\"ngModel\" maxlength=\"20\" >\n      <span class=\"help-block\" *ngIf=\"editName.touched && !editName.valid\">\n        <i>name is required.</i>\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"maxPoints\">Max points</label>\n        <input id=\"editMaxPoints\" name=\"editMaxPoints\" type=\"number\" [(value)]=\"newPreExamObligation.maxPoints\" placeholder=\"maxPoints...\" class=\"form-control input-md\" [(ngModel)]=\"newPreExamObligation.maxPoints\"  required\n          #editMaxPoints=\"ngModel\" >\n        <span class=\"help-block\" *ngIf=\"editMaxPoints.touched && !editMaxPoints.valid\">\n          <i>maxPoints is required and must be a number.</i>\n        </span>\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"typesSelect\" class=\"control-label\">Select type</label>\n          <select name=\"editTypesSelect\" [(ngModel)]=\"newPreExamObligation.preExamOTypeId\" id=\"editTypesSelect\" required class=\"form-control input-md\">\n            <option *ngFor=\"let t of types\" value=\"{{t.preExamObligationTypeId}}\">{{t.name}}</option>\n          </select>\n      </div>\n\n    <hr>\n    <div style=\"text-align: center\">\n      <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!fe.valid\">Edit</button>\n      <button type=\"button\" (click)=\"showEditDialog = !showEditDialog\" class=\"btn\">Close</button>\n    </div>\n  </form>\n\n</app-dialog>\n\n<app-dialog [(visible)]=\"showRemoveDialog\">\n    <h4>Remove Pre exam obligation</h4>\n    <hr>\n        <label class=\"control-label\" for=\"name\">Are u sure u want to remove this type</label>\n      <hr>\n      <div style=\"text-align: center\">\n        <button class=\"btn btn-danger\" (click)=\"onRemoveConfirmed()\">Remove</button>\n        <button type=\"button\" (click)=\"showRemoveDialog = !showRemoveDialog\" class=\"btn\">Close</button>\n      </div>\n   \n  \n  </app-dialog>\n\n  <app-dialog [(visible)]=\"showSetDateDialog\">\n      <h4>Set Pre exam obligation date</h4>\n      <hr>\n      <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #fs=\"ngForm\">\n  \n        <div class=\"form-group\">\n              <label class=\"control-label\" for=\"obligationDate\">Set date</label>\n          <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"obligationDate\" [(ngModel)]=\"model\" ngbDatepicker required #d=\"ngbDatepicker\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                <img src=\"assets/img/calendar-icon.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\n              </button>\n            </div>\n          </div>\n        </div>\n    \n        <hr>\n        <div style=\"text-align: center\">\n          <button class=\"btn btn-info\" type=\"submit\" [disabled]=\"!fs.valid\">Set date</button>\n          <button type=\"button\" (click)=\"showSetDateDialog = !showSetDateDialog\" class=\"btn\">Close</button>\n        </div>\n      </form>\n    \n    </app-dialog>\n\n    <app-dialog [(visible)]=\"showGradeDialog\" class=\"\">\n      <h4>Grade pre exam obligations</h4>\n      <hr>\n      <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #fg=\"ngForm\">\n    \n        <table class=\"table table-hover\"  style=\"width: 700px;\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th>Student name</th>\n              <th>Tr number</th>\n              <th>Date</th>\n              <th>Points</th>\n              <th>Passed</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let r of preExamObligationsRecords\">\n              <td>{{r.studentName}} {{r.studentLastName}}</td>\n              <td>{{r.trNumber}}</td>\n              <td>{{r.date}}</td>\n              <td>\n                <input id=\"gradePoints\" name=\"gradePoints\" type=\"number\" [(value)]=\"r.points\" placeholder=\"Points\" class=\"form-control input-md\" [(ngModel)]=\"preExamObligationsRecords.points\" \n                  #gradePoints=\"ngModel\" style=\"width: 100px;\" >\n              </td>\n              <td>\n                <input id=\"gradePoints\" name=\"gradePoints\" type=\"checkbox\" [(value)]=\"r.passed\" class=\"form-control input-md\" [(ngModel)]=\"preExamObligationsRecords.passed\" \n                  #gradePoints=\"ngModel\" style=\"width: 20px;\" >\n              </td>\n              <!-- <td>{{r.points}}</td> \n              <td>{{r.passed}}</td> -->\n            </tr>\n          </tbody>\n        </table>\n\n        <hr>\n        <div style=\"text-align: center\">\n          <button class=\"btn btn-warning\" type=\"submit\">Grade</button>\n          <button type=\"button\" (click)=\"showGradeDialog = !showGradeDialog\" class=\"btn\">Close</button>\n        </div>\n      </form>\n    \n    </app-dialog>\n"

/***/ }),

/***/ "../../../../../src/app/professor-pre-exam-obligation/professor-pre-exam-obligation.component.ts":
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
var pre_exam_obligation_service_1 = __webpack_require__("../../../../../src/app/professor-pre-exam-obligation/pre-exam-obligation.service.ts");
var pre_exam_o_type_service_1 = __webpack_require__("../../../../../src/app/pre-exam-o-type/pre-exam-o-type.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var pre_exam_obligation_records_service_1 = __webpack_require__("../../../../../src/app/student-pre-exam-obligation/pre-exam-obligation-records.service.ts");
var ProfessorPreExamObligationComponent = /** @class */ (function () {
    function ProfessorPreExamObligationComponent(preExamObligationService, typeService, recordsServoce) {
        this.preExamObligationService = preExamObligationService;
        this.typeService = typeService;
        this.recordsServoce = recordsServoce;
        this.preExamObligations = [];
        this.preExamObligationsRecords = [];
        this.types = [];
        this.newPreExamObligation = {
            preExamOId: 0,
            name: "",
            active: true,
            preExamOTypeId: 0,
            maxPoints: 0,
            courseId: 0
        };
        this.showDialog = false;
        this.showEditDialog = false;
        this.showRemoveDialog = false;
        this.showSetDateDialog = false;
        this.showGradeDialog = false;
        this.actionForModal = "";
    }
    ProfessorPreExamObligationComponent.prototype.ngOnInit = function () {
        this.newPreExamObligation.courseId = this.courseId;
        this.getPreExamObligationByCourseId(this.courseId);
    };
    ProfessorPreExamObligationComponent.prototype.getPreExamObligationByCourseId = function (id) {
        var _this = this;
        this.preExamObligationService.getAllByCourse(id).subscribe(function (response) { return (_this.preExamObligations = response.body); }, function (error) { return console.log(error); });
    };
    ProfessorPreExamObligationComponent.prototype.getobligationsRecords = function (id) {
        var _this = this;
        this.recordsServoce.getAllByPreExamObligation(id).subscribe(function (response) { return (_this.preExamObligationsRecords = response.body); }, function (error) { return console.log(error); });
    };
    ProfessorPreExamObligationComponent.prototype.getTypes = function () {
        var _this = this;
        this.typeService.getAll().subscribe(function (response) { return (_this.types = response.body); }, function (error) { return console.log(error); });
    };
    ProfessorPreExamObligationComponent.prototype.onRemove = function (id) {
        this.showRemoveDialog = !this.showRemoveDialog;
        this.newPreExamObligation.preExamOId = id;
    };
    ProfessorPreExamObligationComponent.prototype.onRemoveConfirmed = function () {
        var _this = this;
        this.preExamObligationService.changeActive(this.newPreExamObligation.preExamOId).subscribe(function (response) { return [_this.getPreExamObligationByCourseId(_this.courseId)]; }, function (error) { return console.log(error); });
        this.showRemoveDialog = !this.showRemoveDialog;
    };
    ProfessorPreExamObligationComponent.prototype.onGetById = function (id) {
        var _this = this;
        this.preExamObligationService.getOne(id)
            .subscribe(function (response) { return (_this.onPopulateJsonType(response.body.name, response.body.maxPoints, response.body.preExamOTypeId)); }, function (error) { return console.log(error); });
    };
    ProfessorPreExamObligationComponent.prototype.onPopulateJsonType = function (name, maxPoints, preExamOTypeId) {
        this.newPreExamObligation.name = name;
        this.newPreExamObligation.preExamOTypeId = preExamOTypeId;
        this.newPreExamObligation.maxPoints = maxPoints;
    };
    ProfessorPreExamObligationComponent.prototype.onEditPEO = function (id) {
        this.resetEditForm();
        this.getTypes();
        this.newPreExamObligation.preExamOId = id;
        this.actionForModal = "edit";
        this.onGetById(this.newPreExamObligation.preExamOId);
        this.showEditDialog = !this.showEditDialog;
    };
    ProfessorPreExamObligationComponent.prototype.onAddObligation = function () {
        this.resetAddForm();
        this.getTypes();
        this.newPreExamObligation.preExamOId = null;
        this.newPreExamObligation.active = true;
        this.actionForModal = "add";
        this.showDialog = !this.showDialog;
    };
    ProfessorPreExamObligationComponent.prototype.onGrade = function (id) {
        this.resetGradeObligationForm();
        this.getobligationsRecords(id);
        this.newPreExamObligation.preExamOId = id;
        this.actionForModal = "grade";
        this.showGradeDialog = !this.showGradeDialog;
    };
    ProfessorPreExamObligationComponent.prototype.onPostGrade = function () {
        //this.preExamObligations.
    };
    ProfessorPreExamObligationComponent.prototype.onSetDate = function (id) {
        this.resetSetObligationDateForm();
        this.newPreExamObligation.preExamOId = id;
        this.actionForModal = "setDate";
        this.showSetDateDialog = !this.showSetDateDialog;
    };
    ProfessorPreExamObligationComponent.prototype.onPutObligation = function () {
        var _this = this;
        this.preExamObligationService.changeObligation(this.newPreExamObligation).subscribe(function (response) { return [_this.getPreExamObligationByCourseId(_this.courseId), _this.resetEditForm()]; }, function (error) { return console.log(error); });
    };
    ProfessorPreExamObligationComponent.prototype.onPostNewType = function () {
        var _this = this;
        this.preExamObligationService.postNewObligation(this.newPreExamObligation).subscribe(function (response) { return [_this.preExamObligations.push(response), _this.resetAddForm()]; }, function (error) { return console.log(error); });
    };
    ProfessorPreExamObligationComponent.prototype.onSetNewDate = function () {
        console.log("aa");
        console.log(this.model.day);
        this.recordsServoce.setObligationDate(this.newPreExamObligation.preExamOId, this.model.year, this.model.month, this.model.day).subscribe(function (error) { return console.log(error); });
    };
    ProfessorPreExamObligationComponent.prototype.onSubmit = function () {
        if (this.actionForModal === 'edit') {
            this.onPutObligation();
            this.resetEditForm();
            this.showEditDialog = !this.showEditDialog;
        }
        if (this.actionForModal === 'add') {
            this.onPostNewType();
            this.resetAddForm();
            this.showDialog = !this.showDialog;
        }
        if (this.actionForModal === 'setDate') {
            this.onSetNewDate();
            this.resetSetObligationDateForm();
            this.showSetDateDialog = !this.showSetDateDialog;
        }
        if (this.actionForModal === 'grade') {
            this.onSetNewDate();
            this.resetGradeObligationForm();
            this.showGradeDialog = !this.showSetDateDialog;
        }
    };
    ProfessorPreExamObligationComponent.prototype.resetAddForm = function () {
        this.addObligationForm.resetForm();
    };
    ProfessorPreExamObligationComponent.prototype.resetEditForm = function () {
        this.editObligationForm.resetForm();
    };
    ProfessorPreExamObligationComponent.prototype.resetSetObligationDateForm = function () {
        this.setObligationDateForm.resetForm();
    };
    ProfessorPreExamObligationComponent.prototype.resetGradeObligationForm = function () {
        this.gradeObligationForm.resetForm();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ProfessorPreExamObligationComponent.prototype, "userId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ProfessorPreExamObligationComponent.prototype, "courseId", void 0);
    __decorate([
        core_1.ViewChild('f'),
        __metadata("design:type", forms_1.NgForm)
    ], ProfessorPreExamObligationComponent.prototype, "addObligationForm", void 0);
    __decorate([
        core_1.ViewChild('fe'),
        __metadata("design:type", forms_1.NgForm)
    ], ProfessorPreExamObligationComponent.prototype, "editObligationForm", void 0);
    __decorate([
        core_1.ViewChild('fs'),
        __metadata("design:type", forms_1.NgForm)
    ], ProfessorPreExamObligationComponent.prototype, "setObligationDateForm", void 0);
    __decorate([
        core_1.ViewChild('fg'),
        __metadata("design:type", forms_1.NgForm)
    ], ProfessorPreExamObligationComponent.prototype, "gradeObligationForm", void 0);
    ProfessorPreExamObligationComponent = __decorate([
        core_1.Component({
            selector: 'app-professor-pre-exam-obligation',
            template: __webpack_require__("../../../../../src/app/professor-pre-exam-obligation/professor-pre-exam-obligation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/professor-pre-exam-obligation/professor-pre-exam-obligation.component.css")]
        }),
        __metadata("design:paramtypes", [pre_exam_obligation_service_1.PreExamObligationervice,
            pre_exam_o_type_service_1.PreExamOTypeService,
            pre_exam_obligation_records_service_1.PreExamObligationRecordsService])
    ], ProfessorPreExamObligationComponent);
    return ProfessorPreExamObligationComponent;
}());
exports.ProfessorPreExamObligationComponent = ProfessorPreExamObligationComponent;


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

/***/ "../../../../../src/app/student-course/student-course.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-course/student-course.component.html":
/***/ (function(module, exports) {

module.exports = "<app-student-pre-exam-obligation [(userId)]=\"userId\" [(courseId)]=\"courseId\"></app-student-pre-exam-obligation>\r\n"

/***/ }),

/***/ "../../../../../src/app/student-course/student-course.component.ts":
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
var StudentCourseComponent = /** @class */ (function () {
    function StudentCourseComponent() {
    }
    StudentCourseComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], StudentCourseComponent.prototype, "userId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], StudentCourseComponent.prototype, "courseId", void 0);
    StudentCourseComponent = __decorate([
        core_1.Component({
            selector: 'app-student-course',
            template: __webpack_require__("../../../../../src/app/student-course/student-course.component.html"),
            styles: [__webpack_require__("../../../../../src/app/student-course/student-course.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentCourseComponent);
    return StudentCourseComponent;
}());
exports.StudentCourseComponent = StudentCourseComponent;


/***/ }),

/***/ "../../../../../src/app/student-pre-exam-obligation/pre-exam-obligation-records.service.ts":
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
var PreExamObligationRecordsService = /** @class */ (function () {
    function PreExamObligationRecordsService(http) {
        this.http = http;
        this.path = "/api/pre-exam-obligation-records";
    }
    PreExamObligationRecordsService.prototype.getAll = function (page, size, sortParam, sortDirection, term) {
        return this.http.get(this.path + "?term=" + term + "&page=" + page + "&size=" + size + "&sort=" + sortParam + "," + sortDirection, { observe: 'response' });
    };
    PreExamObligationRecordsService.prototype.getAllByStudentAndCourse = function (sId, cId) {
        return this.http.get(this.path + "/student" + "/" + sId + "/" + "course" + "/" + cId, { observe: 'response' });
    };
    PreExamObligationRecordsService.prototype.getAllByPreExamObligation = function (id) {
        return this.http.get(this.path + "/preexamobligation" + "/" + id, { observe: 'response' });
    };
    PreExamObligationRecordsService.prototype.setObligationDate = function (id, year, month, day) {
        return this.http.post(this.path + "/create-records" + "/" + id + "/" + year + "/" + month + "/" + day, null);
    };
    PreExamObligationRecordsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PreExamObligationRecordsService);
    return PreExamObligationRecordsService;
}());
exports.PreExamObligationRecordsService = PreExamObligationRecordsService;


/***/ }),

/***/ "../../../../../src/app/student-pre-exam-obligation/student-pre-exam-obligation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-pre-exam-obligation/student-pre-exam-obligation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\n    <table class=\"table table-hover\">\n      <thead class=\"thead-light\">\n          <tr>\n              <th>Pre exam obligation name</th>\n              <th>Date</th>\n              <th>Points</th>\n              <th>Passed</th>\n          </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let p of preExamORecs\">\n            <td>{{p.preExamOName}}</td>\n            <td>{{p.date}}</td>\n            <td>{{p.points}} / {{p.maxPoints}}</td>\n            <td>{{p.passed == true ? \"✔\" : \"❌\"}}</td>\n        </tr>\n        <tr>\n            <td></td>\n            <td></td>\n            <th>Total: {{total}} / {{totalMax}} </th>  \n            <td></td> \n        </tr>\n      </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/student-pre-exam-obligation/student-pre-exam-obligation.component.ts":
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
var pre_exam_obligation_records_service_1 = __webpack_require__("../../../../../src/app/student-pre-exam-obligation/pre-exam-obligation-records.service.ts");
var StudentPreExamObligationComponent = /** @class */ (function () {
    function StudentPreExamObligationComponent(preExamObligationRecordsService) {
        this.preExamObligationRecordsService = preExamObligationRecordsService;
        this.total = 0;
        this.totalMax = 0;
        this.preExamORecs = [];
    }
    StudentPreExamObligationComponent.prototype.ngOnInit = function () {
        this.getPreExamORecByUserIdAndCourseId(this.userId, this.courseId);
    };
    StudentPreExamObligationComponent.prototype.getPreExamORecByUserIdAndCourseId = function (userId, courseId) {
        var _this = this;
        this.preExamObligationRecordsService.getAllByStudentAndCourse(this.userId, this.courseId).subscribe(function (response) { return (_this.preExamORecs = response.body, _this.onCalculateMax()); }, function (error) { return console.log(error); });
    };
    StudentPreExamObligationComponent.prototype.onCalculateMax = function () {
        var _this = this;
        this.preExamORecs.forEach(function (element) {
            _this.total += element.points;
            _this.totalMax += element.maxPoints;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], StudentPreExamObligationComponent.prototype, "userId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], StudentPreExamObligationComponent.prototype, "courseId", void 0);
    StudentPreExamObligationComponent = __decorate([
        core_1.Component({
            selector: 'app-student-pre-exam-obligation',
            template: __webpack_require__("../../../../../src/app/student-pre-exam-obligation/student-pre-exam-obligation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/student-pre-exam-obligation/student-pre-exam-obligation.component.css")]
        }),
        __metadata("design:paramtypes", [pre_exam_obligation_records_service_1.PreExamObligationRecordsService])
    ], StudentPreExamObligationComponent);
    return StudentPreExamObligationComponent;
}());
exports.StudentPreExamObligationComponent = StudentPreExamObligationComponent;


/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hand {\r\n    cursor: pointer;\r\n}\r\n\r\ninput.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n\r\ninput.not-unique {\r\n    border: 1px solid red;\r\n}\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\r\n    <div class=\"row my-2\">\r\n        <div class=\"col-lg-8 order-lg-2\">\r\n            <ul class=\"nav nav-tabs\">\r\n                <li class=\"nav-item\">\r\n                    <a href=\"\" data-target=\"#profile\" data-toggle=\"tab\" class=\"nav-link active\">Profile</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a href=\"\" data-target=\"#edit\" data-toggle=\"tab\" class=\"nav-link\">Edit</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a href=\"\" data-target=\"#psw\" data-toggle=\"tab\" class=\"nav-link\">Change password</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"tab-content py-4\">\r\n                <div class=\"tab-pane active\" id=\"profile\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8\">\r\n                            <h5>\r\n                                Name: {{user.firstName}} {{user.lastName}} \r\n                            </h5>\r\n                            <h5>\r\n                                Username: {{user.username}}\r\n                            </h5>                        \r\n                            <p>\r\n                                Date of birth: {{dateOfBirth}} Phone number: {{user.phoneNumber}}\r\n                            </p>\r\n                            <p>\r\n                                Roles: {{user.roleName}}\r\n                            </p>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <!--/row-->\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"psw\">\r\n                    <div class=\"alert alert-info alert-dismissible fade show\" *ngIf=\"showMessage\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"showMessage = false;\">&times;</button>\r\n                        {{ messagge }}\r\n                    </div>\r\n                    <form role=\"form\" #fPsw=\"ngForm\" (ngSubmit)=\"changePassword()\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Old password</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input class=\"form-control\" type=\"password\" id=\"oldPassword\" name=\"oldPassword\" required #oldPassword=\"ngModel\" [(ngModel)]=\"oldPass\">\r\n                                <span class=\"help-block\" *ngIf=\"oldPassword.touched && !oldPassword.valid\">\r\n                                    <i>This field is required.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">New password</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input class=\"form-control\" (keyup)=\"checkPasswords()\" type=\"password\" id=\"newPassword\" name=\"newPassword\" required #newPassword=\"ngModel\"\r\n                                    [(ngModel)]=\"newPass\">\r\n                                <span class=\"help-block\" *ngIf=\"newPassword.touched && !newPassword.valid\">\r\n                                    <i>This field is required.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Repeat password</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input class=\"form-control\" type=\"password\" required #repeatedPassword=\"ngModel\" id=\"repeatedPassword\" name=\"repeatedPassword\"\r\n                                    [(ngModel)]=\"repeatedPass\" (keyup)=\"checkPasswords()\">\r\n                                <span class=\"help-block\" *ngIf=\"repeatedPassword.touched && !repeatedPassword.valid\">\r\n                                    <i>This field is required.</i>\r\n                                </span>\r\n                                <span class=\"help-block\" *ngIf=\"!matchingPasswords\">\r\n                                    <i>Passwords are not the same.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\"></label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"reset\" class=\"btn btn-secondary\" value=\"Cancel\">\r\n                                <input type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!fPsw.valid || !matchingPasswords\" value=\"Save Changes\">\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"edit\">\r\n                    <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"userEdit()\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">First name</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input class=\"form-control\" type=\"text\" [(value)]=\"user.firstName\" id=\"firstName\" name=\"firstName\" required #firstName=\"ngModel\"\r\n                                    maxlength=\"20\" [(ngModel)]=\"user.firstName\">\r\n                                <span class=\"help-block\" *ngIf=\"firstName.touched && !firstName.valid\">\r\n                                    <i>First name is required.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Last name</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input class=\"form-control\" type=\"text\" [(value)]=\"user.lastName\" id=\"lastName\" name=\"lastName\" required #lastName=\"ngModel\"\r\n                                    maxlength=\"20\" [(ngModel)]=\"user.lastName\">\r\n                                <span class=\"help-block\" *ngIf=\"lastName.touched && !lastName.valid\">\r\n                                    <i>Last name is required.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Username</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input class=\"form-control\" type=\"text\" [(value)]=\"user.username\" required #username=\"ngModel\" id=\"username\" name=\"username\"\r\n                                    [(ngModel)]=\"user.username\" maxlength=\"20\" (keyup)=\"isUsernameUnique()\" [ngClass]=\"{'not-unique':!isUnique}\">\r\n                                <span class=\"help-block\" *ngIf=\"username.touched && !username.valid\">\r\n                                    <i>Username is required.</i>\r\n                                </span>\r\n                                <span class=\"help-block\" *ngIf=\"username.touched && !isUnique\">\r\n                                    <i>This username is taken.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Phone number</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input id=\"phoneNumber\" name=\"phoneNumber\" #phoneNumber=\"ngModel\" [(ngModel)]=\"user.phoneNumber\" maxlength=\"20\" class=\"form-control\"\r\n                                    type=\"text\" [(value)]=\"user.phoneNumber\">\r\n                                <span class=\"help-block\" *ngIf=\"phoneNumber.touched && !phoneNumber.valid\">\r\n                                    <i>Can't contain more than 20 characters.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Address</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input id=\"address\" name=\"address\" class=\"form-control\" type=\"text\" [(value)]=\"user.address\" maxlength=\"30\" [(ngModel)]=\"user.address\"\r\n                                    #address=\"ngModel\">\r\n                                <span class=\"help-block\" *ngIf=\"address.touched && !address.valid\">\r\n                                    <i>Can't contain more than 30 characters.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Date od birth</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\r\n                                            <img src=\"assets/img/calendar-icon.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Roles\r\n                                <br>\r\n                                <small>\r\n                                    <i>({{user.roleName}})</i>\r\n                                </small>\r\n                            </label>\r\n                            <div class=\"col-lg-9\">\r\n                                <select name=\"rolesSelect\" [(ngModel)]=\"user.roleId\" multiple class=\"form-control\" id=\"rolesSelect\" required>\r\n                                    <option class=\"selected\" *ngFor=\"let r of roles\" value=\"{{r.roleId}}\">{{r.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\"></label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"reset\" class=\"btn btn-secondary\" value=\"Cancel\">\r\n                                <input type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid || !isUnique\" value=\"Save Changes\">\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 order-lg-1 text-center\">\r\n            <img src=\"assets/img/{{user.imagePath}}\" class=\"mx-auto img-fluid img-circle d-block\" alt=\"avatar\">\r\n            <h6 class=\"mt-2\">Upload a different photo</h6>\r\n            <label class=\"btn btn-success cursor-pointer\" style=\"width:75px;\">\r\n                Browse <input type=\"file\" id=\"file\" class=\"custom-file-input cursor-pointer\" (change)=\"fileChange($event)\">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <app-student-pre-exam-obligation [(userId)]=\"userId\" [(courseId)]=\"courseId\"></app-student-pre-exam-obligation>\r\n    <app-professor-pre-exam-obligation [(userId)]=\"userId\" [(courseId)]=\"courseId\"></app-professor-pre-exam-obligation>\r\n</div>"

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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var user_profile_service_1 = __webpack_require__("../../../../../src/app/user-profile/user-profile.service.ts");
var role_service_1 = __webpack_require__("../../../../../src/app/shared/role.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(route, userService, userProfileService, roleService) {
        this.route = route;
        this.userService = userService;
        this.userProfileService = userProfileService;
        this.roleService = roleService;
        this.user = {
            "imagePath": ""
        };
        this.roles = [];
        this.model = {};
        this.isUnique = true;
        this.matchingPasswords = true;
        this.showAlert = false;
        this.showMessage = false;
        this.isSuccessfull = false;
        this.userId = 1;
        this.courseId = 1;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRoles();
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.userService.getUserById(_this.id).subscribe(function (response) { return [_this.user = response,
                _this.usernameForCheck = response.username,
                _this.dateOfBirth = response.dateOfBirth,
                _this.user.dateOfBirth = _this.transformFormattedDate(response.dateOfBirth)]; }, function (error) { return console.log(error); });
        });
    };
    UserProfileComponent.prototype.isUsernameUnique = function () {
        var _this = this;
        if (this.user.username.length > 0) {
            this.userService.isUsernameUnique(this.user.username, 'edit', this.usernameForCheck).subscribe(function (response) { return _this.isUnique = response; }, function (error) { return console.log(error); });
        }
    };
    UserProfileComponent.prototype.userEdit = function () {
        var _this = this;
        this.temp1 = this.model.month;
        this.temp2 = this.model.day;
        if (this.model.month <= 9) {
            this.temp1 = "0" + this.model.month;
        }
        if (this.model.day <= 9) {
            this.temp2 = "0" + this.model.day;
        }
        this.user.dateOfBirth = this.model.year + "-" + this.temp1 + "-" + this.temp2;
        this.userProfileService.putUser(this.id, this.user).subscribe(function (response) { return [_this.user = response, _this.dateOfBirth = response.dateOfBirth]; }, function (error) { return console.log(error); });
    };
    UserProfileComponent.prototype.fileChange = function (event) {
        var _this = this;
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.file = files[0];
        this.userProfileService.uploadImage(this.file).subscribe(function (response) { return _this.user.imagePath = response; }, function (error) { return console.log(error); });
        console.log(this.user);
    };
    UserProfileComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getAllRoles().subscribe(function (response) { return _this.roles = response; }, function (error) { return console.log(error); });
    };
    UserProfileComponent.prototype.transformFormattedDate = function (date) {
        var dateSpilt = date.split('-');
        this.model = { year: +(dateSpilt[0]), month: +(dateSpilt[1]), day: +(dateSpilt[2]) };
    };
    UserProfileComponent.prototype.checkPasswords = function () {
        if (this.newPass == this.repeatedPass) {
            this.matchingPasswords = true;
        }
        else {
            this.matchingPasswords = false;
        }
    };
    UserProfileComponent.prototype.changePassword = function () {
        var _this = this;
        this.userProfileService.editPassword(this.oldPass, this.newPass, this.repeatedPass, this.id)
            .subscribe(function (response) { _this.messagge = response, _this.showAlert = !_this.showAlert, _this.passEditForm.resetForm(), _this.showMessage = true; }, function (error) { return console.log(error); });
    };
    UserProfileComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        core_1.ViewChild("fPsw"),
        __metadata("design:type", forms_1.NgForm)
    ], UserProfileComponent.prototype, "passEditForm", void 0);
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            user_service_1.UserService,
            user_profile_service_1.UserProfileService,
            role_service_1.RoleService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;


/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.service.ts":
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
var UserProfileService = /** @class */ (function () {
    function UserProfileService(http) {
        this.http = http;
        this.path = "/api/users";
        this.headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
    }
    UserProfileService.prototype.uploadImage = function (file) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(this.path + "/upload", formData, { responseType: 'text' });
    };
    UserProfileService.prototype.putUser = function (id, user) {
        return this.http.put(this.path + "/edit/" + id, user);
    };
    UserProfileService.prototype.editPassword = function (oldPassword, newPassword, confirmedPassword, id) {
        return this.http.put(this.path + "/editPassword/" + id, JSON.stringify({ oldPassword: oldPassword, newPassword: newPassword, confirmedPassword: confirmedPassword }), { headers: this.headers, responseType: 'text' });
    };
    UserProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserProfileService);
    return UserProfileService;
}());
exports.UserProfileService = UserProfileService;


/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hand {\r\n    cursor: pointer;\r\n}\r\n\r\ninput.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n\r\ninput.not-unique {\r\n    border: 1px solid red;\r\n}\r\n\r\n.ml{\r\n    margin-left: 150px; \r\n}\r\n\r\n.mr{\r\n    margin-right: 20px;\r\n}\r\n\r\n.mb{\r\n    margin-bottom: 20px; \r\n}\r\n\r\n.wid{\r\n    width: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\r\n    <div style=\"text-align: center;\">\r\n        <div class=\"container-fluid mb\">\r\n            \r\n          <div class=\"input-group\">\r\n            <select class=\"form-control col-md-4 mr ml\" [(ngModel)]=\"userStatus\" (change)=\"onSelectUserStatus()\">\r\n             <option value=\"all\" selected=\"selected\">All users</option>\r\n             <option value=\"active\">Active only</option>\r\n             <option value=\"notactive\">Not active</option>\r\n            </select>\r\n            <input type=\"text\" (keyup)=\"onSelectUserStatus()\" class=\"form-control col-md-4 mr\" [(ngModel)]=\"searchTerm\" placeholder=\"Search\" aria-describedby=\"basic-addon1\">\r\n          </div>\r\n        </div>\r\n    </div>\r\n  \r\n  <table class=\"table table-hover\">\r\n    <thead class=\"thead-light\">\r\n      <tr>\r\n        <th style=\"text-align: center;\"> A/D</th>\r\n        <th>No.</th>\r\n        <th>First name\r\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('firstName')\"></i>\r\n        </th>\r\n        <th>Last name\r\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('lastName')\"></i>\r\n        </th>\r\n        <th>Username\r\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('username')\"></i>\r\n        </th>\r\n        <th>Date of birth\r\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('dateOfBirth')\"></i>\r\n        </th>\r\n        <th>Address\r\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('address')\"></i>\r\n        </th>\r\n        <th>Phone number\r\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('phoneNumber')\"></i>\r\n        </th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr [ngClass]=\"{'table-danger': !u.active}\" *ngFor=\"let u of users; let i = index\" >\r\n        <td>\r\n            <button type=\"button\" *ngIf=\"u.active\" (click)=\"changeUserStatus(u.userId)\" title=\"Deactivate account\" class=\"btn btn-sm btn-outline-danger\">Deactivate</button>\r\n            <button type=\"button\" *ngIf=\"!u.active\" (click)=\"changeUserStatus(u.userId)\" title=\"Activate account\" class=\"btn btn-sm btn-outline-success\">Activate</button>\r\n        </td>\r\n        <td>{{i + 1}}</td>\r\n        <td>{{u.firstName}}</td>\r\n        <td>{{u.lastName}}</td>\r\n        <td><a class=\"hand\" [routerLink]=\"['/profile', u.userId]\" title=\"Go to user profile.\">{{u.username}}</a></td>\r\n        <td>{{u.dateOfBirth}}</td>\r\n        <td>{{u.address}}</td>\r\n        <td>{{u.phoneNumber}}</td>\r\n        <td style=\"display: block;\">\r\n          <div *ngFor=\"let r of u.roleName\">\r\n            <span class=\"badge badge-primary\">\r\n              <small>{{r}}</small>\r\n            </span>\r\n            <br>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div>\r\n\r\n  <button class=\"btn btn-primary hand pull-right\" (click)=\"showDialog = !showDialog;resetAddForm();getRoles();\">New user</button>\r\n  <app-pagination class=\"\" [(totalPages)]=\"totalPages\" (emitPageNum)=\"selectPageNum($event)\"></app-pagination>\r\n  \r\n  \r\n  \r\n  \r\n</div>\r\n\r\n\r\n\r\n\r\n<app-dialog [(visible)]=\"showDialog\">\r\n  <h4>Add user</h4>\r\n  <hr>\r\n  <form (ngSubmit)=\"postNewUser()\" class=\"form-horizontal\" #f=\"ngForm\">\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"username\">Username</label>\r\n      <input id=\"username\" name=\"username\" [ngClass]=\"{'not-unique':!isUnique}\" type=\"text\" placeholder=\"Username...\" (keyup)=\"isUsernameUnique()\" class=\"form-control input-md\" [(ngModel)]=\"newUser.username\" required\r\n        #username=\"ngModel\" maxlength=\"20\">\r\n      <span class=\"help-block\" *ngIf=\"username.touched && !username.valid\">\r\n        <i>Username is required.</i>\r\n      </span>\r\n      <span class=\"help-block\" *ngIf=\"username.touched && !isUnique\">\r\n        <i>This username is taken.</i>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"firstName\">First name</label>\r\n      <input id=\"firstName\" name=\"firstName\" type=\"text\" placeholder=\"First name...\" class=\"form-control input-md\" [(ngModel)]=\"newUser.firstName\" required\r\n        #firstName=\"ngModel\" maxlength=\"20\">\r\n      <span class=\"help-block\" *ngIf=\"firstName.touched && !firstName.valid\">\r\n        <i>First name is required.</i>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"lastName\">Last name</label>\r\n      <input id=\"lastName\" name=\"lastName\" type=\"text\" placeholder=\"Last name...\" class=\"form-control input-md\" [(ngModel)]=\"newUser.lastName\" required\r\n        #lastName=\"ngModel\" maxlength=\"20\">\r\n      <span class=\"help-block\" *ngIf=\"lastName.touched && !lastName.valid\">\r\n        <i>Last name is required.</i>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"address\">Address</label>\r\n      <input id=\"address\" name=\"address\" type=\"text\" placeholder=\"Address...\" class=\"form-control input-md\" [(ngModel)]=\"newUser.address\" #address=\"ngModel\"\r\n        maxlength=\"30\">\r\n      <span class=\"help-block\" *ngIf=\"address.touched && !address.valid\">\r\n        <i>Can't contain more than 30 characters.</i>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"phoneNumber\">Phone number</label>\r\n      <input id=\"phoneNumber\" name=\"phoneNumber\" type=\"text\" placeholder=\"Phone number...\" class=\"form-control input-md\" [(ngModel)]=\"newUser.phoneNumber\"\r\n        #phoneNumber=\"ngModel\" maxlength=\"20\">\r\n      <span class=\"help-block\" *ngIf=\"phoneNumber.touched && !phoneNumber.valid\">\r\n        <i>Can't contain more than 20 characters.</i>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"dp\">Date of birth</label>\r\n      <div class=\"input-group\">\r\n        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\r\n            <img src=\"assets/img/calendar-icon.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"rolesSelect\" class=\"control-label\">Select roles</label>\r\n      <select name=\"rolesSelect\" [(ngModel)]=\"newUser.roleId\" multiple class=\"form-control\" id=\"rolesSelect\" required>\r\n        <option *ngFor=\"let r of roles\" value=\"{{r.roleId}}\">{{r.name}}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <hr>\r\n    <div style=\"text-align: center\">\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid || !isUnique\">Add</button>\r\n      <button type=\"button\" (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\r\n    </div>\r\n  </form>\r\n\r\n</app-dialog>"

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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserComponent = /** @class */ (function () {
    function UserComponent(userService, roleService, router) {
        this.userService = userService;
        this.roleService = roleService;
        this.router = router;
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
        if (this.userStatus === "active") {
            this.getActiveUsers();
        }
        if (this.userStatus === "notactive") {
            this.getNotActiveUsers();
        }
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
        if (this.newUser.username.length > 0) {
            this.userService.isUsernameUnique(this.newUser.username, 'add', '').subscribe(function (response) { return _this.isUnique = response; }, function (error) { return console.log(error); });
        }
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
    UserComponent.prototype.onSearch = function (term) {
        this.router.navigate(['profile', term]);
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
            role_service_1.RoleService,
            router_1.Router])
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
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.path + "/" + id);
    };
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
    UserService.prototype.isUsernameUnique = function (username, edit, oldUsername) {
        return this.http.post(this.path + "/username-unique/" + username + "/" + edit + "/" + oldUsername, null);
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