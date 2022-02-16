<script>
    import { width, height } from '../../store/canvas.store'
</script>

<div class="row">
    <div class="col-6">
        <label for="canvas-config-width">
            Width of canvas
        </label>
        <div class="input-group">
            <input id="canvas-config-width" type="text" class="form-control" placeholder="Width" aria-label="The width of the canvas" bind:value={$width}>
            <span class="input-group-text">px</span>
        </div>
    </div>
    <div class="col-6">
        <label for="canvas-config-height">
            Height of canvas
        </label>
        <div class="input-group">
            <input id="canvas-config-height" type="text" class="form-control" placeholder="Height" aria-label="The height of the canvas" bind:value={$height}>
            <span class="input-group-text">px</span>
        </div>
    </div>
</div>