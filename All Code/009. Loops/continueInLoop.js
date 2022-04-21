//continue :- Skipping an Iteration

let g = 0;
do {
    if(g===5){
        g +=1;
        continue;
    }
    console.log(g + 1); //output :- it's gonna print only 1-10 and skip the 6 
    g +=1;
} while (g < 10);
console.log('done');