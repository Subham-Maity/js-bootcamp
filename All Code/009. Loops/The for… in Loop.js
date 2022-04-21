//The for… in Loop
let obj = {
    name: "Mr.NasaHacker",
    age: 13,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}

/*output:-
The name of object is Mr.NasaHacker
The age of object is 13
The type of object is Dangerous Programmer
The os of object is Ubuntu
done

*/