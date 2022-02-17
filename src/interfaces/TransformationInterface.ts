import type XY from '../types/xy'

export interface TransformationInterface {
    description: string
    duration: number
    position?: XY
    rotation?: number
    scale?: XY
}

export default TransformationInterface