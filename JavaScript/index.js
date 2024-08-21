console.log("i am piyush garg for bhabua kaimur bihar ") ; 
//normal function 
// function f(a,b){
//    const sum = a+b ;
//     return sum ;
// }
//console.log(f(4,5)) ; 

//anoumas function 

// let f =function(a,b){
//     sum = a+b ;
//     return sum ;
// }

// console.log(f(4,5)) ; 


//immediate invoke 
// let f =function(a,b){
//     sum = a+b ;
//     return sum ;
// }(8,5)

// console.log(f) ; 

//arrow function 
let f =(a,b)=>{
    sum = a+b ;
    return sum ;
}

console.log(f(5,5)) ; 

// function whith in the function 
 
function fun (){
    function f(a,b){
        const sum = a+b ;
        return sum ;
    }
    return f ; 
}

var numsum = fun() ; 
console.log("function with in the function sum is " , numsum(2,3)) ;