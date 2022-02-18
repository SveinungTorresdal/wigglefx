import type TransformationInterface from './TransformationInterface'

export interface SceneItemInterface {
    filepath: string
    file: string
    transformations?: Array<TransformationInterface>
}

export default SceneItemInterface