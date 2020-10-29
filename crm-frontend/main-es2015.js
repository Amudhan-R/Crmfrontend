(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-welcome></app-welcome> -->\n\n<!-- <app-login></app-login> -->\n\n<app-menu></app-menu>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer-form/customer-form.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer-form/customer-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Customer</h1>\n\n<div class=\"container\">\n    <div class=\"alert alert-warning\" *ngIf=\"customerForm.dirty && customerForm.invalid\">Please, Type a valid inputs!</div>\n    <div class=\"alert alert-warning\" *ngIf=\"customerForm.dirty && name.invalid\">Enter atleast 2 characters in name field!</div>\n    <div class=\"alert alert-warning\" *ngIf=\"customerForm.dirty && email.invalid\">Please, Type a valid email!</div>\n\n    <form (ngSubmit)=\"!customerForm.invalid && onSave()\" #customerForm=\"ngForm\">\n        <fieldset class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" #name=\"ngModel\" [(ngModel)]=\"customer.name\" class=\"form-control\" name=\"name\" required=\"required\" minlength=\"5\">\n        </fieldset>\n        <fieldset class=\"form-group\">\n            <label>Birth Date</label>\n            <input type=\"date\"\n            [ngModel]=\"customer.birthDate | date:'yyyy-MM-dd'\"\n            (ngModelChange)=\"customer.birthDate = $event\"\n            class=\"form-control\" name=\"birthDate\">\n        </fieldset>\n        <fieldset class=\"form-group\">\n            <label>Email</label>\n            <input type=\"email\" #email=\"ngModel\" [(ngModel)]=\"customer.email\" class=\"form-control\" name=\"email\" required=\"required\">\n        </fieldset>\n        <button type=\"submit\" class=\"btn btn-success\" >Save</button>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customers/customers.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customers/customers.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"alert alert-success\" *ngIf='message'>{{message}}</div>\n<div class=\"card mt-5\">\n    <div class=\"card-header\">\n            <h1>Customers Manager</h1>\n    </div>\n    <div class=\"card-body\">\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>ID</th>\n                <th>Name</th>\n                <th>Birth Date</th>\n                <th>Email</th>\n                <th colspan=\"2\">Actions</th>\n            </tr>\n        </thead>\n        <tbody>\n            <!-- like: for(Customer customer: customers) { -->\n            <tr *ngFor=\"let customer of customers\">\n                <td>{{customer.id}}</td>\n                <td>{{customer.name}}</td>\n                <td>{{customer.birthDate | date | uppercase}}</td> <!-- | : pipe (use to convert one field format to another format) -->\n                <td>{{customer.email}}</td>\n                <!-- <td><button (click)=\"updateCustomer(customer.id)\" class=\"btn btn-success\">Update</button></td>\n                <td><button (click)=\"deleteCustomer(customer.id)\" class=\"btn btn-warning\">Delete</button></td> -->\n                <td><div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                    <label class=\"btn btn-success active btn-sm\">\n                      <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked (click)=\"updateCustomer(customer.id)\"> Update\n                    </label>\n                    <label class=\"btn btn-danger btn-sm\">\n                      <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\" (click)=\"deleteCustomer(customer.id)\"> Delete\n                    </label>\n                  </div></td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<div class=\"card-footer\">\n        <button (click)=\"addCustomer()\" class=\"btn btn-primary float-right\">Add</button>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{errorMessage}}\n<div>\n    <a routerLink=\"/\">back to main page</a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <span class=\"text-muted\">All Rights Reserved 2018@Diafoni.in</span>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  \n  <div class=\"row\">\n    <div class=\"col-md-3\">\n    </div>\n\n    <div class=\" col col-md-6 mt-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Login</h5>\n          <form #form=\"ngForm\" (submit)=\"handleJWTAuthLogin(form)\">\n            <!-- User name div  -->\n            <div class=\"input-group flex-nowrap\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  <fa name=\"user\"></fa>\n                </span>\n              </div>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username \" [(ngModel)]=\"username\" required\n                #UserName1=\"ngModel\" name=\"username\">\n\n            </div>\n            <!-- Password div  -->\n            <br>\n            <div class=\"input-group flex-nowrap\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  <fa name=\"key\"></fa>\n                </span>\n              </div>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" minlength=\"4\"\n                required #Password1=\"ngModel\" name=\"password\">\n            </div>\n            <br>\n            <div *ngIf=\"UserName1?.invalid && (Password1.dirty || UserName1.touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"UserName1?.errors.required\">\n                Required username\n              </div>\n              <div *ngIf=\"UserName1?.errors.minlength\">\n                Username must be > 4 characters\n              </div>\n            </div>\n            <div *ngIf=\"Password1.invalid && (Password1.dirty || Password1.touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"Password1?.errors.required\">\n                The password is required\n              </div>\n              <div *ngIf=\"Password1?.errors.minlength\">\n                The password must be > 4 characters\n              </div>\n            </div>\n            <br>\n            <button class=\"btn btn-success \" type=\"submit\"\n              [disabled]=\"Password1?.invalid || UserName1?.invalid\">Login</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logout/logout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>You are logged out!</h1>\n<div class=\"container\">\n    Thank You for Using Our Application.\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-expand-md navbar-light\"  style=\"background-color:#3AC0E0\">\n        <div><a  class=\"navbar-brand\">Diafoni</a></div>\n        <ul class=\"navbar-nav\">\n            <li><a *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/welcome/houarizegai\"\n                    class=\"nav-link\">Home</a></li>\n            <li><a *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/customers\"\n                    class=\"nav-link\">Customers</a></li>\n        </ul>\n        <ul class=\"navbar-nav navbar-collapse justify-content-end\">\n            <li><a *ngIf=\"!hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/login\"\n                    class=\"nav-link\">Login</a></li>\n            <li><a *ngIf=\"hardcodedAuthenticationService.isUserLoggedIn()\" routerLink=\"/logout\"\n                    class=\"nav-link\">Logout</a></li>\n        </ul>\n    </nav>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome!</h1>\n<div class=\"container\">\n    Welcome {{name}}. You can manage the customers <a routerLink=\"/customers\">here</a>\n</div>\n<div class=\"container\">\n    Click here to get a customized welcome message<br>\n    <button (click)=\"getWelcomeMessage()\" class=\"btn btn-success\">Get Welcome Message</button>&nbsp;\n    <button (click)=\"getWelcomeMessageWithPathVariable()\" class=\"btn btn-success\">Get Welcome Message With Path Variable</button>\n</div>\n\n<div class=\"container\" *ngIf=\"welcomeMessageFromService\">\n    <h3>Your customized welcome message</h3>\n    {{welcomeMessageFromService}}\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _service_route_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/route-guard.service */ "./src/app/service/route-guard.service.ts");
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer-form/customer-form.component */ "./src/app/customer-form/customer-form.component.ts");










