console.log("this. is the first line of the js");

function navigateToNewPage() {
    window.open("index2.html", "_self");
}

/* ================================================
 *   global scope and function scope
 * ================================================
*/
globalFunc();

// var globalFunc = function(){
function globalFunc() {
    test = "this is a global variable";
    var test1 = "this is a function scope variable";
}

console.log("page1:" + window.test);
// console.log(test1);

//override the system global variable
// console.info(addEventListener);
// addEventListener = 333;
// console.info(addEventListener);
// console.info(window.addEventListener);

//=================================================

function thisTestFunc(arg1, arg2) {
    var result = arg1 + arg2;
    return result;
}
var res = thisTestFunc(5, 10);

// var thisTestVar = new thisTestFunc();
console.info(thisTestFunc);

//=================================================


function siblings() {
    var siblings = ["John", "Liza", "Peter"];
    function siblingCount() {
        var siblingsLength = siblings.length;
        return siblingsLength;
    }
    function joinSiblingNames() {
        return "I have " + siblingCount() + " siblings:\n\n" + siblings.join("\n");
    }
    return joinSiblingNames;
}
alert(siblings()());