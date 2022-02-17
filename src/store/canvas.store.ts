import { writable } from "svelte/store"

// store passing height and width of the canvas

let n = {
    w: 1920,
    h: 1080
}

const storage = localStorage.getItem('canvas')
if (storage) {
    n = JSON.parse(storage)
}

export const canvas = writable(n)

canvas.subscribe(() => localStorage.setItem('canvas', JSON.stringify(n)))