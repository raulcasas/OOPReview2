"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var reto4_1 = require("../reto4");
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    // GET
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    // SET
    MobileLibrary.prototype.setName = function (nuevoName) {
        this.name = nuevoName;
    };
    MobileLibrary.prototype.setLocation = function (nuevoLocation) {
        this.location = nuevoLocation;
    };
    MobileLibrary.prototype.setMobiles = function (nuevoMobiles) {
        this.mobiles = nuevoMobiles;
    };
    MobileLibrary.prototype.setTotalPrice = function (nuevoTotalPrice) {
        this.totalPrice = nuevoTotalPrice;
    };
    // MÉTODOS
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var resultado = 0;
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mobile = _a[_i];
            resultado += mobile.getPrice();
        }
        this.totalPrice = resultado;
        return this.totalPrice;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("This is my mobiles: ");
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mobile = _a[_i];
            mobile.printAll();
        }
        console.log("Price overall: " + this.totalPrice);
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
var Nokia3210 = new reto4_1.Mobile("Nokia3210", "3210", "Nokia", 18, "Grey", false, 1, 55.99);
var iPhone3G = new reto4_1.Mobile("iPhone3G", "3G", "Apple", 36, "White", false, 2, 99.99);
var SamsungGalaxy = new reto4_1.Mobile("SamsungGalaxy", "Galaxy", "Samsung", 124, "Blue", true, 4, 150);
var XiaomiMiA2 = new reto4_1.Mobile("XiaomiMiA2", "MiA2", "Xiaomi", 124, "Red", true, 4, 199);
var arrayMobiles = [Nokia3210, iPhone3G, SamsungGalaxy, XiaomiMiA2];
var libreria = new MobileLibrary("Raúl", "Madrid", arrayMobiles);
console.log(libreria.getName());
console.log(libreria.getLocation());
console.log(libreria.getMobiles());
console.log(libreria.getTotalPrice());
libreria.printLibrary();
