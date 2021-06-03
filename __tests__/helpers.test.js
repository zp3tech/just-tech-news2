const { format_date, format_plural, format_url } = require("../utils/helpers");

test("format_date() returns a date string", () => {
  const date = new Date("2020-03-20 16:12:03");

  expect(format_date(date)).toBe("3/20/2020");
});

test("format_plural() correctly pluralizes words", () => {
  const plural = format_plural("Tiger", 2);
  const singular = format_plural("Lion", 1);

  expect(plural).toBe("Tigers");
  expect(singular).toBe("Lion");
});

test("format_url() returns a simplified url string", () => {
  const url1 = format_url('http://test.com/page/1');
  const url2 = format_url('http://www.coolstuff.com/page/1');
  const url3 = format_url('https://www.google.com?q=hello_world');

  expect(url1).toBe('test.com');
  expect(url2).toBe('coolstuff.com');
  expect(url3).toBe('google.com');
});

