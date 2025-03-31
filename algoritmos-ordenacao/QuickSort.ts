function QuickSort(array: number [], left: number, right: number){
    let x = left;
    let y = right;
    let pivot = (array[x] + array[y])/ 2;
    while(array[x] < pivot){
        x++;
    }
    while(array[y] > pivot){
        y--;
    }
    if (x<=y){
        let temp = array[x];
        array[x] = array[y];
        
        array[y] = temp;
        x++;
        y--;
    }
    if(left < y){
        QuickSort(array,left,y);
    }
    if(x < right){
        QuickSort(array,x,right);
    }
}


let numbers = [1,9,8,7,3,2,5,6,4]

for(let i = 0; i< numbers.length ; i++){
    console.log(numbers[i]);
}
console.log("\n");
QuickSort(numbers,0,numbers.length - 1);



for(let i = 0; i< numbers.length ; i++){
    console.log(numbers[i]);
}