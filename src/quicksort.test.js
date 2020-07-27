import quicksort from './quicksort'

test('quicksort', () => {
    const array = [0, 2, 5, 9, 8, 4, 1, 3, 6, 7]
    quicksort(array, 0, array.length - 1)
    expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});