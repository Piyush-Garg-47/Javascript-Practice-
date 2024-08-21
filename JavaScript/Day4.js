console.log("piyush garg")

var createcounter = function(init){
        const n = init ;
        // var obj ={
        //     increment(){
        //          return init +=1 ;
        //     },
        //     decrement(){
        //         return init -=1 ;
        //     },
        //     reset(){
        //       return  init = n ;
        //     }
        // }
        // return obj 

       
          function  increment(){
                 return init +=1 ;
            }
         function   decrement(){
                return init -=1 ;
            }
          function  reset(){
              return  init = n ;
            }
        return{
            increment , decrement , reset 
        }
};

console.log(createcounter())