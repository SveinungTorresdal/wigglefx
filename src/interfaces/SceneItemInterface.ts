import type TransformationInterface from './TransformationInterface'

export interface SceneItemInterface {
    file?: string
    transformations?: Array<TransformationInterface>
}

export default SceneItemInterface