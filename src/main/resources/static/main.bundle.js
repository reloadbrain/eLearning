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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a href=\"#\" class=\"navbar-brand\">ELearning App</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/users\" routerLinkActive=\"active\">Users</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/preExamOTypes\" routerLinkActive=\"active\">PreExamOTypes</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/courses\" routerLinkActive=\"active\">Courses</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/documents\" routerLinkActive=\"active\">Documents</a>\r\n            </li>\r\n            <li>\r\n                <a class=\"nav-link\" routerLink=\"/professorCourses\" routerLinkActive=\"active\">Professor Courses</a>\r\n            </li>\r\n            <li>\r\n                <a class=\"nav-link\" routerLink=\"/professor_types\" routerLinkActive=\"active\">Professor Type</a>\r\n            </li>\r\n            <li>\r\n                <a class=\"nav-link\" routerLink=\"/payments\" routerLinkActive=\"active\">Payments</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav\">\r\n            <a class=\"nav-link\" *ngIf=\"!isLoggedIn\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n        </ul>\r\n        <ul class=\"navbar-nav\" *ngIf=\"isLoggedIn\">\r\n            <a class=\"nav-link hand\" (click)=\"logOut()\">LogOut</a>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authorization_authorization_service__ = __webpack_require__("../../../../../src/app/authorization/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authorization_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__department_department_component__ = __webpack_require__("../../../../../src/app/department/department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__department_department_service__ = __webpack_require__("../../../../../src/app/department/department.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__authorization_authorization_component__ = __webpack_require__("../../../../../src/app/authorization/authorization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authorization_authorization_service__ = __webpack_require__("../../../../../src/app/authorization/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authorization_token_interceptor_service__ = __webpack_require__("../../../../../src/app/authorization/token-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__student_pre_exam_obligation_student_pre_exam_obligation_component__ = __webpack_require__("../../../../../src/app/student-pre-exam-obligation/student-pre-exam-obligation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__professor_pre_exam_obligation_professor_pre_exam_obligation_component__ = __webpack_require__("../../../../../src/app/professor-pre-exam-obligation/professor-pre-exam-obligation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__professor_pre_exam_obligation_records_professor_pre_exam_obligation_records_component__ = __webpack_require__("../../../../../src/app/professor-pre-exam-obligation-records/professor-pre-exam-obligation-records.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__authorization_jwt_interceptor_service__ = __webpack_require__("../../../../../src/app/authorization/jwt-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pagination_pagination_component__ = __webpack_require__("../../../../../src/app/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_role_service__ = __webpack_require__("../../../../../src/app/shared/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_profile_user_profile_service__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__auth_guard_guard__ = __webpack_require__("../../../../../src/app/auth-guard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__student_pre_exam_obligation_pre_exam_obligation_records_service__ = __webpack_require__("../../../../../src/app/student-pre-exam-obligation/pre-exam-obligation-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pre_exam_o_type_pre_exam_o_type_component__ = __webpack_require__("../../../../../src/app/pre-exam-o-type/pre-exam-o-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pre_exam_o_type_pre_exam_o_type_service__ = __webpack_require__("../../../../../src/app/pre-exam-o-type/pre-exam-o-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__professor_pre_exam_obligation_pre_exam_obligation_service__ = __webpack_require__("../../../../../src/app/professor-pre-exam-obligation/pre-exam-obligation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__edocuments_edocuments_component__ = __webpack_require__("../../../../../src/app/edocuments/edocuments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__edocuments_edocument_service__ = __webpack_require__("../../../../../src/app/edocuments/edocument.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__student_course_student_course_component__ = __webpack_require__("../../../../../src/app/student-course/student-course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__professor_course_professor_course_component__ = __webpack_require__("../../../../../src/app/professor-course/professor-course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_exam_service__ = __webpack_require__("../../../../../src/app/shared/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__professor_type_professor_type_component__ = __webpack_require__("../../../../../src/app/professor-type/professor-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__professor_type_professor_type_service__ = __webpack_require__("../../../../../src/app/professor-type/professor_type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__payments_payments_component__ = __webpack_require__("../../../../../src/app/payments/payments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__payments_payments_service__ = __webpack_require__("../../../../../src/app/payments/payments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__student_payments_student_payments_component__ = __webpack_require__("../../../../../src/app/student-payments/student-payments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__student_payments_student_payments_service__ = __webpack_require__("../../../../../src/app/student-payments/student_payments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__course_course_component__ = __webpack_require__("../../../../../src/app/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__course_course_service__ = __webpack_require__("../../../../../src/app/course/course.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var routes = [
    /* {
      path: '',
      redirectTo: '/user-login',
      pathMatch: 'full'
    }, */
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_11__authorization_authorization_component__["a" /* AuthorizationComponent */]
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_24__auth_guard_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'profile/:id',
        component: __WEBPACK_IMPORTED_MODULE_17__user_profile_user_profile_component__["a" /* UserProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_24__auth_guard_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'documents',
        component: __WEBPACK_IMPORTED_MODULE_29__edocuments_edocuments_component__["a" /* EdocumentsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_24__auth_guard_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'preExamOTypes',
        component: __WEBPACK_IMPORTED_MODULE_26__pre_exam_o_type_pre_exam_o_type_component__["a" /* PreExamOTypeComponent */]
    },
    {
        path: "professorCourses",
        component: __WEBPACK_IMPORTED_MODULE_32__professor_course_professor_course_component__["a" /* ProfessorCourseComponent */]
    },
    {
        path: "professor_types",
        component: __WEBPACK_IMPORTED_MODULE_34__professor_type_professor_type_component__["a" /* ProfessorTypeComponent */]
    },
    {
        path: "payments",
        component: __WEBPACK_IMPORTED_MODULE_36__payments_payments_component__["a" /* PaymentsComponent */]
    },
    {
        path: "student_payments",
        component: __WEBPACK_IMPORTED_MODULE_36__payments_payments_component__["a" /* PaymentsComponent */]
    },
    {
        path: "courses",
        component: __WEBPACK_IMPORTED_MODULE_40__course_course_component__["a" /* CourseComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_11__authorization_authorization_component__["a" /* AuthorizationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__department_department_component__["a" /* DepartmentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__student_pre_exam_obligation_student_pre_exam_obligation_component__["a" /* StudentPreExamObligationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__professor_pre_exam_obligation_professor_pre_exam_obligation_component__["a" /* ProfessorPreExamObligationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__professor_pre_exam_obligation_records_professor_pre_exam_obligation_records_component__["a" /* ProfessorPreExamObligationRecordsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pre_exam_o_type_pre_exam_o_type_component__["a" /* PreExamOTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_29__edocuments_edocuments_component__["a" /* EdocumentsComponent */],
                __WEBPACK_IMPORTED_MODULE_31__student_course_student_course_component__["a" /* StudentCourseComponent */],
                __WEBPACK_IMPORTED_MODULE_32__professor_course_professor_course_component__["a" /* ProfessorCourseComponent */],
                __WEBPACK_IMPORTED_MODULE_34__professor_type_professor_type_component__["a" /* ProfessorTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_36__payments_payments_component__["a" /* PaymentsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__student_payments_student_payments_component__["a" /* StudentPaymentsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__course_course_component__["a" /* CourseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes), __WEBPACK_IMPORTED_MODULE_20__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__department_department_service__["a" /* DepartmentService */], __WEBPACK_IMPORTED_MODULE_12__authorization_authorization_service__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_13__authorization_token_interceptor_service__["a" /* TokenInterceptorService */],
                __WEBPACK_IMPORTED_MODULE_18__authorization_jwt_interceptor_service__["a" /* JwtInterceptorService */], __WEBPACK_IMPORTED_MODULE_25__student_pre_exam_obligation_pre_exam_obligation_records_service__["a" /* PreExamObligationRecordsService */], __WEBPACK_IMPORTED_MODULE_27__pre_exam_o_type_pre_exam_o_type_service__["a" /* PreExamOTypeService */], __WEBPACK_IMPORTED_MODULE_28__professor_pre_exam_obligation_pre_exam_obligation_service__["a" /* PreExamObligationervice */], __WEBPACK_IMPORTED_MODULE_41__course_course_service__["a" /* CourseService */],
                __WEBPACK_IMPORTED_MODULE_33__shared_exam_service__["a" /* ExamService */], __WEBPACK_IMPORTED_MODULE_35__professor_type_professor_type_service__["a" /* ProfessorTypeService */], __WEBPACK_IMPORTED_MODULE_37__payments_payments_service__["a" /* PaymentsService */], __WEBPACK_IMPORTED_MODULE_39__student_payments_student_payments_service__["a" /* StudentPaymentsService */], {
                    provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__authorization_token_interceptor_service__["a" /* TokenInterceptorService */],
                    multi: true
                }, {
                    provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_18__authorization_jwt_interceptor_service__["a" /* JwtInterceptorService */],
                    multi: true
                }, __WEBPACK_IMPORTED_MODULE_22__shared_role_service__["a" /* RoleService */], __WEBPACK_IMPORTED_MODULE_23__user_profile_user_profile_service__["a" /* UserProfileService */], __WEBPACK_IMPORTED_MODULE_24__auth_guard_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_30__edocuments_edocument_service__["a" /* EdocumentService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-guard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorization_authorization_service__ = __webpack_require__("../../../../../src/app/authorization/authorization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authorization_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authorization_service__ = __webpack_require__("../../../../../src/app/authorization/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
                __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
            }
        });
    };
    AuthorizationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-authorization',
            template: __webpack_require__("../../../../../src/app/authorization/authorization.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authorization/authorization.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthorizationComponent);
    return AuthorizationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authorization/authorization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(http) {
        this.http = http;
        this.authUrl = "/http://localhost:8080/login";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]();
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
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Ilegal login');
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
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
        return Object(__WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["tokenNotExpired"])(null, token);
    };
    AuthorizationService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        return token && token.length > 0;
    };
    AuthorizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthorizationService);
    return AuthorizationService;
}());



/***/ }),

/***/ "../../../../../src/app/authorization/jwt-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorization_service__ = __webpack_require__("../../../../../src/app/authorization/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JwtInterceptorService = /** @class */ (function () {
    function JwtInterceptorService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    JwtInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], JwtInterceptorService);
    return JwtInterceptorService;
}());



/***/ }),

/***/ "../../../../../src/app/authorization/token-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authorization_service__ = __webpack_require__("../../../../../src/app/authorization/authorization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authorization_service__["a" /* AuthorizationService */]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "../../../../../src/app/course/course.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/course/course.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\r\n  <table class=\"table table-hover\">\r\n    <thead class=\"thead-light\">\r\n      <tr>\r\n        <th>No.</th>\r\n        <th>Name\r\n          <i class=\"fa fa-fw fa-sort hand\"></i>\r\n        </th>\r\n        <th>Active\r\n          <i class=\"fa fa-fw fa-sort hand\"></i>\r\n        </th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let c of courses; let i = index\">\r\n        <td>{{i + 1}}</td>\r\n        <td>{{c.name}}</td>\r\n        <td>{{c.active}}</td>\r\n        <td>\r\n          <button class=\"btn btn-success hand\" (click)=\"onEditCourse(c.courseId)\">\r\n            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n          </button> ⧸\r\n          <button class=\"btn btn-danger hand\" (click)=\"onRemove(c.courseId)\">\r\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button class=\"btn btn-primary hand pull-right\" (click)=\"showDialog = !showDialog;resetAddForm();\">New course</button>\r\n  <!-- <button class=\"btn btn-primary hand pull-right\" (click)=\"showDialog = !showDialog;resetAddForm();getRoles();\">New user</button> -->\r\n  <app-pagination class=\"\"></app-pagination>\r\n  <div>\r\n\r\n    <app-dialog [(visible)]=\"showDialog\">\r\n      <h4>Add Course</h4>\r\n      <hr>\r\n      <form (ngSubmit)=\"postNewCourse()\" class=\"form-horizontal\" #f=\"ngForm\">\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"name\">Name</label>\r\n          <input id=\"name\" name=\"name\" type=\"text\" placeholder=\"Name\" class=\"form-control input-md\" [(ngModel)]=\"newCourse.name\" required\r\n            #name=\"ngModel\" maxlength=\"20\">\r\n          <span class=\"help-block\" *ngIf=\"name.touched && !name.valid\">\r\n            <i>Name is required.</i>\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"name\">Active</label>\r\n          <input id=\"active\" name=\"active\" type=\"checkbox\" class=\"form-control input-md-1\" [(ngModel)]=\"newCourse.active\" required\r\n            #name=\"ngModel\" checked>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"departmentSelect\" class=\"control-label\">Select department</label>\r\n          <select name=\"departmentSelect\" [(ngModel)]=\"newCourse.departmentId\" multiple class=\"form-control\" id=\"departmentSelect\" required>\r\n            <option *ngFor=\"let d of departments\" value=\"{{d.departmentId}}\">\r\n              {{d.name}}\r\n             </option>\r\n\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"studentSelect\" class=\"control-label\">Select students</label>\r\n          <select name=\"studentSelect\" [(ngModel)]=\"newCourse.studentIds\" multiple class=\"form-control\" id=\"studentSelect\" required>\r\n            <option *ngFor=\"let s of students\" value=\"{{s.studentId}}\">\r\n              {{s.firstName}} {{s.lastName}}\r\n             </option>\r\n\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <!-- <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"value\">Value</label>\r\n          <input id=\"value\" name=\"value\" type=\"text\" placeholder=\"Value...\" class=\"form-control input-md\" [(ngModel)]=\"newCourse.value\"\r\n            required #value=\"ngModel\" maxlength=\"20\">\r\n          <span class=\"help-block\" *ngIf=\"value.touched && !value.valid\">\r\n            <i>Value name is required.</i>\r\n          </span>\r\n        </div> -->\r\n\r\n\r\n        \r\n\r\n        <hr>\r\n        <div style=\"text-align: center\">\r\n          <button class=\"btn btn-primary\" type=\"submit\">Add</button>\r\n          <button type=\"button\" (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\r\n        </div>\r\n      </form>\r\n\r\n    </app-dialog>"

/***/ }),

/***/ "../../../../../src/app/course/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_service__ = __webpack_require__("../../../../../src/app/course/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__department_department_service__ = __webpack_require__("../../../../../src/app/department/department.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseComponent = /** @class */ (function () {
    function CourseComponent(courseService, userService, departmentService) {
        this.courseService = courseService;
        this.userService = userService;
        this.departmentService = departmentService;
        this.courses = [];
        this.students = [];
        this.departments = [{
                departmentId: 1,
                name: "Softverske i informacione tehnologije"
            }];
        this.showDialog = false;
        this.newCourse = {
            courseId: 0,
            departmentId: 0,
            name: "",
            active: false
        };
    }
    CourseComponent.prototype.ngOnInit = function () {
        this.getAllCourses();
        this.getAllDepartments();
        this.getAllStudents();
    };
    CourseComponent.prototype.getAllCourses = function () {
        var _this = this;
        this.courseService.getAll().subscribe(function (response) { return (_this.courses = response.body); }, function (error) { return console.log(error); });
    };
    CourseComponent.prototype.getAllStudents = function () {
        var _this = this;
        this.userService.getAll(0, 99, "userId,asc", "", "").subscribe(function (response) { return (_this.students = response.body); }, function (error) { return console.log(error); });
    };
    CourseComponent.prototype.getAllDepartments = function () {
        var _this = this;
        this.departmentService.getAll().subscribe(function (response) { return (_this.departments = response.body); }, function (error) { return console.log(error); });
    };
    CourseComponent.prototype.onEditCourse = function (id) {
    };
    CourseComponent.prototype.onRemove = function (id) {
        var _this = this;
        this.courseService.delete(id).subscribe(function (response) { return (_this.getAllCourses()); }, function (error) { return console.log(error); });
    };
    CourseComponent.prototype.resetAddForm = function () {
        this.addUserForm.resetForm();
    };
    CourseComponent.prototype.postNewCourse = function () {
        var _this = this;
        this.newCourse.departmentId = this.newCourse.departmentId[0];
        console.log(this.newCourse);
        this.courseService.postNewCourse(this.newCourse).subscribe(function (response) { return [_this.courses.push(response), _this.resetAddForm()]; }, function (error) { return console.log(error); });
        this.showDialog = !this.showDialog;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], CourseComponent.prototype, "addUserForm", void 0);
    CourseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__("../../../../../src/app/course/course.component.html"),
            styles: [__webpack_require__("../../../../../src/app/course/course.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__course_service__["a" /* CourseService */], __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__department_department_service__["a" /* DepartmentService */]])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/course/course.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseService = /** @class */ (function () {
    function CourseService(http) {
        this.http = http;
        this.path = "/api/courses";
    }
    CourseService.prototype.getAll = function () {
        return this.http.get(this.path, { observe: 'response' });
    };
    CourseService.prototype.getOne = function (id) {
        return this.http.get(this.path + "/" + id, { observe: 'response' });
    };
    CourseService.prototype.delete = function (id) {
        return this.http.delete(this.path + "/" + id, { observe: 'response' });
    };
    CourseService.prototype.postNewCourse = function (newCourse) {
        return this.http.post(this.path, newCourse);
    };
    CourseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CourseService);
    return CourseService;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent() {
    }
    DepartmentComponent.prototype.ngOnInit = function () {
    };
    DepartmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-department',
            template: __webpack_require__("../../../../../src/app/department/department.component.html"),
            styles: [__webpack_require__("../../../../../src/app/department/department.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/department/department.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
        this.path = "/api/departments";
    }
    DepartmentService.prototype.getAll = function () {
        return this.http.get(this.path, { observe: 'response' });
    };
    DepartmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 999;\r\n  }\r\n  \r\n  .dialog {\r\n    z-index: 1000;\r\n    position: fixed;\r\n    right: 0;\r\n    left: 0;\r\n    top: 20px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    min-height: 200px;\r\n    width: 90%;\r\n    max-width: 620px;\r\n    max-height: 90%;\r\n    overflow-y: auto;\r\n    background-color: #fff;\r\n    padding: 12px;\r\n    -webkit-box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\r\n            box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .dialog {\r\n      top: 40px;\r\n    }\r\n  }\r\n  \r\n  .dialog__close-btn {\r\n    border: 0;\r\n    background: none;\r\n    color: #2d2d2d;\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    font-size: 1.2em;\r\n  }\r\n  \r\n  .grades{\r\n    width: 1200px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\">\r\n    <ng-content></ng-content>\r\n    <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\">X</button>\r\n  </div>\r\n  <div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "closable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DialogComponent.prototype, "visibleChange", void 0);
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialog/dialog.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('dialog', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ transform: 'scale3d(.3, .3, .3)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edocuments/edocument.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdocumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EdocumentService = /** @class */ (function () {
    function EdocumentService() {
    }
    EdocumentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EdocumentService);
    return EdocumentService;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdocumentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EdocumentsComponent = /** @class */ (function () {
    function EdocumentsComponent() {
    }
    EdocumentsComponent.prototype.ngOnInit = function () {
    };
    EdocumentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edocuments',
            template: __webpack_require__("../../../../../src/app/edocuments/edocuments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edocuments/edocuments.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EdocumentsComponent);
    return EdocumentsComponent;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.page = 1;
        this.collectionSize = 0;
        this.emitPageNum = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "totalPages", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "emitPageNum", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__("../../../../../src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/payments/payments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/payments/payments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\r\n  <table class=\"table table-hover\">\r\n    <thead class=\"thead-light\">\r\n      <tr>\r\n        <th>No.</th>\r\n        <th>Description\r\n          <i class=\"fa fa-fw fa-sort hand\"></i>\r\n        </th>\r\n        <th>Value\r\n          <i class=\"fa fa-fw fa-sort hand\"></i>\r\n        </th>\r\n        <th>Student\r\n          <i class=\"fa fa-fw fa-sort hand\"></i>\r\n        </th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let p of payments; let i = index\">\r\n        <!-- <tr [ngClass]=\"{'table-danger': !u.active}\" *ngFor=\"let p of payments; let i = index\" > -->\r\n        <td>{{i + 1}}</td>\r\n        <td>{{p.description}}</td>\r\n        <td>{{p.value}}</td>\r\n        <!-- <td><a class=\"hand\" [routerLink]=\"['/profile', u.userId]\" title=\"Go to user profile.\">{{u.username}}</a></td> -->\r\n        <td>{{p.studentFirstName}} {{p.studentLastName}}</td>\r\n        <td>\r\n            <button class=\"btn btn-success hand\" (click)=\"onEditPayment(p.paymentId)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button> ⧸ \r\n            <button class=\"btn btn-danger hand\"  (click)=\"onRemovePayment(p.paymentId)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div>\r\n\r\n    <button class=\"btn btn-primary hand pull-right\" (click)=\"showDialog = !showDialog;resetAddForm();getStudents();\">New payment</button>\r\n    <!-- <button class=\"btn btn-primary hand pull-right\" (click)=\"showDialog = !showDialog;resetAddForm();getRoles();\">New user</button> -->\r\n    <app-pagination class=\"\"></app-pagination>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <app-dialog [(visible)]=\"showDialog\">\r\n    <h4>Add Payment</h4>\r\n    <hr>\r\n    <form (ngSubmit)=\"postNewPayment()\" class=\"form-horizontal\" #f=\"ngForm\">\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"description\">Description</label>\r\n        <input id=\"description\" name=\"description\" type=\"text\" placeholder=\"Description\" class=\"form-control input-md\" [(ngModel)]=\"newPayment.description\"\r\n          required #description=\"ngModel\" maxlength=\"20\">\r\n        <span class=\"help-block\" *ngIf=\"description.touched && !description.valid\">\r\n          <i>Description is required.</i>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"value\">Value</label>\r\n        <input id=\"value\" name=\"value\" type=\"text\" placeholder=\"Value...\" class=\"form-control input-md\" [(ngModel)]=\"newPayment.value\"\r\n          required #value=\"ngModel\" maxlength=\"20\">\r\n        <span class=\"help-block\" *ngIf=\"value.touched && !value.valid\">\r\n          <i>Value name is required.</i>\r\n        </span>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"studentSelect\" class=\"control-label\">Select student</label>\r\n        <select name=\"studentSelect\" [(ngModel)]=\"newPayment.studentId\" class=\"form-control\" id=\"studentSelect\" required>\r\n          <option *ngFor=\"let s of students\" value=\"{{s.userId}}\">{{s.firstName}}\r\n            <p>{{s.userId}}</p> {{s.lastName}}</option>\r\n\r\n        </select>\r\n      </div>\r\n\r\n      <hr>\r\n      <div style=\"text-align: center\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">Add</button>\r\n        <button type=\"button\" (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\r\n      </div>\r\n    </form>\r\n\r\n  </app-dialog>\r\n\r\n  <app-dialog [(visible)]=\"showEditDialog\">\r\n      <h4>Edit payment</h4>\r\n      <hr>\r\n      <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #fe=\"ngForm\">\r\n    \r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"name\">Description</label>\r\n          <input id=\"editDescription\" name=\"editDescription\" type=\"text\" [(value)]=\"newPayment.description\" placeholder=\"description\" class=\"form-control input-md\" [(ngModel)]=\"newPayment.description\"  required\r\n            #editDescription=\"ngModel\" maxlength=\"20\" >\r\n          <span class=\"help-block\" *ngIf=\"editDescription.touched && !editDescription.valid\">\r\n            <i>name is required.</i>\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"name\">Value</label>\r\n            <input id=\"editValue\" name=\"editValue\" type=\"text\" [(value)]=\"newPayment.value\" placeholder=\"value\" class=\"form-control input-md\" [(ngModel)]=\"newPayment.value\"  required\r\n              #editValue=\"ngModel\" maxlength=\"20\" >\r\n            <span class=\"help-block\" *ngIf=\"editValue.touched && !editValue.valid\">\r\n              <i>Value is required.</i>\r\n            </span>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group invisible\">\r\n              <label class=\"control-label\" for=\"studentId\">Student</label>\r\n              <input id=\"editStudent\" name=\"editStudent\" type=\"text\" [(value)]=\"newPayment.studentId\" placeholder=\"value\" class=\"form-control input-md\" [(ngModel)]=\"newPayment.studentId\"  required\r\n                #editStudent=\"ngModel\" maxlength=\"20\" >\r\n              <span class=\"help-block\" *ngIf=\"editStudent.touched && !editStudent.valid\">\r\n                <i>Value is required.</i>\r\n              </span>\r\n            </div>\r\n    \r\n        <hr>\r\n        <div style=\"text-align: center\">\r\n          <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">Edit</button>\r\n          <button type=\"button\" (click)=\"showEditDialog = !showEditDialog\" class=\"btn\">Close</button>\r\n        </div>\r\n      </form>\r\n    \r\n    </app-dialog>\r\n    \r\n    <app-dialog [(visible)]=\"showRemoveDialog\">\r\n        <h4>Remove payment</h4>\r\n        <hr>\r\n            <label class=\"control-label\" for=\"name\">Are you sure u want to remove this payment</label>\r\n          <hr>\r\n          <div style=\"text-align: center\">\r\n            <button class=\"btn btn-danger\" (click)=\"onRemoveConfirmed()\">Remove</button>\r\n            <button type=\"button\" (click)=\"showRemoveDialog = !showRemoveDialog\" class=\"btn\">Close</button>\r\n          </div>\r\n       \r\n      \r\n      </app-dialog>"

/***/ }),

/***/ "../../../../../src/app/payments/payments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payments_service__ = __webpack_require__("../../../../../src/app/payments/payments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent(paymentsService, userService) {
        this.paymentsService = paymentsService;
        this.userService = userService;
        this.payments = [];
        this.students = [];
        this.newPayment = {
            paymentId: 0,
            description: "",
            active: true,
            value: 0,
            studentId: 0,
        };
        this.showDialog = false;
        this.showEditDialog = false;
        this.showRemoveDialog = false;
        this.actionForModal = "";
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        this.getAllPayments();
    };
    PaymentsComponent.prototype.getAllPayments = function () {
        var _this = this;
        this.paymentsService.getAll().subscribe(function (response) { return (_this.payments = response.body); }, function (error) { return console.log(error); });
    };
    PaymentsComponent.prototype.postNewPayment = function () {
        var _this = this;
        console.log(this.newPayment.studentId);
        this.newPayment.studentId = this.newPayment.studentId[0];
        this.paymentsService.postNewType(this.newPayment).subscribe(function (response) { return [_this.payments.push(response), _this.resetAddForm()]; }, function (error) { return console.log(error); });
        this.showDialog = !this.showDialog;
    };
    PaymentsComponent.prototype.resetAddForm = function () {
        this.addUserForm.resetForm();
    };
    PaymentsComponent.prototype.getStudents = function () {
        var _this = this;
        this.userService.getAllForPayments().subscribe(function (response) { return _this.students = response; }, function (error) { return console.log(error); });
    };
    PaymentsComponent.prototype.onPopulateJsonType = function (description, value, studentId) {
        this.newPayment.description = description;
        this.newPayment.value = value;
        this.newPayment.studentId = studentId;
    };
    PaymentsComponent.prototype.onGetById = function (id) {
        var _this = this;
        this.paymentsService.getOne(id)
            .subscribe(function (response) { return (_this.onPopulateJsonType(response.body.description, response.body.value, response.body.studentId)); }, function (error) { return console.log(error); });
    };
    PaymentsComponent.prototype.onEditPayment = function (id) {
        this.resetEditForm();
        this.newPayment.paymentId = id;
        console.log(id);
        this.actionForModal = "edit";
        this.onGetById(this.newPayment.paymentId);
        this.showEditDialog = !this.showEditDialog;
    };
    PaymentsComponent.prototype.onPutType = function () {
        var _this = this;
        console.log(this.newPayment);
        this.paymentsService.editType(this.newPayment).subscribe(function (response) { return [_this.getAllPayments(), _this.resetEditForm()]; }, function (error) { return console.log(error); });
    };
    PaymentsComponent.prototype.onRemovePayment = function (id) {
        this.showRemoveDialog = !this.showRemoveDialog;
        this.newPayment.paymentId = id;
    };
    PaymentsComponent.prototype.onRemoveConfirmed = function () {
        var _this = this;
        this.paymentsService.changeActive(this.newPayment.paymentId).subscribe(function (response) { return [_this.getAllPayments()]; }, function (error) { return console.log(error); });
        this.showRemoveDialog = !this.showRemoveDialog;
    };
    PaymentsComponent.prototype.resetEditForm = function () {
        this.editPaymentForm.resetForm();
    };
    PaymentsComponent.prototype.onSubmit = function () {
        if (this.actionForModal === 'edit') {
            this.onPutType();
            this.resetEditForm();
            this.showEditDialog = !this.showEditDialog;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], PaymentsComponent.prototype, "addUserForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], PaymentsComponent.prototype, "editPaymentForm", void 0);
    PaymentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__("../../../../../src/app/payments/payments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/payments/payments.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__payments_service__["a" /* PaymentsService */], __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/payments/payments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentsService = /** @class */ (function () {
    function PaymentsService(http) {
        this.http = http;
        this.path = "/api/payments";
    }
    PaymentsService.prototype.getAll = function () {
        return this.http.get(this.path, { observe: 'response' });
    };
    PaymentsService.prototype.postNewType = function (newPayment) {
        return this.http.post(this.path, newPayment);
    };
    PaymentsService.prototype.getOne = function (id) {
        return this.http.get(this.path + "/" + id, { observe: 'response' });
    };
    PaymentsService.prototype.editType = function (type) {
        return this.http.put(this.path, type);
    };
    PaymentsService.prototype.changeActive = function (id) {
        return this.http.delete(this.path + "/" + id, { responseType: 'text' });
    };
    PaymentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PaymentsService);
    return PaymentsService;
}());



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

module.exports = "<div class=\"container-fluid pt-5\">\n    <table class=\"table table-hover\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th>Name</th>\n          <th>Edit/Remove</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let t of preExamOTypes\">\n          <td>{{t.name}}</td>\n          <td>\n            <button class=\"btn btn-success hand\" (click)=\"onEditType(t.preExamObligationTypeId)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button> ⧸ \n            <button class=\"btn btn-danger hand\" (click)=\"onRemove(t.preExamObligationTypeId)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <button class=\"btn btn-primary hand\" (click)=\"onAddType()\">New Type</button>\n  </div>\n<app-dialog [(visible)]=\"showDialog\">\n    <h4>Add type</h4>\n    <hr>\n    <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #f=\"ngForm\">\n  \n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"name\">Name</label>\n        <input id=\"name\" name=\"name\" type=\"text\" placeholder=\"name...\" class=\"form-control input-md\" [(ngModel)]=\"newType.name\" required\n          #name=\"ngModel\" maxlength=\"20\">\n        <span class=\"help-block\" *ngIf=\"name.touched && !name.valid\">\n          <i>name is required.</i>\n        </span>\n      </div>\n\n      <hr>\n      <div style=\"text-align: center\">\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Add</button>\n        <button type=\"button\" (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\n      </div>\n    </form>\n  \n</app-dialog>\n\n<app-dialog [(visible)]=\"showEditDialog\">\n  <h4>Edit type</h4>\n  <hr>\n  <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #fe=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label class=\"control-label\" for=\"name\">Name</label>\n      <input id=\"editName\" name=\"editName\" type=\"text\" [(value)]=\"newType.name\" placeholder=\"name...\" class=\"form-control input-md\" [(ngModel)]=\"newType.name\"  required\n        #editName=\"ngModel\" maxlength=\"20\" >\n      <span class=\"help-block\" *ngIf=\"editName.touched && !editName.valid\">\n        <i>name is required.</i>\n      </span>\n    </div>\n\n    <hr>\n    <div style=\"text-align: center\">\n      <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">Edit</button>\n      <button type=\"button\" (click)=\"showEditDialog = !showEditDialog\" class=\"btn\">Close</button>\n    </div>\n  </form>\n\n</app-dialog>\n\n<app-dialog [(visible)]=\"showRemoveDialog\">\n    <h4>Remove type</h4>\n    <hr>\n        <label class=\"control-label\" for=\"name\">Are you sure u want to remove this type</label>\n      <hr>\n      <div style=\"text-align: center\">\n        <button class=\"btn btn-danger\" (click)=\"onRemoveConfirmed()\">Remove</button>\n        <button type=\"button\" (click)=\"showRemoveDialog = !showRemoveDialog\" class=\"btn\">Close</button>\n      </div>\n   \n  \n  </app-dialog>"

/***/ }),

/***/ "../../../../../src/app/pre-exam-o-type/pre-exam-o-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreExamOTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pre_exam_o_type_service__ = __webpack_require__("../../../../../src/app/pre-exam-o-type/pre-exam-o-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], PreExamOTypeComponent.prototype, "addTypeForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], PreExamOTypeComponent.prototype, "editTypeForm", void 0);
    PreExamOTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pre-exam-o-type',
            template: __webpack_require__("../../../../../src/app/pre-exam-o-type/pre-exam-o-type.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pre-exam-o-type/pre-exam-o-type.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pre_exam_o_type_service__["a" /* PreExamOTypeService */]])
    ], PreExamOTypeComponent);
    return PreExamOTypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pre-exam-o-type/pre-exam-o-type.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreExamOTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PreExamOTypeService);
    return PreExamOTypeService;
}());



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

module.exports = "<h2>{{course}} - Exams</h2>\r\n<div class=\"container-fluid pt-5\">\r\n    <table class=\"table table-hover\">\r\n        <thead class=\"thead-light\">\r\n            <tr>\r\n                <th>Num</th>\r\n                <th>Date</th>\r\n                <th>Edit date</th>\r\n                <th>Delete</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let e of exams; let i = index\">\r\n                <td>{{i + 1}}</td>\r\n                <td>{{e.date}}</td>\r\n                <td>\r\n                     &nbsp;<button class=\"btn btn-info hand\" (click)=\"onEditExam(e.examId)\">\r\n                       <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                </td>\r\n                <td>\r\n                     &nbsp;<button class=\"btn btn-danger hand\" (click)=\"onRemoveExam(e.examId)\">\r\n                        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <button class=\"btn btn-primary hand\" (click)=\"onAddExam()\">New Exam</button>\r\n</div>\r\n\r\n<app-dialog [(visible)]=\"showDialog\">\r\n    <h4>Add Exam</h4>\r\n    <hr>\r\n    <form (ngSubmit)=\"setNewDate(newDate.value);onSubmit()\" class=\"form-horizontal\" #addForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"examDate\">Exam date</label>\r\n            <div class=\"input-group\">\r\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"newDate\" ngbDatepicker\r\n                    required #dp=\"ngbDatepicker\" #newDate>\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\">\r\n                        <img src=\"assets/img/calendar-icon.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n        <div style=\"text-align: center\">\r\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addForm.valid\">Add</button>\r\n            <button type=\"button\" (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\r\n        </div>\r\n    </form>\r\n\r\n</app-dialog>\r\n\r\n<app-dialog [(visible)]=\"showEditDialog\">\r\n    <h4>Set exam date</h4>\r\n    <hr>\r\n    <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #editForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"examDate\">Set date</label>\r\n            <div class=\"input-group\">\r\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"examDate\" [(ngModel)]=\"model\" ngbDatepicker required #d=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\r\n                        <img src=\"assets/img/calendar-icon.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <hr>\r\n        <div style=\"text-align: center\">\r\n            <button class=\"btn btn-info\" type=\"submit\" [disabled]=\"!editForm.valid\">Set date</button>\r\n            <button type=\"button\" (click)=\"showEditDialog = !showEditDialog\" class=\"btn\">Close</button>\r\n        </div>\r\n    </form>\r\n</app-dialog>\r\n\r\n<app-dialog [(visible)]=\"showRemoveDialog\">\r\n    <h4>Remove Exam</h4>\r\n    <hr>\r\n    <label class=\"control-label\" for=\"name\">Are you sure?</label>\r\n    <hr>\r\n    <div style=\"text-align: center\">\r\n        <button class=\"btn btn-danger\" (click)=\"onRemoveConfirmed()\">Remove</button>\r\n        <button type=\"button\" (click)=\"showRemoveDialog = !showRemoveDialog\" class=\"btn\">Close</button>\r\n    </div>\r\n</app-dialog>\r\n\r\n\r\n\r\n<!--\r\n\r\n\r\n<app-dialog [(visible)]=\"showDialog\">\r\n    <h4>Add Exam</h4>\r\n    <hr>\r\n    <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #addForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"name\">Name</label>\r\n            <input id=\"name\" name=\"name\" type=\"text\" placeholder=\"name...\" class=\"form-control input-md\" [(ngModel)]=\"newPreExamObligation.name\"\r\n                required #name=\"ngModel\" maxlength=\"20\">\r\n            <span class=\"help-block\" *ngIf=\"name.touched && !name.valid\">\r\n                <i>name is required.</i>\r\n            </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"maxPoints\">Max points</label>\r\n            <input id=\"maxPoints\" name=\"maxPoints\" type=\"number\" [(value)]=\"newPreExamObligation.maxPoints\" placeholder=\"maxPoints...\"\r\n                class=\"form-control input-md\" [(ngModel)]=\"newPreExamObligation.maxPoints\" required #maxPoints=\"ngModel\">\r\n            <span class=\"help-block\" *ngIf=\"maxPoints.touched && !maxPoints.valid\">\r\n                <i>maxPoints is required and must be a number.</i>\r\n            </span>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"typesSelect\" class=\"control-label\">Select type</label>\r\n            <select name=\"typesSelect\" [(ngModel)]=\"newPreExamObligation.preExamOTypeId\" id=\"typesSelect\" required class=\"form-control input-md\">\r\n                <option *ngFor=\"let t of types\" value=\"{{t.preExamObligationTypeId}}\">{{t.name}}</option>\r\n            </select>\r\n        </div>\r\n\r\n        <hr>\r\n        <div style=\"text-align: center\">\r\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Add</button>\r\n            <button type=\"button\" (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\r\n        </div>\r\n    </form>\r\n\r\n</app-dialog>\r\n\r\n\r\n<app-dialog [(visible)]=\"showEditDialog\">\r\n    <h4>Edit Pre exam obligation</h4>\r\n    <hr>\r\n    <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #fe=\"ngForm\">\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"name\">Name</label>\r\n            <input id=\"editName\" name=\"editName\" type=\"text\" [(value)]=\"newPreExamObligation.name\" placeholder=\"name...\" class=\"form-control input-md\"\r\n                [(ngModel)]=\"newPreExamObligation.name\" required #editName=\"ngModel\" maxlength=\"20\">\r\n            <span class=\"help-block\" *ngIf=\"editName.touched && !editName.valid\">\r\n                <i>name is required.</i>\r\n            </span>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"maxPoints\">Max points</label>\r\n            <input id=\"editMaxPoints\" name=\"editMaxPoints\" type=\"number\" [(value)]=\"newPreExamObligation.maxPoints\" placeholder=\"maxPoints...\"\r\n                class=\"form-control input-md\" [(ngModel)]=\"newPreExamObligation.maxPoints\" required #editMaxPoints=\"ngModel\">\r\n            <span class=\"help-block\" *ngIf=\"editMaxPoints.touched && !editMaxPoints.valid\">\r\n                <i>maxPoints is required and must be a number.</i>\r\n            </span>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"typesSelect\" class=\"control-label\">Select type</label>\r\n            <select name=\"editTypesSelect\" [(ngModel)]=\"newPreExamObligation.preExamOTypeId\" id=\"editTypesSelect\" required class=\"form-control input-md\">\r\n                <option *ngFor=\"let t of types\" value=\"{{t.preExamObligationTypeId}}\">{{t.name}}</option>\r\n            </select>\r\n        </div>\r\n\r\n        <hr>\r\n        <div style=\"text-align: center\">\r\n            <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!fe.valid\">Edit</button>\r\n            <button type=\"button\" (click)=\"showEditDialog = !showEditDialog\" class=\"btn\">Close</button>\r\n        </div>\r\n    </form>\r\n\r\n</app-dialog>\r\n\r\n\r\n<app-dialog [(visible)]=\"showSetDateDialog\">\r\n    <h4>Set Pre exam obligation date</h4>\r\n    <hr>\r\n    <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #fs=\"ngForm\">\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"obligationDate\">Set date</label>\r\n            <div class=\"input-group\">\r\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"obligationDate\" [(ngModel)]=\"model\" ngbDatepicker required #d=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\r\n                        <img src=\"assets/img/calendar-icon.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <hr>\r\n        <div style=\"text-align: center\">\r\n            <button class=\"btn btn-info\" type=\"submit\" [disabled]=\"!fs.valid\">Set date</button>\r\n            <button type=\"button\" (click)=\"showSetDateDialog = !showSetDateDialog\" class=\"btn\">Close</button>\r\n        </div>\r\n    </form>\r\n\r\n</app-dialog> -->"

/***/ }),

/***/ "../../../../../src/app/professor-course/professor-course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorCourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_exam_service__ = __webpack_require__("../../../../../src/app/shared/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorization_authorization_service__ = __webpack_require__("../../../../../src/app/authorization/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfessorCourseComponent = /** @class */ (function () {
    function ProfessorCourseComponent(_examService, _authService) {
        this._examService = _examService;
        this._authService = _authService;
        this.exams = [];
        this.course = {};
        this.professorUsername = "";
        this.newExam = {
            examId: 0,
            date: "",
            active: true,
            courseId: 0
        };
        this.showDialog = false;
        this.showEditDialog = false;
        this.showRemoveDialog = false;
        this.actionForModal = "";
        // @Input() courseId: number;
        this.courseId = 1;
    }
    ProfessorCourseComponent.prototype.ngOnInit = function () {
        this.newExam.courseId = this.courseId;
        this.professorUsername = this._authService.getUser();
        this.getExamsByProfessorAndCourse(this.professorUsername, this.courseId);
        // console.log(this.courseId);
        // console.log(this.professorUsername);
    };
    ProfessorCourseComponent.prototype.getExamsByProfessorAndCourse = function (professorUsername, courseId) {
        var _this = this;
        this._examService.getByProfessorAndCourse(this.professorUsername, this.courseId).subscribe(function (response) { return _this.exams = response.body; }, function (error) { return console.log(error); });
    };
    ProfessorCourseComponent.prototype.onEditExam = function (id) {
        this.resetEditForm();
        this.newExam.examId = id;
        this.actionForModal = "edit";
        this.onGetById(this.newExam.examId);
        // this.model = this.newExam.date;
        // console.log(this.model);
        this.showEditDialog = !this.showEditDialog;
    };
    ProfessorCourseComponent.prototype.onAddExam = function () {
        this.resetAddForm();
        this.getExamsByProfessorAndCourse(this.professorUsername, this.courseId);
        this.newExam.examId = null;
        this.newExam.active = true;
        this.actionForModal = "add";
        this.showDialog = !this.showDialog;
    };
    ProfessorCourseComponent.prototype.onPutExam = function () {
        var _this = this;
        if (this.model.month <= 9) {
            this.model.month = "0" + this.model.month;
        }
        if (this.model.day <= 9) {
            this.model.day = "0" + this.model.day;
        }
        this.newExam.date = this.model.year + "-" + this.model.month + "-" + this.model.day;
        this._examService.updateExam(this.newExam).subscribe(function (response) { return [_this.getExamsByProfessorAndCourse(_this.professorUsername, _this.courseId), _this.resetEditForm()]; }, function (error) { return console.log(error); });
    };
    ProfessorCourseComponent.prototype.onPostExam = function () {
        var _this = this;
        this.newExam.date = this.newDate;
        this._examService.createNewExam(this.newExam).subscribe(function (response) { return [_this.exams.push(response), _this.resetAddForm()]; }, function (error) { return console.log(error); });
    };
    ProfessorCourseComponent.prototype.onRemoveExam = function (id) {
        this.showRemoveDialog = !this.showRemoveDialog;
        this.newExam.examId = id;
    };
    ProfessorCourseComponent.prototype.onRemoveConfirmed = function () {
        var _this = this;
        this._examService.deleteExam(this.newExam.examId).subscribe(function (response) { return [_this.getExamsByProfessorAndCourse(_this.professorUsername, _this.courseId)]; }, function (error) { return console.log(error); });
        this.showRemoveDialog = !this.showRemoveDialog;
    };
    ProfessorCourseComponent.prototype.resetAddForm = function () {
        this.addForm.resetForm();
    };
    ProfessorCourseComponent.prototype.resetEditForm = function () {
        this.editForm.resetForm();
    };
    ProfessorCourseComponent.prototype.onSubmit = function () {
        if (this.actionForModal === 'edit') {
            console.log(this.newExam);
            this.onPutExam();
            this.resetEditForm();
            this.showEditDialog = !this.showEditDialog;
        }
        if (this.actionForModal === 'add') {
            this.onPostExam();
            this.resetAddForm();
            this.showDialog = !this.showDialog;
        }
    };
    ProfessorCourseComponent.prototype.onGetById = function (id) {
        var _this = this;
        this._examService.getOne(id)
            .subscribe(function (response) { return _this.onPopulate(response.body.date, response.body.active); }, function (error) { return console.log(error); });
    };
    ProfessorCourseComponent.prototype.onPopulate = function (date, active) {
        this.newExam.date = date;
        this.newExam.active = true;
        this.newExam.courseId = this.courseId;
    };
    ProfessorCourseComponent.prototype.setNewDate = function (date) {
        console.log(date);
        this.newDate = date;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('addForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgForm */])
    ], ProfessorCourseComponent.prototype, "addForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgForm */])
    ], ProfessorCourseComponent.prototype, "editForm", void 0);
    ProfessorCourseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-professor-course',
            template: __webpack_require__("../../../../../src/app/professor-course/professor-course.component.html"),
            styles: [__webpack_require__("../../../../../src/app/professor-course/professor-course.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_exam_service__["a" /* ExamService */], __WEBPACK_IMPORTED_MODULE_2__authorization_authorization_service__["a" /* AuthorizationService */]])
    ], ProfessorCourseComponent);
    return ProfessorCourseComponent;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorPreExamObligationRecordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfessorPreExamObligationRecordsComponent = /** @class */ (function () {
    function ProfessorPreExamObligationRecordsComponent() {
    }
    ProfessorPreExamObligationRecordsComponent.prototype.ngOnInit = function () {
    };
    ProfessorPreExamObligationRecordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-professor-pre-exam-obligation-records',
            template: __webpack_require__("../../../../../src/app/professor-pre-exam-obligation-records/professor-pre-exam-obligation-records.component.html"),
            styles: [__webpack_require__("../../../../../src/app/professor-pre-exam-obligation-records/professor-pre-exam-obligation-records.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfessorPreExamObligationRecordsComponent);
    return ProfessorPreExamObligationRecordsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/professor-pre-exam-obligation/pre-exam-obligation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreExamObligationervice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PreExamObligationervice);
    return PreExamObligationervice;
}());



/***/ }),

/***/ "../../../../../src/app/professor-pre-exam-obligation/professor-pre-exam-obligation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hand {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/professor-pre-exam-obligation/professor-pre-exam-obligation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\n    <table class=\"table table-hover\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Max points</th>\n          <th>Set date/Grade</th>\n          <th>Edit/Remove</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let p of preExamObligations\">\n          <td>{{p.name}}</td>\n          <td>{{p.preExamOTypeName}}</td>\n          <td>{{p.maxPoints}}</td>\n          <td>\n            <button class=\"btn btn-info hand\" (click)=\"onSetDate(p.preExamOId)\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></button> ⧸ \n            <button class=\"btn btn-warning hand\" (click)=\"onGrade(p.preExamOId)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n          </td>\n          <td>\n            <button class=\"btn btn-success hand\" (click)=\"onEditPEO(p.preExamOId)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button> ⧸ \n            <button class=\"btn btn-danger hand\" (click)=\"onRemove(p.preExamOId)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <button class=\"btn btn-primary hand\" (click)=\"onAddObligation()\">New Pre exam obligation</button>\n   \n  </div>\n\n \n<app-dialog [(visible)]=\"showDialog\">\n    <h4>Add Pre exam obligation</h4>\n    <hr>\n    <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #f=\"ngForm\">\n  \n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"name\">Name</label>\n        <input id=\"name\" name=\"name\" type=\"text\" placeholder=\"name...\" class=\"form-control input-md\" [(ngModel)]=\"newPreExamObligation.name\" required\n          #name=\"ngModel\" maxlength=\"20\">\n        <span class=\"help-block\" *ngIf=\"name.touched && !name.valid\">\n          <i>name is required.</i>\n        </span>\n      </div>\n      <div class=\"form-group\">\n          <label class=\"control-label\" for=\"maxPoints\">Max points</label>\n          <input id=\"maxPoints\" name=\"maxPoints\" type=\"number\" [(value)]=\"newPreExamObligation.maxPoints\" placeholder=\"maxPoints...\" class=\"form-control input-md\" [(ngModel)]=\"newPreExamObligation.maxPoints\"  required\n            #maxPoints=\"ngModel\" >\n          <span class=\"help-block\" *ngIf=\"maxPoints.touched && !maxPoints.valid\">\n            <i>maxPoints is required and must be a number.</i>\n          </span>\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"typesSelect\" class=\"control-label\">Select type</label>\n          <select name=\"typesSelect\" [(ngModel)]=\"newPreExamObligation.preExamOTypeId\" id=\"typesSelect\" required class=\"form-control input-md\">\n            <option *ngFor=\"let t of types\" value=\"{{t.preExamObligationTypeId}}\">{{t.name}}</option>\n          </select>\n      </div>\n\n      <hr>\n      <div style=\"text-align: center\">\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Add</button>\n        <button type=\"button\" (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\n      </div>\n    </form>\n  \n</app-dialog>\n\n<app-dialog [(visible)]=\"showEditDialog\">\n  <h4>Edit Pre exam obligation</h4>\n  <hr>\n  <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #fe=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label class=\"control-label\" for=\"name\">Name</label>\n      <input id=\"editName\" name=\"editName\" type=\"text\" [(value)]=\"newPreExamObligation.name\" placeholder=\"name...\" class=\"form-control input-md\" [(ngModel)]=\"newPreExamObligation.name\"  required\n        #editName=\"ngModel\" maxlength=\"20\" >\n      <span class=\"help-block\" *ngIf=\"editName.touched && !editName.valid\">\n        <i>name is required.</i>\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"maxPoints\">Max points</label>\n        <input id=\"editMaxPoints\" name=\"editMaxPoints\" type=\"number\" min=\"0\" [(value)]=\"newPreExamObligation.maxPoints\" placeholder=\"maxPoints...\" class=\"form-control input-md\" [(ngModel)]=\"newPreExamObligation.maxPoints\"  required\n          #editMaxPoints=\"ngModel\" >\n        <span class=\"help-block\" *ngIf=\"editMaxPoints.touched && !editMaxPoints.valid\">\n          <i>maxPoints is required and must be a number.</i>\n        </span>\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"typesSelect\" class=\"control-label\">Select type</label>\n          <select name=\"editTypesSelect\" [(ngModel)]=\"newPreExamObligation.preExamOTypeId\" id=\"editTypesSelect\" required class=\"form-control input-md\">\n            <option *ngFor=\"let t of types\" value=\"{{t.preExamObligationTypeId}}\">{{t.name}}</option>\n          </select>\n      </div>\n\n    <hr>\n    <div style=\"text-align: center\">\n      <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!fe.valid\">Edit</button>\n      <button type=\"button\" (click)=\"showEditDialog = !showEditDialog\" class=\"btn\">Close</button>\n    </div>\n  </form>\n\n</app-dialog>\n\n<app-dialog [(visible)]=\"showRemoveDialog\">\n    <h4>Remove Pre exam obligation</h4>\n    <hr>\n        <label class=\"control-label\" for=\"name\">Are you sure u want to remove this obligation</label>\n      <hr>\n      <div style=\"text-align: center\">\n        <button class=\"btn btn-danger\" (click)=\"onRemoveConfirmed()\">Remove</button>\n        <button type=\"button\" (click)=\"showRemoveDialog = !showRemoveDialog\" class=\"btn\">Close</button>\n      </div>\n   \n  \n  </app-dialog>\n\n  <app-dialog [(visible)]=\"showSetDateDialog\">\n      <h4>Set Pre exam obligation date</h4>\n      <hr>\n      <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #fs=\"ngForm\">\n  \n        <div class=\"form-group\">\n              <label class=\"control-label\" for=\"obligationDate\">Set date</label>\n          <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"obligationDate\" [(ngModel)]=\"model\" ngbDatepicker required #d=\"ngbDatepicker\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                <img src=\"assets/img/calendar-icon.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\n              </button>\n            </div>\n          </div>\n        </div>\n    \n        <hr>\n        <div style=\"text-align: center\">\n          <button class=\"btn btn-info\" type=\"submit\" [disabled]=\"!fs.valid\">Set date</button>\n          <button type=\"button\" (click)=\"showSetDateDialog = !showSetDateDialog\" class=\"btn\">Close</button>\n        </div>\n      </form>\n    \n    </app-dialog>\n\n    <app-dialog [(visible)]=\"showGradeDialog\" class=\"grades\">\n      <h4>Grade pre exam obligations</h4>\n      <hr>\n      <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #fg=\"ngForm\">\n    \n        <table class=\"table table-hover\">\n          <thead class=\"thead-light\">\n            <tr >\n              <th>Student name<i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('lastName')\"></i></th>\n              <th>Tr number <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('transcriptNumber')\"></i></th>\n              <th>Date <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('date')\"></i></th>\n              <th>Points <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('points')\"></i></th>\n              <th>Passed <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('passed')\"></i></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let r of preExamObligationsRecords\">\n              <td>{{r.studentName}} {{r.studentLastName}}</td>\n              <td>{{r.trNumber}}</td>\n              <td>{{r.date}}</td>\n              <td>\n                <input type=\"number\" [(value)]=\"r.points\" placeholder=\"points\" class=\"form-control input-md\" style=\"width: 100px;\" >\n              </td>\n              \n              <td class=\"text-center\" style=\"vertical-align:middle\">\n                <input type=\"checkbox\" [(value)] = \"r.passed\" class=\"form-control input-md\" style=\"width: 40px;\" *ngIf=\"r.passed\" checked>\n                <input type=\"checkbox\" [(value)] = \"r.passed\" class=\"form-control input-md\" style=\"width: 40px;\" *ngIf=\"!r.passed\" >\n              </td>\n              <!--\n               <td>{{r.points}}</td> \n              <td>{{r.passed}}</td> -->\n            </tr>\n          </tbody>\n        </table>\n\n        <hr>\n        <div style=\"text-align: center\">\n          <button class=\"btn btn-warning\" type=\"submit\">Grade</button>\n          <button type=\"button\" (click)=\"showGradeDialog = !showGradeDialog\" class=\"btn\">Close</button>\n        </div>\n      </form>\n    \n    </app-dialog>\n"

/***/ }),

