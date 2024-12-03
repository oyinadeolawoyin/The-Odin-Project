function fibs(n) {
  let num1 = 0,
    num2 = 1,
    num3 = 0;
    
  let list = [];
  list.push(num1, num2);

  for (let i = 2; i < n; i++) {
    num3 = num1 + num2;
    list.push(num3);
    num1 = num2;
    num2 = num3;
  }

  return list;
}

function fibsRec(n, num1 = 0, num2 = 1, result = [0, 1]) {
  if (n == 2) return [];
  
  result.push(num1 + num2); 
  return [...result, ...fibsRec(n - 1, num2, num1 + num2, [])];
}

console.log(fibsRec(12));
