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

/***/ "./node_modules/raw-loader/index.js!./src/app/AdminPage/list-cars/list-cars.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/AdminPage/list-cars/list-cars.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"preloader\">\n  <div id=\"loader\"></div>\n  <h3 style=\"text-align: center; position: relative; top: 60%; color: white;\">Loading...</h3>\n</div>\n\n<!--******************start form to add new type******************************-->\n<h2 style=\"background-color: aliceblue;\" class=\"text-center\">List cars\n  <button type=\"submit\" class=\"btn btn-info col-lg-2\" (click)=\"openForm()\">Add new car</button>\n</h2>\n<!-- <button class=\"open-button\" (click)=\"openForm()\">Add new car</button> -->\n\n<div class=\"form-popup \" id=\"addCarForm\">\n  \n\n  <form class=\"row col-lg\">\n\n    <form #newType=\"ngForm\" ngNativeValidate class=\"was-validated form-container col-lg\">\n      <h3>Add new type car</h3>\n      <!-- ***show Type car*** -->\n      <div class=\"row\">\n        <label for=\"TypeCar\" class=\"control-label col-lg-auto\">Type Car</label>\n        <input type=\"text\" name=\"TypeCar\" class=\"form-control col-lg\"\n          placeholder=\"{{typeCar.ManufacturerNmae}} {{typeCar.Model}} {{typeCar.YearManufacturer | date :'yyyy'}}\"\n          readonly>\n      </div>\n      <!-- ***car Manufacturer*** -->\n      <div class=\"row\">\n        <label for=\"ManufacturerNmae\" class=\"control-label col-lg\">Manufacturer</label>\n        <input type=\"text\" name=\"Manufacturer\" required [(ngModel)]=\"typeCar.ManufacturerNmae\"\n          class=\"form-control col-lg\" placeholder=\"Manufacturer\" pattern=\"[A-Z][0-9a-z]{1,15}\" maxlength=\"15\">\n      </div>\n      <!-- ***car Model*** -->\n\n      <div class=\"row\">\n        <label for=\"Model\" class=\"col-lg control-label\">Model</label>\n        <input type=\"text\" name=\"Model\" [(ngModel)]=\"typeCar.Model\" placeholder=\"Model\" class=\"form-control col-lg\"\n          pattern=\"[0-9A-Za-z ]{1,20}\" maxlength=\"20\" required>\n      </div>\n      <!-- ***DalyPrice*** -->\n      <div class=\"row\">\n        <label for=\"DalyPrice\" class=\"col-lg control-label\">Daly price</label>\n        <input type=\"number\" name=\"dalyPrice\" [(ngModel)]=\"typeCar.DalyPrice\" placeholder=\"Daly price\"\n          class=\"form-control col-lg\" required>\n      </div>\n      <!-- ***DelayDalyPrice*** -->\n\n      <div class=\"row\">\n        <label for=\"DelayDalyPrice\" class=\"col-lg control-label\">Delay daly price</label>\n        <input type=\"number\" name=\"DelayDalyPrice\" [(ngModel)]=\"typeCar.DelayDalyPrice\" placeholder=\"Delay Daly Price\"\n          class=\"form-control col-lg\" required>\n      </div>\n\n      <!-- ***car Year Manufacturer*** -->\n\n      <div class=\"row\">\n        <label for=\"Year\" class=\"col-lg control-label\">Year</label>\n        <input type=\"date\" name=\"YearManufacturer\" [(ngModel)]=\"typeCar.YearManufacturer\" placeholder=\"Year\"\n          class=\"form-control col-lg\" required>\n      </div>\n\n      <!--***Transmission****-->\n      <div class=\"row\">\n        <label class=\"control-label col-lg\">Transmission</label>\n        <select class=\"form-control col-lg\" name=\"Transmission\" [(ngModel)]=\"typeCar.Transmission\" required>\n          <option>automatic</option>\n          <option>manual</option>\n        </select>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success col-lg\" (click)=\"AddNewTypeCar()\"\n        [disabled]=\"!newType.form.valid\">Add\n        new type car</button>\n      <button type=\"reset\" id=\"resetButton\" class=\"btn btn-warning col-lg\" value=\"Clear form\">Reset</button>\n      <button type=\"button\" class=\"btn btn-danger cancel col-lg\" (click)=\"closeForm()\">Close</button>\n    </form>\n\n    <!--******************start form to add new car******************************-->\n    <form #newCar=\"ngForm\" ngNativeValidate class=\"was-validated form-container col-lg\">\n      <h3>Add new car</h3>\n      <!-- ***type car*** -->\n      <div class=\"row\">\n        <label for=\"typeCar\" class=\"col-lg control-label\">Type car</label>\n        <select class=\"form-control col-lg\" name=\"branch\" [(ngModel)]=\"car.carType\" required>\n          <option [value]=\"i_car.CarType\" *ngFor=\"let i_car of typeList\">{{i_car.CarType}}</option>\n        </select>\n      </div>\n      <!-- ***car branch*** -->\n      <div class=\"row\">\n        <label for=\"branch\" class=\"col-lg control-label\">Branch</label>\n        <select class=\"form-control col-lg\" name=\"branch\" [(ngModel)]=\"car.branch\" required>\n          <option>Tel aviv</option>\n          <option>Holon</option>\n          <option>Ashdod</option>\n        </select>\n      </div>\n      <!-- ***car Mileage*** -->\n\n      <div class=\"row\">\n        <label for=\"Mileage\" class=\"col-lg control-label\">Mileage</label>\n        <input type=\"number\" name=\"Mileage\" [(ngModel)]=\"car.mileage\" placeholder=\"Mileage\" class=\"form-control col-lg\"\n          required>\n      </div>\n      <!-- ***car number*** -->\n\n      <div class=\"row\">\n        <label for=\"carNumber\" class=\"col-lg control-label\">Number</label>\n        <input type=\"text\" name=\"carNumber\" [(ngModel)]=\"car.carNumber\" placeholder=\"Number\" class=\"form-control col-lg\"\n          pattern=\"[0-9]{7,8}\" maxlength=\"8\" required>\n      </div>\n\n\n      <!--***available or not****-->\n      <div class=\"row\">\n        <label class=\"control-label col-lg\">Rental status</label>\n        <select class=\"form-control col-lg\" name=\"available\" [(ngModel)]=\"car.available\" required>\n          <option>yes</option>\n          <option>no</option>\n        </select>\n      </div>\n      <!--***Usability status****-->\n      <div class=\"row\">\n        <label class=\"control-label col-lg\">Usability status</label>\n        <select class=\"form-control col-lg\" name=\"usable\" [(ngModel)]=\"car.usable\" required>\n          <option>yes</option>\n          <option>no</option>\n        </select>\n      </div>\n\n\n      <div class=\"form-group row\">\n\n        <!-- ***car picture*** -->\n\n        <div class=\"upload-btn-wrapper col-lg\">\n          <label for=\"carPicture\" class=\"col-lg control-label\">Upload image</label>\n          <input type=\"file\" name=\"carPicture\" (change)=\"handleFileSelect($event)\"\n            class=\"form-control-file border col-lg-12\" ngModel required />\n          <!-- {{this.car.picture}} -->\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success col-lg\" (click)=\"AddNewCar()\" [disabled]=\"!newCar.form.valid\">Add new\n        car</button>\n      <button type=\"reset\" class=\"btn btn-warning col-lg\" value=\"Clear form\">Reset</button>\n      <button type=\"button\" class=\"btn btn-danger cancel col-lg\" (click)=\"closeForm()\">Close</button>\n    </form>\n\n  </form> <!-- /form -->\n  <!--***add new car****-->\n\n  <!-- </form> -->\n</div>\n<!--******************end form to add new car******************************-->\n\n\n<!--******************form list show all cars******************************-->\n\n<section class=\"container\">\n\n  <div class=\"scrollbar table-wrapper-scroll-y \">\n    <table class=\"table table-hover\" style=\"background-color: aliceblue\">\n      <thead>\n        <tr>\n          <th class=\"th-sticky\" width=\"20%\" style=\"text-align: center\">Picture</th>\n          <th class=\"th-sticky\" width=\"40%\" style=\"text-align: center\">Car</th>\n          <th class=\"th-sticky\" width=\"40%\" style=\"text-align: center\">Type car</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let i of carList\">\n          <ng-container *ngFor=\"let i_type of typeList\">\n            <tr *ngIf=\"i.CarType==i_type.CarType\">\n              <td width=\"20%\"><img width=\"200px\" src=\"data:Image/jpg;base64,{{i.Picture}}\" />\n                <input type=\"file\" name=\"carPicture\" (change)=\"handleFileSelect($event)\"\n                  class=\"form-control-file border col-lg-12\" />\n\n              </td>\n              <!-- ****************update/delete cars form*************** -->\n              <td width=\"40%\">\n                <form #carsList=\"ngForm\" ngNativeValidate>\n                  <ul>\n                    <li>\n                      <ng-container class=\"row\">\n                        <label for=\"typeCar\" class=\"col-lg control-label\">Type car</label>\n                        <select #cType class=\"form-control col-lg\" name=\"TypeCar\" ngModel=\"{{i_type.CarType}}\" >                         \n                          <option [value]=\"i_type2.CarType\" *ngFor=\"let i_type2 of typeList2\" [hidden]=\"i_type2.CarType=='none'\">{{i_type2.CarType}}\n                          </option>\n                        </select>\n                      </ng-container>\n                    </li>\n                    <li class=\"form-group row\">\n                      <label class=\"col-lg-4\">Number: </label>\n                      <div class=\"col-lg\">\n                        <input type=\"number\" name=\"Mileage\" value=\"{{i.CarID}}\" class=\"form-control\" readonly>\n                      </div>\n                    </li>\n                    <li class=\"form-group row\">\n                      <label class=\"control-label col-lg-4\">Mileage:</label>\n                      <div class=\"col-lg\">\n                        <input #mileage type=\"number\" name=\"Mileage\" value=\"{{i.Mileage}}\" class=\"form-control\">\n                      </div>\n                    </li>\n                    <li class=\"form-group row\">\n                      <label class=\"control-label col-lg-4\">Branch:</label>\n                      <div class=\"col-lg\">\n                        <select #branch class=\"form-control\" name=\"branch\">\n                          <option hidden disabled selected>{{i.Branch}}</option>\n                          <option>Tel aviv</option>\n                          <option>Holon</option>\n                          <option>Ashdod</option>\n                        </select>\n                      </div>\n                    </li>\n                    <li class=\"form-group row\">\n                      <label class=\"control-label col-lg-4\">Available:</label>\n                      <div class=\"col-lg\">\n                        <select #available class=\"form-control\">\n                          <option hidden disabled selected>{{i.Available}}</option>\n                          <option>yes</option>\n                          <option>no</option>\n                        </select>\n                      </div>\n                    </li>\n                    <li class=\"form-group row\">\n                      <label class=\"control-label col-lg-4\">Usable:</label>\n                      <div *ngIf=\"cType.value=='none'\" class=\"col-lg\">\n                        <input type=\"text\" name=\"Usable\" value=\"no\" class=\"form-control\" readonly>\n                      </div>\n                      <div *ngIf=\"cType.value!=='none'\" class=\"col-lg\" class=\"col-lg\">\n                        <select #usable class=\"form-control\" name=\"Usable\" ngModel=\"{{i.Usable}}\"\n                          [(ngModel)]=\"c_usable\">\n                          <option value=\"yes\">yes</option>\n                          <option value=\"no\">no</option>\n                        </select>\n                      </div>                     \n                    </li>\n                    <button type=\"submit\" class=\"btn btn-success col-lg\"\n                      (click)=\"UpdateCar(i.CarID,cType.value,mileage.value,branch.value,available.value,c_usable)\"\n                      [disabled]=\"!carsList.form.valid\">Update</button>\n                    <button type=\"submit\" class=\"btn btn-danger cancel col-lg\" (click)=\"DeleteCar(i.CarID)\">Delete\n                      car</button>\n                  </ul>\n                </form>\n              </td>\n              <!-- ****************update/delete types car form*************** -->\n              <td width=\"40%\">\n                <form #typeList=\"ngForm\" ngNativeValidate class=\"form-horizontal\">\n                  <ul>\n                    <li class=\"form-group row\">\n                      <label class=\"control-label col-lg\">Manufacturer:</label>\n                      <div class=\"col-lg\">\n                        <input #Manufacturer type=\"text\" name=\"Manufacturer\" class=\"form-control col-lg\"\n                          value=\"{{i_type.ManufacturerNmae}}\" pattern=\"[A-Z][0-9a-z]{1,15}\" maxlength=\"15\"\n                          [disabled]=\"i_type.ManufacturerNmae=='none'\">\n                      </div>\n                    </li>\n                    <li class=\"form-group row\">\n                      <label class=\"control-label col-lg\">Model:</label>\n                      <div class=\"col-lg\">\n                        <input #model type=\"text\" name=\"Model\" class=\"form-control\" value=\"{{i_type.Model}}\"\n                          pattern=\"[0-9A-Za-z ]{1,20}\" maxlength=\"20\" [disabled]=\"i_type.ManufacturerNmae=='none'\">\n                      </div>\n                    </li>\n                    <li class=\"form-group row\">\n                      <label class=\"control-label col-lg\">Daly price:</label>\n                      <div class=\"col-lg\">\n                        <input #dalyPrice type=\"number\" name=\"dalyPrice\" value=\"{{i_type.DalyPrice}}\"\n                          class=\"form-control\" [disabled]=\"i_type.ManufacturerNmae=='none'\">\n                      </div>\n                    </li>\n                    <li class=\"form-group row\">\n                      <label class=\"control-label col-lg\">Delay daly price:</label>\n                      <div class=\"col-lg\">\n                        <input #delayDalyPrice type=\"number\" name=\"dalyPriceD\" value=\"{{i_type.DelayDalyPrice}}\"\n                          class=\"form-control\" [disabled]=\"i_type.ManufacturerNmae=='none'\">\n                      </div>\n                    </li>\n                    <li class=\"form-group row\">\n                      <label class=\"control-label col-lg\">Year:</label>\n                      <div class=\"col-lg\">\n                        <input #yearManufacturer type=\"date\" name=\"YearManufacturer\" class=\"form-control-sm\"\n                          value=\"{{i_type.YearManufacturer | date :'yyyy-MM-dd'}}\"\n                          [disabled]=\"i_type.ManufacturerNmae=='none'\">\n                      </div>\n                    </li>\n                    <li class=\"form-group row\">\n                      <label class=\"control-label col-lg\">Transmission: :</label>\n                      <div class=\"col-lg\">\n                        <select #transmission id=\"transmission\" class=\"form-control\"\n                          [disabled]=\"i_type.ManufacturerNmae=='none'\">\n                          <option hidden disabled selected>{{i_type.Transmission}}</option>\n                          <option value=\"automatic\">automatic</option>\n                          <option value=\"manual\">manual</option>\n                        </select>\n                      </div>\n                    </li>\n                    <button type=\"submit\" class=\"btn btn-success col-lg\"\n                      [disabled]=\"!typeList.form.valid || i_type.ManufacturerNmae=='none'\"\n                      (click)=\"UpdateTypeCar(i_type.ID,Manufacturer.value,model.value,dalyPrice.value,delayDalyPrice.value,yearManufacturer.value,transmission.value)\">\n                      Update type car</button>\n                    <button type=\"submit\" class=\"btn btn-danger cancel col-lg\"\n                      (click)=\"DeleteTypeCar(i_type.ID,i.CarID)\" [disabled]=\"i_type.ManufacturerNmae=='none'\">Delete\n                      type car</button>\n                  </ul>\n                </form>\n              </td>\n            </tr>\n          </ng-container>\n        </ng-container>\n      </tbody>\n    </table>\n  </div>\n\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/AdminPage/list-orders/list-orders.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/AdminPage/list-orders/list-orders.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"preloader\">\n    <div id=\"loader\"></div>\n    <h3 style=\"text-align: center; position: relative; top: 60%; color: white;\">Loading...</h3>\n</div>\n\n<!--******************form listorders******************************-->\n<h2 style=\"background-color: aliceblue;\" class=\"text-center\">List of orders\n    <button type=\"submit\" class=\"btn btn-info col-lg-2\" (click)=\"openForm()\">Add new order</button>\n</h2>\n<!-- ***button form new order*** -->\n<div class=\"form-popup \" id=\"addOrderForm\">\n    <form #addNewOrderForm=\"ngForm\" ngNativeValidate class=\"form-container was-validated\">\n        <h1>Add new order Form</h1>\n        <div class=\"row\">\n            <label for=\"carId\" class=\"col-lg\">Car number</label>\n            <select #addCarNumber class=\"form-control col-lg\" name=\"carNumber\" required>\n                <option [value]=\"i_cars.CarID\" *ngFor=\"let i_cars of carList|availableCar\">\n                    {{i_cars.CarID}}</option>\n            </select>\n        </div>\n        <div class=\"row\">\n            <label for=\"userId\" class=\"col-lg\">User id</label>\n            <select #addUserId class=\"form-control col-lg\" name=\"userId\" required>\n                <option [value]=\"i_user.UserID\" *ngFor=\"let i_user of usersList\">\n                    {{i_user.UserID}}</option>\n            </select>\n        </div>\n        <div class=\"row\">\n            <label for=\"picupDate\" class=\"col-lg control-label\">Picup date</label>\n            <input #pickupCar type=\"date\" class=\"form-control col-lg\" name=\"PickupCar\"\n                ngModel=\"{{today | date :'yyyy-MM-dd'}}\" min=\"{{today | date :'yyyy-MM-dd'}}\" required>\n        </div>\n        <div class=\"row\">\n            <label for=\"dropOffDate\" class=\"col-lg control-label\">Drop-off date</label>\n            <input #returnCar type=\"date\" class=\"form-control col-lg\" name=\"ReturnCar\" [ngModel]=\"pickupCar.value \"\n                min=\"{{pickupCar.value | date :'yyyy-MM-dd'}}\" required>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success col-lg\" [disabled]=\"!addNewOrderForm.form.valid\"\n            (click)=\"AddNewOrder(addCarNumber.value,addUserId.value,pickupCar.value,returnCar.value)\">Add new\n            order</button>\n        <button type=\"reset\" class=\"btn btn-warning col-lg\" value=\"Clear form\">Reset</button>\n        <button type=\"button\" class=\"btn btn-danger cancel col-lg\" (click)=\"closeForm()\">Close</button>\n    </form>\n</div>\n<!--******************end form to add new order******************************-->\n\n\n<section class=\"container scrollbar\">\n    <div class=\" table-wrapper-scroll-y\">\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th class=\"row th-sticky\">\n                        <label class=\"col-lg-auto\"> </label>\n                        <label class=\"col-lg\">Number</label>\n                        <label class=\"col-lg\">User id</label>\n                        <label class=\"col-lg\">Picup date</label>\n                        <label class=\"col-lg\">Drop-off date</label>\n                        <label class=\"col-lg\">Drop-off date indeed</label>\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let i_rentCar of rentCarList; index as i\">\n                    <td>\n                        <form #ordersForm=\"ngForm\" ngNativeValidate>\n                            <div class=\"form-group row col-lg-12\">\n                                <label class=\"col-lg-auto\">{{i+1}}</label>\n                                <select #carNumber class=\"form-control col-lg\" name=\"carNumber\">\n                                    <option [value]=\"i_rentCar.CarID\">{{i_rentCar.CarID}}</option>\n                                    <option [value]=\"i_cars.CarID\" *ngFor=\"let i_cars of carList|availableCar\">\n                                        {{i_cars.CarID}}</option>\n                                </select>\n                                <input #userID type=\"number\" class=\"form-control col-lg\" name=\"UserID\"\n                                    ngModel=\"{{i_rentCar.UserID}}\" readonly>\n                                <input #pickupCar type=\"date\" class=\"form-control col-lg\" name=\"PickupCar\"\n                                    ngModel=\"{{i_rentCar.PickupCar | date :'yyyy-MM-dd'}}\">\n                                <input #returnCar type=\"date\" class=\"form-control col-lg\" name=\"ReturnCar\"\n                                    ngModel=\"{{i_rentCar.ReturnCar | date :'yyyy-MM-dd'}}\"\n                                    min=\"{{pickupCar.value | date :'yyyy-MM-dd'}}\">\n                                <div *ngIf=\"i_rentCar.ReturnCarIndeed!=null\">\n                                    <input type=\"date\" class=\"form-control col-lg\" name=\"ReturnCarIndeed\"\n                                        [ngModel]=\"i_rentCar.ReturnCarIndeed | date :'yyyy-MM-dd'\"\n                                        [(ngModel)]=\"return_CarIndeed\" min=\"{{returnCar.value | date :'yyyy-MM-dd'}}\">\n                                </div>\n                                <div *ngIf=\"i_rentCar.ReturnCarIndeed==null\">\n                                    <input type=\"number\" class=\"form-control col-lg\" name=\"ReturnCarIndeed\" ngModel\n                                        placeholder=\"Still in use\" readonly>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <button type=\"submit\" class=\"btn btn-success col-lg col-lg\"\n                                    [disabled]=\"!ordersForm.form.valid\"\n                                    (click)=\"Update(i_rentCar.ID,carNumber.value,pickupCar.value,returnCar.value,return_CarIndeed)\">Update</button>\n                                <button type=\"submit\" class=\"btn btn-danger col-lg\"\n                                    (click)=\"Delete(i_rentCar.ID,i_rentCar.CarID)\">Delete</button>\n                            </div>\n                        </form>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/AdminPage/list-users/list-users.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/AdminPage/list-users/list-users.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"preloader\">\n  <div id=\"loader\"></div>\n  <h3 style=\"text-align: center; position: relative; top: 60%; color: white;\">Loading...</h3>\n</div>\n\n<!--******************form add new user******************************-->\n\n<h2 style=\"background-color: aliceblue;\" class=\"text-center\">List userss\n  <button type=\"submit\" class=\"btn btn-info col-lg-2\" (click)=\"openForm()\">Add new user</button>\n</h2>\n\n<!-- ***button form new user*** -->\n<div class=\"form-popup \" id=\"addUserForm\">\n  <form #addNewUserForm=\"ngForm\" ngNativeValidate class=\"form-container was-validated\">\n    <h1>Add new user Form</h1>\n    <div class=\"row\">\n      <label for=\"firstName\" class=\"col-lg\">First name</label>\n      <input #fName type=\"text\" name=\"firstName\" required ngModel placeholder=\"Shlomo\" class=\"form-control col-lg\"\n        pattern=\"[A-Z][a-z]{1,15}\" maxlength=\"15\">\n    </div>\n    <div class=\"row\">\n      <label for=\"lasttName\" class=\"col-lg\">Last name</label>\n      <input #lName type=\"text\" name=\"lasttName\" required ngModel placeholder=\"Gamal\" class=\"form-control col-lg\"\n        pattern=\"[A-Z][a-z]{1,15}\" maxlength=\"15\">\n    </div>\n    <div class=\"row\">\n      <label for=\"IdNumber\" class=\"col-lg\">Id</label>\n      <input #id type=\"text\" name=\"IdNumber\" required ngModel placeholder=\"Must be 9 symbols\"\n        class=\"form-control col-lg\" pattern=\"[0-9]{9}\" maxlength=\"9\">\n    </div>\n    <div class=\"row\">\n      <label for=\"Email\" class=\"col-lg\">Email</label>\n      <input #u_email type=\"email\" name=\"Email\" required ngModel placeholder=\"example@mail.com\"\n        class=\"form-control col-lg\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" maxlength=\"20\">\n    </div>\n    <div class=\"row\">\n      <label for=\"birthDay\" class=\"col-lg\">Date of Birth</label>\n      <input #bDay type=\"date\" name=\"birthDay\" required ngModel class=\"form-control col-lg\"\n        max=\"{{this.Years18 | date :'yyyy-MM-dd'}}\">\n    </div>\n    <div class=\"row\">\n      <label for=\"Gender\" class=\"col-lg\">Gender</label>\n      <select #gender class=\"form-control col-lg\" name=\"Gender\">\n        <option>male</option>\n        <option>female</option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <label for=\"UsertName\" class=\"col-lg\">User name</label>\n      <input #userName type=\"text\" name=\"UserName\" required ngModel placeholder=\"user123Name\"\n        class=\"form-control col-lg\" pattern=\"[0-9A-Za-z]{1,15}\" maxlength=\"15\">\n    </div>\n    <div class=\"row\">\n      <label for=\"Password\" class=\"col-lg\">Password</label>\n      <input #u_password type=\"text\" name=\"Password\" required ngModel placeholder=\"Must be between 6-15 symbols\"\n        class=\"form-control col-lg\" pattern=\"[0-9A-Za-z]{6,15}\" maxlength=\"15\">\n    </div>\n    <div class=\"row\">\n      <label for=\"Role\" class=\"col-lg\">Role</label>\n      <select #role class=\"form-control col-lg\" name=\"Role\">\n        <option>user</option>\n        <option>admin</option>\n        <option>employee</option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <button type=\"submit\" class=\"btn btn-success col-lg\" [disabled]=\"!addNewUserForm.form.valid\"\n        (click)=\"AddNewUser(fName.value,lName.value,id.value,u_email.value,bDay.value,gender.value,userName.value,u_password.value,role.value)\">\n        Add new user</button>\n      <button type=\"reset\" class=\"btn btn-warning col-lg\" value=\"Clear form\">Reset</button>\n      <button type=\"button\" class=\"btn btn-danger cancel col-lg\" (click)=\"closeForm()\">Close</button>\n    </div>\n  </form>\n</div>\n<!--******************end form to add new user******************************-->\n\n<!--******************form list all users******************************-->\n<section class=\"container scrollbar\">\n  <div class=\" table-wrapper-scroll-y\">\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th class=\"row th-sticky\">\n            <label class=\"col-lg-auto\"> </label>\n            <label class=\"col-lg\">First name</label>\n            <label class=\"col-lg\">Last name</label>\n            <label class=\"col-lg\">User ID</label>\n            <label class=\"col-lg\">Email</label>\n            <label class=\"col-lg\">Birth day</label>\n            <label class=\"col-lg\">Gender</label>\n            <label class=\"col-lg\">User name</label>\n            <label class=\"col-lg\">Password</label>\n            <label class=\"col-lg\">Role</label>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let i_user of usersList; index as i\">\n          <td>\n            <form #userForm=\"ngForm\" ngNativeValidate>\n              <div class=\"form-group row col-lg-12\">\n                <label class=\"col-lg-auto\">{{i+1}}</label>\n                <input #fNmae type=\"text\" class=\"form-control col-lg-1\" name=\"FirstName\" ngModel\n                  placeholder=\"{{i_user.FirstName}}\" pattern=\"[A-Z][a-z]{1,15}\" maxlength=\"15\">\n                <input #lName type=\"text\" class=\"form-control col-lg-1\" name=\"LastName\" ngModel\n                  placeholder=\"{{i_user.LastName}}\" pattern=\"[A-Z][a-z]{1,15}\" maxlength=\"15\">\n                <input #userID type=\"number\" class=\"form-control col-lg\" name=\"UserID\" ngModel\n                  placeholder=\"{{i_user.UserID}}\" pattern=\"[0-9]{9}\" maxlength=\"9\">\n                <input #email type=\"email\" class=\"form-control col-lg\" name=\"email\" ngModel\n                  placeholder=\"{{i_user.Email}}\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" maxlength=\"20\">\n                <input #birthDay type=\"date\" class=\"form-control col-lg-2\" name=\"BirthDay\"\n                  ngModel=\"{{i_user.BirthDay | date :'yyyy-MM-dd'}}\" max=\"{{this.Years18 | date :'yyyy-MM-dd'}}\">\n                <select #gender class=\"form-control col-lg-1\" name=\"Gender\">\n                  <option hidden disabled selected>{{i_user.Gender}}</option>\n                  <option>male</option>\n                  <option>female</option>\n                </select>\n                <input #userName type=\"text\" class=\"form-control col-lg\" name=\"UserName\" ngModel\n                  placeholder=\"{{i_user.UserName}}\" pattern=\"[0-9A-Za-z]{1,15}\" maxlength=\"15\">\n                <input #password type=\"text\" class=\"form-control col-lg\" name=\"userPassword\" ngModel\n                  placeholder=\"{{i_user.UserPassword}}\" pattern=\"[0-9A-Za-z]{6,15}\" maxlength=\"15\">\n                <select #role class=\"form-control col-lg-1\" name=\"Role\">\n                  <option hidden disabled selected>{{i_user.Role}}</option>\n                  <option>admin</option>\n                  <option>employee</option>\n                  <option>user</option>\n                </select>\n              </div>\n              <div class=\"form-group row\">\n                <button type=\"submit\" class=\"btn btn-success col-lg col-lg\" [disabled]=\"!userForm.form.valid\"\n                  (click)=\"Update(i_user.NumberID,fNmae.value,lName.value,userID.value,email.value,birthDay.value,gender.value,userName.value,password.value,role.value)\">Update</button>\n                <button type=\"submit\" class=\"btn btn-danger col-lg\" (click)=\"Delete(i_user.NumberID)\">Delete</button>\n              </div>\n            </form>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ClientPage/calc-day-price/calc-day-price.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ClientPage/calc-day-price/calc-day-price.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form class=\"form was-validated\" role=\"form\">\r\n    <h2>Rent price</h2>\r\n\r\n    <!--***pickup Date***-->\r\n    <div class=\"form-group\">\r\n      <label for=\"pickupDate\">Select pickup date </label>\r\n      <div class=\"col-lg-9\">\r\n        <input #picUpDate type=\"date\" name=\"pickupDate\" value=\"{{PicUpDate(picUpDate.value) | date :'yyyy-MM-dd'}}\"\r\n          min=\"{{today | date :'yyyy-MM-dd'}}\" class=\"form-control\" autofocus required>\r\n      </div>\r\n    </div>\r\n    <!--***amount of rent days****-->\r\n    <div class=\"form-group\">\r\n      <label for=\"number\" class=\"col-lg-aouto control-label\">Amount of rent days</label>\r\n      <div class=\"col-lg-9\">\r\n        <input type=\"number\" name=\"number\" [(ngModel)]=\"rentDays\" value=\"1\" min=\"1\" class=\"form-control\" required>\r\n      </div>\r\n    </div>\r\n    <!--***rent price****-->\r\n    <div class=\"form-group\">\r\n      <div class=\"col-lg-9\">\r\n        <h4>Price: {{calcPayment()}}₪</h4>\r\n        <h5>Cost per day delay: {{userSelectCar[1].DelayDalyPrice}}₪ </h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-lg-9 col-lg-offset-3\">\r\n        <button type=\"submit\" (click)=\"Confirm()\" class=\"btn btn-primary btn-block\">Confirm</button>\r\n      </div>\r\n    </div>\r\n  </form> <!-- /form -->\r\n</div> <!-- ./container -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ClientPage/home-page/home-page.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ClientPage/home-page/home-page.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"caption\">\n        <span class=\"captionP\">Gamal Six Ltd</span>\n        <img src='../assets/img/Camel-logo.jpg' alt=\"not found\" class=\"logo\">       \n    <h2 class=\"caption\">Find You Dream Car</h2>\n    <h3 class=\"properties\">Travel - Bisnes - And More</h3>\n</section>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ClientPage/register-page/register-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ClientPage/register-page/register-page.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n    <form #registrationForm=\"ngForm\" ngNativeValidate class=\"form was-validated\" role=\"form\">\n        <h2>Registration</h2>\n        <div class=\"row\">\n            <div class=\"col-lg\">\n                <!-- ***first name*** -->\n                <div class=\"form-group\">\n                    <label for=\"firstName\" class=\"control-label\">First Name</label>\n                    <input type=\"text\" name=\"firstName\" required [(ngModel)]=\"user.fName\" placeholder=\"Shlomo\"\n                        class=\"form-control col-lg\" pattern=\"[A-Z][a-z]{1,15}\" maxlength=\"15\">\n                </div>\n                <!--***last name***-->\n                <div class=\"form-group\">\n                    <label for=\"lastName\" class=\"control-label\">Last Name</label>\n                    <input type=\"text\" name=\"lastName\" required [(ngModel)]=\"user.lName\" placeholder=\"Gamal\"\n                        class=\"form-control col-lg\" pattern=\"[A-Z][a-z]{1,15}\" maxlength=\"15\">\n                    <!-- </div> -->\n                </div>\n                <!--***id number***-->\n                <div class=\"form-group\">\n                    <label for=\"idNumber\" class=\"control-label\">Id Number</label>\n                    <input type=\"text\" name=\"idNumber\" required [(ngModel)]=\"user.userId\"\n                        placeholder=\"Must be 9 symbols\" class=\"form-control col-lg\" pattern=\"[0-9]{9}\" maxlength=\"9\">\n                </div>\n                <!--***email****-->\n                <div class=\"form-group\">\n                    <label for=\"email\" class=\"control-label\">Email</label>\n                    <input type=\"email\" name=\"email\" required [(ngModel)]=\"user.email\" placeholder=\"example@mail.com\"\n                        class=\"form-control col-lg\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" maxlength=\"20\">\n                </div>\n                <!--***date of birth****-->\n                <div class=\"form-group\">\n                    <label for=\"birthDate\" class=\"control-label\">Date of Birth</label>\n                    <input type=\"date\" name=\"birthDate\" required [(ngModel)]=\"user.birthDay\" class=\"form-control col-lg\"\n                        max=\"{{this.Years18 | date :'yyyy-MM-dd'}}\">\n                </div>\n            </div>\n            <div class=\"col-lg\">\n                <!--***gender****-->\n                <div class=\"form-group\">\n                    <label class=\"control-label\">Gender</label>\n                    <select #gender class=\"form-control col-lg\" name=\"Gender\" [(ngModel)]=\"user.gender\" required>\n                        <option>male</option>\n                        <option>female</option>\n                    </select>\n                </div>\n                <!--***user name***-->\n                <div class=\"form-group\">\n                    <label for=\"userName\" class=\"control-label\">User Name</label>\n                    <input type=\"text\" name=\"userName\" required [(ngModel)]=\"user.userName\" placeholder=\"user123Name\"\n                        class=\"form-control col-lg\" pattern=\"[0-9A-Za-z]{1,15}\" maxlength=\"15\">\n                </div>\n                <!--***password****-->\n                <div class=\"form-group\">\n                    <label for=\"password\" class=\"control-label\">Password</label>\n                    <input type=\"password\" name=\"password\" required [(ngModel)]=\"user.password\"\n                        placeholder=\"Must be between 6-15 symbols\" class=\"form-control col-lg\"\n                        pattern=\"[0-9A-Za-z]{6,15}\">\n                </div>\n                <!--***confirm password****-->\n                <div class=\"form-group\">\n                    <label for=\"password\" class=\"control-label\">Confirm password</label>\n                    <input type=\"password\" name=\"password\" placeholder=\"Confirm password\" class=\"form-control col-lg\"\n                        required pattern=\"{{user.password}}\">\n                </div>\n                <!--***register****-->\n                <div class=\"form-group\">\n                    <button type=\"submit\" (click)=\"Registrarion()\" class=\"btn btn-lg btn-primary btn-block\"\n                        [disabled]=\"!registrationForm.form.valid\">Registration</button>\n                </div>\n            </div>\n        </div>\n    </form> <!-- /form -->\n</div> <!-- ./container -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ClientPage/search-car/search-car.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ClientPage/search-car/search-car.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ************searcher ****************-->\n<aside role=\"form\">\n  <!-- <div > -->\n  <form class=\"form-group\">\n    <label for=\"manufacturer\">Manufacturer</label>\n    <select id=\"manufacturer\" name=\"manufacturer\" [(ngModel)]=\"selectManufacturer\">\n      <option value=\"undefined\" hidden disabled selected>Select</option>\n      <option [value]=\"i.ManufacturerNmae\" *ngFor=\"let i of typeCarList | removeDuplicate: 'ManufacturerNmae'\">\n        {{i.ManufacturerNmae}}</option>\n    </select>\n    ​\n    <label for=\"model\">Model</label>\n    <select id=\"model\" name=\"model\" [(ngModel)]=\"selectModel\">\n      <option value=\"undefined\" hidden disabled selected>Select</option>\n      <option [value]=\"i.Model\" *ngFor=\"let i of typeCarList | removeDuplicate: 'Model'\">{{i.Model}}</option>\n    </select>\n\n    <label for=\"yearManufacturer\">Year Manufacturer</label>\n    <select id=\"yearManufacturer\" name=\"yearManufacturer\" [(ngModel)]=\"selectYearManufacturer\">\n      <option value=\"undefined\" hidden disabled selected>Select</option>\n      <option [value]=\"i.YearManufacturer\" *ngFor=\"let i of typeCarList | removeDuplicate: 'YearManufacturer'\">\n        {{i.YearManufacturer | date :'yyyy'}}\n      </option>\n    </select>\n    ​\n    <label for=\"transmission\">Transmission</label>\n    <select id=\"transmission\" name=\"transmission\" [(ngModel)]=\"selectTransmission\">\n      <option value=\"undefined\" hidden disabled selected>Select</option>\n      <option value=\"automatic\">Automatic</option>\n      <option value=\"manual\">Manual</option>\n    </select>\n    <label for=\"pickupDate\">Select pickup date</label>\n    <div>\n      <input type=\"date\" name=\"pickupDate\" ngModel=\"{{today | date :'yyyy-MM-dd'}}\" min=\"{{today | date :'yyyy-MM-dd'}}\"\n        [(ngModel)]=\"pickup_Date\" class=\"form-control\" autofocus>\n    </div>\n    <label for=\"txt\">Text</label>\n    <input type=\"text\" id=\"txt\" name=\"txt\" [(ngModel)]=\"txtSearch\" placeholder=\"Text\">\n    <button type=\"reset\" class=\"btn btn-warning col-lg\" value=\"Clear form\">Reset</button>\n  </form>\n</aside>\n<article>\n  <!--***  view car list***  -->\n  <section class=\"listings scrollbar\">\n    <div class=\"wrapper\">\n      <ul class=\"properties_list\">\n        <ng-container *ngFor=\"let carItem of carList|availableCar\">\n          <ng-container\n            *ngFor=\"let i of typeCarList|resultSearchCar:txtSearch:selectManufacturer:selectModel:selectTransmission:selectYearManufacturer\">\n            <li *ngIf=\"carItem.CarType==i.CarType\">\n              <a (click)=\"selectCar(carItem,i)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"click to order\">\n                <img src=\"data:Image/jpg;base64,{{carItem.Picture}}\" alt=\"not found\" class=\"property_img\" />\n              </a>\n              <div class=\"property_details\">\n                <span class=\"price\">{{i.DalyPrice}}₪ <h2>per day</h2> </span>\n                <h1>{{i.CarType}} </h1>\n                <h1>\n                  {{i.Transmission}}\n                </h1>\n              </div>\n            </li>\n          </ng-container>\n        </ng-container>\n      </ul>\n    </div>\n  </section> <!--  end listing section  -->\n</article>\n\n\n​\n\n​"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UserPage/user-all-orders/user-all-orders.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UserPage/user-all-orders/user-all-orders.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ****************list current orders ******************-->\n<h2 style=\"text-align: center; background-color: rgb(212, 248, 248);\">My list of all car orders</h2>\n<section class=\"scrollbar\">\n    <div class=\"table-wrapper-scroll-y \">\n        <table class=\"table table-hover\">\n            <tbody>\n                <ng-container *ngFor=\"let i_rentCar of rentCarList; index as i;\">\n                    <tr *ngIf=\"i_rentCar.UserID==this.userService.loginUser.UserID\">\n                        <td>\n                            <div class=\"row col-lg\">\n                                <div class=\"col-lg-1\">\n                                    <strong>{{i+1}}</strong>\n                                </div>\n                                <div class=\"col-lg-auto\">\n                                    <strong>Car number</strong>\n                                    <div>{{i_rentCar.CarID}}</div>\n                                </div>\n                                <div class=\"col-lg-auto\">\n                                    <strong>Picup date</strong>\n                                    <div>{{i_rentCar.PickupCar | date :'yyyy-MM-dd'}}</div>\n                                </div>\n                                <div class=\"col-lg-auto\">\n                                    <strong>Drop-off date</strong>\n                                    <div>{{i_rentCar.ReturnCar | date :'yyyy-MM-dd'}}</div>\n                                </div>\n                                <div *ngIf=\"i_rentCar.ReturnCarIndeed!=null\" class=\"col-lg\">\n                                    <strong>Drop-off date indeed</strong>\n                                    <div style=\"background-color:green;\">\n                                        {{i_rentCar.ReturnCarIndeed | date :'yyyy-MM-dd'}}</div>\n                                </div>\n                                <div *ngIf=\"i_rentCar.ReturnCarIndeed==null\" class=\"col-lg\">\n                                    <strong>Drop-off date indeed</strong>\n                                    <div style=\"background-color: red;\">Still used</div>\n                                </div>\n                            </div>\n                        </td>\n                    </tr>\n                </ng-container>\n            </tbody>\n        </table>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/UserPage/user-order/user-order.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/UserPage/user-order/user-order.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ****************list current orders ******************-->\n<h2 style=\"text-align: center; background-color: rgb(212, 248, 248);\">My list of current car orders</h2>\n<section class=\"scrollbar\">\n    <div class=\"table-wrapper-scroll-y \">\n        <table class=\"table table-hover\">\n            <tbody>\n                <ng-container *ngFor=\"let i_car of carList; index as i;\">\n                    <ng-container *ngFor=\"let item of rentCarList\">\n                        <ng-container *ngFor=\"let i_typeCar of typeCarList\">\n                            <ng-container *ngIf=\"item.CarID==i_car.CarID && item.ReturnCarIndeed==null\">\n                                <tr\n                                    *ngIf=\"i_car.CarType==i_typeCar.CarType && item.UserID==this.userService.loginUser.UserID\">\n                                    <td>\n                                        <div class=\"row col-lg\">\n                                            <div class=\"col-lg-4\">\n                                                <img style=\"width:100%; max-width:400px;\"\n                                                    src=\"data:Image/jpg;base64,{{i_car.Picture}}\" />\n                                            </div>\n                                            <div class=\"col-lg\">\n                                                <h3 style=\"text-align: center; background-color: rgb(212, 248, 248);\">\n                                                    {{i_car.CarType}}</h3>\n                                                <div class=\"row\">\n                                                    <div class=\"col-lg\">\n                                                        <strong>Manufacturer </strong>\n                                                        <div>{{i_typeCar.ManufacturerNmae}}</div>\n                                                        <strong>Model </strong>\n                                                        <div>{{i_typeCar.Model}}</div>\n                                                        <strong>Year </strong>\n                                                        <div>{{i_typeCar.YearManufacturer | date :'yyyy-MM-dd'}}</div>\n                                                        <strong>Car number </strong>\n                                                        <div>{{item.CarID}}</div>\n                                                    </div>\n                                                    <div class=\"col-lg\">\n                                                        <strong> Pickup date </strong>\n                                                        <div>{{item.PickupCar | date :'yyyy-MM-dd'}}</div>\n                                                        <strong> Drop-off date</strong>\n                                                        <div>{{item.ReturnCar | date :'yyyy-MM-dd'}}</div>\n                                                        <strong> Drop-off overdue date </strong>\n                                                        <div>{{today| date :'yyyy-MM-dd'}}</div>\n                                                    </div>\n                                                    <div class=\"col-lg\">\n                                                        <strong>Payment </strong>\n                                                        <div>\n                                                            {{CalcPrice(item.ReturnCar,item.PickupCar,i_typeCar.DalyPrice)}}₪\n                                                        </div>\n                                                        <strong>Payment overdue days</strong>\n                                                        <div>\n                                                            {{CalcOverduePrice(item.ReturnCar,i_typeCar.DelayDalyPrice,item.PickupCar)}}₪\n                                                        </div>\n                                                        <strong>Total payment</strong>\n                                                        <div>\n                                                            {{CalcPrice(item.ReturnCar,item.PickupCar,i_typeCar.DalyPrice)\n                                                        +CalcOverduePrice(item.ReturnCar,i_typeCar.DelayDalyPrice, item.PickupCar)}}₪\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </ng-container>\n                        </ng-container>\n                    </ng-container>\n                </ng-container>\n            </tbody>\n        </table>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero\">\n    <header>\n        <div class=\"wrapper\">\n            <a [routerLink]=\"'HomePage'\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Home page\" class=\"pointer\">\n                <img src='../assets/img/Camel-logo.jpg' alt=\"not found\" height=\"100\" width=\"100\" class=\"logo\">\n            </a>\n            <nav class=\"navbar navbar-expand-lg navbar-light\">\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <ul class=\"navbar-nav mr-auto\">\n                        <li class=\"nav-item dropdown\" *ngIf=\"UserRole()=='admin'\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                Admin\n                            </a>\n                            <div class=\"dropdown-menu bg-dark\" aria-labelledby=\"navbarDropdown\">\n                                <a class=\"dropdown-item bg-secondary\" [routerLink]=\"'ListCars'\">List cars</a>\n                                <a class=\"dropdown-item bg-secondary\" [routerLink]=\"'ListOrders'\">List orders</a>\n                                <a class=\"dropdown-item bg-secondary\" [routerLink]=\"'ListUsers'\">List users</a>\n                            </div>\n                        </li>\n                        <li class=\"nav-item dropdown\" *ngIf=\"UserRole()=='employee'\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                Employee\n                            </a>\n                            <div class=\"dropdown-menu bg-dark\" aria-labelledby=\"navbarDropdown\">\n                                <a class=\"dropdown-item bg-secondary\" [routerLink]=\"'Employee'\">List orders</a>\n                            </div>\n                        </li>\n                        <li class=\"nav-item dropdown\" *ngIf=\"UserRole()=='user'\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                Hello {{this.userService.loginUser.FirstName}}\n                            </a>\n                            <div class=\"dropdown-menu bg-dark\" aria-labelledby=\"navbarDropdown\">\n                                <a class=\"dropdown-item bg-secondary\" [routerLink]=\"'UserOrder'\">Сurrent order</a>\n                                <a class=\"dropdown-item bg-secondary\" [routerLink]=\"'UserAllOrders'\">List orders</a>\n                            </div>\n                        </li>\n                        <li><a [routerLink]=\"'HomePage'\">Home</a></li>\n                        <li><a [routerLink]=\"'RegisterPage'\">Registration</a></li>\n                        <li><a [routerLink]=\"'SearchCar'\">Search car</a></li>\n                        <li><a style=\"cursor: pointer;\" (click)=\"GoToFooter('footer1')\">About</a></li>\n                        <li><a style=\"cursor: pointer;\" (click)=\"GoToFooter('footer1')\">Contact</a></li>\n                    </ul>\n                    <a *ngIf=\"LoginConfirm()==false\" [routerLink]=\"'Login'\" class=\"login_btn\">Login</a>\n                    <a *ngIf=\"LoginConfirm()==true\" (click)=\"LogOut()\" [routerLink]=\"'HomePage'\"\n                        class=\"login_btn\">Logout</a>\n                </div>\n            </nav>\n        </div>\n    </header><!--  end header section  -->\n\n    <router-outlet></router-outlet>\n\n</section>\n<!--end hero section  -->\n\n<article *ngIf=\"this.userService.choicesOfCar[0]!==undefined\"\n    style=\"height: 300px; background-color: rgb(89, 100, 89);\">\n    <section class=\"listings \">\n        <p class=\"h1\" style=\"text-align: center; background-color: rgb(153, 153, 151);\">The cars you have been\n            interested in recently</p>\n        <div class=\"wrapper\">\n            <ul class=\"properties_list\">\n                <ng-container *ngFor=\"let carItem of this.userService.choicesOfCar\">\n                    <ng-container *ngFor=\"let i of typeCarList\">\n                        <li *ngIf=\"carItem.CarType==i.CarType\">\n                            <a (click)=\"selectCar(carItem,i)\" data-toggle=\"tooltip\" data-placement=\"top\"\n                                title=\"click to order\">\n                                <img src=\"data:Image/jpg;base64,{{carItem.Picture}}\" alt=\"not found\"\n                                    class=\"property_img\" />\n                            </a>\n                            <div class=\"property_details\">\n                                <span class=\"price\">{{i.DalyPrice}}₪ <h2>per day</h2> </span>\n                                <h1>{{i.CarType}} </h1>\n                                <h1>\n                                    {{i.Transmission}}\n                                </h1>\n                            </div>\n                        </li>\n                    </ng-container>\n                </ng-container>\n            </ul>\n        </div>\n    </section>\n</article>\n\n<footer id=\"footer1\">\n    <div class=\"wrapper footer\">\n        <ul>\n            <li class=\"links\">\n                <h3>Contact</h3>\n                <address>\n                    <strong>Branch: Tel aviv</strong><br>\n                    Yitzhak Sadeh St 40, <br>\n                    Tel Aviv-Yafo, Israel<br>\n                    <abbr title=\"Phone\">P:</abbr> (+972) 3333-2222\n                </address>\n                <address>\n                    <strong>Branch: Holon</strong><br>\n                    Yitzhak Sadeh St 30, <br>\n                    Holon, Israel<br>\n                    <abbr title=\"Phone\">P:</abbr> (+972) 3322-4444\n                </address>\n                <address>\n                    <strong>Branch: Ashdod</strong><br>\n                    Yitzhak Sadeh St 10, <br>\n                    Ashdod, Israel<br>\n                    <abbr title=\"Phone\">P:</abbr> (+972) 8333-1234\n                </address>\n            </li>\n\n            <li class=\"about\">\n                <h3>Abaut</h3>\n                <p>Gamal Six - Car rental services in Israel and abroad\n                    When you think of car rental in Israel or abroad there is one name that appears everywhere in the\n                    world, even in the most remote corners: Gamal Six.\n                    Gamal Six is the world's most experienced car rental company with 9,999 rental stations in over 170\n                    countries.\n                    Since 1965 Gamal Six has been operating in Israel, offering reliable and professional car rental\n                    services in the big cities, airports and various markets.\n                    In addition to car rental, we offer car sales services, second-hand and trade-in, enabling our\n                    customers to enjoy a warm, professional and experienced home for all vehicle services.\n                    We here at Gamal Six are leading in fair pricing and offer personal service and are attentive to the\n                    needs of the customer everywhere in Israel and abroad.</p>\n\n            </li>\n        </ul>\n    </div>\n\n    <div class=\"copyrights wrapper\">\n        Copyright © 2015. All Rights Reserved.\n    </div>\n</footer><!--  end footer  -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee/employee.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee/employee.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"preloader\">\n    <div id=\"loader\"></div>\n    <h3 style=\"text-align: center; position: relative; top: 60%; color: white;\">Loading...</h3>\n</div>\n\n<!-- ****************list orders ******************-->\n<div class=\"scrollbar table-wrapper-scroll-y \">\n    <input type=\"number\" class=\"form-control col-lg-2\" [(ngModel)]=\"searchTxt\" placeholder=\"Search...\"\n        style=\"background-color: rgb(228, 228, 228)\">\n    <table class=\"table table-hover\">\n        <thead>\n            <tr scope=\"col-lg-12\">\n                <th scope=\"col-lg\"></th>\n                <th scope=\"col-lg\">Car number</th>\n                <th scope=\"col-lg\">Pickup date</th>\n                <th scope=\"col-lg\">Drop-off date</th>\n                <th scope=\"col-lg\">Drop-off date indeed</th>\n                <th scope=\"col-lg\">Payment</th>\n                <th scope=\"col-lg\">Payment overdue days</th>\n                <th scope=\"col-lg\">Total payment</th>\n            </tr>\n        </thead>\n        <tbody>\n            <ng-container *ngFor=\"let i_car of carList | searchNumberCar:searchTxt; index as i;\">\n                <ng-container *ngFor=\"let item of rentCarList\">\n                    <ng-container *ngFor=\"let i_typeCar of typeCarList\">\n                        <ng-container *ngIf=\"item.CarID==i_car.CarID && item.ReturnCarIndeed==null\">\n                            <tr *ngIf=\"i_car.CarType==i_typeCar.CarType \" (click)=\"Payment(i_car.CarID,item.ID)\"\n                                class=\"pointer\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"click to pay\">\n                                <th scope=\"row\">{{i+1}}</th>\n                                <td>{{item.CarID}}</td>\n                                <td>{{item.PickupCar | date :'yyyy-MM-dd'}}</td>\n                                <td>{{item.ReturnCar | date :'yyyy-MM-dd'}}</td>\n                                <td>{{today| date :'yyyy-MM-dd'}}</td>\n                                <td>{{CalcPrice(item.ReturnCar,item.PickupCar,i_typeCar.DalyPrice)}}₪</td>\n                                <td>{{CalcOverduePrice(item.ReturnCar,i_typeCar.DelayDalyPrice,item.PickupCar)}}₪\n                                </td>\n                                <td>{{CalcPrice(item.ReturnCar,item.PickupCar, i_typeCar.DalyPrice)+CalcOverduePrice(item.ReturnCar,i_typeCar.DelayDalyPrice, item.PickupCar)}}₪\n                                </td>\n                            </tr>\n                        </ng-container>\n                    </ng-container>\n                </ng-container>\n            </ng-container>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login-page/login-page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-page/login-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"preloader\">\n  <div id=\"loader\"></div>\n  <h3 style=\"text-align: center; position: relative; top: 60%; color: white;\">Loading...</h3>\n</div>\n\n<!--********************** login form*********** -->\n<div class=\"container\">\n  <form class=\"form\" role=\"form\">\n    <h2>Login</h2>\n\n    <!--***user name***-->\n    <div class=\"form-group\">\n      <label for=\"userName\" class=\"col-lg control-label\">User Name</label>\n      <div class=\"col-lg-9\">\n        <input type=\"text\" name=\"userName\" [(ngModel)]=\"loginUser.userName\" placeholder=\"User Name\" class=\"form-control\"\n          autofocus>\n      </div>\n    </div>\n\n    <!--***password****-->\n    <div class=\"form-group\">\n      <label for=\"password\" class=\"col-lg-3 control-label\">Password</label>\n      <div class=\"col-lg-9\">\n        <input type=\"password\" name=\"password\" [(ngModel)]=\"loginUser.password\" placeholder=\"Password\"\n          class=\"form-control\">\n      </div>\n    </div>\n\n    <!--***login****-->\n    <div class=\"form-group\">\n      <div class=\"col-lg-9 col-lg-offset-3\">\n        <button type=\"submit\" (click)=\"LogIn()\" class=\"btn btn-primary btn-block\">Login</button>\n      </div>\n    </div>\n  </form> <!-- /form -->\n</div> <!-- ./container -->"

