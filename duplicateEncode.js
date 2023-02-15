const duplicateEncode = (word) => {
  let modified = word.toLowerCase().split('');
  let duplicates = modified.filter((el, index) => index !== modified.indexOf(el));
  
  return modified.map(el => {
    if(duplicates.includes(el)) return ')'
    else return '('
  }).join('');
}

console.log(duplicateEncode('wJdGPc@HHkQHxyHuHa'));