/***/ "../../../../../src/app/professor-pre-exam-obligation/professor-pre-exam-obligation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorPreExamObligationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pre_exam_obligation_service__ = __webpack_require__("../../../../../src/app/professor-pre-exam-obligation/pre-exam-obligation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_exam_o_type_pre_exam_o_type_service__ = __webpack_require__("../../../../../src/app/pre-exam-o-type/pre-exam-o-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_pre_exam_obligation_pre_exam_obligation_records_service__ = __webpack_require__("../../../../../src/app/student-pre-exam-obligation/pre-exam-obligation-records.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
        this.sortDirection = "asc";
        this.isAscending = true;
        this.actionForModal = "";
        this.sortParam = "date";
    }
    ProfessorPreExamObligationComponent.prototype.ngOnInit = function () {
        this.newPreExamObligation.courseId = this.courseId;
        this.getPreExamObligationByCourseId(this.courseId);
    };
    ProfessorPreExamObligationComponent.prototype.getPreExamObligationByCourseId = function (id) {
        var _this = this;
        this.preExamObligationService.getAllByCourse(id).subscribe(function (response) { return (_this.preExamObligations = response.body); }, function (error) { return console.log(error); });
    };
    ProfessorPreExamObligationComponent.prototype.getobligationsRecords = function (id, sortParam, sortDirection) {
        var _this = this;
        this.recordsServoce.getAllByPreExamObligation(id, sortParam, sortDirection).subscribe(function (response) { return (_this.preExamObligationsRecords = response.body); }, function (error) { return console.log(error); });
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
        this.getobligationsRecords(id, this.sortParam, this.sortDirection);
        this.newPreExamObligation.preExamOId = id;
        this.actionForModal = "grade";
        this.showGradeDialog = !this.showGradeDialog;
    };
    ProfessorPreExamObligationComponent.prototype.onPostGrade = function () {
        this.recordsServoce.gradeRecords(this.preExamObligationsRecords);
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
            console.log(this.preExamObligationsRecords);
            this.onPostGrade();
            console.log("1");
            this.showGradeDialog = !this.showGradeDialog;
        }
    };
    ProfessorPreExamObligationComponent.prototype.onSort = function (sortParam) {
        this.isAscending = !this.isAscending;
        this.isAscending ? this.sortDirection = "asc" : this.sortDirection = "desc";
        this.sortParam = sortParam;
        this.onGrade(this.newPreExamObligation.preExamOId);
        this.showGradeDialog = !this.showGradeDialog;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ProfessorPreExamObligationComponent.prototype, "userId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ProfessorPreExamObligationComponent.prototype, "courseId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgForm */])
    ], ProfessorPreExamObligationComponent.prototype, "addObligationForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgForm */])
    ], ProfessorPreExamObligationComponent.prototype, "editObligationForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgForm */])
    ], ProfessorPreExamObligationComponent.prototype, "setObligationDateForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fg'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgForm */])
    ], ProfessorPreExamObligationComponent.prototype, "gradeObligationForm", void 0);
    ProfessorPreExamObligationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-professor-pre-exam-obligation',
            template: __webpack_require__("../../../../../src/app/professor-pre-exam-obligation/professor-pre-exam-obligation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/professor-pre-exam-obligation/professor-pre-exam-obligation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pre_exam_obligation_service__["a" /* PreExamObligationervice */],
            __WEBPACK_IMPORTED_MODULE_2__pre_exam_o_type_pre_exam_o_type_service__["a" /* PreExamOTypeService */],
            __WEBPACK_IMPORTED_MODULE_4__student_pre_exam_obligation_pre_exam_obligation_records_service__["a" /* PreExamObligationRecordsService */]])
    ], ProfessorPreExamObligationComponent);
    return ProfessorPreExamObligationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/professor-type/professor-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/professor-type/professor-type.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  professor-type works!\r\n</p>\r\n<div class=\"container-fluid pt-5\">\r\n  <table class=\"table table-hover\">\r\n    <thead class=\"thead-light\">\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Edit/Remove</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let t of professorTypes\">\r\n        <td>{{t.name}}</td>\r\n        <td>\r\n          <button class=\"btn btn-success hand\" (click)=\"onEditType(t.professorTypeId)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button> ⧸ \r\n          <button class=\"btn btn-danger hand\"  (click)=\"onRemove(t.professorTypeId)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button class=\"btn btn-primary hand\" (click)=\"onAddType()\">New Type</button>\r\n</div>\r\n<app-dialog [(visible)]=\"showDialog\">\r\n  <h4>Add type</h4>\r\n  <hr>\r\n  <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #f=\"ngForm\">\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"name\">Name</label>\r\n      <input id=\"name\" name=\"name\" type=\"text\" placeholder=\"name...\" class=\"form-control input-md\" [(ngModel)]=\"newProfessorType.name\" required\r\n        #name=\"ngModel\" maxlength=\"20\">\r\n      <span class=\"help-block\" *ngIf=\"name.touched && !name.valid\">\r\n        <i>name is required.</i>\r\n      </span>\r\n    </div>\r\n\r\n    <hr>\r\n    <div style=\"text-align: center\">\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Add</button>\r\n      <button type=\"button\" (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\r\n    </div>\r\n  </form>\r\n\r\n</app-dialog>\r\n\r\n<app-dialog [(visible)]=\"showEditDialog\">\r\n  <h4>Edit type</h4>\r\n  <hr>\r\n  <form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" #fe=\"ngForm\">\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"name\">Name</label>\r\n      <input id=\"editName\" name=\"editName\" type=\"text\" [(value)]=\"newProfessorType.name\" placeholder=\"name...\" class=\"form-control input-md\" [(ngModel)]=\"newProfessorType.name\"  required\r\n        #editName=\"ngModel\" maxlength=\"20\" >\r\n      <span class=\"help-block\" *ngIf=\"editName.touched && !editName.valid\">\r\n        <i>name is required.</i>\r\n      </span>\r\n    </div>\r\n\r\n    <hr>\r\n    <div style=\"text-align: center\">\r\n      <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">Edit</button>\r\n      <button type=\"button\" (click)=\"showEditDialog = !showEditDialog\" class=\"btn\">Close</button>\r\n    </div>\r\n  </form>\r\n\r\n</app-dialog>\r\n\r\n<app-dialog [(visible)]=\"showRemoveDialog\">\r\n    <h4>Remove type</h4>\r\n    <hr>\r\n        <label class=\"control-label\" for=\"name\">Are you sure u want to remove this rofessor type</label>\r\n      <hr>\r\n      <div style=\"text-align: center\">\r\n        <button class=\"btn btn-danger\" (click)=\"onRemoveConfirmed()\">Remove</button>\r\n        <button type=\"button\" (click)=\"showRemoveDialog = !showRemoveDialog\" class=\"btn\">Close</button>\r\n      </div>\r\n   \r\n  \r\n  </app-dialog>\r\n"