/***/ }),

/***/ "./src/app/AdminPage/list-cars/list-cars.component.css":
/*!*************************************************************!*\
  !*** ./src/app/AdminPage/list-cars/list-cars.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {font-family: Arial, Helvetica, sans-serif;}\r\n* {box-sizing: border-box;}\r\n/* Button used to open the contact form - fixed at the bottom of the page */\r\n.open-button {\r\n  background-color: rgb(4, 49, 253);\r\n  color: white;\r\n  padding: 16px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n  position: absolute;\r\n  top: 200px;\r\n  left: 0; \r\n  width: 16%;\r\n}\r\n/* The popup form - hidden by default */\r\n.form-popup {\r\n  width: 50%;\r\n  display: none;\r\n   position: fixed;\r\n  left: 0;   \r\n  top:0;  \r\n  border: 3px solid #f4f5c6;\r\n   z-index: 500;\r\n    background-color: rgb(208, 234, 247);\r\n}\r\n/* Full-width input fields */\r\n.form-container input[type=text], \r\n.form-container input[type=number], \r\n.form-container input[type=date],\r\n.form-container button[type=submit],\r\n.form-container button[type=reset],\r\n.form-container button[type=button], \r\n.form-container select{\r\n \r\n  padding: 5px;\r\n  margin: -3px 10px 10px 5px;  \r\n}\r\nli {\r\n  list-style-type: none;\r\n}\r\n.scrollbar {\r\n  position: relative; \r\n  z-index: 100; \r\n  max-height: 660px;\r\n  margin: 0;    \r\n  overflow: auto;\r\n  background-color: rgb(255, 254, 254); \r\n      \r\n  }\r\n.table-wrapper-scroll-y {\r\n  display: block;\r\n  width: 80%;\r\n  left: 10%;\r\n  right: 10%;\r\n  top: -10px;\r\n  }\r\n.th-sticky{\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0; \r\n    z-index: 100;\r\n    background-color: azure;\r\n  }\r\n/* Center the loader */\r\n#preloader{\r\n    position: fixed;\r\n    z-index: 1000;\r\n    width: 100%;\r\n    height: 100%;\r\n    top:0;\r\n    background-color: gray;\r\n    opacity: 0.5;\r\n    display:none;\r\n  }\r\n#loader {\r\n  position: relative;\r\n  left: 50%;\r\n  top: 50%;\r\n  \r\n  width: 150px;\r\n  height: 150px;\r\n  margin: -75px 0 0 -75px;\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;  \r\n}\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW5QYWdlL2xpc3QtY2Fycy9saXN0LWNhcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hELEdBQUcsc0JBQXNCLENBQUM7QUFFMUIsMkVBQTJFO0FBQzNFO0VBQ0UsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixPQUFPO0VBQ1AsVUFBVTtBQUNaO0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsVUFBVTtFQUNWLGFBQWE7R0FDWixlQUFlO0VBQ2hCLE9BQU87RUFDUCxLQUFLO0VBQ0wseUJBQXlCO0dBQ3hCLFlBQVk7SUFDWCxvQ0FBb0M7QUFDeEM7QUFJQSw0QkFBNEI7QUFDNUI7Ozs7Ozs7O0VBUUUsWUFBWTtFQUNaLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsY0FBYztFQUNkLG9DQUFvQzs7RUFFcEM7QUFFQTtFQUNBLGNBQWM7RUFDZCxVQUFVO0VBQ1YsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0VBQ1Y7QUFFQTtJQUNFLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7QUFFQSxzQkFBc0I7QUFDdEI7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osS0FBSztJQUNMLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtFQUNkO0FBQ0Y7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7O0VBRVIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxLQUFLLCtCQUErQixFQUFFO0VBQ3RDLE9BQU8saUNBQWlDLEVBQUU7QUFDNUM7QUFFQTtFQUNFLEtBQUssdUJBQXVCLEVBQUU7RUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtBQUNwQyIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFnZS9saXN0LWNhcnMvbGlzdC1jYXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjt9XHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG5cclxuLyogQnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgY29udGFjdCBmb3JtIC0gZml4ZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSAqL1xyXG4ub3Blbi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCA0OSwgMjUzKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwMHB4O1xyXG4gIGxlZnQ6IDA7IFxyXG4gIHdpZHRoOiAxNiU7XHJcbn1cclxuXHJcbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuLmZvcm0tcG9wdXAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7ICAgXHJcbiAgdG9wOjA7ICBcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjRmNWM2O1xyXG4gICB6LWluZGV4OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyMzQsIDI0Nyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0sIFxyXG4uZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1udW1iZXJdLCBcclxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9ZGF0ZV0sXHJcbi5mb3JtLWNvbnRhaW5lciBidXR0b25bdHlwZT1zdWJtaXRdLFxyXG4uZm9ybS1jb250YWluZXIgYnV0dG9uW3R5cGU9cmVzZXRdLFxyXG4uZm9ybS1jb250YWluZXIgYnV0dG9uW3R5cGU9YnV0dG9uXSwgXHJcbi5mb3JtLWNvbnRhaW5lciBzZWxlY3R7XHJcbiBcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiAtM3B4IDEwcHggMTBweCA1cHg7ICBcclxufVxyXG5cclxubGkge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4uc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gIHotaW5kZXg6IDEwMDsgXHJcbiAgbWF4LWhlaWdodDogNjYwcHg7XHJcbiAgbWFyZ2luOiAwOyAgICBcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTQsIDI1NCk7IFxyXG4gICAgICBcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHJpZ2h0OiAxMCU7XHJcbiAgdG9wOiAtMTBweDtcclxuICB9XHJcblxyXG4gIC50aC1zdGlja3l7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwOyBcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xyXG4gIH1cclxuXHJcbiAgLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cclxuICAjcHJlbG9hZGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuI2xvYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICBcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAgXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/AdminPage/list-cars/list-cars.component.ts":
/*!************************************************************!*\
  !*** ./src/app/AdminPage/list-cars/list-cars.component.ts ***!
  \************************************************************/
/*! exports provided: ListCarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCarsComponent", function() { return ListCarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../car */ "./src/app/car.ts");
/* harmony import */ var _typeCar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../typeCar */ "./src/app/typeCar.ts");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");







