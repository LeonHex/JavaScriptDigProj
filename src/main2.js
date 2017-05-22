console.log("page2:" + window.test);
function foo() {
    foo.abc = function () { console.log('456'); }
    this.abc = function () { console.log('def'); }
    this.def = this.abc;

    abc = function () { console.log("@@@@@"); }
    var abc = function () { console.log("$$$$$$$$"); }
}

foo.abc = function () { console.log("123"); };
// foo.prototype = {
//     abc: function () { console.log("abc"); }
// }

foo.abc();              //123
var f = new foo();
// f.def();                //abc
f.abc();                //def
foo.abc();              //456
console.log(foo["abc"]);//456