/***/ }),

/***/ "../../../../../src/app/professor-type/professor-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__professor_type_service__ = __webpack_require__("../../../../../src/app/professor-type/professor_type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessorTypeComponent = /** @class */ (function () {
    function ProfessorTypeComponent(professorTypeService) {
        this.professorTypeService = professorTypeService;
        this.professorTypes = [];
        this.newProfessorType = {
            professorTypeId: 0,
            name: "",
            active: true
        };
        this.showDialog = false;
        this.showEditDialog = false;
        this.showRemoveDialog = false;
        this.actionForModal = "";
    }
    ProfessorTypeComponent.prototype.ngOnInit = function () {
        this.getProfessorTypes();
    };
    ProfessorTypeComponent.prototype.onPopulateJsonType = function (name) {
        this.newProfessorType.name = name;
    };
    ProfessorTypeComponent.prototype.onGetById = function (id) {
        var _this = this;
        this.professorTypeService.getOne(id)
            .subscribe(function (response) { return (_this.onPopulateJsonType(response.body.name)); }, function (error) { return console.log(error); });
    };
    ProfessorTypeComponent.prototype.getProfessorTypes = function () {
        var _this = this;
        this.professorTypeService.getAll().subscribe(function (response) { return (_this.professorTypes = response.body); }, function (error) { return console.log(error); });
    };
    ProfessorTypeComponent.prototype.createProfessorType = function () {
        var _this = this;
        this.professorTypeService.postNewType(this.newProfessorType)
            .subscribe(function (response) { return [_this.professorTypes.push(response), _this.resetAddForm()]; }, function (error) { return console.log(error); });
    };
    ProfessorTypeComponent.prototype.onEditType = function (id) {
        this.resetEditForm();
        this.newProfessorType.professorTypeId = id;
        this.actionForModal = "edit";
        this.onGetById(this.newProfessorType.professorTypeId);
        this.showEditDialog = !this.showEditDialog;
    };
    ProfessorTypeComponent.prototype.onAddType = function () {
        this.resetAddForm();
        this.newProfessorType.active = true;
        this.showDialog = !this.showDialog;
        this.actionForModal = "add";
    };
    ProfessorTypeComponent.prototype.resetAddForm = function () {
        this.addTypeForm.resetForm();
    };
    ProfessorTypeComponent.prototype.resetEditForm = function () {
        this.editTypeForm.resetForm();
    };
    ProfessorTypeComponent.prototype.onPutType = function () {
        var _this = this;
        this.professorTypeService.editType(this.newProfessorType).subscribe(function (response) { return [_this.getProfessorTypes(), _this.resetEditForm()]; }, function (error) { return console.log(error); });
    };
    ProfessorTypeComponent.prototype.onRemove = function (id) {
        this.showRemoveDialog = !this.showRemoveDialog;
        this.newProfessorType.professorTypeId = id;
    };
    ProfessorTypeComponent.prototype.onRemoveConfirmed = function () {
        var _this = this;
        this.professorTypeService.changeActive(this.newProfessorType.professorTypeId).subscribe(function (response) { return [_this.getProfessorTypes()]; }, function (error) { return console.log(error); });
        this.showRemoveDialog = !this.showRemoveDialog;
    };
    ProfessorTypeComponent.prototype.onSubmit = function () {
        if (this.actionForModal === 'edit') {
            this.onPutType();
            this.resetEditForm();
            this.showEditDialog = !this.showEditDialog;
        }
        if (this.actionForModal === 'add') {
            this.createProfessorType();
            this.resetAddForm();
            this.showDialog = !this.showDialog;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], ProfessorTypeComponent.prototype, "addTypeForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], ProfessorTypeComponent.prototype, "editTypeForm", void 0);
    ProfessorTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-professor-type',
            template: __webpack_require__("../../../../../src/app/professor-type/professor-type.component.html"),
            styles: [__webpack_require__("../../../../../src/app/professor-type/professor-type.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__professor_type_service__["a" /* ProfessorTypeService */]])
    ], ProfessorTypeComponent);
    return ProfessorTypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/professor-type/professor_type.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfessorTypeService = /** @class */ (function () {
    function ProfessorTypeService(http) {
        this.http = http;
        this.path = "/api/professor_types";
    }
    ProfessorTypeService.prototype.getAll = function () {
        return this.http.get(this.path, { observe: 'response' });
    };
    ProfessorTypeService.prototype.postNewType = function (newType) {
        return this.http.post(this.path, newType);
    };
    ProfessorTypeService.prototype.getOne = function (id) {
        return this.http.get(this.path + "/" + id, { observe: 'response' });
    };
    ProfessorTypeService.prototype.editType = function (type) {
        return this.http.put(this.path, type);
    };
    ProfessorTypeService.prototype.changeActive = function (id) {
        return this.http.delete(this.path + "/" + id, { responseType: 'text' });
    };
    ProfessorTypeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProfessorTypeService);
    return ProfessorTypeService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/exam.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExamService = /** @class */ (function () {
    function ExamService(http) {
        this.http = http;
        this.path = "api/exams";
    }
    ExamService.prototype.getAll = function (page, size, sortParam, sortDirection, term) {
        return this.http.get(this.path + "?searchTerm=" + term + "&page=" + page + "&size="
            + size + "&sort=" + sortParam + "," + sortDirection, { observe: 'response' });
    };
    ExamService.prototype.getOne = function (id) {
        return this.http.get(this.path + "/" + id, { observe: 'response' });
    };
    ExamService.prototype.getByProfessorAndCourse = function (professorUsername, courseId) {
        return this.http.get(this.path + "/by-professor-course?professorUsername=" + professorUsername + "&courseId=" + courseId, { observe: 'response' });
    };
    ExamService.prototype.createNewExam = function (exam) {
        return this.http.post(this.path, exam);
    };
    ExamService.prototype.updateExam = function (exam) {
        return this.http.put(this.path, exam);
    };
    ExamService.prototype.deleteExam = function (examId) {
        return this.http.delete(this.path + "/" + examId);
    };
    ExamService.prototype.setExamDate = function (id, year, month, day) {
        return this.http.post(this.path + "/exam-date" + "/" + id + "/" + year + "/" + month + "/" + day, null);
    };
    ExamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], ExamService);
    return ExamService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/role.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.path = "/api/roles";
    }
    RoleService.prototype.getAllRoles = function () {
        return this.http.get(this.path);
    };
    RoleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], RoleService);
    return RoleService;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentCourseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentCourseComponent = /** @class */ (function () {
    function StudentCourseComponent() {
    }
    StudentCourseComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], StudentCourseComponent.prototype, "userId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], StudentCourseComponent.prototype, "courseId", void 0);
    StudentCourseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-student-course',
            template: __webpack_require__("../../../../../src/app/student-course/student-course.component.html"),
            styles: [__webpack_require__("../../../../../src/app/student-course/student-course.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentCourseComponent);
    return StudentCourseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/student-payments/student-payments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-payments/student-payments.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid pt-5\">\r\n    <table class=\"table table-hover\">\r\n      <thead class=\"thead-light\">\r\n          <tr>\r\n              <th>Payments</th>\r\n              <th>Description</th>\r\n              <th>Value</th>\r\n          </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let p of payments; let i = index\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{p.description}}</td>\r\n            <td>{{p.value}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/student-payments/student-payments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPaymentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__student_payments_service__ = __webpack_require__("../../../../../src/app/student-payments/student_payments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentPaymentsComponent = /** @class */ (function () {
    function StudentPaymentsComponent(studentPaymentsService) {
        this.studentPaymentsService = studentPaymentsService;
        this.payments = [];
    }
    StudentPaymentsComponent.prototype.ngOnInit = function () {
        this.getPaymentsForStudent(this.userId);
    };
    StudentPaymentsComponent.prototype.getPaymentsForStudent = function (userId) {
        var _this = this;
        this.studentPaymentsService.getPaymentsForStudent(this.userId).subscribe(function (response) { return (_this.payments = response.body); }),
            function (error) { return console.log(error); };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], StudentPaymentsComponent.prototype, "userId", void 0);
    StudentPaymentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-student-payments',
            template: __webpack_require__("../../../../../src/app/student-payments/student-payments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/student-payments/student-payments.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__student_payments_service__["a" /* StudentPaymentsService */]])
    ], StudentPaymentsComponent);
    return StudentPaymentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/student-payments/student_payments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPaymentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentPaymentsService = /** @class */ (function () {
    function StudentPaymentsService(http) {
        this.http = http;
        this.path = "/api/payments";
    }
    StudentPaymentsService.prototype.getAll = function () {
        return this.http.get(this.path, { observe: 'response' });
    };
    StudentPaymentsService.prototype.getPaymentsForStudent = function (userId) {
        return this.http.get(this.path + "/payments_for_student/" + userId, { observe: 'response' });
    };
    StudentPaymentsService.prototype.postNewType = function (newType) {
        return this.http.post(this.path, newType);
    };
    StudentPaymentsService.prototype.getOne = function (id) {
        return this.http.get(this.path + "/" + id, { observe: 'response' });
    };
    StudentPaymentsService.prototype.editType = function (type) {
        return this.http.put(this.path, type);
    };
    StudentPaymentsService.prototype.changeActive = function (id) {
        return this.http.delete(this.path + "/" + id, { responseType: 'text' });
    };
    StudentPaymentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], StudentPaymentsService);
    return StudentPaymentsService;
}());



/***/ }),

