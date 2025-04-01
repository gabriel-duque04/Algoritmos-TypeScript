function CountSort(array: number[]){
    let maior = 0;
    let sorted : number [] = new Array(array.length).fill(0);
    for(let i = 0; i< array.length; i++){
        if(array[i] > maior){
            maior = array[i];
        }
    }

    let count : number [] = new Array(maior + 1).fill(0);
    
    for(let i = 0; i < array.length; count[array[i]] ++ , i++);

    for(let i = 1; i < count.length; count[i] += count[i - 1], i++);

    for(let i = sorted.length - 1; i >= 0; sorted[count[array[i]] - 1]  = array[i], count[array[i]]--, i--);

    for(let i = 0; i < array.length; array[i] = sorted[i], i++);
}


let countarray = [1,9,8,7,3,2,5,6,4]

for(let i = 0; i< countarray.length ; i++){
    console.log(countarray[i]);
}
console.log("\n");
CountSort(countarray);



for(let i = 0; i< countarray.length ; i++){
    console.log(countarray[i]);
}