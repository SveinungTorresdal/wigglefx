<script>
    import Scene from './Scene.svelte'
</script>

<div class="d-flex flex-row align-items-center">
    <input class="form-control" type="text" placeholder="Scene name" aria-label="Enter a scene name">
    <button class="btn btn-success ms-3">
        Add
    </button>
</div>

<div class="card mt-3">
    <ul class="list-group list-group-flush">
        <Scene />
    </ul>
</div>