let ListCarsComponent = class ListCarsComponent {
    constructor(http, userService, router) {
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.car = new _car__WEBPACK_IMPORTED_MODULE_4__["Car"]();
        this.typeCar = new _typeCar__WEBPACK_IMPORTED_MODULE_5__["TypeCar"]();
    }
    //***converting image to base64 part 1***/
    handleFileSelect(event) {
        var files = event.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }
    //***converting image to base64 part 2***/
    _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.car.picture = btoa(binaryString);
    }
    //****Function adding new car to database*****/
    AddNewCar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
            document.getElementById('preloader').style.display = "block";
            this.closeForm();
            yield this.http.post("http://localhost:58558/api/car/", {
                CarID: this.car.carNumber,
                CarType: this.car.carType,
                Mileage: this.car.mileage,
                PictureBase64: this.car.picture,
                Usable: this.car.usable,
                Available: this.car.available,
                Branch: this.car.branch
            }, { headers: authHeaders }).toPromise().then(h => console.log(h)).catch(err => alert(err.error));
            this.ngOnInit();
            document.getElementById('preloader').style.display = "none";
            //****Function adding new type of car to database*****/
        });
    }
    AddNewTypeCar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
            let year = ((this.typeCar.YearManufacturer).toString()).slice(0, -6);
            this.typeCar.CarType = this.typeCar.ManufacturerNmae + " " + this.typeCar.Model + " " + year;
            document.getElementById('preloader').style.display = "block";
            this.closeForm();
            yield this.http.post("http://localhost:58558/api/typecar/", {
                CarType: this.typeCar.CarType,
                ManufacturerNmae: this.typeCar.ManufacturerNmae,
                Model: this.typeCar.Model,
                DalyPrice: this.typeCar.DalyPrice,
                DelayDalyPrice: this.typeCar.DelayDalyPrice,
                YearManufacturer: this.typeCar.YearManufacturer,
                Transmission: this.typeCar.Transmission
            }, { headers: authHeaders }).toPromise().then(h => console.log(h)).catch(err => alert(err.error));
            this.car.picture = undefined;
            this.ngOnInit();
            document.getElementById('preloader').style.display = "none";
        });
    }
    //****function to open form in template/html*****
    openForm() {
        document.getElementById("addCarForm").style.display = "block";
    }
    //****function to close form in template/html*****
    closeForm() {
        document.getElementById("addCarForm").style.display = "none";
    }
    //****function to udate car in database****
    UpdateCar(id, cType, mileage, branch, available, usable) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
            document.getElementById('preloader').style.display = "block";
            yield this.http.put("http://localhost:58558/api/car/" + id, {
                CarType: cType,
                Mileage: mileage,
                Branch: branch,
                Available: available,
                Usable: usable,
                PictureBase64: this.car.picture
            }, { headers: authHeaders }).toPromise().catch(err => alert(err.error));
            this.car.picture = undefined;
            this.ngOnInit();
            document.getElementById('preloader').style.display = "none";
        });
    }
    //****function to udate type of car in database****
    UpdateTypeCar(id, manufacturerNmae, model, dalyPrice, delayDalyPrice, yearManufacturer, transmission) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
            document.getElementById('preloader').style.display = "block";
            yield this.http.put("http://localhost:58558/api/typecar/" + id, {
                ManufacturerNmae: manufacturerNmae,
                Model: model,
                DalyPrice: dalyPrice,
                DelayDalyPrice: delayDalyPrice,
                YearManufacturer: yearManufacturer,
                Transmission: transmission
            }, { headers: authHeaders }).toPromise().catch(err => alert(err.error));
            this.ngOnInit();
            document.getElementById('preloader').style.display = "none";
        });
    }
    //****function to detete car in database****
    DeleteCar(carId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
            document.getElementById('preloader').style.display = "block";
            yield this.http.delete("http://localhost:58558/api/car/" + carId, { headers: authHeaders }).toPromise().catch(err => alert(err.error));
            this.ngOnInit();
            document.getElementById('preloader').style.display = "none";
        });
    }
    //****function to delete type of car in database****
    DeleteTypeCar(carTypeId, carId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
            document.getElementById('preloader').style.display = "block";
            yield this.http.put("http://localhost:58558/api/car/" + carId, {
                CarType: 'none', Usable: 'no'
            }, { headers: authHeaders }).toPromise();
            yield this.http.delete("http://localhost:58558/api/typecar/" + carTypeId, { headers: authHeaders }).toPromise().catch(err => alert(err.error));
            this.ngOnInit();
            document.getElementById('preloader').style.display = "none";
        });
    }
    ngOnInit() {
        //*****if not admin role routing to home page****
        if (this.userService.userRole() != 'admin' || this.userService.userRole() == undefined) {
            this.router.navigate(['/HomePage']);
        }
        this.http.get("http://localhost:58558/api/car/").subscribe(t => { this.carList = t; });
        this.http.get("http://localhost:58558/api/typecar/").subscribe(t => { this.typeList = t, this.typeList2 = t; });
    }
};
ListCarsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ListCarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-cars',
        template: __webpack_require__(/*! raw-loader!./list-cars.component.html */ "./node_modules/raw-loader/index.js!./src/app/AdminPage/list-cars/list-cars.component.html"),
        styles: [__webpack_require__(/*! ./list-cars.component.css */ "./src/app/AdminPage/list-cars/list-cars.component.css")]
    })
], ListCarsComponent);



