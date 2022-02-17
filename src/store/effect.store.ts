import { writable } from "svelte/store"
import type Effect from "../interfaces/effect"

let n: Effect = {
    scene: undefined,
    scenes: []
}

const storage = localStorage.getItem('effect')
if (storage) {
    n = JSON.parse(storage)
}

export const effect = writable<Effect>(n)

export default effect

effect.subscribe(() => localStorage.setItem('effect', JSON.stringify(n)))