/***/ "../../../../../src/app/student-pre-exam-obligation/pre-exam-obligation-records.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreExamObligationRecordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    PreExamObligationRecordsService.prototype.getAllByPreExamObligation = function (id, sortParam, sortDirection) {
        return this.http.get(this.path + "/preexamobligation/" + id + "/sortpar/" + sortParam + "/sortdir/" + sortDirection, { observe: 'response' });
    };
    PreExamObligationRecordsService.prototype.setObligationDate = function (id, year, month, day) {
        return this.http.post(this.path + "/create-records" + "/" + id + "/" + year + "/" + month + "/" + day, null);
    };
    PreExamObligationRecordsService.prototype.gradeRecords = function (reccords) {
        return this.http.post(this.path + "/grade", reccords);
    };
    PreExamObligationRecordsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PreExamObligationRecordsService);
    return PreExamObligationRecordsService;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPreExamObligationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pre_exam_obligation_records_service__ = __webpack_require__("../../../../../src/app/student-pre-exam-obligation/pre-exam-obligation-records.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], StudentPreExamObligationComponent.prototype, "userId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], StudentPreExamObligationComponent.prototype, "courseId", void 0);
    StudentPreExamObligationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-student-pre-exam-obligation',
            template: __webpack_require__("../../../../../src/app/student-pre-exam-obligation/student-pre-exam-obligation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/student-pre-exam-obligation/student-pre-exam-obligation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pre_exam_obligation_records_service__["a" /* PreExamObligationRecordsService */]])
    ], StudentPreExamObligationComponent);
    return StudentPreExamObligationComponent;
}());



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