/***/ }),

/***/ "./src/app/AdminPage/list-orders/list-orders.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/AdminPage/list-orders/list-orders.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {font-family: Arial, Helvetica, sans-serif;}\r\n* {box-sizing: border-box;}\r\n/* The popup form - hidden by default */\r\n.form-popup {\r\n  width: 30%;\r\n  display: none;\r\n   position: fixed;\r\n  left: 0;   \r\n  top:0;  \r\n  border: 3px solid #f4f5c6;\r\n   z-index: 500; \r\n   background-color: rgb(208, 234, 247);\r\n}\r\n/* Add styles to the form container */\r\n.form-container {\r\n  width: 95%;\r\n  padding: 10px;\r\n  \r\n}\r\n/* Full-width input fields */\r\n.form-container input[type=date],\r\n.form-container button[type=submit],\r\n.form-container button[type=reset],\r\n.form-container button[type=button], \r\n.form-container select {\r\n \r\n  padding: 5px;\r\n  margin: -3px 0 22px 0;  \r\n}\r\nli {\r\n  list-style-type: none;\r\n}\r\n.scrollbar {\r\n  position: relative;  \r\n  max-height: 600px;\r\n  max-width: 80%;  \r\n  overflow: auto;\r\n  background-color: rgb(255, 254, 254); \r\n  top: -10px;    \r\n  }\r\n.table-wrapper-scroll-y {\r\n  display: block;\r\n \r\n \r\n  \r\n  }\r\n.th-sticky{\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0; \r\n    z-index: 100;\r\n    background-color: azure;\r\n  }\r\ninput.ng-touched.ng-invalid {border:solid red 2px;}\r\n/* Center the loader */\r\n#preloader{\r\n    position: fixed;\r\n    z-index: 1000;\r\n    width: 100%;\r\n    height: 100%;\r\n    top:0;\r\n    background-color: gray;\r\n    opacity: 0.5;\r\n    display:none;\r\n  }\r\n#loader {\r\n  position: relative;\r\n  left: 50%;\r\n  top: 50%;\r\n  \r\n  width: 150px;\r\n  height: 150px;\r\n  margin: -75px 0 0 -75px;\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;  \r\n}\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW5QYWdlL2xpc3Qtb3JkZXJzL2xpc3Qtb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRCxHQUFHLHNCQUFzQixDQUFDO0FBRTFCLHVDQUF1QztBQUN2QztFQUNFLFVBQVU7RUFDVixhQUFhO0dBQ1osZUFBZTtFQUNoQixPQUFPO0VBQ1AsS0FBSztFQUNMLHlCQUF5QjtHQUN4QixZQUFZO0dBQ1osb0NBQW9DO0FBQ3ZDO0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UsVUFBVTtFQUNWLGFBQWE7O0FBRWY7QUFFQSw0QkFBNEI7QUFFNUI7Ozs7OztFQU1FLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxVQUFVO0VBQ1Y7QUFFQTtFQUNBLGNBQWM7Ozs7RUFJZDtBQUVBO0lBQ0Usd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtBQUVBLDZCQUE2QixvQkFBb0IsQ0FBQztBQUVsRCxzQkFBc0I7QUFDdEI7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osS0FBSztJQUNMLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtFQUNkO0FBQ0Y7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7O0VBRVIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxLQUFLLCtCQUErQixFQUFFO0VBQ3RDLE9BQU8saUNBQWlDLEVBQUU7QUFDNUM7QUFFQTtFQUNFLEtBQUssdUJBQXVCLEVBQUU7RUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtBQUNwQyIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFnZS9saXN0LW9yZGVycy9saXN0LW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7fVxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxuXHJcbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuLmZvcm0tcG9wdXAge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7ICAgXHJcbiAgdG9wOjA7ICBcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjRmNWM2O1xyXG4gICB6LWluZGV4OiA1MDA7IFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyMzQsIDI0Nyk7XHJcbn1cclxuXHJcbi8qIEFkZCBzdHlsZXMgdG8gdGhlIGZvcm0gY29udGFpbmVyICovXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIFxyXG59XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5cclxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9ZGF0ZV0sXHJcbi5mb3JtLWNvbnRhaW5lciBidXR0b25bdHlwZT1zdWJtaXRdLFxyXG4uZm9ybS1jb250YWluZXIgYnV0dG9uW3R5cGU9cmVzZXRdLFxyXG4uZm9ybS1jb250YWluZXIgYnV0dG9uW3R5cGU9YnV0dG9uXSwgXHJcbi5mb3JtLWNvbnRhaW5lciBzZWxlY3Qge1xyXG4gXHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogLTNweCAwIDIycHggMDsgIFxyXG59XHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi5zY3JvbGxiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gIG1heC13aWR0aDogODAlOyAgXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU0LCAyNTQpOyBcclxuICB0b3A6IC0xMHB4OyAgICBcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gXHJcbiBcclxuICBcclxuICB9XHJcblxyXG4gIC50aC1zdGlja3l7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwOyBcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtib3JkZXI6c29saWQgcmVkIDJweDt9XHJcblxyXG4gIC8qIENlbnRlciB0aGUgbG9hZGVyICovXHJcbiAgI3ByZWxvYWRlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiNsb2FkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgXHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgIFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/AdminPage/list-orders/list-orders.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/AdminPage/list-orders/list-orders.component.ts ***!
  \****************************************************************/
/*! exports provided: ListOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrdersComponent", function() { return ListOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");





let ListOrdersComponent = class ListOrdersComponent {
    constructor(http, userService, router) {
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.today = new Date();
    }
    //****function to open form in template/html*****
    openForm() {
        document.getElementById("addOrderForm").style.display = "block";
    }
    //****function to close form in template/html*****
    closeForm() {
        document.getElementById("addOrderForm").style.display = "none";
    }
    //****Function adding new order to database*****/
    AddNewOrder(carId, userId, picupDate, dropOffDate) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
            document.getElementById('preloader').style.display = "block";
            this.closeForm();
            yield this.http.post("http://localhost:58558/api/RentCar/", {
                CarID: carId,
                UserID: userId,
                PickupCar: picupDate,
                ReturnCar: dropOffDate,
            }, { headers: authHeaders }).toPromise();
            yield this.http.put("http://localhost:58558/api/Car/" + carId, {
                Available: 'no',
            }, { headers: authHeaders }).toPromise().catch(err => alert(err.error));
            this.ngOnInit();
            document.getElementById('preloader').style.display = "none";
        });
    }
    //****Function checking drop-off date if undefined return date of today*****/
    OverdueDate(dropOffDate) {
        if (dropOffDate == undefined) {
            return this.today;
        }
        else
            return dropOffDate;
    }
    //****function to udate order in database****
    Update(Id, carId, picupDate, dropOffDate, dropOffOverdue) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
            document.getElementById('preloader').style.display = "block";
            this.closeForm();
            yield this.http.put("http://localhost:58558/api/RentCar/" + Id, {
                CarID: carId,
                PickupCar: picupDate,
                ReturnCar: dropOffDate,
                ReturnCarIndeed: dropOffOverdue
            }, { headers: authHeaders }).toPromise().catch(err => alert(err.error));
            this.ngOnInit();
            document.getElementById('preloader').style.display = "none";
        });
    }
    //****function to delete order in database****
    Delete(Id, carNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
            document.getElementById('preloader').style.display = "block";
            this.closeForm();
            yield this.http.put("http://localhost:58558/api/Car/" + carNumber, {
                Available: 'yes',
            }, { headers: authHeaders }).toPromise().catch(err => alert(err.error));
            yield this.http.delete("http://localhost:58558/api/RentCar/" + Id, { headers: authHeaders }).toPromise().catch(err => alert(err.error));
            this.ngOnInit();
            document.getElementById('preloader').style.display = "none";
        });
    }
    ngOnInit() {
        //*****if not admin role routing to home page****
        if (this.userService.userRole() != 'admin' || this.userService.userRole() == undefined) {
            this.router.navigate(['/HomePage']);
        }
        this.http.get("http://localhost:58558/api/car/").subscribe(t => this.carList = t);
        this.http.get("http://localhost:58558/api/RentCar/").subscribe(t => this.rentCarList = t);
        let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
        this.http.get("http://localhost:58558/api/user/", { headers: authHeaders }).subscribe(h => this.usersList = h);
    }
};
ListOrdersComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ListOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-orders',
        template: __webpack_require__(/*! raw-loader!./list-orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/AdminPage/list-orders/list-orders.component.html"),
        styles: [__webpack_require__(/*! ./list-orders.component.css */ "./src/app/AdminPage/list-orders/list-orders.component.css")]
    })
], ListOrdersComponent);



/***/ }),

/***/ "./src/app/AdminPage/list-users/list-users.component.css":
/*!***************************************************************!*\
  !*** ./src/app/AdminPage/list-users/list-users.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {font-family: Arial, Helvetica, sans-serif;}\r\n* {box-sizing: border-box;}\r\n/* The popup form - hidden by default */\r\n.form-popup {\r\n  width: 30%;\r\n  height: 100%;\r\n  display: none;\r\n   position: fixed;\r\n  left: 0;   \r\n  top:0;  \r\n  border: 3px solid #f4f5c6;\r\n   z-index: 500; \r\n   background-color: rgb(208, 234, 247);\r\n}\r\n/* Add styles to the form container */\r\n.form-container {\r\n  width: 95%;  \r\n  padding: 10px;  \r\n}\r\n/* Full-width input fields */\r\n.form-container input[type=text], \r\n.form-container input[type=date],\r\n.form-container input[type=email],\r\n.form-container button[type=submit],\r\n.form-container button[type=reset],\r\n.form-container button[type=button], \r\n.form-container select {\r\n \r\n  padding: 5px;\r\n  margin: -3px 0 22px 0;  \r\n}\r\nli {\r\n  list-style-type: none;\r\n}\r\n.scrollbar {\r\n  position: relative;   \r\n  max-height: 600px;\r\n  max-width: 1400px;  \r\n  overflow: auto;\r\n  background-color: rgb(255, 254, 254); \r\n  top: -10px;    \r\n  }\r\n.table-wrapper-scroll-y {\r\n  display: block; \r\n  }\r\n.th-sticky{\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0; \r\n    z-index: 100;\r\n    background-color: azure;\r\n  }\r\ninput.ng-touched.ng-invalid {border:solid red 2px;}\r\n/* Center the loader */\r\n#preloader{\r\n    position: fixed;\r\n    z-index: 1000;\r\n    width: 100%;\r\n    height: 100%;\r\n    top:0;\r\n    background-color: gray;\r\n    opacity: 0.5;\r\n    display:none;\r\n  }\r\n#loader {\r\n  position: relative;\r\n  left: 50%;\r\n  top: 50%;\r\n  \r\n  width: 150px;\r\n  height: 150px;\r\n  margin: -75px 0 0 -75px;\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;  \r\n}\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW5QYWdlL2xpc3QtdXNlcnMvbGlzdC11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0seUNBQXlDLENBQUM7QUFDaEQsR0FBRyxzQkFBc0IsQ0FBQztBQUkxQix1Q0FBdUM7QUFDdkM7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7R0FDWixlQUFlO0VBQ2hCLE9BQU87RUFDUCxLQUFLO0VBQ0wseUJBQXlCO0dBQ3hCLFlBQVk7R0FDWixvQ0FBb0M7QUFDdkM7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBRUEsNEJBQTRCO0FBQzVCOzs7Ozs7OztFQVFFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxVQUFVO0VBQ1Y7QUFFQTtFQUNBLGNBQWM7RUFDZDtBQUVBO0lBQ0Usd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtBQUVBLDZCQUE2QixvQkFBb0IsQ0FBQztBQUdsRCxzQkFBc0I7QUFDdEI7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osS0FBSztJQUNMLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtFQUNkO0FBQ0Y7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7O0VBRVIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxLQUFLLCtCQUErQixFQUFFO0VBQ3RDLE9BQU8saUNBQWlDLEVBQUU7QUFDNUM7QUFFQTtFQUNFLEtBQUssdUJBQXVCLEVBQUU7RUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtBQUNwQyIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFnZS9saXN0LXVzZXJzL2xpc3QtdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO31cclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XHJcblxyXG5cclxuXHJcbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuLmZvcm0tcG9wdXAge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwOyAgIFxyXG4gIHRvcDowOyAgXHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2Y0ZjVjNjtcclxuICAgei1pbmRleDogNTAwOyBcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMjM0LCAyNDcpO1xyXG59XHJcblxyXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA5NSU7ICBcclxuICBwYWRkaW5nOiAxMHB4OyAgXHJcbn1cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdLCBcclxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9ZGF0ZV0sXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPWVtYWlsXSxcclxuLmZvcm0tY29udGFpbmVyIGJ1dHRvblt0eXBlPXN1Ym1pdF0sXHJcbi5mb3JtLWNvbnRhaW5lciBidXR0b25bdHlwZT1yZXNldF0sXHJcbi5mb3JtLWNvbnRhaW5lciBidXR0b25bdHlwZT1idXR0b25dLCBcclxuLmZvcm0tY29udGFpbmVyIHNlbGVjdCB7XHJcbiBcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiAtM3B4IDAgMjJweCAwOyAgXHJcbn1cclxuXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLnNjcm9sbGJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAgIFxyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gIG1heC13aWR0aDogMTQwMHB4OyAgXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU0LCAyNTQpOyBcclxuICB0b3A6IC0xMHB4OyAgICBcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyBcclxuICB9XHJcblxyXG4gIC50aC1zdGlja3l7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwOyBcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtib3JkZXI6c29saWQgcmVkIDJweDt9XHJcblxyXG4gIFxyXG4gIC8qIENlbnRlciB0aGUgbG9hZGVyICovXHJcbiAgI3ByZWxvYWRlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiNsb2FkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgXHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgIFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/AdminPage/list-users/list-users.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/AdminPage/list-users/list-users.component.ts ***!
  \**************************************************************/
/*! exports provided: ListUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUsersComponent", function() { return ListUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ListUsersComponent = class ListUsersComponent {
    constructor(http, userService, router) {
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.Years18 = Date.now() - 568025136000;
    }
    //****function to open form in template/html*****
    openForm() {
        document.getElementById("addUserForm").style.display = "block";
    }
    //****function to close form in template/html*****
    closeForm() {
        document.getElementById("addUserForm").style.display = "none";
    }
    //****Function adding new user to database*****/
    AddNewUser(fName, lName, id, u_email, bDay, gender, userName, password, role) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            document.getElementById('preloader').style.display = "block";
            this.closeForm();
            yield this.http.post("http://localhost:58558/api/user/", {
                FirstName: fName,
                LastName: lName,
                UserID: id,
                UserName: userName,
                BirthDay: bDay,
                Gender: gender,
                Email: u_email,
                UserPassword: password,
                Role: role
            }).toPromise().catch(err => alert(err.error));
            this.ngOnInit();
            document.getElementById('preloader').style.display = "none";
        });
    }
    //****function to udate user in database****
    Update(id, f_Nmae, l_Name, userId, email, birthDay, gender, userName, password, role) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
            document.getElementById('preloader').style.display = "block";
            yield this.http.put("http://localhost:58558/api/user/" + id, {
                FirstName: f_Nmae,
                LastName: l_Name,
                UserID: userId,
                Email: email,
                BirthDay: birthDay,
                Gender: gender,
                UserName: userName,
                UserPassword: password,
                Role: role
            }, { headers: authHeaders }).toPromise().catch(err => alert(err.error));
            this.ngOnInit();
            document.getElementById('preloader').style.display = "none";
        });
    }
    //****function to delete user in database****
    Delete(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
            document.getElementById('preloader').style.display = "block";
            yield this.http.delete("http://localhost:58558/api/user/" + id, { headers: authHeaders }).toPromise().catch(err => alert(err.error));
            this.ngOnInit();
            document.getElementById('preloader').style.display = "none";
        });
    }
    ngOnInit() {
        //*****if not admin role routing to home page****
        if (this.userService.userRole() != 'admin' || this.userService.userRole() == undefined) {
            this.router.navigate(['/HomePage']);
        }
        let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
        this.http.get("http://localhost:58558/api/user/", { headers: authHeaders }).subscribe(h => this.usersList = h, error => { this.error = error; });
    }
};
ListUsersComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ListUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-users',
        template: __webpack_require__(/*! raw-loader!./list-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/AdminPage/list-users/list-users.component.html"),
        styles: [__webpack_require__(/*! ./list-users.component.css */ "./src/app/AdminPage/list-users/list-users.component.css")]
    })
], ListUsersComponent);



/***/ }),

/***/ "./src/app/ClientPage/calc-day-price/calc-day-price.component.css":
/*!************************************************************************!*\
  !*** ./src/app/ClientPage/calc-day-price/calc-day-price.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width: 30%;  \r\n    min-width: 300px;  \r\n    }\r\n\r\n*[role=\"form\"] {\r\n    \r\n    padding: 15px;\r\n    margin:0;\r\n    background-color: rgb(113, 226, 198);\r\n    border-radius: 0.3em;    \r\n    z-index: 50;\r\n    position: relative;\r\n \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ2xpZW50UGFnZS9jYWxjLWRheS1wcmljZS9jYWxjLWRheS1wcmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQjs7QUFFSjs7SUFFSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLG9DQUFvQztJQUNwQyxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC9DbGllbnRQYWdlL2NhbGMtZGF5LXByaWNlL2NhbGMtZGF5LXByaWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDMwJTsgIFxyXG4gICAgbWluLXdpZHRoOiAzMDBweDsgIFxyXG4gICAgfVxyXG5cclxuKltyb2xlPVwiZm9ybVwiXSB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDIyNiwgMTk4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtOyAgICBcclxuICAgIHotaW5kZXg6IDUwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ClientPage/calc-day-price/calc-day-price.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ClientPage/calc-day-price/calc-day-price.component.ts ***!
  \***********************************************************************/
/*! exports provided: CalcDayPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcDayPriceComponent", function() { return CalcDayPriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _rentCar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../rentCar */ "./src/app/rentCar.ts");






let CalcDayPriceComponent = class CalcDayPriceComponent {
    constructor(userService, http, router) {
        this.userService = userService;
        this.http = http;
        this.router = router;
        this.today = Date();
        this.rentDays = 1;
        this.rentCar = new _rentCar__WEBPACK_IMPORTED_MODULE_5__["RentCar"]();
        this.userSelectCar = this.userService.userCar;
        this.rentCar.UserID = this.userService.loginUser.UserID;
        this.rentCar.CarID = this.userService.userCar[0].CarID;
    }
    //***function calculate regular price*****/
    calcPayment() {
        return this.rentDays * this.userService.userCar[1].DalyPrice;
    }
    //*****function returns picup date*****
    PicUpDate(picupDate) {
        let pdate = new Date(picupDate);
        this.rentCar.PickupCar = pdate;
        if (this.userService.pickupDate != undefined)
            return this.userService.pickupDate;
        else
            return this.today;
    }
    //*****function returns drop-off date*****
    DropOffDate() {
        let pickupDate = new Date(this.rentCar.PickupCar);
        pickupDate.setDate(pickupDate.getDate() + this.rentDays);
        this.rentCar.ReturnCar = pickupDate;
    }
    //****function adding new order and change car to not available***
    Confirm() {
        this.DropOffDate();
        let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
        this.http.post("http://localhost:58558/api/RentCar/", {
            CarID: this.rentCar.CarID,
            UserID: this.rentCar.UserID,
            PickupCar: this.rentCar.PickupCar,
            ReturnCar: this.rentCar.ReturnCar,
        }, { headers: authHeaders }).subscribe(h => console.log(h));
        this.http.put("http://localhost:58558/api/Car/" + this.rentCar.CarID, {
            Available: 'no',
        }, { headers: authHeaders }).subscribe(h => console.log(h));
        alert('Your order has been confirmed!');
        this.router.navigate(['/HomePage']);
        for (let index = 0; index < this.userService.choicesOfCar.length; index++) {
            if (this.userService.choicesOfCar[index].CarID == this.rentCar.CarID) {
                this.userService.choicesOfCar.splice(index, 1);
            }
        }
    }
    ngOnInit() {
    }
};
CalcDayPriceComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CalcDayPriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calc-day-price',
        template: __webpack_require__(/*! raw-loader!./calc-day-price.component.html */ "./node_modules/raw-loader/index.js!./src/app/ClientPage/calc-day-price/calc-day-price.component.html"),
        styles: [__webpack_require__(/*! ./calc-day-price.component.css */ "./src/app/ClientPage/calc-day-price/calc-day-price.component.css")]
    })
], CalcDayPriceComponent);



