<script lang="ts">
    import type SceneItemInterface from '../../interfaces/SceneItemInterface'
    import effect from '../../store/effect.store';

    const upload = e => {
        const [ file ] = e.target.files
        const reader = new FileReader()

        reader.addEventListener("load", function () {
            let sceneitem: SceneItemInterface = {
                filepath: file.name,
                file: reader.result.toString()
            }

            $effect.scene.sceneitems = [ ...$effect.scene.sceneitems, sceneitem]
        }, false)

        if (file) {
            reader.readAsDataURL(file)
        }
    }
</script>
<form>
    <label for="sceneitemFile" class="form-label">Select file to add to scene.</label>
    <input class="form-control" type="file" id="sceneitemFile" on:change={upload}>
    <p class="alert alert-info mt-3" role="alert">
        <small>We use <strong>localstorage</strong> for all data; this limits us to ca 2.5-5 MB.</small>
    </p>
</form>

{#each $effect.scene?.sceneitems || [] as sceneitem}
<div class="row">
    
</div>
<div class="card">
    <main class="card-image-top bg-light border-bottom d-flex flex-row justify-content-center">
        <img src={sceneitem.file} />
    </main>
    <div class="card-body">
        <p class="card-text text-truncate">{sceneitem.filepath}</p>
    </div>
</div>
{/each}