module.exports = "<div class=\"container pt-5\">\r\n    <div class=\"row my-2\">\r\n        <div class=\"col-lg-8 order-lg-2\">\r\n            <ul class=\"nav nav-tabs\">\r\n                <li class=\"nav-item\">\r\n                    <a href=\"\" data-target=\"#profile\" data-toggle=\"tab\" class=\"nav-link active\">Profile</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a href=\"\" data-target=\"#edit\" data-toggle=\"tab\" class=\"nav-link\">Edit</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a href=\"\" data-target=\"#psw\" data-toggle=\"tab\" class=\"nav-link\">Change password</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"tab-content py-4\">\r\n                <div class=\"tab-pane active\" id=\"profile\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8\">\r\n                            <table class=\"table\">\r\n                                <tr>\r\n                                    <td> Name: </td>\r\n                                    <td> {{user.firstName}} {{user.lastName}} </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td> Username: </td>\r\n                                    <td> {{user.username}} </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td> Date of birth: </td>\r\n                                    <td> {{dateOfBirth}} </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td> Phone number: </td>\r\n                                    <td> {{user.phoneNumber}} </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td> Address: </td>\r\n                                    <td> {{user.address}} </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td> Roles: </td>\r\n                                    <td> {{user.roleName}} </td>\r\n                                </tr>\r\n                            </table>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <!--/row-->\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"psw\">\r\n                    <div class=\"alert alert-info alert-dismissible fade show\" *ngIf=\"showMessage\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"showMessage = false;\">&times;</button>\r\n                        {{ messagge }}\r\n                    </div>\r\n                    <form role=\"form\" #fPsw=\"ngForm\" (ngSubmit)=\"changePassword()\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Old password</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input class=\"form-control\" type=\"password\" id=\"oldPassword\" name=\"oldPassword\" required #oldPassword=\"ngModel\" [(ngModel)]=\"oldPass\">\r\n                                <span class=\"help-block\" *ngIf=\"oldPassword.touched && !oldPassword.valid\">\r\n                                    <i>This field is required.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">New password</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input class=\"form-control\" (keyup)=\"checkPasswords()\" type=\"password\" id=\"newPassword\" name=\"newPassword\" required #newPassword=\"ngModel\"\r\n                                    [(ngModel)]=\"newPass\">\r\n                                <span class=\"help-block\" *ngIf=\"newPassword.touched && !newPassword.valid\">\r\n                                    <i>This field is required.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Repeat password</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input class=\"form-control\" type=\"password\" required #repeatedPassword=\"ngModel\" id=\"repeatedPassword\" name=\"repeatedPassword\"\r\n                                    [(ngModel)]=\"repeatedPass\" (keyup)=\"checkPasswords()\">\r\n                                <span class=\"help-block\" *ngIf=\"repeatedPassword.touched && !repeatedPassword.valid\">\r\n                                    <i>This field is required.</i>\r\n                                </span>\r\n                                <span class=\"help-block\" *ngIf=\"!matchingPasswords\">\r\n                                    <i>Passwords are not the same.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\"></label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"reset\" class=\"btn btn-secondary\" value=\"Cancel\">\r\n                                <input type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!fPsw.valid || !matchingPasswords\" value=\"Save Changes\">\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"edit\">\r\n                    <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"userEdit()\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">First name</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input class=\"form-control\" type=\"text\" [(value)]=\"user.firstName\" id=\"firstName\" name=\"firstName\" required #firstName=\"ngModel\"\r\n                                    maxlength=\"20\" [(ngModel)]=\"user.firstName\">\r\n                                <span class=\"help-block\" *ngIf=\"firstName.touched && !firstName.valid\">\r\n                                    <i>First name is required.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Last name</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input class=\"form-control\" type=\"text\" [(value)]=\"user.lastName\" id=\"lastName\" name=\"lastName\" required #lastName=\"ngModel\"\r\n                                    maxlength=\"20\" [(ngModel)]=\"user.lastName\">\r\n                                <span class=\"help-block\" *ngIf=\"lastName.touched && !lastName.valid\">\r\n                                    <i>Last name is required.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Username</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input class=\"form-control\" type=\"text\" [(value)]=\"user.username\" required #username=\"ngModel\" id=\"username\" name=\"username\"\r\n                                    [(ngModel)]=\"user.username\" maxlength=\"20\" (keyup)=\"isUsernameUnique()\" [ngClass]=\"{'not-unique':!isUnique}\">\r\n                                <span class=\"help-block\" *ngIf=\"username.touched && !username.valid\">\r\n                                    <i>Username is required.</i>\r\n                                </span>\r\n                                <span class=\"help-block\" *ngIf=\"username.touched && !isUnique\">\r\n                                    <i>This username is taken.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Phone number</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input id=\"phoneNumber\" name=\"phoneNumber\" #phoneNumber=\"ngModel\" [(ngModel)]=\"user.phoneNumber\" maxlength=\"20\" class=\"form-control\"\r\n                                    type=\"text\" [(value)]=\"user.phoneNumber\">\r\n                                <span class=\"help-block\" *ngIf=\"phoneNumber.touched && !phoneNumber.valid\">\r\n                                    <i>Can't contain more than 20 characters.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Address</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input id=\"address\" name=\"address\" class=\"form-control\" type=\"text\" [(value)]=\"user.address\" maxlength=\"30\" [(ngModel)]=\"user.address\"\r\n                                    #address=\"ngModel\">\r\n                                <span class=\"help-block\" *ngIf=\"address.touched && !address.valid\">\r\n                                    <i>Can't contain more than 30 characters.</i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Date od birth</label>\r\n                            <div class=\"col-lg-9\">\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\r\n                                            <img src=\"assets/img/calendar-icon.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\">Roles\r\n                                <br>\r\n                                <small>\r\n                                    <i>({{user.roleName}})</i>\r\n                                </small>\r\n                            </label>\r\n                            <div class=\"col-lg-9\">\r\n                                <select name=\"rolesSelect\" [(ngModel)]=\"user.roleId\" multiple class=\"form-control\" id=\"rolesSelect\" required>\r\n                                    <option class=\"selected\" *ngFor=\"let r of roles\" value=\"{{r.roleId}}\">{{r.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-lg-3 col-form-label form-control-label\"></label>\r\n                            <div class=\"col-lg-9\">\r\n                                <input type=\"reset\" class=\"btn btn-secondary\" value=\"Cancel\">\r\n                                <input type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid || !isUnique\" value=\"Save Changes\">\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 order-lg-1 text-center\">\r\n            <img src=\"assets/img/{{user.imagePath}}\" class=\"mx-auto img-fluid img-circle d-block\" alt=\"avatar\">\r\n            <h6 class=\"mt-2\">Upload a different photo</h6>\r\n            <label class=\"btn btn-success cursor-pointer\" style=\"width:75px;\">\r\n                Browse\r\n                <input type=\"file\" id=\"file\" class=\"custom-file-input cursor-pointer\" (change)=\"fileChange($event)\">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <app-student-pre-exam-obligation [(userId)]=\"userId\" [(courseId)]=\"courseId\"></app-student-pre-exam-obligation>\r\n    <app-professor-pre-exam-obligation [(userId)]=\"userId\" [(courseId)]=\"courseId\"></app-professor-pre-exam-obligation>\r\n    <div *ngIf=\"user.roleId == 3\">\r\n        <app-student-payments [(userId)]=\"userId\"></app-student-payments>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_service__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_role_service__ = __webpack_require__("../../../../../src/app/shared/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("fPsw"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* NgForm */])
    ], UserProfileComponent.prototype, "passEditForm", void 0);
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__user_profile_service__["a" /* UserProfileService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_role_service__["a" /* RoleService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileService = /** @class */ (function () {
    function UserProfileService(http) {
        this.http = http;
        this.path = "/api/users";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]().set('Content-Type', 'application/json');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserProfileService);
    return UserProfileService;
}());



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

