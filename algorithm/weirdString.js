function toWeirdCase(string){
  //TODO
  return string.split(" ").map(word => {
    return word.split("").map((char,index) => {
      if(index % 2 === 0){
        return char.toUpperCase()
      }else{
        return char.toLowerCase()
      }
    }).join("")
  }).join(" ")
}
