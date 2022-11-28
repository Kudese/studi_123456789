export default function findNextSquare(number){

    if (Math.sqrt(number)%1===0) {
        return ((Math.sqrt(number)+1)**2)
    } else{
        return -1
    }
}