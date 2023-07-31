// always named export is wrapped {} brackets
// import { a, arr, obj } from "./app";
// named export can be renamed
// import { a as b, arr, obj } from "./app";
import { b, arr, obj } from "./app";
//always default export is not wrapped in {} bracked
// cannot be renamed in default export
import greet from "./app";

console.log(b);
console.log(arr);
console.log(obj);
greet();
