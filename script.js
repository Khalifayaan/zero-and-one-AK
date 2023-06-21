



function ZeroAndOne(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'Zero') {
      result += '0';
    } else if (arr[i] === 'One') {
      result += '1';
    }
  }
  return result;
}


console.log(ZeroAndOne(["one", "Zero", "Zero", "One"])); 
console.log(ZeroAndOne(["Zero", "ONE", "one", "Zero"])); 


