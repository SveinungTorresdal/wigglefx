import { writable } from "svelte/store"
import type EffectInterface from "../interfaces/EffectInterface"

let n: EffectInterface = {
    scene: undefined,
    scenes: []
}

const storage = localStorage.getItem('effect')
if (storage) {
    n = JSON.parse(storage)
}

export const effect = writable<EffectInterface>(n)

export default effect

effect.subscribe(() => localStorage.setItem('effect', JSON.stringify(n)))