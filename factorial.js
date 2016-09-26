
  const Fac = function (a) {
    if (a===1 || a===0) {
     return 1;
    }
    
    return a*(Fac(a-1))
  }
  
  const Factorial = function(b) {
    console.log(Fac(b))
  }
   
  Factorial(5);