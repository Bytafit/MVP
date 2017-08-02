webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodSelection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodSelection = (function () {
    function FoodSelection(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipe = navParams.get('data');
    }
    return FoodSelection;
}());
FoodSelection = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-foodselection',template:/*ion-inline-start:"/Users/txt-18/Desktop/XperTaste-master/src/pages/foodselection/foodselection.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title class="thirdtitle">\n\n      {{recipe.name}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="food">\n\n    <img class="foodType" src="{{recipe.image}}" height="150" width="200">\n\n    \n\n <ion-slides pager>\n\n       \n\n    <ion-slide>\n\n      <h4 class="slidetitle">Supplies</h4> \n\n      <div class="supplies1">\n\n        <ol>\n\n          <li class="supplies" *ngFor="let supplies of recipe.Supplies">{{supplies}}</li>\n\n        </ol>\n\n      </div>\n\n\n\n    </ion-slide>\n\n\n\n\n\n    <ion-slide>\n\n      <h4 class="slidetitle">Ingredients</h4> \n\n      <div class="ingredients1">\n\n        <ol>\n\n          <li class="ingredients" *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li>\n\n        </ol> \n\n      </div>\n\n\n\n    </ion-slide>\n\n\n\n\n\n\n\n\n\n    <ion-slide>\n\n      <h4 class="slidetitle">Steps</h4>\n\n      <div class="instrictions1">\n\n        <ol>\n\n          <li class="instructions" *ngFor="let steps of recipe.directions">{{steps}}</li>\n\n        </ol> \n\n      </div>\n\n    </ion-slide>\n\n </ion-slides>\n\n  </div>\n\n\n\n \n\n    \n\n    \n\n    \n\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    \n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/txt-18/Desktop/XperTaste-master/src/pages/foodselection/foodselection.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], FoodSelection);

