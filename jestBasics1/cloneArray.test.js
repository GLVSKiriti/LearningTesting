const cloneArray = require("./cloneArray");

//Here .toBe fails because here it compares references  so .toEqual is used
//Refer notes.txt in the folder for more details
//Here not is modifer exactly tests opposite way

test("Properly cloning the array", () => {
  const array = [1, 2, 3, 4];
  //expect(cloneArray(array)).toBe(array); This will fail
  expect(cloneArray(array)).toEqual(array); //This test to check whether both arrays are equal or not
  expect(cloneArray(array)).not.toBe(array); //This test to check whether it cloned the array
  //or it directly returned the same array
});
