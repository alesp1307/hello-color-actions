const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola 2 mundo desde Coyoacan Mexico!");
  });
});
