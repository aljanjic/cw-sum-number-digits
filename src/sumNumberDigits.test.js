const sumNumberDigits = require('./sumNumberDigits');

describe('sumNumberDigits', () => {
  it(' 32 should return 5', () => {
    expect(sumNumberDigits(32)).toBe(5);
  });

  it(' 111 should return 3', () => {
    expect(sumNumberDigits(111)).toBe(3);
  });

  it(' 10 should return 1', () => {
    expect(sumNumberDigits(10)).toBe(1);
  });

  // it(' -52 should return 7', () => {
  //   expect(sumNumberDigits(-52)).toBe(7);
  // });

  // it( '-128 should return 11', () => {
  //   expect(sumNumberDigits(-128)).toBe(11);
  // });
});
