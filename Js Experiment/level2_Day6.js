console.log('level2_Day6');
const age = 128;
const doesDrive = false;
const variable = 34;




//Simple if Else
if (age!=19){
    console.log('Age is not 19')//Output:- Age is not 19
}

if(age !== 65){
    console.log('Age is not 65') //Output:- Age is not 65
}

else{
    console.log('Age is not 19')
}






//Defined or not Check
if (typeof variable !== 'undefined'){
    console.log('variable is defined');
} //output:- variable is defined
else{
    console.log('variable is not defined');
}





//or
if (doesDrive || age>18){ //&& -> and
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}


//ternary operators
console.log(age==45? 'Age is 45': 'Age is not 45');//Age is not 45




//case switch
switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}//output:- You are unknown age


