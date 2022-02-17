import type XY from '../types/xy'

export interface Transformation {
    description: string
    duration: number
    position: XY
    rotation: number
    scale: XY
}

export default Transformation