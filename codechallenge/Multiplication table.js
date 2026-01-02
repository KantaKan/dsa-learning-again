function multiplicationTable(size) {
  
  let arr = []
  
  for(let i = 0 ; i < size; i++){
    let inside = []
    for(let j = 0 ; j < size ; j++){
      inside.push((j+1)*(i+1))
    }
    arr.push(inside)
  }
  return arr
  
}
