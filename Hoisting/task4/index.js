var foo = 1;

function bar() {
  if (!foo) {
    foo = 10;
  }

  return foo;
}
foo = bar();
export default foo;
