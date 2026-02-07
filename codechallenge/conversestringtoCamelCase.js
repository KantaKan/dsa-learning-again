function toCamelCase(str){
  return str.split(/[-_]/).map((w,i) => {
    if(i === 0 )return w
    return w.charAt(0).toUpperCase() + w.slice(1)
  }).join("")
}
