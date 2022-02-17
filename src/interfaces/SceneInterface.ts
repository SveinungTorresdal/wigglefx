import type SceneItemInterface from './SceneItemInterface'

export interface SceneInterface {
    name: string
    current?: SceneItemInterface
    sceneitems?: Array<SceneItemInterface>
}

export default SceneInterface