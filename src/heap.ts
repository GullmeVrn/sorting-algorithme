export function heap(arr: number[]): number[] {
    let len = arr.length
    let end = len - 1

    heapify(arr, len)

    while (end > 0) {
        swap(arr, end--, 0)
        shiftDown(arr, 0, end)
    }
    return arr
}

function heapify(arr: number[], len: number): void {
    let mid = Math.floor(len / 2)
    while (mid >= 0) {
        shiftDown(arr, mid--, len - 1)
    }
}

function shiftDown(arr: number[], start: number, end: number): void {
    let root = start, child, toSwap

    while ((root * 2 +1) <= end) {
        child = root * 2 + 1
        toSwap = root

        if (arr[toSwap] < arr[child]) {
            toSwap = child
        }
        if (child + 1 <= end && arr[toSwap] < arr[child + 1]) {
            toSwap = child + 1
        }
        if (toSwap === root) {
            return
        } else {
            swap(arr, root, toSwap)
            root = toSwap
        }
    }
}

function swap(arr: number[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
