function BubbleSort(array: number[]){
    for(let i = 0; i<array.length - 1; i++){
        for(let j = array.length -1; j > i; j--){
            if(array[j] < array[j - 1]){
                let temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
        }
    }
}

let array = [1,9,8,7,3,2,5,6,4]

for(let i = 0; i< array.length ; i++){
    console.log(array[i]);
}
console.log("\n");
BubbleSort(array);



for(let i = 0; i< array.length ; i++){
    console.log(array[i]);
}