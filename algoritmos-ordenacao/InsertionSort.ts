function InsertionSort(array: number[]){
    for(let i = 1; i < array.length; i++){
        let temp = array[i];
        let j = i - 1;
        while((j >= 0) && (array[j] > temp)){
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
}
let insertionarray = [1,9,8,7,3,2,5,6,4]

for(let i = 0; i< insertionarray.length ; i++){
    console.log(insertionarray[i]);
}
console.log("\n");
InsertionSort(insertionarray);



for(let i = 0; i< insertionarray.length ; i++){
    console.log(insertionarray[i]);
}