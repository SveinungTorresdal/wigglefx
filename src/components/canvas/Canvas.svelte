<script>
    import { width, height } from '../../store/canvas.store'

    let added = ''
    export { added as class }

    let canvasWidth, canvasHeight

    $: scale = parseInt(canvasWidth / $width * 100) || 0
</script>

<div bind:clientWidth={canvasWidth} bind:clientHeight={canvasHeight} class={added}>
    <svg class="h-100 w-100" viewBox="0 0 {$width} {$height}">
        
    </svg>
</div>