import type Transformation from './transformation'

export interface SceneItem {
    file?: string
    transformations?: Array<Transformation>
}

export default SceneItem