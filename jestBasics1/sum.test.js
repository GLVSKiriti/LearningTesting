const sum = require("./sum");

//Here in test(a,b) a is description which comes in console log
//and b is function which runs when this test is processing
//expect(op) performs operation and toBe means it is like ===
test(`Properly adds two numbers`, () => {
  expect(sum(1, 2)).toBe(3);
});
