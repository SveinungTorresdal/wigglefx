import { writable } from "svelte/store"

// store passing height and width of the canvas

export const width = writable(1920)
export const height = writable(1080)