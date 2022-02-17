import type SceneItem from './sceneitem'

export interface Scene {
    name?: string
    current?: SceneItem
    sceneitems?: Array<SceneItem>
}

export default Scene