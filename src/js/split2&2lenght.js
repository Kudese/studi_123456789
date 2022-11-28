export default function split2add2lenght(srt) {
  arr = srt.split('')
  const element = []
  for (let i = 0; i < arr.length; i=i+2) {
    
    if (!arr[i+1]=='') {
        element.push(`${arr[i]}${arr[i+1]}`) 
    }else(
        element.push(`${arr[i]}_`)
    )
    
   
  }
  return element
}