/***/ }),

/***/ "./src/app/ClientPage/home-page/home-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/ClientPage/home-page/home-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n .caption{\r\n    width: 100%;\r\n    position: absolute;\r\n    text-align: center;\r\n    top: 20%;\r\n    margin-top: -60px;\r\n    z-index: 10;\r\n}\r\n\r\n.caption h2{\r\n    color: #fff;\r\n    font-family: \"p22_corinthia\", Helvetica, Arial, sans-serif;\r\n    font-size: 100px;\r\n    font-weight: lighter;\r\n    margin: 0;\r\n    position: relative;\r\n    display: block;\r\n}\r\n\r\n.caption h3{\r\n    color: #fff;\r\n    font-family: \"lato-regular\", Helvetica, Arial, sans-serif;\r\n    font-size: 15px;\r\n    margin: -15px 0 0 25px;\r\n    left: 1px;\r\n}\r\n\r\n.captionP{\r\n    color: rgb(199, 96, 0);\r\n    font-family: \"Papyrus\", Helvetica, Arial, sans-serif;\r\n    font-size: 80px;\r\n    font-weight: lighter;\r\n    margin: 0;\r\n    position: relative;\r\n    display: block;\r\n    z-index: 10;\r\n}\r\n\r\n.logo {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 15px rgba(3, 3, 3, 0.5);    \r\n    position: relative;\r\n    z-index: 8;  \r\n    margin-top: -150px;\r\n    margin-left: 660px;\r\n    -webkit-animation-name: logo;\r\n            animation-name: logo;\r\n    -webkit-animation-duration: 10s;\r\n            animation-duration: 10s;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    animation-direction: alternate-reverse;     \r\n  }\r\n\r\n@-webkit-keyframes logo {\r\n    0%   {left:0px; top:0px;}\r\n    25%  { right:165px;; top:0px; transform: rotate(270deg);}\r\n    50%  { right:330px; top:0px; transform: rotate(180deg); border-radius: 50%;}\r\n    75%  { right:495px; top:0px; transform: rotate(90deg); border-radius: 50%;}\r\n    100% { right:660px; top:0px; transform: rotate(0deg);}\r\n   \r\n  }\r\n\r\n@keyframes logo {\r\n    0%   {left:0px; top:0px;}\r\n    25%  { right:165px;; top:0px; transform: rotate(270deg);}\r\n    50%  { right:330px; top:0px; transform: rotate(180deg); border-radius: 50%;}\r\n    75%  { right:495px; top:0px; transform: rotate(90deg); border-radius: 50%;}\r\n    100% { right:660px; top:0px; transform: rotate(0deg);}\r\n   \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ2xpZW50UGFnZS9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0lBQ0csV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMERBQTBEO0lBQzFELGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlEQUF5RDtJQUN6RCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvREFBb0Q7SUFDcEQsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsc0NBQXNDO0VBQ3hDOztBQUVBO0lBQ0UsTUFBTSxRQUFRLEVBQUUsT0FBTyxDQUFDO0lBQ3hCLE9BQU8sV0FBVyxHQUFHLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQztJQUN4RCxPQUFPLFdBQVcsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsa0JBQWtCLENBQUM7SUFDM0UsT0FBTyxXQUFXLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLGtCQUFrQixDQUFDO0lBQzFFLE9BQU8sV0FBVyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQzs7RUFFdkQ7O0FBUEE7SUFDRSxNQUFNLFFBQVEsRUFBRSxPQUFPLENBQUM7SUFDeEIsT0FBTyxXQUFXLEdBQUcsT0FBTyxFQUFFLHlCQUF5QixDQUFDO0lBQ3hELE9BQU8sV0FBVyxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsQ0FBQztJQUMzRSxPQUFPLFdBQVcsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsa0JBQWtCLENBQUM7SUFDMUUsT0FBTyxXQUFXLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixDQUFDOztFQUV2RCIsImZpbGUiOiJzcmMvYXBwL0NsaWVudFBhZ2UvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAuY2FwdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uY2FwdGlvbiBoMntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwicDIyX2NvcmludGhpYVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jYXB0aW9uIGgze1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogXCJsYXRvLXJlZ3VsYXJcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogLTE1cHggMCAwIDI1cHg7XHJcbiAgICBsZWZ0OiAxcHg7XHJcbn1cclxuXHJcbi5jYXB0aW9uUHtcclxuICAgIGNvbG9yOiByZ2IoMTk5LCA5NiwgMCk7XHJcbiAgICBmb250LWZhbWlseTogXCJQYXB5cnVzXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDMsIDMsIDMsIDAuNSk7ICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogODsgIFxyXG4gICAgbWFyZ2luLXRvcDogLTE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY2MHB4O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxvZ287XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZS1yZXZlcnNlOyAgICAgXHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGxvZ28ge1xyXG4gICAgMCUgICB7bGVmdDowcHg7IHRvcDowcHg7fVxyXG4gICAgMjUlICB7IHJpZ2h0OjE2NXB4OzsgdG9wOjBweDsgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTt9XHJcbiAgICA1MCUgIHsgcmlnaHQ6MzMwcHg7IHRvcDowcHg7IHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IGJvcmRlci1yYWRpdXM6IDUwJTt9XHJcbiAgICA3NSUgIHsgcmlnaHQ6NDk1cHg7IHRvcDowcHg7IHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgYm9yZGVyLXJhZGl1czogNTAlO31cclxuICAgIDEwMCUgeyByaWdodDo2NjBweDsgdG9wOjBweDsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxyXG4gICBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/ClientPage/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/ClientPage/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HomePageComponent = class HomePageComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/ClientPage/home-page/home-page.component.html"),
        styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/ClientPage/home-page/home-page.component.css")]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/ClientPage/register-page/register-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/ClientPage/register-page/register-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.form-container{\r\n  width: 50%;  \r\n  min-width: 300px;   \r\n  position: relative;\r\n  }\r\n\r\n*[role=\"form\"] {    \r\n    padding: 15px;\r\n    margin:0;\r\n    background-color: rgb(113, 226, 198);\r\n    border-radius: 0.3em;\r\n    top:0;\r\n    bottom:0;\r\n    z-index: 50;\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ2xpZW50UGFnZS9yZWdpc3Rlci1wYWdlL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQjs7QUFFRjtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1Isb0NBQW9DO0lBQ3BDLG9CQUFvQjtJQUNwQixLQUFLO0lBQ0wsUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL0NsaWVudFBhZ2UvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tY29udGFpbmVye1xyXG4gIHdpZHRoOiA1MCU7ICBcclxuICBtaW4td2lkdGg6IDMwMHB4OyAgIFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4qW3JvbGU9XCJmb3JtXCJdIHsgICAgXHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEzLCAyMjYsIDE5OCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcclxuICAgIHRvcDowO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ClientPage/register-page/register-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ClientPage/register-page/register-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user */ "./src/app/user.ts");




let RegisterPageComponent = class RegisterPageComponent {
    constructor(http) {
        this.http = http;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.Years18 = Date.now() - 568025136000;
    }
    //***function adding new user to database */
    Registrarion() {
        this.http.post("http://localhost:58558/api/user/", {
            FirstName: this.user.fName,
            LastName: this.user.lName,
            UserID: this.user.userId,
            UserName: this.user.userName,
            BirthDay: this.user.birthDay,
            Gender: this.user.gender,
            Email: this.user.email,
            UserPassword: this.user.password,
            Role: 'user'
        })
            .subscribe(h => console.log(h), err => alert(err.error));
    }
    ngOnInit() {
    }
};
RegisterPageComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-page',
        template: __webpack_require__(/*! raw-loader!./register-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/ClientPage/register-page/register-page.component.html"),
        styles: [__webpack_require__(/*! ./register-page.component.css */ "./src/app/ClientPage/register-page/register-page.component.css")]
    })
], RegisterPageComponent);



/***/ }),

/***/ "./src/app/ClientPage/search-car/search-car.component.css":
/*!****************************************************************!*\
  !*** ./src/app/ClientPage/search-car/search-car.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\naside{\r\n    float:left; \r\n    width:20%; \r\n    height: 87.5%;  \r\n}\r\n\r\narticle{\r\n    float: left;\r\n    width:80%; \r\n    height: 87.5%;    \r\n}\r\n\r\n.scrollbar {\r\n    position: relative;     \r\n    max-height: 600px;\r\n    max-width: 1400px;   \r\n    overflow: auto;\r\n}\r\n\r\n*[role=\"form\"] {  \r\n    padding: 15px;\r\n    margin: 0 auto;\r\n    background-color: rgb(113, 226, 198);\r\n    border-radius: 0.3em;     \r\n  position: relative;    \r\n  z-index: 50;   \r\n}\r\n\r\n*[role=\"form\"] h2 {\r\n    margin: 2em;\r\n    margin-bottom: 0em;\r\n}\r\n\r\ninput[type=text], select {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n.wrapper{\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n​\r\n  /*  listings section  */\r\n   \r\n  .listings ul.properties_list{\r\n      list-style: none;\r\n      overflow: hidden;\r\n  }\r\n\r\n.listings ul.properties_list li{\r\n      display: block;\r\n      width:  29%;\r\n      height: 285px;\r\n      position: relative;\r\n      float: left;\r\n      margin: 0 3.636363636363636% 3.636363636363636% 0;\r\n      box-shadow: 0 0 15px rgba(3, 3, 3, 0.5);\r\n      background-color: #fdfdfd;      \r\n  }\r\n\r\n.listings ul.properties_list li img.property_img{\r\n      width: 100%;\r\n      height: auto!important;\r\n      vertical-align: top;\r\n      cursor: pointer;\r\n  }\r\n\r\n.listings ul.properties_list li .price{\r\n      position: absolute;\r\n      top: 10px;\r\n      left: 10px;\r\n      padding: 5px 5px;\r\n      background: #ffffff;\r\n      color: #514d4d;\r\n      font-family: \"lato-bold\", Helvetica, Arial, sans-serif;\r\n      font-size: 16px;\r\n      font-weight: bold;\r\n      letter-spacing: 1px;  \r\n      border-radius: 2px;\r\n      -webkit-border-radius: 2px;\r\n      -moz-border-radius: 2px;\r\n      -o-border-radius: 2px;\r\n      box-shadow: 0 0 15px rgba(3, 3, 3, 0.5);\r\n  }\r\n\r\n/* text */\r\n\r\n.listings ul li .property_details h1{\r\n      color: #666464;\r\n      font-family: \"lato-bold\", Helvetica, Arial, sans-serif;\r\n      font-size: 16px!important;\r\n      font-weight: bold;\r\n      margin-bottom: 5px;\r\n      line-height: 28px;      \r\n  }\r\n\r\n/* text */\r\n\r\n.listings ul li .property_details h1 a{\r\n      text-decoration: none;\r\n      color: #666464;      \r\n  }\r\n\r\n/* text */\r\n\r\n.listings ul li .property_details h2{\r\n      color: #0f02c2;\r\n      font-family: \"lato-regular\", Helvetica, Arial, sans-serif;\r\n      font-size: 16px;      \r\n  }\r\n\r\n\r\n  \r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ2xpZW50UGFnZS9zZWFyY2gtY2FyL3NlYXJjaC1jYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsb0JBQW9CO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBQ0U7Ozs7TUFJSSxnQkFBZ0I7TUFDaEIsZ0JBQWdCO0VBQ3BCOztBQUVBO01BQ0ksY0FBYztNQUNkLFdBQVc7TUFDWCxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxpREFBaUQ7TUFDakQsdUNBQXVDO01BQ3ZDLHlCQUF5QjtFQUM3Qjs7QUFFQTtNQUNJLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLGVBQWU7RUFDbkI7O0FBRUE7TUFDSSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGNBQWM7TUFDZCxzREFBc0Q7TUFDdEQsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLDBCQUEwQjtNQUMxQix1QkFBdUI7TUFDdkIscUJBQXFCO01BQ3JCLHVDQUF1QztFQUMzQzs7QUFFQSxTQUFTOztBQUNUO01BQ0ksY0FBYztNQUNkLHNEQUFzRDtNQUN0RCx5QkFBeUI7TUFDekIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixpQkFBaUI7RUFDckI7O0FBQ0EsU0FBUzs7QUFDVDtNQUNJLHFCQUFxQjtNQUNyQixjQUFjO0VBQ2xCOztBQUNBLFNBQVM7O0FBQ1Q7TUFDSSxjQUFjO01BQ2QseURBQXlEO01BQ3pELGVBQWU7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9DbGllbnRQYWdlL3NlYXJjaC1jYXIvc2VhcmNoLWNhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmFzaWRle1xyXG4gICAgZmxvYXQ6bGVmdDsgXHJcbiAgICB3aWR0aDoyMCU7IFxyXG4gICAgaGVpZ2h0OiA4Ny41JTsgIFxyXG59XHJcblxyXG5hcnRpY2xle1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDo4MCU7IFxyXG4gICAgaGVpZ2h0OiA4Ny41JTsgICAgXHJcbn1cclxuXHJcbi5zY3JvbGxiYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICAgXHJcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgIG1heC13aWR0aDogMTQwMHB4OyAgIFxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuICAgICAgIFxyXG5cclxuKltyb2xlPVwiZm9ybVwiXSB7ICBcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDIyNiwgMTk4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtOyAgICAgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAgICBcclxuICB6LWluZGV4OiA1MDsgICBcclxufVxyXG5cclxuKltyb2xlPVwiZm9ybVwiXSBoMiB7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiAg4oCLXHJcbiAgLyogIGxpc3RpbmdzIHNlY3Rpb24gICovXHJcbiAgIFxyXG4gIC5saXN0aW5ncyB1bC5wcm9wZXJ0aWVzX2xpc3R7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0aW5ncyB1bC5wcm9wZXJ0aWVzX2xpc3QgbGl7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogIDI5JTtcclxuICAgICAgaGVpZ2h0OiAyODVweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgbWFyZ2luOiAwIDMuNjM2MzYzNjM2MzYzNjM2JSAzLjYzNjM2MzYzNjM2MzYzNiUgMDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgzLCAzLCAzLCAwLjUpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkOyAgICAgIFxyXG4gIH1cclxuICBcclxuICAubGlzdGluZ3MgdWwucHJvcGVydGllc19saXN0IGxpIGltZy5wcm9wZXJ0eV9pbWd7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG8haW1wb3J0YW50O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSAgXHJcbiAgXHJcbiAgLmxpc3RpbmdzIHVsLnByb3BlcnRpZXNfbGlzdCBsaSAucHJpY2V7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBjb2xvcjogIzUxNGQ0ZDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwibGF0by1ib2xkXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7ICBcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgzLCAzLCAzLCAwLjUpO1xyXG4gIH0gIFxyXG4gIFxyXG4gIC8qIHRleHQgKi9cclxuICAubGlzdGluZ3MgdWwgbGkgLnByb3BlcnR5X2RldGFpbHMgaDF7XHJcbiAgICAgIGNvbG9yOiAjNjY2NDY0O1xyXG4gICAgICBmb250LWZhbWlseTogXCJsYXRvLWJvbGRcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4IWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7ICAgICAgXHJcbiAgfVxyXG4gIC8qIHRleHQgKi9cclxuICAubGlzdGluZ3MgdWwgbGkgLnByb3BlcnR5X2RldGFpbHMgaDEgYXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogIzY2NjQ2NDsgICAgICBcclxuICB9XHJcbiAgLyogdGV4dCAqL1xyXG4gIC5saXN0aW5ncyB1bCBsaSAucHJvcGVydHlfZGV0YWlscyBoMntcclxuICAgICAgY29sb3I6ICMwZjAyYzI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcImxhdG8tcmVndWxhclwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7ICAgICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbiAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/ClientPage/search-car/search-car.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ClientPage/search-car/search-car.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchCarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCarComponent", function() { return SearchCarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");





let SearchCarComponent = class SearchCarComponent {
    constructor(http, userService, router) {
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.today = Date();
        this.http.get("http://localhost:58558/api/typecar/").subscribe(t => this.typeCarList = t);
        this.http.get("http://localhost:58558/api/car/").subscribe(t => this.carList = t);
    }
    //****function to select car by user anf checking if user registered***
    selectCar(car, carType) {
        if (this.userService.confirmLogin() == true) {
            this.userService.addCar(car, carType);
            this.userService.pickupDate = this.pickup_Date;
            this.router.navigate(['/CalcDayPrice']);
        }
        else {
            this.router.navigate(['/Login']);
        }
    }
    ngOnInit() {
        this.userLog = this.userService.loginUser;
    }
};
SearchCarComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SearchCarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-car',
        template: __webpack_require__(/*! raw-loader!./search-car.component.html */ "./node_modules/raw-loader/index.js!./src/app/ClientPage/search-car/search-car.component.html"),
        styles: [__webpack_require__(/*! ./search-car.component.css */ "./src/app/ClientPage/search-car/search-car.component.css")]
    })
], SearchCarComponent);



/***/ }),

/***/ "./src/app/UserPage/user-all-orders/user-all-orders.component.css":
/*!************************************************************************!*\
  !*** ./src/app/UserPage/user-all-orders/user-all-orders.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollbar {\r\n    position: relative;    \r\n    width: 50%;\r\n    max-height: 80%;\r\n    left: 25%;\r\n    right: 25%;    \r\n    overflow: auto;\r\n    background-color: rgb(255, 254, 254);       \r\n    }\r\n    \r\n    .table-wrapper-scroll-y {\r\n    display: block;   \r\n    }\r\n\r\n    \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlclBhZ2UvdXNlci1hbGwtb3JkZXJzL3VzZXItYWxsLW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDOztJQUVBO0lBQ0EsY0FBYztJQUNkIiwiZmlsZSI6InNyYy9hcHAvVXNlclBhZ2UvdXNlci1hbGwtb3JkZXJzL3VzZXItYWxsLW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgwJTtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIHJpZ2h0OiAyNSU7ICAgIFxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTQsIDI1NCk7ICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/UserPage/user-all-orders/user-all-orders.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/UserPage/user-all-orders/user-all-orders.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserAllOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAllOrdersComponent", function() { return UserAllOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");





let UserAllOrdersComponent = class UserAllOrdersComponent {
    constructor(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.today = new Date();
    }
    ngOnInit() {
        //*****if not user role routing to home page****
        if (this.userService.userRole() != 'user' || this.userService.userRole() == undefined) {
            this.router.navigate(['/HomePage']);
        }
        this.http.get("http://localhost:58558/api/RentCar/").subscribe(t => this.rentCarList = t);
    }
};
UserAllOrdersComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
UserAllOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-all-orders',
        template: __webpack_require__(/*! raw-loader!./user-all-orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/UserPage/user-all-orders/user-all-orders.component.html"),
        styles: [__webpack_require__(/*! ./user-all-orders.component.css */ "./src/app/UserPage/user-all-orders/user-all-orders.component.css")]
    })
], UserAllOrdersComponent);



/***/ }),

/***/ "./src/app/UserPage/user-order/user-order.component.css":
/*!**************************************************************!*\
  !*** ./src/app/UserPage/user-order/user-order.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollbar {\r\n    position: relative;   \r\n    width: 85%;\r\n    max-height: 80%;\r\n    left: 10%;\r\n    right: 10%;   \r\n    overflow: auto;\r\n    background-color: rgb(255, 254, 254);       \r\n    }\r\n    \r\n    .table-wrapper-scroll-y {\r\n    display: block;\r\n   \r\n    }\r\n\r\n    \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlclBhZ2UvdXNlci1vcmRlci91c2VyLW9yZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEM7O0lBRUE7SUFDQSxjQUFjOztJQUVkIiwiZmlsZSI6InNyYy9hcHAvVXNlclBhZ2UvdXNlci1vcmRlci91c2VyLW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsYmFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICBcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICByaWdodDogMTAlOyAgIFxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTQsIDI1NCk7ICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFibGUtd3JhcHBlci1zY3JvbGwteSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/UserPage/user-order/user-order.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/UserPage/user-order/user-order.component.ts ***!
  \*************************************************************/
