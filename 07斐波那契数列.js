
/**
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
 */
// 解法一：正常递归实现
function Fibonacci(n) {
  // write code here
  if (n <= 1) {
    return n;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// 解法二：动态规划实现
function Fibonacci(n) {
  // write code here
  if (n <= 1) {
    return n;
  }
  let fn1 = 0;
  let fn2 = 1;
  let num = 0;
  for (let i = 2; i <= n; i++) {
    num = fn1 + fn2;
    fn1 = fn2;
    fn2 = num;
  }
  return num;
}
console.log(Fibonacci(6));


