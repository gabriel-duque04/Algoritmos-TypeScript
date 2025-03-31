function SelectionSort(array: number[]){
    for(let i = 0; i < array.length; i++){
        let menor = i;
        for(let j = (i + 1); j < array.length; j++){
            if(array[menor]>array[j]){
                menor = j;
            }
        }
        let temp = array[menor];
        array[menor] = array[i];
        array[i] = temp;
    }
}

let selectionarray = [1,9,8,7,3,2,5,6,4]

for(let i = 0; i< selectionarray.length ; i++){
    console.log(selectionarray[i]);
}
console.log("\n");
SelectionSort(selectionarray);



for(let i = 0; i< selectionarray.length ; i++){
    console.log(selectionarray[i]);
}