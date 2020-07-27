const twoSum = require('./twoSum');

describe("math tests", () => {

  it("1 + 1 = 2", () => {
    expect(1 + 1).toBe(2);
  });

  it('twoSum', () => {
    const nums = [2, 7, 11, 15], target = 13
    expect(twoSum(nums, target)).toEqual([0, 2])
  });

});

