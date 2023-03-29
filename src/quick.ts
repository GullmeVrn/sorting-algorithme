// export function quick(arr: number[], left: number = 0, right: number = arr.length - 1): number[] | undefined {
//     if (left >= right) return

//     let pivotIndex: number = partition(arr, left, right)
//     quick(arr, left, pivotIndex - 1)
//     quick(arr, pivotIndex + 1, right)

//     return arr
// }

// function partition(arr: number[], left: number, right: number): number {
//     let pivotValue = arr[right]
//     let partitionIndex = left

//     for (let i = left; i < right; i++) {
//         if (arr[i] < pivotValue) {
//             swap(arr, i, partitionIndex)
//             partitionIndex++
//         }
//     }
//     swap(arr, right, partitionIndex)

//     return partitionIndex
// }

// function swap(arr: number[], firstIndex: number, secondIndex: number): void {
//     let temp = arr[firstIndex]
//     arr[firstIndex] = arr[secondIndex]
//     arr[secondIndex] = temp
// }

export function quick(arr: number[]): number[] {
    if (arr.length <= 1) return arr
    let pivot = arr[0]
    let left = arr.filter(x => x < pivot)
    let right = arr.filter(x => x > pivot)
    return [...quick(left), pivot, ...quick(right)]
}
