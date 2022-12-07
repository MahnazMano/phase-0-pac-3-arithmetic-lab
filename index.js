function add() {
    return 1 + 2;
  }
  console.log(add());
  function subtract() {
    return 3 - 1;
  }
  console.log(subtract());
  function divide() {
    return 10 / 2;
  }
  console.log(divide());
  
  function multiply() {
    return 5 * 2;
  }
  console.log(multiply());
  
  function add(a, b) {
    let c = a + b;
    return c;
  }
  console.log(add(1, 2));
  function subtract(a, b) {
    let c = a - b;
    return c;
  }
  console.log(subtract(4, 1));
  function divide(a, b) {
    let c = a / b;
    return c;
  }
  console.log(divide(15, 5));
  
  function multiply(a, b) {
    let c = a * b;
    return c;
  }
  console.log(multiply(1, 3));
  
  function increment(n) {
    n++;
    return n;
  }
  console.log(increment(419));
  function decrement(n) {
    n--;
    return n;
  }
  console.log(decrement(420));
  
  function makeInt(n) {
    return parseInt(n, 10);
  }
  console.log(makeInt(2));
  function preserveDecimal(n) {
    return parseFloat(n);
  }