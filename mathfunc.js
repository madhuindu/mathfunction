function mathfunc(func, ...val){
    func(...val);
}

function round(value){
  var b  = value.toString().split('.');
  var a = parseInt(b[0]);
  if(b[1][0]>=5){
    a+=1;
  }
  console.log(a);
}

function pow(val1, val2){
   console.log(val1**val2);
}

function sqroot(val1){
  console.log(val1**0.5);
}

function abs(val1){
  var a = val1.toString();
  if(a[0]=='-'){
      a = a.slice(1,a.length);
  }
  console.log(parseInt(a));
}

function ceil(val1){
   var a = val1.toString().split('.');
   var b = parseInt(a[0]);
   if(a.length>1){
      b+=1;
   }
   console.log(b);
}

function floor(val1){
  var a = val1.toString().split('.');
  console.log(parseInt(a[0]));
}

function min(...val){
  val.sort()
  console.log(val[0])
 }

function max(...val){
  val.sort();
  console.log(val[val.length-1]);
}


mathfunc(round,22.6);
mathfunc(pow,3,6);
mathfunc(sqroot,49);
mathfunc(abs,-56);
mathfunc(ceil,1.1);
mathfunc(floor,1.1);
mathfunc(min,1,4,6,3,2,8);
mathfunc(max,1,4,6,3,2,8);
