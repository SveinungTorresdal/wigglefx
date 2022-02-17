<script lang="ts">
    import Canvas from "../canvas/Canvas.svelte";
    import type SceneInterface from "../../interfaces/SceneInterface";

    import effect from "../../store/effect.store";

    export let scene: SceneInterface
    export let id: string = Math.random().toString(36).substring(7)

    const deleteScene = () => $effect.scenes = $effect.scenes.filter(obj => obj.name !== scene.name)
</script>

<li class="list-group-item p-0">
    <Canvas
        {id}
        class="card-img-top w-100 m-0 p-2 bg-light"
        canvas-class="bg-secondary w-100 h-auto rounded-1"
        slot-class="d-flex flex-column justify-content-end align-items-center"
    >
        <nav class="d-flex flex-row justify-content-around m-1">
            <div class="btn-group m-2" role="group" aria-label="Basic example">
                <button class="btn btn-light">
                    <i class="bi bi-bookmark"></i>
                </button>
                <button class="btn btn-light">
                    <i class="bi bi-pencil-square"></i>
                </button>
            </div>
            <button class="btn btn-danger m-2" on:click={deleteScene}>
                <i class="bi bi-x-lg"></i>
            </button>
        </nav>
    </Canvas>
    <h5 class="px-4 py-0 m-0 bg-light">
        <input type="text" readonly class="form-control-plaintext text-center" id="{id}-name" placeholder="Scene name" value={scene?.name || 'Missing name'}>
    </h5>
</li>