 const Bacat = function (k) {
    if(k === 0) {
      return "";
    }
    return " " + Bacat(k-1)
  };
  
  const Astgh = function (l) {
    if (l === 1) {
       return "*";
    }
    return Astgh(l-1) + "*";
  };
  
  const help = function (x, y, z) {
    if (x === 0) {
       return;
    }
          console.log(Bacat(z)+Astgh(y));
          help((x-1),(y+2),(z-1));
  };
   
  const trianglestars = function(n) {
       help(n,1,n-1);
  }
  trianglestars(5)