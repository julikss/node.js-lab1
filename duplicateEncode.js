const duplicateEncode = (word) => {
  let modified = word.split('').map(el => el.toLowerCase());
  let duplicates = modified.filter((el, index) =>index !== modified.indexOf(el));
  
  return modified.map(el => {
    if(duplicates.includes(el)) return ')'
    else return '('
  }).join('');
}

console.log(duplicateEncode('wJdGPc@HHkQHxyHuHa'));