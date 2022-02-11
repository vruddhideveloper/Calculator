"use strict";
var _a;
console.log("Hello world");
var op = document.getElementById("op");
var input = document.getElementById("text-box");
document.querySelectorAll(".calc-btn").forEach(function (element) {
    element.addEventListener("click", function () {
        if (input) {
            input.value += element.innerHTML;
        }
    });
});
(_a = document.getElementById("equal")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    if (op) {
        op.value = "".concat(eval(input.value));
    }
});
