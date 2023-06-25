const sumNumberDigits = require('./sumNumberDigits');

describe('sumNumberDigits', () => {
  it(' 32 should return 5', () => {
    expect(sumNumberDigits(32)).toBe(5);
  });

  it(' -52 should return 7', () => {
    expect(sumNumberDigits(-52)).toBe(7);
  });
});
