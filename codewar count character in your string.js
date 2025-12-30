function count(string) {
  if(string.length === 0){
    return {}
  }
  
  let allText = {}
  let text = string.trim()

  for(let i=0 ; i < text.length; i++){
    
    allText[text[i]] = allText[text[i]] ? allText[text[i]] +1 : 1
    
  }
  return allText;
}


function count (string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}
