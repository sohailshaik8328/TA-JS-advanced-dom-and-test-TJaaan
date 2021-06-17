let {add, subtract, sum, multiply, power, factorial,} = require("./calculator");

test("1 + 2 = 3", () => {
    expect(add(1, 2)).toBe(3);
})

test("3 - 2 = 1", () => {
    expect(subtract(3, 2)).toBe(1);
})

test("1 + 2 = 3", () => {
    expect(sum(1, 2)).toBe(3);
})

test("1 * 2 = 2", () => {
    expect(multiply(1, 2)).toBe(2);
})

test("1 ** 2 = 2", () => {
    expect(power(1, 2)).toBe(2);
})

test("2 = true", () => {
    expect(factorial(2)).toBe(true);
})