/*! exports provided: UserOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrderComponent", function() { return UserOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserOrderComponent = class UserOrderComponent {
    constructor(http, userService, router) {
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.today = new Date();
    }
    //***function calculate regular price*****/
    CalcPrice(dateD, dateP, price) {
        let dateDropOff = new Date(dateD).getTime();
        let datePicup = new Date(dateP).getTime();
        let days = Math.floor((dateDropOff - datePicup) / (1000 * 60 * 60 * 24));
        return days * price;
    }
    ;
    //***function calculate overdue price*****/
    CalcOverduePrice(dateD, price, dateP) {
        let dateOverdue = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()).getTime();
        let dateDropOff = new Date(dateD).getTime();
        let days = Math.ceil((dateOverdue - dateDropOff) / (1000 * 60 * 60 * 24));
        if (dateDropOff >= dateOverdue) {
            return 0;
        }
        else {
            return days * price;
        }
    }
    ;
    ngOnInit() {
        //*****if not user role routing to home page****
        if (this.userService.userRole() != 'user' || this.userService.userRole() == undefined) {
            this.router.navigate(['/HomePage']);
        }
        this.http.get("http://localhost:58558/api/car/").subscribe(t => this.carList = t);
        this.http.get("http://localhost:58558/api/RentCar/").subscribe(t => this.rentCarList = t);
        this.http.get("http://localhost:58558/api/typecar/").subscribe(t => this.typeCarList = t);
    }
};
UserOrderComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-order',
        template: __webpack_require__(/*! raw-loader!./user-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/UserPage/user-order/user-order.component.html"),
        styles: [__webpack_require__(/*! ./user-order.component.css */ "./src/app/UserPage/user-order/user-order.component.css")]
    })
], UserOrderComponent);



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
/* harmony import */ var _ClientPage_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClientPage/home-page/home-page.component */ "./src/app/ClientPage/home-page/home-page.component.ts");
/* harmony import */ var _ClientPage_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClientPage/register-page/register-page.component */ "./src/app/ClientPage/register-page/register-page.component.ts");
/* harmony import */ var _ClientPage_search_car_search_car_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ClientPage/search-car/search-car.component */ "./src/app/ClientPage/search-car/search-car.component.ts");
/* harmony import */ var _ClientPage_calc_day_price_calc_day_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClientPage/calc-day-price/calc-day-price.component */ "./src/app/ClientPage/calc-day-price/calc-day-price.component.ts");
/* harmony import */ var _AdminPage_list_cars_list_cars_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AdminPage/list-cars/list-cars.component */ "./src/app/AdminPage/list-cars/list-cars.component.ts");
/* harmony import */ var _AdminPage_list_orders_list_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AdminPage/list-orders/list-orders.component */ "./src/app/AdminPage/list-orders/list-orders.component.ts");
/* harmony import */ var _AdminPage_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AdminPage/list-users/list-users.component */ "./src/app/AdminPage/list-users/list-users.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _UserPage_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UserPage/user-order/user-order.component */ "./src/app/UserPage/user-order/user-order.component.ts");
/* harmony import */ var _UserPage_user_all_orders_user_all_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UserPage/user-all-orders/user-all-orders.component */ "./src/app/UserPage/user-all-orders/user-all-orders.component.ts");














