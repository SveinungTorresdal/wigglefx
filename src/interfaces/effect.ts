import type Scene from "./scene"

export interface Effect {
    scene?: Scene
    scenes?: Array<Scene>
} 

export default Effect