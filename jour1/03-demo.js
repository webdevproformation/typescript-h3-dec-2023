"use strict";
var a = 2;
var b = "Bonjour";
function calcul() { }
var division = function () { };
var A = (function () {
    function A(a, b) {
        this.a = a;
        this.b = b;
    }
    A.prototype.calcul = function () { };
    A.prototype.division = function () { };
    return A;
}());