const routes = [
    { path: '', redirectTo: "HomePage", pathMatch: "full" },
    { path: "HomePage", component: _ClientPage_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: "RegisterPage", component: _ClientPage_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__["RegisterPageComponent"] },
    { path: "SearchCar", component: _ClientPage_search_car_search_car_component__WEBPACK_IMPORTED_MODULE_5__["SearchCarComponent"] },
    { path: "CalcDayPrice", component: _ClientPage_calc_day_price_calc_day_price_component__WEBPACK_IMPORTED_MODULE_6__["CalcDayPriceComponent"] },
    { path: "ListCars", component: _AdminPage_list_cars_list_cars_component__WEBPACK_IMPORTED_MODULE_7__["ListCarsComponent"] },
    { path: "ListOrders", component: _AdminPage_list_orders_list_orders_component__WEBPACK_IMPORTED_MODULE_8__["ListOrdersComponent"] },
    { path: "ListUsers", component: _AdminPage_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_9__["ListUsersComponent"] },
    { path: "Employee", component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeComponent"] },
    { path: "Login", component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"] },
    { path: "UserOrder", component: _UserPage_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_12__["UserOrderComponent"] },
    { path: "UserAllOrders", component: _UserPage_user_all_orders_user_all_orders_component__WEBPACK_IMPORTED_MODULE_13__["UserAllOrdersComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            })],
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

module.exports = "\r\n\r\n/*\r\n\r\n\r\n     \r\n    - Fonts\r\n    - General CSS\r\n    - Header\r\n    - Hero\r\n    - Search\r\n    - Listings\r\n    - Footer\r\n    - Responsive CSS\r\n    \r\n\r\n*/\r\n\r\n\r\n\r\n\r\n/*  Fonts  */\r\n\r\n\r\n\r\n\r\n@font-face {\r\n    font-family: 'lato-bold';\r\n    src: url('lato-bold.eot');\r\n    src: url('lato-bold.eot?#iefix') format('embedded-opentype'),\r\n         url('lato-bold.woff') format('woff'),\r\n         url('lato-bold.ttf') format('truetype'),\r\n         url('lato-bold.svg#LatoBold') format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n\r\n\r\n\r\n@font-face {\r\n    font-family: 'lato-regular';\r\n    src: url('lato-regular.eot');\r\n    src: url('lato-regular.eot?#iefix') format('embedded-opentype'),\r\n         url('lato-regular.woff') format('woff'),\r\n         url('lato-regular.ttf') format('truetype'),\r\n         url('lato-regular.svg#LatRegular') format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n\r\n\r\n\r\n@font-face {\r\n    font-family: 'p22_corinthia';\r\n    src: url('p22_corinthia.eot');\r\n    src: url('p22_corinthia.eot?#iefix') format('embedded-opentype'),\r\n         url('p22_corinthia.woff') format('woff'),\r\n         url('p22_corinthia.ttf') format('truetype'),\r\n         url('p22_corinthia.svg#P22Corinthia') format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n\r\n\r\n\r\n/*  General CSS  */\r\n\r\n\r\n\r\n\r\n.wrapper{\r\n    max-width: 100%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n\r\nh1, h2, h3, h4, h5 ,h6{\r\n    color: #626262;\r\n    font-family: \"lato-regular\", Helvetica, Arial, sans-serif;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n\r\n\r\n\r\nh1              { font-size: 2em; margin: .67em 0 }\r\n\r\n\r\n\r\n\r\nh2              { font-size: 1.5em; margin: .75em 0 }\r\n\r\n\r\n\r\n\r\nh3              { font-size: 1.17em; margin: .83em 0 }\r\n\r\n\r\n\r\n\r\nh5              { font-size: .83em; margin: 1.5em 0 }\r\n\r\n\r\n\r\n\r\nh6              { font-size: .75em; margin: 1.67em 0 }\r\n\r\n\r\n\r\n\r\nh1, h2, h3, h4,\r\nh5, h6          { font-weight: bolder }\r\n\r\n\r\n\r\n\r\n.clearfix:before,  \r\n.clearfix:after {  \r\n    content: \" \";  \r\n    display: table;  \r\n}\r\n\r\n\r\n\r\n\r\n.clearfix:after {  \r\n    clear: both;  \r\n}\r\n\r\n\r\n\r\n\r\n.clearfix {  \r\n    *zoom: 1;  \r\n}\r\n\r\n\r\n\r\n\r\n/*  Header Section  */\r\n\r\n\r\n\r\n\r\nheader{\r\n    width: 100%;\r\n    height: 100px;\r\n    background: rgba(2, 7, 3, 0.2);\r\n}\r\n\r\n\r\n\r\n\r\nheader .logo{   \r\n    float: left;    \r\n    border-radius: 8px;\r\n    box-shadow: 0 0 15px rgba(3, 3, 3, 0.5);\r\n}\r\n\r\n\r\n\r\n\r\nheader nav{\r\n    float: right;\r\n    opacity: 1;\r\n}\r\n\r\n\r\n\r\n\r\nheader nav ul{\r\n    margin-top: 40px;\r\n    list-style: none;    \r\n    float: left;\r\n}\r\n\r\n\r\n\r\n\r\nheader nav ul li{\r\n    float: left;\r\n    margin-left: 50px;\r\n}\r\n\r\n\r\n\r\n\r\nheader nav ul li a,\r\nheader nav .login_btn{\r\n    text-decoration: none;\r\n    color: #fff;\r\n    font-family: \"lato-regular\", Helvetica, Arial, sans-serif;\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n\r\n\r\n\r\nheader nav .login_btn{\r\n    float: right;\r\n    margin: 30px 0 0 50px;\r\n    padding: 10px 30px 11px 30px;\r\n    border: 2px solid #ffffff;\r\n    background: transparent;\r\n    transition: background .1s linear;\r\n    -webkit-transition: background .1s linear;\r\n    -moz-transition: background .1s linear;\r\n    -o-transition: background .1s linear;\r\n}\r\n\r\n\r\n\r\n\r\nheader nav .login_btn:hover{\r\n    background: #ffffff;\r\n    color: #1c3655;\r\n}\r\n\r\n\r\n\r\n\r\n/*  Hero Section  */\r\n\r\n\r\n\r\n\r\n.hero{\r\n    width: 100%;\r\n    height: 900px;\r\n    position: relative;\r\n    background: url('background_1.jpg') no-repeat bottom center;\r\n    background-size: cover;\r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;    \r\n}\r\n\r\n\r\n\r\n\r\n/*  footer  */\r\n\r\n\r\n\r\n\r\nfooter{\r\n    padding-top: 100px;\r\n    background: #95badf;\r\n}\r\n\r\n\r\n\r\n\r\nfooter .footer > ul{\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n\r\n\r\nfooter .footer > ul > li{\r\n    display: block;\r\n    float: left;\r\n    list-style: none;\r\n    margin-right: 60px;\r\n}\r\n\r\n\r\n\r\n\r\nfooter .footer > ul > li:last-child{\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n\r\n\r\nfooter .footer > ul > li.links{\r\n    width: 197px;\r\n}\r\n\r\n\r\n\r\n\r\nfooter ul li.links > ul > li{\r\n    display: block;\r\n    width: 100%;\r\n    list-style: none;\r\n    margin-bottom: 27px;\r\n}\r\n\r\n\r\n\r\n\r\nfooter ul li.links > ul > li:last-child{\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n\r\n\r\nfooter .footer > ul > li.links li a{\r\n    text-decoration: none;\r\n    display: block;\r\n    color: #fff;\r\n    font-family: \"lato-regular\", Helvetica, Arial, sans-serif;\r\n    font-size: 16px;\r\n    letter-spacing: .5px;\r\n    text-align: left;\r\n}\r\n\r\n\r\n\r\n\r\nfooter .footer > ul > li.about{\r\n    width: 60%;\r\n}\r\n\r\n\r\n\r\n\r\nfooter ul li.about p{\r\n    color: #fff;\r\n    font-family: \"lato-regular\", Helvetica, Arial, sans-serif;\r\n    font-size: 16px;\r\n    letter-spacing: .5px;\r\n    line-height: 34px;\r\n    margin-top: -9px;\r\n}\r\n\r\n\r\n\r\n\r\nfooter ul li.about > ul > li{\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n    margin-top: 30px;\r\n}\r\n\r\n\r\n\r\n\r\nfooter ul li.about > ul > li:last-child{\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n\r\n\r\nfooter .copyrights{\r\n    display: block;\r\n    text-align: center;\r\n    padding: 40px 0;\r\n    margin-top: 60px;\r\n    color: #fff;\r\n    font-family: \"lato-regular\", Helvetica, Arial, sans-serif;\r\n    font-size: 14px;\r\n    letter-spacing: .5px;\r\n    border-top: 1px solid #82abd4;\r\n}\r\n\r\n\r\n\r\n\r\nfooter .copyrights a.ph_link{\r\n    font-family: \"lato-bold\", Helvetica, Arial, sans-serif;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n/*  responsive css */\r\n\r\n\r\n\r\n\r\n@media (max-width:1500px){\r\n    .hero{\r\n        height: 800px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 1150px){\r\n    .wrapper{\r\n        padding: 0 40px;\r\n        max-width: 1020px;\r\n    }\r\n    .search .advanced_search .arrow{\r\n        top: -8px;\r\n        right: 46px;\r\n    }\r\n\r\n    .search .advanced_search #check_in_date,\r\n    .search .advanced_search #check_out_date,\r\n    .search .advanced_search #min_price,\r\n    .search .advanced_search #max_price{\r\n        width: 46.27272727272727%;\r\n        padding: 0 1.818181818181818%;\r\n    }\r\n\r\n    .search .advanced_search #check_in_date,\r\n    .search .advanced_search #check_out_date{\r\n       \r\n        background-position: 95.08840864440079% 50%;\r\n    }\r\n\r\n    .search .advanced_search #keywords{\r\n        width: 96.36363636363636%;\r\n        padding: 0 1.818181818181818%;\r\n    }\r\n\r\n    footer .footer > ul > li{\r\n        margin-right: 5.454545454545455%;\r\n    }\r\n\r\n    footer .footer > ul > li.links{\r\n        width: 17.90909090909091%;\r\n    }\r\n\r\n    footer .footer > ul > li.about{\r\n        width: 29.72727272727273%;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width:800px){\r\n    .hero{\r\n        height: 600px;\r\n    }\r\n\r\n    .hero .caption{\r\n        width: 92.72727272727273%;\r\n        padding: 0 3.636363636363636%; \r\n    }\r\n\r\n    .hero .caption h3{\r\n        margin: 0;\r\n        left: 0;\r\n    }\r\n\r\n    header a.hamburger{\r\n        display: block;\r\n    }\r\n\r\n    header nav{\r\n        position: absolute;\r\n        display: none;\r\n        width: 92.72727272727273%;\r\n        top: 95px;\r\n        left: 3.636363636363636%;\r\n        float: none;\r\n        z-index: 20;\r\n        overflow: hidden;\r\n        background: #fff;\r\n        border-top: 5px solid #bfd9f2;\r\n    }\r\n\r\n    header nav.active{\r\n        display: block;\r\n    }\r\n\r\n    header nav .login_btn{\r\n        float: none;\r\n        display: inline-block;\r\n        width: 100%;\r\n        border: 0;\r\n        margin: 0;\r\n        padding: 20px 0;\r\n        text-align: center;\r\n        background: #f2f3f3;\r\n    }\r\n\r\n    header nav ul{\r\n        display: block;\r\n        width: 100%;\r\n        text-align: center;\r\n        margin-top: 0;\r\n    }\r\n\r\n    header nav ul li{\r\n        display: block;\r\n        width: 100%;\r\n        float: none;\r\n        margin-left: 0;\r\n    }\r\n\r\n    header nav ul li a{\r\n        display: block;\r\n        padding: 25px 0;\r\n        border-bottom: 1px solid #f2f3f3;\r\n        transition: background .2s linear;\r\n        -webkit-transition: background .2s linear;\r\n        -moz-transition: background .2s linear;\r\n        -o-transition: background .2s linear;\r\n    }\r\n\r\n    header nav ul li a:active{\r\n        background: #f2f3f3;\r\n    }\r\n\r\n    header nav ul li a,\r\n    header nav .login_btn{\r\n        color: #1c3655;\r\n    }\r\n\r\n    header nav .login_btn:hover{\r\n        background: #eaebeb;\r\n    }\r\n\r\n    header nav ul li:last-child{\r\n        border: 0;\r\n    }\r\n\r\n    .listings ul.properties_list li{\r\n        width: 46.36363636363636%;\r\n        margin: 0 7.272727272727273% 7.272727272727273% 0;\r\n    }\r\n\r\n    .listings ul.properties_list li:nth-child(3n+0){\r\n        margin: 0 7.272727272727273% 7.272727272727273% 0;\r\n    }\r\n\r\n    .listings ul.properties_list li:nth-child(2n+0){\r\n        margin-right: 0;\r\n    }\r\n\r\n    footer .footer > ul > li{\r\n        width: 29.6969696969697%!important;\r\n        margin-right: 5.454545454545455%;\r\n        margin-bottom: 100px;\r\n    }\r\n\r\n    footer .footer > ul > li:nth-child(3){\r\n        margin-right: 0;\r\n    }\r\n\r\n    footer .footer > ul > li.links li a{\r\n        text-align: center;\r\n    }\r\n\r\n    footer .footer > ul > li.about{\r\n        text-align: center;\r\n        float: none;\r\n        display: inline;\r\n        margin-right: 100%;\r\n        overflow: hidden;\r\n        border-top: 1px solid #82abd4;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width:500px){\r\n    .hero .caption h2{\r\n        font-size: 85px;\r\n    }\r\n\r\n    .hero .caption h3{\r\n        font-size: 16px;\r\n    }\r\n\r\n    .search #search{\r\n        width: 83%;\r\n    }\r\n\r\n    .listings ul.properties_list li{\r\n        width: 100%;\r\n        margin-bottom: 60px!important;\r\n    }\r\n\r\n    .listings ul.properties_list li:last-child{\r\n        margin-bottom: 0!important;    }\r\n\r\n\r\n    .listings ul.properties_list li:nth-child(3n+0),\r\n    .listings ul.properties_list li:nth-child(2n+0){\r\n        margin:0;\r\n    }\r\n\r\n    .listings .more_listing_btn{\r\n        display: block;\r\n        width: 100%; \r\n        padding-left: 0!important;\r\n        padding-right: 0!important;\r\n    }\r\n\r\n    footer .footer > ul > li.links,\r\n    footer .footer > ul > li.about{\r\n        float: none;\r\n        width: 100%!important;\r\n        margin-right: 0;\r\n        margin-bottom: 60px;\r\n        padding-bottom: 60px;\r\n    }\r\n\r\n    footer .footer > ul > li:last-child{\r\n        padding-bottom: 0;\r\n    }\r\n\r\n    footer .footer > ul > li.links{\r\n        border-bottom: 1px solid #82abd4;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n/*  listings section footer*/\r\n\r\n\r\n\r\n\r\n.listings ul.properties_list{\r\n      list-style: none;\r\n      overflow: hidden;\r\n      width: 60%;           \r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      \r\n  }\r\n\r\n\r\n\r\n\r\n.listings ul.properties_list li{\r\n      display: block;\r\n      width:  29%;\r\n      height: 215px;\r\n      position: relative;\r\n      float: left;\r\n      margin: 0 3.636363636363636% 3.636363636363636% 0;\r\n      box-shadow: 0 0 15px rgba(3, 3, 3, 0.5);\r\n      background-color: #fdfdfd;       \r\n  }\r\n\r\n\r\n\r\n\r\n.listings ul.properties_list li img.property_img{\r\n      width: 100%;\r\n      height: auto!important;\r\n      vertical-align: top;\r\n      cursor: pointer;\r\n  }\r\n\r\n\r\n\r\n\r\n.listings ul.properties_list li .price{\r\n      position: absolute;\r\n      top: 10px;\r\n      left: 10px;\r\n      padding: 5px 5px;\r\n      background: #ffffff;\r\n      color: #514d4d;\r\n      font-family: \"lato-bold\", Helvetica, Arial, sans-serif;\r\n      font-size:10px;\r\n      font-weight: bold;\r\n      letter-spacing: 1px;  \r\n      border-radius: 2px;\r\n      -webkit-border-radius: 2px;\r\n      -moz-border-radius: 2px;\r\n      -o-border-radius: 2px;\r\n      box-shadow: 0 0 15px rgba(3, 3, 3, 0.5);\r\n  }\r\n\r\n\r\n\r\n\r\n/* text */\r\n\r\n\r\n\r\n\r\n.listings ul li .property_details h1{\r\n      color: #666464;\r\n      font-family: \"lato-bold\", Helvetica, Arial, sans-serif;\r\n      font-size: 12px!important;\r\n      font-weight: bold;\r\n      margin-bottom: 5px;\r\n      line-height: 15px;      \r\n  }\r\n\r\n\r\n\r\n\r\n/* text */\r\n\r\n\r\n\r\n\r\n.listings ul li .property_details h1 a{\r\n      text-decoration: none;\r\n      color: #666464;      \r\n  }\r\n\r\n\r\n\r\n\r\n/* text */\r\n\r\n\r\n\r\n\r\n.listings ul li .property_details h2{\r\n      color: #0f02c2;\r\n      font-family: \"lato-regular\", Helvetica, Arial, sans-serif;\r\n      font-size: 10px;      \r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Q0FjQzs7Ozs7QUFLRCxZQUFZOzs7OztBQUNYO0lBQ0csd0JBQXdCO0lBQ3hCLHlCQUF5QztJQUN6Qzs7O29EQUdnRTtJQUNoRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOzs7OztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDRCQUE0QztJQUM1Qzs7O3lEQUdxRTtJQUNyRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOzs7OztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QztJQUM3Qzs7OzREQUd3RTtJQUN4RSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOzs7OztBQUlBLGtCQUFrQjs7Ozs7QUFFbEI7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7Ozs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5REFBeUQ7SUFDekQsbUJBQW1CO0FBQ3ZCOzs7OztBQUVBLGtCQUFrQixjQUFjLEVBQUUsZ0JBQWdCOzs7OztBQUNsRCxrQkFBa0IsZ0JBQWdCLEVBQUUsZ0JBQWdCOzs7OztBQUNwRCxrQkFBa0IsaUJBQWlCLEVBQUUsZ0JBQWdCOzs7OztBQUNyRCxrQkFBa0IsZ0JBQWdCLEVBQUUsZ0JBQWdCOzs7OztBQUNwRCxrQkFBa0IsZ0JBQWdCLEVBQUUsaUJBQWlCOzs7OztBQUNyRDtrQkFDa0Isb0JBQW9COzs7OztBQUV0Qzs7SUFFSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7Ozs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7Ozs7QUFFQTtLQUNJLE9BQVE7QUFDWjs7Ozs7QUFHQSxxQkFBcUI7Ozs7O0FBRXJCO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7Ozs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7Ozs7QUFHQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7Ozs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7Ozs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7Ozs7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCx5REFBeUQ7SUFDekQsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLHlDQUF5QztJQUN6QyxzQ0FBc0M7SUFDdEMsb0NBQW9DO0FBQ3hDOzs7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7Ozs7O0FBR0EsbUJBQW1COzs7OztBQUNuQjtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJEQUF5RTtJQUN6RSxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix5QkFBeUI7QUFDN0I7Ozs7O0FBR0EsYUFBYTs7Ozs7QUFDYjtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7Ozs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7Ozs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7Ozs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7OztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7Ozs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7Ozs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7Ozs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsV0FBVztJQUNYLHlEQUF5RDtJQUN6RCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7Ozs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7Ozs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5REFBeUQ7SUFDekQsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOzs7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7Ozs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7OztBQUdBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx5REFBeUQ7SUFDekQsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQiw2QkFBNkI7QUFDakM7Ozs7O0FBRUE7SUFDSSxzREFBc0Q7SUFDdEQsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7Ozs7QUFHQSxvQkFBb0I7Ozs7O0FBR3BCO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7Ozs7O0FBR0E7SUFDSTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFNBQVM7UUFDVCxXQUFXO0lBQ2Y7O0lBRUE7Ozs7UUFJSSx5QkFBeUI7UUFDekIsNkJBQTZCO0lBQ2pDOztJQUVBOzs7UUFHSSwyQ0FBMkM7SUFDL0M7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksZ0NBQWdDO0lBQ3BDOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7Ozs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksU0FBUztRQUNULE9BQU87SUFDWDs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixTQUFTO1FBQ1Qsd0JBQXdCO1FBQ3hCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztRQUNYLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsU0FBUztRQUNULFNBQVM7UUFDVCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLFdBQVc7UUFDWCxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGVBQWU7UUFDZixnQ0FBZ0M7UUFDaEMsaUNBQWlDO1FBQ2pDLHlDQUF5QztRQUN6QyxzQ0FBc0M7UUFDdEMsb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBOztRQUVJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsaURBQWlEO0lBQ3JEOztJQUVBO1FBQ0ksaURBQWlEO0lBQ3JEOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtDQUFrQztRQUNsQyxnQ0FBZ0M7UUFDaEMsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsNkJBQTZCO0lBQ2pDO0FBQ0o7Ozs7O0FBR0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksV0FBVztRQUNYLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLDBCQUEwQixLQUFLOzs7SUFHbkM7O1FBRUksUUFBUTtJQUNaOztJQUVBO1FBQ0ksY0FBYztRQUNkLFdBQVc7UUFDWCx5QkFBeUI7UUFDekIsMEJBQTBCO0lBQzlCOztJQUVBOztRQUVJLFdBQVc7UUFDWCxxQkFBcUI7UUFDckIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQ0FBZ0M7SUFDcEM7QUFDSjs7Ozs7QUFFQyw0QkFBNEI7Ozs7O0FBRTNCO01BQ0ksZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLGtCQUFrQjs7RUFFdEI7Ozs7O0FBRUE7TUFDSSxjQUFjO01BQ2QsV0FBVztNQUNYLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGlEQUFpRDtNQUNqRCx1Q0FBdUM7TUFDdkMseUJBQXlCO0VBQzdCOzs7OztBQUVBO01BQ0ksV0FBVztNQUNYLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsZUFBZTtFQUNuQjs7Ozs7QUFHQTtNQUNJLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLHNEQUFzRDtNQUN0RCxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsMEJBQTBCO01BQzFCLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsdUNBQXVDO0VBQzNDOzs7OztBQUdBLFNBQVM7Ozs7O0FBQ1Q7TUFDSSxjQUFjO01BQ2Qsc0RBQXNEO01BQ3RELHlCQUF5QjtNQUN6QixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGlCQUFpQjtFQUNyQjs7Ozs7QUFDQSxTQUFTOzs7OztBQUNUO01BQ0kscUJBQXFCO01BQ3JCLGNBQWM7RUFDbEI7Ozs7O0FBQ0EsU0FBUzs7Ozs7QUFDVDtNQUNJLGNBQWM7TUFDZCx5REFBeUQ7TUFDekQsZUFBZTtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKlxyXG5cclxuXHJcbiAgICAgXHJcbiAgICAtIEZvbnRzXHJcbiAgICAtIEdlbmVyYWwgQ1NTXHJcbiAgICAtIEhlYWRlclxyXG4gICAgLSBIZXJvXHJcbiAgICAtIFNlYXJjaFxyXG4gICAgLSBMaXN0aW5nc1xyXG4gICAgLSBGb290ZXJcclxuICAgIC0gUmVzcG9uc2l2ZSBDU1NcclxuICAgIFxyXG5cclxuKi9cclxuXHJcblxyXG5cclxuXHJcbi8qICBGb250cyAgKi9cclxuIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLWJvbGQnO1xyXG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9sYXRvLWJvbGQuZW90Jyk7XHJcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL2xhdG8tYm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgICAgICB1cmwoJy4uL2Fzc2V0cy9mb250cy9sYXRvLWJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgICB1cmwoJy4uL2Fzc2V0cy9mb250cy9sYXRvLWJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxyXG4gICAgICAgICB1cmwoJy4uL2Fzc2V0cy9mb250cy9sYXRvLWJvbGQuc3ZnI0xhdG9Cb2xkJykgZm9ybWF0KCdzdmcnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn0gXHJcbiBcclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2xhdG8tcmVndWxhcic7XHJcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL2xhdG8tcmVndWxhci5lb3QnKTtcclxuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvbGF0by1yZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnRzL2xhdG8tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXHJcbiAgICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnRzL2xhdG8tcmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXHJcbiAgICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnRzL2xhdG8tcmVndWxhci5zdmcjTGF0UmVndWxhcicpIGZvcm1hdCgnc3ZnJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAncDIyX2NvcmludGhpYSc7XHJcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL3AyMl9jb3JpbnRoaWEuZW90Jyk7XHJcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL3AyMl9jb3JpbnRoaWEuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcclxuICAgICAgICAgdXJsKCcuLi9hc3NldHMvZm9udHMvcDIyX2NvcmludGhpYS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXHJcbiAgICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnRzL3AyMl9jb3JpbnRoaWEudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxyXG4gICAgICAgICB1cmwoJy4uL2Fzc2V0cy9mb250cy9wMjJfY29yaW50aGlhLnN2ZyNQMjJDb3JpbnRoaWEnKSBmb3JtYXQoJ3N2ZycpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufSBcclxuXHJcblxyXG5cclxuLyogIEdlbmVyYWwgQ1NTICAqL1xyXG5cclxuLndyYXBwZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1ICxoNntcclxuICAgIGNvbG9yOiAjNjI2MjYyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwibGF0by1yZWd1bGFyXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5oMSAgICAgICAgICAgICAgeyBmb250LXNpemU6IDJlbTsgbWFyZ2luOiAuNjdlbSAwIH1cclxuaDIgICAgICAgICAgICAgIHsgZm9udC1zaXplOiAxLjVlbTsgbWFyZ2luOiAuNzVlbSAwIH1cclxuaDMgICAgICAgICAgICAgIHsgZm9udC1zaXplOiAxLjE3ZW07IG1hcmdpbjogLjgzZW0gMCB9XHJcbmg1ICAgICAgICAgICAgICB7IGZvbnQtc2l6ZTogLjgzZW07IG1hcmdpbjogMS41ZW0gMCB9XHJcbmg2ICAgICAgICAgICAgICB7IGZvbnQtc2l6ZTogLjc1ZW07IG1hcmdpbjogMS42N2VtIDAgfVxyXG5oMSwgaDIsIGgzLCBoNCxcclxuaDUsIGg2ICAgICAgICAgIHsgZm9udC13ZWlnaHQ6IGJvbGRlciB9XHJcblxyXG4uY2xlYXJmaXg6YmVmb3JlLCAgXHJcbi5jbGVhcmZpeDphZnRlciB7ICBcclxuICAgIGNvbnRlbnQ6IFwiIFwiOyAgXHJcbiAgICBkaXNwbGF5OiB0YWJsZTsgIFxyXG59ICBcclxuLmNsZWFyZml4OmFmdGVyIHsgIFxyXG4gICAgY2xlYXI6IGJvdGg7ICBcclxufSAgXHJcbiBcclxuLmNsZWFyZml4IHsgIFxyXG4gICAgKnpvb206IDE7ICBcclxufVxyXG5cclxuXHJcbi8qICBIZWFkZXIgU2VjdGlvbiAgKi9cclxuXHJcbmhlYWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMiwgNywgMywgMC4yKTtcclxufVxyXG5cclxuaGVhZGVyIC5sb2dveyAgIFxyXG4gICAgZmxvYXQ6IGxlZnQ7ICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgzLCAzLCAzLCAwLjUpO1xyXG59XHJcblxyXG5cclxuaGVhZGVyIG5hdntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG5oZWFkZXIgbmF2IHVse1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7ICAgIFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYgdWwgbGl7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IHVsIGxpIGEsXHJcbmhlYWRlciBuYXYgLmxvZ2luX2J0bntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwibGF0by1yZWd1bGFyXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IC5sb2dpbl9idG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDMwcHggMCAwIDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMTFweCAzMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMXMgbGluZWFyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xcyBsaW5lYXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjFzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQgLjFzIGxpbmVhcjtcclxufVxyXG5cclxuaGVhZGVyIG5hdiAubG9naW5fYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjMWMzNjU1O1xyXG59XHJcblxyXG5cclxuLyogIEhlcm8gU2VjdGlvbiAgKi9cclxuLmhlcm97XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZF8xLmpwZycpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgIFxyXG59XHJcblxyXG5cclxuLyogIGZvb3RlciAgKi9cclxuZm9vdGVye1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzk1YmFkZjtcclxufVxyXG5cclxuZm9vdGVyIC5mb290ZXIgPiB1bHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyID4gdWwgPiBsaXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG5mb290ZXIgLmZvb3RlciA+IHVsID4gbGk6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuXHJcbmZvb3RlciAuZm9vdGVyID4gdWwgPiBsaS5saW5rc3tcclxuICAgIHdpZHRoOiAxOTdweDtcclxufVxyXG5cclxuZm9vdGVyIHVsIGxpLmxpbmtzID4gdWwgPiBsaXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjdweDtcclxufVxyXG5cclxuZm9vdGVyIHVsIGxpLmxpbmtzID4gdWwgPiBsaTpsYXN0LWNoaWxke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuZm9vdGVyIC5mb290ZXIgPiB1bCA+IGxpLmxpbmtzIGxpIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwibGF0by1yZWd1bGFyXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyID4gdWwgPiBsaS5hYm91dHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbmZvb3RlciB1bCBsaS5hYm91dCBwe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogXCJsYXRvLXJlZ3VsYXJcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtOXB4O1xyXG59XHJcblxyXG5mb290ZXIgdWwgbGkuYWJvdXQgPiB1bCA+IGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuZm9vdGVyIHVsIGxpLmFib3V0ID4gdWwgPiBsaTpsYXN0LWNoaWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG5cclxuZm9vdGVyIC5jb3B5cmlnaHRze1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogXCJsYXRvLXJlZ3VsYXJcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4MmFiZDQ7XHJcbn1cclxuXHJcbmZvb3RlciAuY29weXJpZ2h0cyBhLnBoX2xpbmt7XHJcbiAgICBmb250LWZhbWlseTogXCJsYXRvLWJvbGRcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuLyogIHJlc3BvbnNpdmUgY3NzICovXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MTUwMHB4KXtcclxuICAgIC5oZXJve1xyXG4gICAgICAgIGhlaWdodDogODAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KXtcclxuICAgIC53cmFwcGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMjBweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2ggLmFkdmFuY2VkX3NlYXJjaCAuYXJyb3d7XHJcbiAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgIHJpZ2h0OiA0NnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2ggLmFkdmFuY2VkX3NlYXJjaCAjY2hlY2tfaW5fZGF0ZSxcclxuICAgIC5zZWFyY2ggLmFkdmFuY2VkX3NlYXJjaCAjY2hlY2tfb3V0X2RhdGUsXHJcbiAgICAuc2VhcmNoIC5hZHZhbmNlZF9zZWFyY2ggI21pbl9wcmljZSxcclxuICAgIC5zZWFyY2ggLmFkdmFuY2VkX3NlYXJjaCAjbWF4X3ByaWNle1xyXG4gICAgICAgIHdpZHRoOiA0Ni4yNzI3MjcyNzI3MjcyNyU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxLjgxODE4MTgxODE4MTgxOCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaCAuYWR2YW5jZWRfc2VhcmNoICNjaGVja19pbl9kYXRlLFxyXG4gICAgLnNlYXJjaCAuYWR2YW5jZWRfc2VhcmNoICNjaGVja19vdXRfZGF0ZXtcclxuICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk1LjA4ODQwODY0NDQwMDc5JSA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaCAuYWR2YW5jZWRfc2VhcmNoICNrZXl3b3Jkc3tcclxuICAgICAgICB3aWR0aDogOTYuMzYzNjM2MzYzNjM2MzYlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMS44MTgxODE4MTgxODE4MTglO1xyXG4gICAgfVxyXG5cclxuICAgIGZvb3RlciAuZm9vdGVyID4gdWwgPiBsaXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUuNDU0NTQ1NDU0NTQ1NDU1JTtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXIgLmZvb3RlciA+IHVsID4gbGkubGlua3N7XHJcbiAgICAgICAgd2lkdGg6IDE3LjkwOTA5MDkwOTA5MDkxJTtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXIgLmZvb3RlciA+IHVsID4gbGkuYWJvdXR7XHJcbiAgICAgICAgd2lkdGg6IDI5LjcyNzI3MjcyNzI3MjczJTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjgwMHB4KXtcclxuICAgIC5oZXJve1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8gLmNhcHRpb257XHJcbiAgICAgICAgd2lkdGg6IDkyLjcyNzI3MjcyNzI3MjczJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDMuNjM2MzYzNjM2MzYzNjM2JTsgXHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8gLmNhcHRpb24gaDN7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyIGEuaGFtYnVyZ2Vye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciBuYXZ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDkyLjcyNzI3MjcyNzI3MjczJTtcclxuICAgICAgICB0b3A6IDk1cHg7XHJcbiAgICAgICAgbGVmdDogMy42MzYzNjM2MzYzNjM2MzYlO1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgI2JmZDlmMjtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgbmF2LmFjdGl2ZXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgbmF2IC5sb2dpbl9idG57XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmM2YzO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciBuYXYgdWx7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyIG5hdiB1bCBsaXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgbmF2IHVsIGxpIGF7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmM2YzO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGxpbmVhcjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGxpbmVhcjtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGxpbmVhcjtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBsaW5lYXI7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyIG5hdiB1bCBsaSBhOmFjdGl2ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmM2YzO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciBuYXYgdWwgbGkgYSxcclxuICAgIGhlYWRlciBuYXYgLmxvZ2luX2J0bntcclxuICAgICAgICBjb2xvcjogIzFjMzY1NTtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgbmF2IC5sb2dpbl9idG46aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VhZWJlYjtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgbmF2IHVsIGxpOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0aW5ncyB1bC5wcm9wZXJ0aWVzX2xpc3QgbGl7XHJcbiAgICAgICAgd2lkdGg6IDQ2LjM2MzYzNjM2MzYzNjM2JTtcclxuICAgICAgICBtYXJnaW46IDAgNy4yNzI3MjcyNzI3MjcyNzMlIDcuMjcyNzI3MjcyNzI3MjczJSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0aW5ncyB1bC5wcm9wZXJ0aWVzX2xpc3QgbGk6bnRoLWNoaWxkKDNuKzApe1xyXG4gICAgICAgIG1hcmdpbjogMCA3LjI3MjcyNzI3MjcyNzI3MyUgNy4yNzI3MjcyNzI3MjcyNzMlIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3RpbmdzIHVsLnByb3BlcnRpZXNfbGlzdCBsaTpudGgtY2hpbGQoMm4rMCl7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZvb3RlciAuZm9vdGVyID4gdWwgPiBsaXtcclxuICAgICAgICB3aWR0aDogMjkuNjk2OTY5Njk2OTY5NyUhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNS40NTQ1NDU0NTQ1NDU0NTUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGZvb3RlciAuZm9vdGVyID4gdWwgPiBsaTpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZvb3RlciAuZm9vdGVyID4gdWwgPiBsaS5saW5rcyBsaSBhe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXIgLmZvb3RlciA+IHVsID4gbGkuYWJvdXR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzgyYWJkNDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXtcclxuICAgIC5oZXJvIC5jYXB0aW9uIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODVweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVybyAuY2FwdGlvbiBoM3tcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaCAjc2VhcmNoe1xyXG4gICAgICAgIHdpZHRoOiA4MyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3RpbmdzIHVsLnByb3BlcnRpZXNfbGlzdCBsaXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdGluZ3MgdWwucHJvcGVydGllc19saXN0IGxpOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7ICAgIH1cclxuXHJcblxyXG4gICAgLmxpc3RpbmdzIHVsLnByb3BlcnRpZXNfbGlzdCBsaTpudGgtY2hpbGQoM24rMCksXHJcbiAgICAubGlzdGluZ3MgdWwucHJvcGVydGllc19saXN0IGxpOm50aC1jaGlsZCgybiswKXtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdGluZ3MgLm1vcmVfbGlzdGluZ19idG57XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZm9vdGVyIC5mb290ZXIgPiB1bCA+IGxpLmxpbmtzLFxyXG4gICAgZm9vdGVyIC5mb290ZXIgPiB1bCA+IGxpLmFib3V0e1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXIgLmZvb3RlciA+IHVsID4gbGk6bGFzdC1jaGlsZHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXIgLmZvb3RlciA+IHVsID4gbGkubGlua3N7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MmFiZDQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAvKiAgbGlzdGluZ3Mgc2VjdGlvbiBmb290ZXIqL1xyXG4gICBcclxuICAubGlzdGluZ3MgdWwucHJvcGVydGllc19saXN0e1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB3aWR0aDogNjAlOyAgICAgICAgICAgXHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICAubGlzdGluZ3MgdWwucHJvcGVydGllc19saXN0IGxpe1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6ICAyOSU7XHJcbiAgICAgIGhlaWdodDogMjE1cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIG1hcmdpbjogMCAzLjYzNjM2MzYzNjM2MzYzNiUgMy42MzYzNjM2MzYzNjM2MzYlIDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMywgMywgMywgMC41KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDsgICAgICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0aW5ncyB1bC5wcm9wZXJ0aWVzX2xpc3QgbGkgaW1nLnByb3BlcnR5X2ltZ3tcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmxpc3RpbmdzIHVsLnByb3BlcnRpZXNfbGlzdCBsaSAucHJpY2V7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBjb2xvcjogIzUxNGQ0ZDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwibGF0by1ib2xkXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDsgIFxyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgLW8tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDMsIDMsIDMsIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIHRleHQgKi9cclxuICAubGlzdGluZ3MgdWwgbGkgLnByb3BlcnR5X2RldGFpbHMgaDF7XHJcbiAgICAgIGNvbG9yOiAjNjY2NDY0O1xyXG4gICAgICBmb250LWZhbWlseTogXCJsYXRvLWJvbGRcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7ICAgICAgXHJcbiAgfVxyXG4gIC8qIHRleHQgKi9cclxuICAubGlzdGluZ3MgdWwgbGkgLnByb3BlcnR5X2RldGFpbHMgaDEgYXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogIzY2NjQ2NDsgICAgICBcclxuICB9XHJcbiAgLyogdGV4dCAqL1xyXG4gIC5saXN0aW5ncyB1bCBsaSAucHJvcGVydHlfZGV0YWlscyBoMntcclxuICAgICAgY29sb3I6ICMwZjAyYzI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcImxhdG8tcmVndWxhclwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7ICAgICAgXHJcbiAgfVxyXG4iXX0= */"

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AppComponent = class AppComponent {
    constructor(http, userService, router) {
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.http.get("http://localhost:58558/api/typecar/").subscribe(t => this.typeCarList = t);
    }
    //******function returns rolse of users***********
    UserRole() {
        if (this.userService.loginUser != undefined)
            return this.userService.loginUser.Role;
        else
            return 'client';
    }
    //****finction returns status of login*****
    LoginConfirm() {
        return this.userService.confirmLogin();
    }
    //****function loguot and clear user data */
    LogOut() {
        this.userService.ClearUser();
    }
    //***function seving last 3 cars selected by user*/
    selectCar(car, carType) {
        let head = document.getElementById('navbarSupportedContent');
        head.scrollIntoView(false);
        this.userService.addCar(car, carType);
        this.router.navigate(['/CalcDayPrice']);
    }
    //***function  scroll to footer  */
    GoToFooter(id) {
        let foot = document.getElementById(id);
        foot.scrollIntoView(false);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ClientPage_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ClientPage/home-page/home-page.component */ "./src/app/ClientPage/home-page/home-page.component.ts");
/* harmony import */ var _ClientPage_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ClientPage/register-page/register-page.component */ "./src/app/ClientPage/register-page/register-page.component.ts");
/* harmony import */ var _ClientPage_search_car_search_car_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ClientPage/search-car/search-car.component */ "./src/app/ClientPage/search-car/search-car.component.ts");
/* harmony import */ var _ClientPage_calc_day_price_calc_day_price_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ClientPage/calc-day-price/calc-day-price.component */ "./src/app/ClientPage/calc-day-price/calc-day-price.component.ts");
/* harmony import */ var _AdminPage_list_cars_list_cars_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AdminPage/list-cars/list-cars.component */ "./src/app/AdminPage/list-cars/list-cars.component.ts");
/* harmony import */ var _AdminPage_list_orders_list_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AdminPage/list-orders/list-orders.component */ "./src/app/AdminPage/list-orders/list-orders.component.ts");
/* harmony import */ var _AdminPage_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AdminPage/list-users/list-users.component */ "./src/app/AdminPage/list-users/list-users.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _pipes_available_car_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/available-car.pipe */ "./src/app/pipes/available-car.pipe.ts");
/* harmony import */ var _pipes_result_search_car_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/result-search-car.pipe */ "./src/app/pipes/result-search-car.pipe.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _pipes_search_number_car_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/search-number-car.pipe */ "./src/app/pipes/search-number-car.pipe.ts");
/* harmony import */ var _pipes_remove_duplicate_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/remove-duplicate.pipe */ "./src/app/pipes/remove-duplicate.pipe.ts");
/* harmony import */ var _UserPage_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./UserPage/user-order/user-order.component */ "./src/app/UserPage/user-order/user-order.component.ts");
/* harmony import */ var _UserPage_user_all_orders_user_all_orders_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./UserPage/user-all-orders/user-all-orders.component */ "./src/app/UserPage/user-all-orders/user-all-orders.component.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _ClientPage_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
            _ClientPage_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"],
            _ClientPage_search_car_search_car_component__WEBPACK_IMPORTED_MODULE_9__["SearchCarComponent"],
            _ClientPage_calc_day_price_calc_day_price_component__WEBPACK_IMPORTED_MODULE_10__["CalcDayPriceComponent"],
            _AdminPage_list_cars_list_cars_component__WEBPACK_IMPORTED_MODULE_11__["ListCarsComponent"],
            _AdminPage_list_orders_list_orders_component__WEBPACK_IMPORTED_MODULE_12__["ListOrdersComponent"],
            _AdminPage_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_13__["ListUsersComponent"],
            _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__["LoginPageComponent"],
            _pipes_available_car_pipe__WEBPACK_IMPORTED_MODULE_15__["AvailableCarPipe"],
            _pipes_result_search_car_pipe__WEBPACK_IMPORTED_MODULE_16__["ResultSearchCarPipe"],
            _employee_employee_component__WEBPACK_IMPORTED_MODULE_18__["EmployeeComponent"],
            _pipes_search_number_car_pipe__WEBPACK_IMPORTED_MODULE_19__["SearchNumberCarPipe"],
            _pipes_remove_duplicate_pipe__WEBPACK_IMPORTED_MODULE_20__["RemoveDuplicatePipe"],
            _UserPage_user_order_user_order_component__WEBPACK_IMPORTED_MODULE_21__["UserOrderComponent"],
            _UserPage_user_all_orders_user_all_orders_component__WEBPACK_IMPORTED_MODULE_22__["UserAllOrdersComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        providers: [_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/car.ts":
/*!************************!*\
  !*** ./src/app/car.ts ***!
  \************************/
/*! exports provided: Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
class Car {
    get carNumber() {
        return this._carNumber;
    }
    set carNumber(v) {
        this._carNumber = v;
    }
    get carType() {
        return this._carType;
    }
    set carType(v) {
        this._carType = v;
    }
    get mileage() {
        return this._mileage;
    }
    set mileage(v) {
        this._mileage = v;
    }
    get picture() {
        return this._picture;
    }
    set picture(v) {
        this._picture = v;
    }
    get usable() {
        return this._usable;
    }
    set usable(v) {
        this._usable = v;
    }
    get available() {
        return this._available;
    }
    set available(v) {
        this._available = v;
    }
    get branch() {
        return this._branch;
    }
    set branch(v) {
        this._branch = v;
    }
}


/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollbar {\r\n    position: relative;    \r\n    max-height: 80%;\r\n    margin: 0;    \r\n    overflow: auto;\r\n    background-color: rgb(255, 254, 254);       \r\n    }\r\n    \r\n    .table-wrapper-scroll-y {\r\n    display: block;\r\n    width: 80%;\r\n    left: 10%;\r\n    right: 10%;\r\n    }\r\n    \r\n    .pointer{\r\n        cursor: pointer;\r\n    }\r\n    \r\n    /* Center the loader */\r\n    \r\n    #preloader{\r\n    position: fixed;\r\n    z-index: 1000;\r\n    width: 100%;\r\n    height: 100%;\r\n    top:0;\r\n    background-color: gray;\r\n    opacity: 0.5;\r\n    display:none;\r\n  }\r\n    \r\n    #loader {\r\n  position: relative;\r\n  left: 50%;\r\n  top: 50%;  \r\n  width: 150px;\r\n  height: 150px;\r\n  margin: -75px 0 0 -75px;\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;  \r\n}\r\n    \r\n    @-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n    \r\n    @keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEM7O0lBRUE7SUFDQSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVGLHNCQUFzQjs7SUFDdEI7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osS0FBSztJQUNMLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtFQUNkOztJQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsa0NBQWtDO0FBQ3BDOztJQUVBO0VBQ0UsS0FBSywrQkFBK0IsRUFBRTtFQUN0QyxPQUFPLGlDQUFpQyxFQUFFO0FBQzVDOztJQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxiYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICBcclxuICAgIG1heC1oZWlnaHQ6IDgwJTtcclxuICAgIG1hcmdpbjogMDsgICAgXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NCwgMjU0KTsgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvaW50ZXJ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cclxuICAjcHJlbG9hZGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuXHJcbiNsb2FkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7ICBcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAgXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let EmployeeComponent = class EmployeeComponent {
    constructor(http, userService, router) {
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.today = new Date();
    }
    //***function calculate regular price*****/
    CalcPrice(dateD, dateP, price) {
        let dateDropOff = new Date(dateD).getTime();
        let datePicup = new Date(dateP).getTime();
        let days = Math.floor((dateDropOff - datePicup) / (1000 * 60 * 60 * 24));
        return (days * price);
    }
    ;
    //***function calculate overdue price*****/
    CalcOverduePrice(dateD, price, dateP) {
        let dateOverdue = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()).getTime();
        let dateDropOff = new Date(dateD).getTime();
        let days = Math.ceil((dateOverdue - dateDropOff) / (1000 * 60 * 60 * 24));
        let datePicup = new Date(dateP).getTime();
        if (dateDropOff >= dateOverdue)
            return 0;
        else
            return days * price;
    }
    ;
    //***function adding drop-off date to database and change car to available****
    Payment(carId, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", `Basic ${this.userService.loginUser.UserName}:${this.userService.loginUser.UserPassword}`);
            if (confirm("Are you sure to confirm this payment?")) {
                document.getElementById('preloader').style.display = "block";
                yield this.http.put("http://localhost:58558/api/RentCar/" + id, { ReturnCarIndeed: this.today }, { headers: authHeaders }).toPromise().catch(err => alert(err.error));
                yield this.http.put("http://localhost:58558/api/car/" + carId, { Available: 'yes' }, { headers: authHeaders }).toPromise().catch(err => alert(err.error));
                this.ngOnInit();
                document.getElementById('preloader').style.display = "none";
            }
        });
    }
    ;
    ngOnInit() {
        //*****if not employee role routing to home page****
        if (this.userService.userRole() != 'employee' || this.userService.userRole() == undefined) {
            this.router.navigate(['/HomePage']);
        }
        this.http.get("http://localhost:58558/api/car/").subscribe(t => this.carList = t);
        this.http.get("http://localhost:58558/api/RentCar/").subscribe(t => this.rentCarList = t);
        this.http.get("http://localhost:58558/api/typecar/").subscribe(t => this.typeCarList = t);
    }
};
EmployeeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee',
        template: __webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee/employee.component.html"),
        styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width: 30%;  \r\n    min-width: 300px;  \r\n    }\r\n\r\n*[role=\"form\"] {    \r\n    padding: 15px;\r\n    margin:0;\r\n    background-color: rgb(113, 226, 198);\r\n    border-radius: 0.3em;    \r\n    z-index: 50;\r\n    position: relative; \r\n}\r\n\r\n/* Center the loader */\r\n\r\n#preloader{\r\n    position: fixed;\r\n    z-index: 1000;\r\n    width: 100%;\r\n    height: 100%;\r\n    top:0;\r\n    background-color: gray;\r\n    opacity: 0.5;\r\n    display:none;\r\n  }\r\n\r\n#loader {\r\n  position: relative;\r\n  left: 50%;\r\n  top: 50%;  \r\n  width: 150px;\r\n  height: 150px;\r\n  margin: -75px 0 0 -75px;\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;  \r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCOztBQUVKO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixvQ0FBb0M7SUFDcEMsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUUsc0JBQXNCOztBQUN0QjtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixLQUFLO0lBQ0wsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxLQUFLLCtCQUErQixFQUFFO0VBQ3RDLE9BQU8saUNBQWlDLEVBQUU7QUFDNUM7O0FBRUE7RUFDRSxLQUFLLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMzAlOyAgXHJcbiAgICBtaW4td2lkdGg6IDMwMHB4OyAgXHJcbiAgICB9XHJcblxyXG4qW3JvbGU9XCJmb3JtXCJdIHsgICAgXHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEzLCAyMjYsIDE5OCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTsgICAgXHJcbiAgICB6LWluZGV4OiA1MDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbn1cclxuXHJcbiAgLyogQ2VudGVyIHRoZSBsb2FkZXIgKi9cclxuICAjcHJlbG9hZGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuXHJcbiNsb2FkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7ICBcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAgXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");