const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'welcome/:name', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]] },
    { path: 'customers', component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]] },
    { path: 'customers/:id', component: _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_9__["CustomerFormComponent"], canActivate: [_service_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Customer Relationship Manager';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = "https://cutomermanagement.herokuapp.com";


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer-form/customer-form.component */ "./src/app/customer-form/customer-form.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/http/http-intercepter-basic-auth.service */ "./src/app/service/http/http-intercepter-basic-auth.service.ts");















// import some UI module





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"],
            _customers_customers_component__WEBPACK_IMPORTED_MODULE_9__["CustomersComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"],
            _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_14__["CustomerFormComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["AlertModule"].forRoot(),
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_16__["AngularFontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot() // ToastrModule module added  
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _service_http_http_intercepter_basic_auth_service__WEBPACK_IMPORTED_MODULE_19__["HttpIntercepterBasicAuthService"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/customer-form/customer-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/customer-form/customer-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-invalid:not(form) {\n    border-left: 5px solid #F00\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItZm9ybS9jdXN0b21lci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItZm9ybS9jdXN0b21lci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctaW52YWxpZDpub3QoZm9ybSkge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0YwMFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/customer-form/customer-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-form/customer-form.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function() { return CustomerFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _service_data_customer_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data/customer-data.service */ "./src/app/service/data/customer-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CustomerFormComponent = class CustomerFormComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.customer = new _customers_customers_component__WEBPACK_IMPORTED_MODULE_2__["Customer"](this.id, '', null, '');
        if (this.id != -1)
            this.service.retrieveCustomer("houarizegai", this.id).subscribe(response => this.customer = response);
    }
    onSave() {
        if (this.id == -1) {
            // call create customer service
            this.service.addCustomer({ username: "houarizegai", customer: this.customer }).subscribe(response => {
                console.log(response);
                this.router.navigate(['customers']);
            });
        }
        else {
            // call update customer service
            this.service.updateCustomer("houarizegai", this.customer).subscribe(response => {
                console.log(response);
                this.router.navigate(['customers']);
            });
        }
    }
};
CustomerFormComponent.ctorParameters = () => [
    { type: _service_data_customer_data_service__WEBPACK_IMPORTED_MODULE_3__["CustomerDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CustomerFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-form',
        template: __webpack_require__(/*! raw-loader!./customer-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer-form/customer-form.component.html"),
        styles: [__webpack_require__(/*! ./customer-form.component.css */ "./src/app/customer-form/customer-form.component.css")]
    })
], CustomerFormComponent);



/***/ }),

