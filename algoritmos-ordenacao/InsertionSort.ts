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
let vector = [1,9,8,7,3,2,5,6,4]

for(let i = 0; i< vector.length ; i++){
    console.log(vector[i]);
}
console.log("\n");
InsertionSort(vector);



for(let i = 0; i< vector.length ; i++){
    console.log(vector[i]);
}