let LoginPageComponent = class LoginPageComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loginUser = new _user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    //*****function to login user****
    LogIn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            document.getElementById('preloader').style.display = "block";
            const result = yield this.userService.LogIn(this.loginUser.userName, this.loginUser.password);
            document.getElementById('preloader').style.display = "none";
            if (result == true) {
                this.router.navigate(['/SearchCar']);
            }
            else {
                alert('Wrong user name or password');
            }
        });
    }
    ngOnInit() {
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/login-page/login-page.component.html"),
        styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/pipes/available-car.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/available-car.pipe.ts ***!
  \*********************************************/
/*! exports provided: AvailableCarPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableCarPipe", function() { return AvailableCarPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AvailableCarPipe = 
//****returns of available cars****
class AvailableCarPipe {
    transform(arrCars) {
        if (arrCars != null) {
            let arrAvailableCars = [];
            for (let i = 0; i < arrCars.length; i++) {
                if (arrCars[i].Available == "no" || arrCars[i].Usable == "no") {
                    continue;
                }
                else {
                    arrAvailableCars.push(arrCars[i]);
                }
            }
            return arrAvailableCars;
        }
    }
};
AvailableCarPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'availableCar'
    })
    //****returns of available cars****
], AvailableCarPipe);



/***/ }),

/***/ "./src/app/pipes/remove-duplicate.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/remove-duplicate.pipe.ts ***!
  \************************************************/
/*! exports provided: RemoveDuplicatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDuplicatePipe", function() { return RemoveDuplicatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RemoveDuplicatePipe = 
//******remove duplicate items from selection */
class RemoveDuplicatePipe {
    transform(arrItems, item) {
        var arrItemsNew = [];
        if (arrItems != null) {
            arrItemsNew[0] = arrItems[0];
            for (let index = 1; index < arrItems.length; index++) {
                var result = false;
                if (item == 'YearManufacturer') {
                    for (let indexNew = 0; indexNew < arrItemsNew.length; indexNew++) {
                        let items = new Date(arrItems[index][item]);
                        let itemsNew = new Date(arrItemsNew[indexNew][item]);
                        if (items.getFullYear() == itemsNew.getFullYear() || items.getFullYear() == 1) {
                            result = true;
                            break;
                        }
                    }
                }
                else {
                    for (let indexNew = 0; indexNew < arrItemsNew.length; indexNew++) {
                        if (arrItems[index][item] == arrItemsNew[indexNew][item] || arrItems[index][item] == 'none') {
                            result = true;
                            break;
                        }
                    }
                }
                if (result == false) {
                    arrItemsNew.push(arrItems[index]);
                }
            }
            return arrItemsNew;
        }
        return arrItems;
    }
};
RemoveDuplicatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'removeDuplicate'
    })
    //******remove duplicate items from selection */
], RemoveDuplicatePipe);



/***/ }),

/***/ "./src/app/pipes/result-search-car.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/result-search-car.pipe.ts ***!
  \*************************************************/
/*! exports provided: ResultSearchCarPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultSearchCarPipe", function() { return ResultSearchCarPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResultSearchCarPipe = 
//******returns selected cars in search by user */
class ResultSearchCarPipe {
    transform(arrCars, txt, manufacturer, model, transmission, yearManufacturer) {
        if (txt == undefined && manufacturer == undefined && model == undefined && transmission == undefined && yearManufacturer == undefined) {
            return arrCars;
        }
        else {
            var arrResultCars = arrCars;
            if (txt != undefined) {
                let arrTxt = [];
                for (let i = 0; i < arrResultCars.length; i++) {
                    if (arrResultCars[i].CarType.indexOf(txt) > -1) {
                        arrTxt.push(arrResultCars[i]);
                    }
                }
                arrResultCars = arrTxt;
            }
            if (manufacturer != undefined) {
                let arrManufacturer = [];
                for (let i = 0; i < arrResultCars.length; i++) {
                    if (arrResultCars[i].ManufacturerNmae == manufacturer) {
                        arrManufacturer.push(arrResultCars[i]);
                    }
                }
                arrResultCars = arrManufacturer;
            }
            if (model != undefined) {
                let arrModel = [];
                for (let i = 0; i < arrResultCars.length; i++) {
                    if (arrResultCars[i].Model == model) {
                        arrModel.push(arrResultCars[i]);
                    }
                }
                arrResultCars = arrModel;
            }
            if (transmission != undefined) {
                let arrTransmission = [];
                for (let i = 0; i < arrResultCars.length; i++) {
                    if (arrResultCars[i].Transmission == transmission) {
                        arrTransmission.push(arrResultCars[i]);
                    }
                }
                arrResultCars = arrTransmission;
            }
            if (yearManufacturer != undefined) {
                let arrYearManufacturer = [];
                for (let i = 0; i < arrResultCars.length; i++) {
                    let yearCar1 = new Date(arrResultCars[i].YearManufacturer);
                    let yearCar2 = new Date(yearManufacturer);
                    console.log(yearCar2 + " " + yearCar1);
                    if (yearCar1.getFullYear() == yearCar2.getFullYear()) {
                        arrYearManufacturer.push(arrResultCars[i]);
                    }
                }
                arrResultCars = arrYearManufacturer;
            }
            return arrResultCars;
        }
    }
};
ResultSearchCarPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'resultSearchCar'
    })
    //******returns selected cars in search by user */
], ResultSearchCarPipe);



/***/ }),

/***/ "./src/app/pipes/search-number-car.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/search-number-car.pipe.ts ***!
  \*************************************************/
/*! exports provided: SearchNumberCarPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNumberCarPipe", function() { return SearchNumberCarPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchNumberCarPipe = 
//****returns cars by number in search***
class SearchNumberCarPipe {
    transform(arrCars, txt) {
        var arrNotAvailable = [];
        if (arrCars != null) {
            for (let index = 0; index < arrCars.length; index++) {
                if (arrCars[index].Available == 'no') {
                    arrNotAvailable.push(arrCars[index]);
                }
            }
            if (txt == undefined) {
                return arrNotAvailable;
            }
            else {
                let arrResultCars = [];
                for (let i = 0; i < arrNotAvailable.length; i++) {
                    let carNumber = arrNotAvailable[i].CarID;
                    let arrToString = carNumber.toString();
                    if (arrToString.indexOf(txt) > -1) {
                        arrResultCars.push(arrNotAvailable[i]);
                    }
                }
                return arrResultCars;
            }
        }
    }
};
SearchNumberCarPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchNumberCar'
    })
    //****returns cars by number in search***
], SearchNumberCarPipe);



/***/ }),

/***/ "./src/app/rentCar.ts":
/*!****************************!*\
  !*** ./src/app/rentCar.ts ***!
  \****************************/
/*! exports provided: RentCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentCar", function() { return RentCar; });
class RentCar {
    get PickupCar() {
        return this._PickupCar;
    }
    set PickupCar(v) {
        this._PickupCar = v;
    }
    get ReturnCar() {
        return this._ReturnCar;
    }
    set ReturnCar(v) {
        this._ReturnCar = v;
    }
    get CarID() {
        return this._CarID;
    }
    set CarID(v) {
        this._CarID = v;
    }
    get UserID() {
        return this._UserID;
    }
    set UserID(v) {
        this._UserID = v;
    }
}


/***/ }),

/***/ "./src/app/typeCar.ts":
/*!****************************!*\
  !*** ./src/app/typeCar.ts ***!
  \****************************/
/*! exports provided: TypeCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeCar", function() { return TypeCar; });
class TypeCar {
    get CarType() {
        return this._CarType;
    }
    set CarType(v) {
        this._CarType = v;
    }
    get ManufacturerNmae() {
        return this._ManufacturerNmae;
    }
    set ManufacturerNmae(v) {
        this._ManufacturerNmae = v;
    }
    get Model() {
        return this._Model;
    }
    set Model(v) {
        this._Model = v;
    }
    get DalyPrice() {
        return this._DalyPrice;
    }
    set DalyPrice(v) {
        this._DalyPrice = v;
    }
    get DelayDalyPrice() {
        return this._DelayDalyPrice;
    }
    set DelayDalyPrice(v) {
        this._DelayDalyPrice = v;
    }
    get YearManufacturer() {
        return this._YearManufacturer;
    }
    set YearManufacturer(v) {
        this._YearManufacturer = v;
    }
    get Transmission() {
        return this._Transmission;
    }
    set Transmission(v) {
        this._Transmission = v;
    }
}


/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


class UserService {
    constructor(http) {
        this.http = http;
        this.index = 0;
        this.choicesOfCar = [];
    }
    get loginUser() {
        return this._loginUser;
    }
    set loginUser(v) {
        this._loginUser = v;
    }
    //****function to login user***
    LogIn(userName, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let authHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", `Basic ${userName}:${password}`);
            yield this.http.get("http://localhost:58558/api/user/" + userName, { headers: authHeaders })
                .toPromise().then(h => this.loginUser = h)
                .catch(x => Promise.reject(`error is ${x}`))
                .then(x => console.log('login succeeded'), err => console.log('wrong user name or password', err));
            ;
            return new Promise(resolve => {
                if (this.loginUser != undefined) {
                    return resolve(true);
                }
                else {
                    return resolve(false);
                }
            });
        });
    }
    //****finction returns status of login*****
    confirmLogin() {
        if (this.loginUser != undefined)
            return true;
        else
            return false;
    }
    //******function returns rolse of users***********
    userRole() {
        if (this.loginUser == undefined)
            return "user";
        else
            return this.loginUser.Role;
    }
    //******function seving current and last 3 cars selected by user
    addCar(car, typeCar) {
        let arr = [];
        arr.push(car);
        arr.push(typeCar);
        this.userCar = arr;
        var dublicate = 'no';
        for (let i_available = 0; i_available < this.choicesOfCar.length; i_available++) {
            if (this.choicesOfCar[i_available].CarID == car.CarID) {
                dublicate = 'yes';
            }
        }
        if (dublicate == 'no') {
            if (this.choicesOfCar.length < 3) {
                this.choicesOfCar.push(car);
            }
            else {
                if (this.index < 2) {
                    this.choicesOfCar[this.index] = car;
                    this.index++;
                }
                else {
                    this.choicesOfCar[this.index] = car;
                    this.index = 0;
                }
            }
        }
    }
    //****function to clear user data */
    ClearUser() {
        this.loginUser = undefined;
        this.choicesOfCar = [];
        this.userCar = [];
        this.index = 0;
        this.pickupDate = undefined;
    }
}
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];


/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    get fName() {
        return this._fName;
    }
    set fName(v) {
        this._fName = v;
    }
    get lName() {
        return this._lName;
    }
    set lName(v) {
        this._lName = v;
    }
    get userId() {
        return this._userId;
    }
    set userId(v) {
        this._userId = v;
    }
    get userName() {
        return this._userName;
    }
    set userName(v) {
        this._userName = v;
    }
    get birthDay() {
        return this._birthDay;
    }
    set birthDay(v) {
        this._birthDay = v;
    }
    get gender() {
        return this._gender;
    }
    set gender(v) {
        this._gender = v;
    }
    get email() {
        return this._email;
    }
    set email(v) {
        this._email = v;
    }
    get password() {
        return this._password;
    }
    set password(v) {
        this._password = v;
    }
    get picture() {
        return this._picture;
    }
    set picture(v) {
        this._picture = v;
    }
}


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

module.exports = __webpack_require__(/*! C:\Users\RomanUser\Desktop\Project_4\RentCarClient_1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map