/***/ "./src/app/customers/customers.component.css":
/*!***************************************************!*\
  !*** ./src/app/customers/customers.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: Customer, CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_data_customer_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/customer-data.service */ "./src/app/service/data/customer-data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





class Customer {
    constructor(id, name, birthDate, email) {
        this.id = id;
        this.name = name;
        this.birthDate = birthDate;
        this.email = email;
    }
}
Customer.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: Date },
    { type: String }
];
let CustomersComponent = class CustomersComponent {
    constructor(service, router, toastr) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.retrieveAllCustomers();
    }
    retrieveAllCustomers() {
        this.service.retrieveAllCustomers("houarizegai").subscribe(response => {
            // console.log(response);
            this.customers = response;
        });
    }
    addCustomer() {
        this.router.navigate(['customers', -1]);
    }
    updateCustomer(id) {
        // console.log(`Update Customer ${id}`);
        this.router.navigate(['customers', id]);
    }
    deleteCustomer(id) {
        // console.log(`Delete customer ${id}`);
        this.service.deleteCustomer("houarizegai", id).subscribe(response => {
            // console.log(response);
            this.toastr.success('Success', 'The customer has been deleted!', {
                timeOut: 3000
            });
            this.retrieveAllCustomers(); // refresh customers
        });
    }
};
CustomersComponent.ctorParameters = () => [
    { type: _service_data_customer_data_service__WEBPACK_IMPORTED_MODULE_2__["CustomerDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers',
        template: __webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/index.js!./src/app/customers/customers.component.html"),
        styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/customers/customers.component.css")]
    })
], CustomersComponent);



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() {
        this.errorMessage = 'An error occured! contact support at: support@houarizegai.net';
    }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
        styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\n    background-color: #3AC0E0;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding: 1rem;\n    margin-top: 3rem;\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0FDMEUwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_basic_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/basic-authentication.service */ "./src/app/service/basic-authentication.service.ts");