module.exports = "<div class=\"container-fluid pt-5\">\r\n  <div style=\"text-align: center;\">\r\n    <div class=\"container-fluid mb\">\r\n\r\n      <div class=\"input-group\">\r\n        <select class=\"form-control col-md-4 mr ml\" [(ngModel)]=\"userStatus\" (change)=\"onSelectUserStatus()\">\r\n          <option value=\"all\" selected=\"selected\">All users</option>\r\n          <option value=\"active\">Active only</option>\r\n          <option value=\"notactive\">Not active</option>\r\n        </select>\r\n        <input type=\"text\" (keyup)=\"onSelectUserStatus()\" class=\"form-control col-md-4 mr\" [(ngModel)]=\"searchTerm\" placeholder=\"Search\"\r\n          aria-describedby=\"basic-addon1\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <table class=\"table table-hover\">\r\n    <thead class=\"thead-light\">\r\n      <tr>\r\n        <th style=\"text-align: center;\"> A/D</th>\r\n        <th>No.</th>\r\n        <th>First name\r\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('firstName')\"></i>\r\n        </th>\r\n        <th>Last name\r\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('lastName')\"></i>\r\n        </th>\r\n        <th>Username\r\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('username')\"></i>\r\n        </th>\r\n        <th>Date of birth\r\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('dateOfBirth')\"></i>\r\n        </th>\r\n        <th>Address\r\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('address')\"></i>\r\n        </th>\r\n        <th>Phone number\r\n          <i class=\"fa fa-fw fa-sort hand\" (click)=\"onSort('phoneNumber')\"></i>\r\n        </th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr [ngClass]=\"{'table-danger': !u.active}\" *ngFor=\"let u of users; let i = index\">\r\n        <td>\r\n          <button type=\"button\" *ngIf=\"u.active\" (click)=\"changeUserStatus(u.userId)\" title=\"Deactivate account\" class=\"btn btn-sm btn-outline-danger\">Deactivate</button>\r\n          <button type=\"button\" *ngIf=\"!u.active\" (click)=\"changeUserStatus(u.userId)\" title=\"Activate account\" class=\"btn btn-sm btn-outline-success\">Activate</button>\r\n        </td>\r\n        <td>{{i + 1}}</td>\r\n        <td>{{u.firstName}}</td>\r\n        <td>{{u.lastName}}</td>\r\n        <td>\r\n          <a class=\"hand\" [routerLink]=\"['/profile', u.userId]\" title=\"Go to user profile.\">{{u.username}}</a>\r\n        </td>\r\n        <td>{{u.dateOfBirth}}</td>\r\n        <td>{{u.address}}</td>\r\n        <td>{{u.phoneNumber}}</td>\r\n        <td style=\"display: block;\">\r\n          <div *ngFor=\"let r of u.roleName\">\r\n            <span class=\"badge badge-primary\">\r\n              <small>{{r}}</small>\r\n            </span>\r\n            <br>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div>\r\n\r\n    <button class=\"btn btn-primary hand pull-right\" (click)=\"showDialog = !showDialog;resetAddForm();getRoles();\">New user</button>\r\n    <app-pagination class=\"\" [(totalPages)]=\"totalPages\" (emitPageNum)=\"selectPageNum($event)\"></app-pagination>\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <app-dialog [(visible)]=\"showDialog\">\r\n    <h4>Add user</h4>\r\n    <hr>\r\n    <form (ngSubmit)=\"postNewUser()\" class=\"form-horizontal\" #f=\"ngForm\">\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"username\">Username</label>\r\n        <input id=\"username\" name=\"username\" [ngClass]=\"{'not-unique':!isUnique}\" type=\"text\" placeholder=\"Username...\" (keyup)=\"isUsernameUnique()\"\r\n          class=\"form-control input-md\" [(ngModel)]=\"newUser.username\" required #username=\"ngModel\" maxlength=\"20\">\r\n        <span class=\"help-block\" *ngIf=\"username.touched && !username.valid\">\r\n          <i>Username is required.</i>\r\n        </span>\r\n        <span class=\"help-block\" *ngIf=\"username.touched && !isUnique\">\r\n          <i>This username is taken.</i>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"firstName\">First name</label>\r\n        <input id=\"firstName\" name=\"firstName\" type=\"text\" placeholder=\"First name...\" class=\"form-control input-md\" [(ngModel)]=\"newUser.firstName\"\r\n          required #firstName=\"ngModel\" maxlength=\"20\">\r\n        <span class=\"help-block\" *ngIf=\"firstName.touched && !firstName.valid\">\r\n          <i>First name is required.</i>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"lastName\">Last name</label>\r\n        <input id=\"lastName\" name=\"lastName\" type=\"text\" placeholder=\"Last name...\" class=\"form-control input-md\" [(ngModel)]=\"newUser.lastName\"\r\n          required #lastName=\"ngModel\" maxlength=\"20\">\r\n        <span class=\"help-block\" *ngIf=\"lastName.touched && !lastName.valid\">\r\n          <i>Last name is required.</i>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"address\">Address</label>\r\n        <input id=\"address\" name=\"address\" type=\"text\" placeholder=\"Address...\" class=\"form-control input-md\" [(ngModel)]=\"newUser.address\"\r\n          #address=\"ngModel\" maxlength=\"30\">\r\n        <span class=\"help-block\" *ngIf=\"address.touched && !address.valid\">\r\n          <i>Can't contain more than 30 characters.</i>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"phoneNumber\">Phone number</label>\r\n        <input id=\"phoneNumber\" name=\"phoneNumber\" type=\"text\" placeholder=\"Phone number...\" class=\"form-control input-md\" [(ngModel)]=\"newUser.phoneNumber\"\r\n          #phoneNumber=\"ngModel\" maxlength=\"20\">\r\n        <span class=\"help-block\" *ngIf=\"phoneNumber.touched && !phoneNumber.valid\">\r\n          <i>Can't contain more than 20 characters.</i>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"dp\">Date of birth</label>\r\n        <div class=\"input-group\">\r\n          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\r\n              <img src=\"assets/img/calendar-icon.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"rolesSelect\" class=\"control-label\">Select roles</label>\r\n        <select name=\"rolesSelect\" [(ngModel)]=\"newUser.roleId\" multiple class=\"form-control\" id=\"rolesSelect\" required>\r\n          <option *ngFor=\"let r of roles\" value=\"{{r.roleId}}\">{{r.name}}</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div *ngIf=\"newUser.roleId && newUser.roleId[0] == 2\">\r\n      <label for=\"professorTypeSelect\" class=\"control-label\">Select professor type</label>\r\n        <select name=\"professorTypeSelect\" multiple class=\"form-control\" id=\"professorTypeSelect\" required>\r\n          <option *ngFor=\"let pt of professorTypes\" >{{pt.name}}</option>\r\n        </select>\r\n      </div>\r\n\r\n      <hr>\r\n      <div style=\"text-align: center\">\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid || !isUnique\">Add</button>\r\n        <button type=\"button\" (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\r\n      </div>\r\n    </form>\r\n\r\n  </app-dialog>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_role_service__ = __webpack_require__("../../../../../src/app/shared/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__professor_type_professor_type_service__ = __webpack_require__("../../../../../src/app/professor-type/professor_type.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = /** @class */ (function () {
    function UserComponent(userService, roleService, professorTypeService, router) {
        this.userService = userService;
        this.roleService = roleService;
        this.professorTypeService = professorTypeService;
        this.router = router;
        this.users = [];
        this.roles = [];
        this.professorTypes = [];
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
        this.getProfessorTypes();
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
    UserComponent.prototype.getProfessorTypes = function () {
        var _this = this;
        this.professorTypeService.getAll().subscribe(function (response) { return (_this.professorTypes = response.body); }, function (error) { return console.log(error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], UserComponent.prototype, "addUserForm", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_role_service__["a" /* RoleService */], __WEBPACK_IMPORTED_MODULE_5__professor_type_professor_type_service__["a" /* ProfessorTypeService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    UserService.prototype.getAllForPayments = function () {
        return this.http.get(this.path + "/users_payments");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map