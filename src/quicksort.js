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
function exchange(array, main_index, left_index, right_index) {
    while (true) {
        // 从leftindex开始找比轴大的元素，稍后将其与right交换位置
        while (array[left_index] < array[main_index]) {
            left_index++;
        }
        // 从rightindex开始找比轴小的元素，稍后将其与left交换位置
        while (array[right_index] > array[main_index]) {
            right_index--;
        }

        // 当leftindex不小于rightindex时，此分区交换完成，将轴与left交换
        if (left_index >= right_index) {
            break;
        } else {
            // 交换left与right
            [array[left_index], array[right_index]] = [array[right_index], array[left_index]]
        }
    }
    [array[left_index], array[main_index]] = [array[main_index], array[left_index]]

    return left_index;
}

export default function quicksort(array, left_index, right_index) {
    if (left_index >= right_index) return;
    // 交换完成后，将left与轴交换
    // 完成了分区排序
    const main_index = exchange(array, right_index, left_index, right_index - 1)
    quicksort(array, left_index, main_index - 1)
    quicksort(array, main_index + 1, right_index)
}


