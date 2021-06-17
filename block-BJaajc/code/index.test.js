const {getFullName, isPalindrome, getCircumference, getArea} = require('./index');

test("getFullName is 'Arya' + 'Stark'", () => {
    expect(getFullName("Arya", "Stark")).toBe("Arya Stark");
});

test("isPalindrome is madam", () => {
    expect(isPalindrome("madam")).toEqual("madam");
});

test("getCircumference radius is 20 ", () => {
    expect(getCircumference(20)).toBe(`The circumference is ${400} NN.`);
});

test("getArea radius is 30 ", () => {
    expect(getArea(30)).toBe(`The area is ${60} NN.`);

});



