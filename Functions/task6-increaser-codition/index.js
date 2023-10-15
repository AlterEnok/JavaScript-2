function increaser(a, index) {
  if (a > index) {
    a += index;
  }
  return a;
}
console.log(increaser(5, 3));