let LoginComponent = class LoginComponent {
    // like this: Angular.giveMeRouter
    // dependency injection
    constructor(router, hardcodedAuthenticationService, basicAuthenticationService, toastr) {
        this.router = router;
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.basicAuthenticationService = basicAuthenticationService;
        this.toastr = toastr;
        this.username = '';
        this.password = '';
        this.errorMessage = 'Invalid Credentials';
        this.invalidLogin = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    handleLogin(form) {
        if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
            this.invalidLogin = false;
            this.router.navigate(['welcome', this.username]);
        }
        else {
            this.invalidLogin = true;
            this.toastr.error('Error', this.errorMessage, { timeOut: 3000 });
        }
    }
    handleBasicAuthLogin(form) {
        this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(data => {
            console.log(data);
            this.invalidLogin = false;
            this.router.navigate(['welcome', this.username]);
        }, error => {
            console.log(error);
            this.invalidLogin = true;
            this.toastr.error('Error', this.errorMessage, { timeOut: 3000 });
        });
    }
    handleJWTAuthLogin(form) {
        this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(data => {
            console.log(data);
            this.invalidLogin = false;
            this.router.navigate(['welcome', this.username]);
        }, error => {
            console.log(error);
            this.invalidLogin = true;
            this.toastr.error('Error', this.errorMessage, { timeOut: 3000 });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__["HardcodedAuthenticationService"] },
    { type: _service_basic_authentication_service__WEBPACK_IMPORTED_MODULE_6__["BasicAuthenticationService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");



let LogoutComponent = class LogoutComponent {
    constructor(hardcodedAuthenticateService) {
        this.hardcodedAuthenticateService = hardcodedAuthenticateService;
    }
    ngOnInit() {
        this.hardcodedAuthenticateService.logout();
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html"),
        styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");



let MenuComponent = class MenuComponent {
    // isUserLoggedIn: boolean = false
    constructor(hardcodedAuthenticationService) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
    }
    ngOnInit() {
        // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn()
    }
};
MenuComponent.ctorParameters = () => [
    { type: _service_hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_2__["HardcodedAuthenticationService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/service/basic-authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/basic-authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: BasicAuthenticationService, AuthenticationBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthenticationService", function() { return BasicAuthenticationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationBean", function() { return AuthenticationBean; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");





const TOKEN = 'token';
const AUTHENTICATED_USER = 'authenticaterUser';
let BasicAuthenticationService = class BasicAuthenticationService {
    constructor(http) {
        this.http = http;
    }
    executeJWTAuthenticationService(username, password) {
        return this.http.post(`${_app_constants__WEBPACK_IMPORTED_MODULE_4__["API_URL"]}/authenticate`, {
            username,
            password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
        }));
    }
    executeAuthenticationService(username, password) {
        let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: basicAuthHeaderString
        });
        return this.http.get(`${_app_constants__WEBPACK_IMPORTED_MODULE_4__["API_URL"]}/basicauth`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
        }));
    }
    getAuthenticatedUser() {
        return sessionStorage.getItem(AUTHENTICATED_USER);
    }
    getAuthenticatedToken() {
        if (this.getAuthenticatedUser())
            return sessionStorage.getItem(TOKEN);
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem(AUTHENTICATED_USER);
        return !(user === null);
    }
    logout() {
        sessionStorage.removeItem(AUTHENTICATED_USER);
        sessionStorage.removeItem(TOKEN);
    }
};
BasicAuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BasicAuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BasicAuthenticationService);

class AuthenticationBean {
    constructor(message) {
        this.message = message;
    }
}
AuthenticationBean.ctorParameters = () => [
    { type: String }
];


/***/ }),

/***/ "./src/app/service/data/customer-data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/data/customer-data.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomerDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDataService", function() { return CustomerDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constants */ "./src/app/app.constants.ts");




