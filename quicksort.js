import { shuffle } from "lodash"
/**
 * 快速排序
 * 
 * 选择数组最右侧的元素为轴，分别从数组的左右两端向中间遍历数组（排除轴元素），
 * 
 * 当左侧遇到大于等于轴的元素时，停下来
 * 
 * 当右侧遇到小于等于轴的元素时，停下来
 * 
 * 交换两个元素
 * 
 * 重复上述步骤，直至两个指针重合或左超过右
 * 
 * 交换左指针与轴
 * 
 * 完成这个过程后，数组就完成了分区，左侧小于轴，右侧大于轴。
 * @param {*} left_index 
 * @param {*} right_index 
 */
export default function exchange(array, main, left_index, right_index) {
    if (left_index >= right_index) {
        [array[left_index], array[main]] = [array[main], array[left_index]]
        return
    }
    while (array[left_index] < array[main]) {
        left_index++;
    }
    while (array[right_index] > array[main]) {
        right_index++;
    }
    [array[left_index], array[right_index]] = [array[right_index], array[left_index]]
    console.log(array);
    exchange(array, main, left_index, right_index)
    return
}


function quicksort(array) {
    // 定义轴、left、right
    // 轴前面的元素，根据轴进行交换，交换是在数组本身进行，交换的退出条件是left_index>=right_index
    // 交换完成后，将left与轴交换
    // 完成了分区排序
    exchange(array, array.length - 1, 0, array.length - 2)
}

const array = [0, 2, 5, 9, 8, 4, 1, 3, 6, 7 ]
console.log(array);
quicksort(array)
console.log(array);
