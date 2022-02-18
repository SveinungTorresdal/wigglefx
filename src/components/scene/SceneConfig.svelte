<script lang="ts">
    import type SceneInterface from '../../interfaces/SceneInterface'
    import Scene from './Scene.svelte'
    import effect from '../../store/effect.store'

    const newScene = form => {
        const formData = new FormData(form.target)
        const { sceneName } = Object.fromEntries(formData.entries())
        
        const scene: SceneInterface = {
            name: sceneName.toString(),
            current: undefined,
            sceneitems: []
        }

        $effect.scenes = [ ...$effect.scenes, scene ]
        $effect.scene = scene
    }
</script>

<form on:submit|preventDefault={newScene} class="d-flex flex-row align-items-center">
    <input name="sceneName" class="form-control" type="text" placeholder="Scene name" aria-label="Enter a scene name">
    <button class="btn btn-success ms-3">
        Add
    </button>
</form>

{#if $effect.scenes.length}
<div class="card mt-3">
    <ul class="list-group list-group-flush">
        {#each $effect.scenes as scene}
        <Scene {scene} />
        {/each}
    </ul>
</div>
{/if}