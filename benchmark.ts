import { bubble } from './src/bubble'
import { cocktail } from './src/cocktail'
import { gnome } from './src/gnome'
import { heap } from './src/heap'
import { insertion } from './src/insertion'
import { mergeSort } from './src/merge'
import { quick } from './src/quick'
import { radix } from './src/radix'
import { selection } from './src/selection'
import { shell } from './src/shell'

import Chance from 'chance'

const chance = new Chance()

const testData: number[] = chance.n(chance.hammertime, 10000)
const results: {name: string; time: number}[] = []

function sort(arr: number[]): boolean {
    let sorted = true
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            sorted = false
            break
        }
    }
    return sorted
}

function run(algorithm: (arr: number[]) => number[]): void {
    const cp: number[] = [...testData]
    const start: number = performance.now()
    const result: number[] = algorithm(cp)

    results.push({ name: algorithm.name, time: performance.now() - start })
    !sort(result) && console.error(algorithm.name, 'sorting failed!')

    result.length !== testData.length && console.error(algorithm.name, 'length mismatch!')
}

run(bubble)
run(cocktail)
run(gnome)
run(heap)
run(insertion)
run(mergeSort)
run(quick)
run(radix)
run(selection)
run(shell)

console.table(results.sort((a, b) => a.time - b.time))
