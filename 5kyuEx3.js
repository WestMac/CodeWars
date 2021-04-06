
function bin(num) {
  if(num != 0){
  let result = []
  let binaryNum = num.toString(2).match(/.{1,8}/g);
  binaryNum.forEach(element => result.push(parseInt(element,2)))
  return result.join('.')}
  else {
    return '0.0.0.0'
  }
}