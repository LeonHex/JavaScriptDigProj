console.log("this. is the first line of the js");

function navigateToNewPage() {
    window.open("index2.html", "_self");
}

/* ================================================
 *   global scope and function scope
 * ================================================
*/
// globalFunc();

// var globalFunc = function(){
// function globalFunc() {
//     test = "this is a global variable";
//     var test1 = "this is a function scope variable";
// }

// console.log("page1:" + window.test);
// console.log(test1);

//override the system global variable
// console.info(addEventListener);
// addEventListener = 333;
// console.info(addEventListener);
// console.info(window.addEventListener);

//=================================================

// function thisTestFunc(arg1, arg2) {
//     var result = arg1 + arg2;
//     return result;
// }
// var res = thisTestFunc(5, 10);

// var thisTestVar = new thisTestFunc();
// console.info(thisTestFunc);

//=================================================


// function siblings() {
//     var siblings = ["John", "Liza", "Peter"];
//     function siblingCount() {
//         var siblingsLength = siblings.length;
//         return siblingsLength;
//     }
//     function joinSiblingNames() {
//         return "I have " + siblingCount() + " siblings:\n\n" + siblings.join("\n");
//     }
//     return joinSiblingNames;
// }
// alert(siblings()());

// function addLinks() {
//     for (var i = 0, link; i < 5; i++) {
//         link = document.createElement("a");
//         link.innerHTML = "Link " + i;
//         link.onclick = function (num) {
//             return function () {
//                 alert(num);
//             };
//         }(i);
//         document.body.appendChild(link);
//     }
// }
// window.onload = addLinks;

var Person = function PPPP(name) {
    this.name = name;
    // var obj = {
    //     name: name
    // }

    // return this;
    // Object.defineProperty(this, "name", {
    //     // writable: true,
    //     set: function (value) {
    //         this.name = value;
    //     },
    //     get: function () {
    //         return "shit"
    //     }
    // });

    // this.name = name;
    // var x = new PPPP("inside");

    this.innerPerson = function (innerName) {
        this.name = innerName;
    }
}

// var p1 = new Person("hex");
// console.log(p1.name);

// p1.age = 19;
// console.info(p1);

// // Person.nationality = "Chinese";
// Person.prototype.nationality = "Chinese";
// var p2 = new Person("leon");
// console.info(p2);

// var p3 = Person.nationality;
// console.info(p3);

// var p4 = new (new Person("hex").innerPerson)("inner");
// var p5 = (new Person("hex")).innerPerson("inner");

// var p6 = p1.innerPerson;
// var p7 = new p6("inner");
// var p7 = p6.call(p1,"inner");
// console.info(p4);
// console.log(new Date().getTime());
// console.log((new Date()).getTime());


function aaa() {
    console.log("aaa");
}

// var a = new PPPP("hex");

// console.log(aaa.name);
// console.log(Person.name);

function foo() {
    foo.abc = function () { console.log('456'); }
    this.abc = function () { console.log('def'); }
    this.def = this.abc;
    abc = function () { console.log("@@@@@"); }
    var abc = function () { console.log("$$$$$$$$"); }
}

console.info(foo);

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

window.onload = function () {
    var tempArr = [4, 5, 2, 7, 8, 4, 2];
    console.log(quickSort(tempArr, 0, 6));
    console.log(tempArr);
}