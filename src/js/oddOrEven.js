export default function oddOrEven(array) {
let summ =0
    array.forEach(element => {
    summ += element
});
    if (summ%2===0) {
        return "even"
    } else{
        return "odd"
    }
}