let CustomerDataService = class CustomerDataService {
    constructor(http) {
        this.http = http;
    }
    retrieveAllCustomers(username) {
        return this.http.get(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/users/${username}/customers`);
    }
    retrieveCustomer(username, id) {
        return this.http.get(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/users/${username}/customers/${id}`);
    }
    addCustomer({ username, customer }) {
        return this.http.post(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/users/${username}/customers`, customer);
    }
    updateCustomer(username, customer) {
        return this.http.put(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/users/${username}/customers`, customer);
    }
    deleteCustomer(username, id) {
        return this.http.delete(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/users/${username}/customers/${id}`);
    }
};
CustomerDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomerDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerDataService);



/***/ }),

/***/ "./src/app/service/data/welcome-data.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/data/welcome-data.service.ts ***!
  \******************************************************/
/*! exports provided: HelloWorldBean, WelcomeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldBean", function() { return HelloWorldBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeDataService", function() { return WelcomeDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constants */ "./src/app/app.constants.ts");




class HelloWorldBean {
    constructor(message) {
        this.message = message;
    }
}
HelloWorldBean.ctorParameters = () => [
    { type: String }
];
let WelcomeDataService = class WelcomeDataService {
    constructor(http) {
        this.http = http;
    }
    executeHelloWorldBeanService() {
        return this.http.get(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/hello-world-bean`);
    }
    executeHelloWorldServiceWithPathVariable(name) {
        // let basicAuthHeaderString = this.createBasicAuthenticationHeader();
        // let headers = new HttpHeaders({
        //   Authorization: basicAuthHeaderString
        // });
        return this.http.get(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/hello-world/${name}`);
    }
};
WelcomeDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WelcomeDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WelcomeDataService);



/***/ }),

/***/ "./src/app/service/hardcoded-authentication.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/hardcoded-authentication.service.ts ***!
  \*************************************************************/
/*! exports provided: HardcodedAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardcodedAuthenticationService", function() { return HardcodedAuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HardcodedAuthenticationService = class HardcodedAuthenticationService {
    constructor() { }
    authenticate(username, password) {
        if (username === "houarizegai" && password === "0000") {
            sessionStorage.setItem('authenticaterUser', username);
            return true;
        }
        return false;
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticaterUser');
        return !(user === null);
    }
    logout() {
        sessionStorage.removeItem('authenticaterUser');
    }
};
HardcodedAuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HardcodedAuthenticationService);



/***/ }),

/***/ "./src/app/service/http/http-intercepter-basic-auth.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/service/http/http-intercepter-basic-auth.service.ts ***!
  \*********************************************************************/
/*! exports provided: HttpIntercepterBasicAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpIntercepterBasicAuthService", function() { return HttpIntercepterBasicAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _basic_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../basic-authentication.service */ "./src/app/service/basic-authentication.service.ts");



let HttpIntercepterBasicAuthService = class HttpIntercepterBasicAuthService {
    constructor(basicAuthenticationService) {
        this.basicAuthenticationService = basicAuthenticationService;
    }
    intercept(request, next) {
        // let username = 'houarizegai';
        // let password = '0000';
        // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
        let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
        let username = this.basicAuthenticationService.getAuthenticatedUser();
        if (basicAuthHeaderString && username) {
            request = request.clone({
                setHeaders: {
                    Authorization: basicAuthHeaderString
                }
            });
        }
        return next.handle(request);
    }
};
HttpIntercepterBasicAuthService.ctorParameters = () => [
    { type: _basic_authentication_service__WEBPACK_IMPORTED_MODULE_2__["BasicAuthenticationService"] }
];
HttpIntercepterBasicAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpIntercepterBasicAuthService);



/***/ }),

/***/ "./src/app/service/route-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/route-guard.service.ts ***!
  \************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hardcoded-authentication.service */ "./src/app/service/hardcoded-authentication.service.ts");




let RouteGuardService = class RouteGuardService {
    constructor(hardcodedAuthenticationService, router) {
        this.hardcodedAuthenticationService = hardcodedAuthenticationService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.hardcodedAuthenticationService.isUserLoggedIn())
            return true;
        this.router.navigate(['login']);
        return false;
    }
};
RouteGuardService.ctorParameters = () => [
    { type: _hardcoded_authentication_service__WEBPACK_IMPORTED_MODULE_3__["HardcodedAuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RouteGuardService);



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_data_welcome_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data/welcome-data.service */ "./src/app/service/data/welcome-data.service.ts");




// decorator (annotation in java)
let WelcomeComponent = class WelcomeComponent {
    // adding Activate route for get parameter from the url
    constructor(route, service) {
        this.route = route;
        this.service = service;
        this.message = 'Welcome message';
        this.name = '';
    }
    ngOnInit() {
        // compilation error: this.message = 10
        console.log(this.message);
        this.name = this.route.snapshot.params['name']; // get the parameter passing in the url
    }
    getWelcomeMessage() {
        // console.log(this.service.executeHelloWorldBeanService());
        this.service.executeHelloWorldBeanService().subscribe(response => this.handleSuccessfulResponse(response), error => this.handleErrorResponse(error));
    }
    getWelcomeMessageWithPathVariable() {
        this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(response => this.handleSuccessfulResponse(response));
    }
    handleSuccessfulResponse(response) {
        // console.log(response.message);
        this.welcomeMessageFromService = response.message;
    }
    handleErrorResponse(error) {
        // console.log(error.error.message);
        // console.log(error);
        this.welcomeMessageFromService = error.error.message;
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_data_welcome_data_service__WEBPACK_IMPORTED_MODULE_3__["WelcomeDataService"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
    })
], WelcomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Diafoni\Projects\FullStack-Angular-SpringBoot-master\crm-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map