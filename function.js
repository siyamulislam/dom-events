function noOdd(arr){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element%2!=0){
            console.log(element*2+" was a odd");
        }
    }
}

const num=[4,3,5,56,3,6]
const arr=[7,23,2,54,31]

noOdd(num)
noOdd(arr)