// Object is collection of key value and pairs 

// object literals 

var obj ={
 name:"piyush" ,
 age:20 ,

 greet(name){
    return"good morning "  + name 
 }
}

console.log(obj.greet("piyush")) ;

//object within function 

function calci(val){
   const obj={
         add(val1){
             var a = val +val1 
             return a 
         },
         sub(val1){
            var b = val -val1 
            return b
        }
    }
    return obj ; 
}

console.log(calci(5).add(4)) ; 
console.log(calci(5).sub(4)) ; 