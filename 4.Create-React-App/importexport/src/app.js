//type-1 named export
//export directly
// export let a= 10;
// export var arr = [1,2,3,4,5];
// export const obj = {name: "Alexa"};

// export function greet(){
//     console.log("Hello");
// }

//type-2 named export
// let a = 10;
// var arr = [1, 2, 3, 4, 5];
// const obj = { name: "Alexa" };

// function greet() {
//   console.log("Hello");
// }
// export with wrapped
// export { a, arr, obj ,greet};

// type-1 default export
// let a = 10;
// var arr = [1, 2, 3, 4, 5];
// const obj = { name: "Alexa" };
// export directly
// export default function greet() {
//   console.log("Hello");
// }
// export { a, arr, obj };

//type-2 default export
let a = 10;
var arr = [1, 2, 3, 4, 5];
const obj = { name: "Alexa" };

function greet() {
  console.log("Hello");
}

// export { a, arr, obj, greet };
export { a as b, arr, obj, greet };
// export below
export default greet;
