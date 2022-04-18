// Type coercion -> concatenate-string-int
//if  we try to concatenate string with int it will change to string and concatenate with string
//like string = "28" int = 24  (String + int) = 2824
//so convert first then concatenate
let str5 = Number("698");
let myNum = 34;
console.log(str5 + myNum);