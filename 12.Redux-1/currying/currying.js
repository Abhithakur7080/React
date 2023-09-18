function sum(x, y, z){
    return x+y+z;
}

const result = sum(10, 20, 30);
console.log(result); // 60


function sumX(x){
    return function sumY(y){ // [Function: sumY]
        return function sumZ(z){ // [Function: sumZ]
            return x+y+z; // 60
        }
    }
}

const resultSum = sumX(10);
console.log(resultSum); // [Function: sumY]

const resultSumY = resultSum(20);
console.log(resultSumY); // [Function: sumZ]

const resultSumZ = resultSumY(30);
console.log(resultSumZ); // 60

function logDetails(firstName){
    return function logFullName(lastName){
        return function logHobby(hobby){
            console.log(
                `Hi my name is ${firstName} ${lastName} and I love ${hobby}`
            );
        }
    }
}
logDetails("Joe")("Smoe")("Programming");