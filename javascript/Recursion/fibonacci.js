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

// console.log(fibs(12));

let list1 = "",
  list2 = "",
  count = 0;
function fibsRec(n, num1, num2) {
  count += 1;
  if (n == 2) return [];

  if (count === 1) {
    list1 = [0, 1, num1 + num2];
    fibsRec(n - 1, num2, num1 + num2);
  } else {
    list2 = [num1 + num2, ...fibsRec(n - 1, num2, num1 + num2)];
    return list2;
  }

  return [...list1, ...list2];
}

// console.log(fibsRec(12, 0, 1));
