export default function Reverse_words(srt){
    let arr = srt.split(' ')
    let strit =''
    for (let i = 0; i < arr.length; i++) {
            let dsa = arr[i].split('').reverse().join('')
       strit += " " + dsa
      
    }
return strit.trim()
}