//# sourceMappingURL=foodselection.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_recipes_recipes__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_foodselection_foodselection__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_recipes_recipes__["a" /* Recipes */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_foodselection_foodselection__["a" /* FoodSelection */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_recipes_recipes__["a" /* Recipes */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_foodselection_foodselection__["a" /* FoodSelection */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/txt-18/Desktop/XperTaste-master/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/txt-18/Desktop/XperTaste-master/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_recipes__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foodselection_foodselection__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__recipes_recipes__["a" /* Recipes */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__foodselection_foodselection__["a" /* FoodSelection */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/txt-18/Desktop/XperTaste-master/src/pages/tabs/tabs.html"*/'<ion-tabs>\n\n \n\n <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n \n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"/Users/txt-18/Desktop/XperTaste-master/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_recipes__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.searchList = [];
        this.counter = 0;
        this.nextData = [];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.searchList = [];
    };
    HomePage.prototype.pushenter = function () {
        if (this.searchList.length == 0) {
            this.noIngredients();
        }
        else if (this.searchList.length < 3) {
            this.needMoreIngredients();
        }
        else {
            this.query = "";
            for (var i = 0; i < this.searchList.length; i++) {
                this.query += " " + this.searchList[i];
            }
            this.downloadRecipes();
            // this.navCtrl.push(Recipes,{data:this.searchList});
        }
    };
    HomePage.prototype.add = function () {
        if (this.search !== undefined) {
            this.searchList.push(this.search);
            this.search = null;
        }
    };
    HomePage.prototype.delete = function (foodvalue) {
        this.searchList.splice(this.searchList.indexOf(foodvalue), 1);
    };
    HomePage.prototype.downloadRecipes = function () {
        var _this = this;
        this.nextData = [];
        console.log(this.searchList);
        this.http.post('https://xpertaste.herokuapp.com/test', { data: this.query }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.recipes = data;
            if (_this.recipes.length == 0) {
                _this.noRecipes();
            }
            else {
                _this.sortRecipe(_this.recipes);
                // this.navCtrl.push(Recipes,{data:this.recipes});
            }
        });
    };
    HomePage.prototype.sortRecipe = function (recipes) {
        for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
            var recipe = recipes_1[_i];
            this.counter = 0;
            for (var _a = 0, _b = recipe.ingredients; _a < _b.length; _a++) {
                var item = _b[_a];
                for (var _c = 0, _d = this.searchList; _c < _d.length; _c++) {
                    var word = _d[_c];
                    // console.log("word "  + word);
                    // console.log('%c item ' + item, 'background: #222; color: #bada55');
                    if (word == item) {
                        this.counter += 1;
                        console.log("match on " + word + " " + item);
                        console.log(this.counter);
                        if (this.counter == 3) {
                            this.nextData.push(recipe);
                        }
                    }
                }
            }
        }
        // for(var word of this.searchList){
        //   for(var recipe of recipes){
        //     this.counter = 0;
        //     for(var item of recipe.ingredients){
        //       if(word == item){
        //         console.log("match on " + word + " " + item);
        //         this.counter += 1;
        //         console.log("counter " + this.counter);
        //       }else{
        //         // console.log("word "  + word);
        //         // console.log('%c item ' + item, 'background: #222; color: #bada55');
        //       }
        //     }
        //     if(this.counter == 3){
        //           this.nextData.push(recipe);
        //     }
        //   }
        // }
        console.log(this.nextData);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__recipes_recipes__["a" /* Recipes */], { data: this.nextData });
    };
    HomePage.prototype.noRecipes = function () {
        var alert = this.alertCtrl.create({
            title: 'No Available Recipes',
            subTitle: 'No recipes were found with the ingredients entered',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.noIngredients = function () {
        var alert = this.alertCtrl.create({
            title: 'No Ingredients Entered',
            subTitle: 'Please enter some ingredients',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.needMoreIngredients = function () {
        var alert = this.alertCtrl.create({
            title: 'Not Enough Ingredients Entered',
            subTitle: 'Please enter at least three ingredients',
            buttons: ['OK']
        });
        alert.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/txt-18/Desktop/XperTaste-master/src/pages/home/home.html"*/'\n<ion-content padding class="hbody">\n \n\n  \n  <div class="logo">\n  <img src="assets/icon/logo.png" height="150" width="100">\n  </div>\n\n    <div class="hname2">\n      XperTaste\n    </div>\n\n  <div class="add"> \n  <input class="homeinput" type="text" placeholder="add your ingredients" [(ngModel)]="search">\n    <button class="hAdd" >\n      <img class="Hadd" src="assets/icon/HPadd.png" (click)="add()">\n    </button>\n  </div>\n\n\n  <div>\n    <ion-list inset *ngIf="searchList">\n      <button ion-item *ngFor="let item of searchList">\n        {{item}}\n        <img class="delete" src="assets/icon/Vector.png" (click)="delete({{item}})">\n      </button> \n    </ion-list>\n  </div>\n\n  <div class="hEnter">\n    <button class="enterbutton" (click)="pushenter()">Enter</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/txt-18/Desktop/XperTaste-master/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foodselection_foodselection__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Recipes = (function () {
    function Recipes(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.recipes = navParams.get('data');
    }
    Recipes.prototype.getTriples = function () {
        var triples = [];
        var length = this.recipes.length;
        for (var i = 0; i < length; i += 2) {
            var trio = [];
            trio.push(this.recipes[i]);
            if (i + 1 < length) {
                trio.push(this.recipes[i + 1]);
            }
            triples.push(trio);
        }
        return triples;
    };
    Recipes.prototype.pushpg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__foodselection_foodselection__["a" /* FoodSelection */]);
    };
    Recipes.prototype.pushbackrecipe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    Recipes.prototype.recipeInfo = function (recipeData) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__foodselection_foodselection__["a" /* FoodSelection */], { data: recipeData });
    };
    return Recipes;
}());
Recipes = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recipes',template:/*ion-inline-start:"/Users/txt-18/Desktop/XperTaste-master/src/pages/recipes/recipes.html"*/'<ion-header>\n\n  <ion-navbar style="height:5%;">\n\n    <ion-title align-center="center" class="recipetitle">\n\n      Recipes\n\n      <img class="recipetitleimage" src="assets/icon/logo.png">\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  \n\n\n\n\n\n    <!-- <a href="../foodselection/foodselection.html"> -->\n\n\n\n\n\n      <ion-grid *ngIf="recipes">\n\n        <!-- <ion-row responsive-sm *ngFor="let recipe of recipes">\n\n          <ion-col width-50>\n\n              <div class="list customlist" >\n\n                  <div class="foodName">{{recipe.name}}</div>\n\n                  <img class="listimg" src="assets/icon/pizzai.png">\n\n                  <div class="foodTime">{{recipe.time}}</div>  \n\n              </div>\n\n          </ion-col>\n\n\n\n        </ion-row> -->\n\n\n\n        <ion-row *ngFor="let trio of getTriples()" >\n\n          <ion-col *ngFor="let item of trio" col-6>\n\n              <div class="listcustomlist" (click)="recipeInfo(item)">\n\n                  <div class="foodName">{{item.name}}</div>\n\n                  <img class="listimg" src="{{item.image}}">\n\n                  <div class="foodTime">{{item.time}}\n\n                  <br>\n\n                  {{item.calories}}\n\n                  </div>  \n\n              </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/txt-18/Desktop/XperTaste-master/src/pages/recipes/recipes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], Recipes);

//# sourceMappingURL=recipes.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map