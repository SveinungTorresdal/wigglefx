<script>
    import { width, height } from '../../store/canvas.store'

    import Transformation from './Transformation.svelte'

    /**
     * Props
     * 'class'
     * 'canvas-class'
     * 'id'
     */
    let added = ''
    export { added as class }                   // creates prop 'class'
    let canvas_added = $$props['canvas-class']  // kebab-case prop 'canvas-class'
    export let id = Math.random().toString(36).substring(7)

    /**
     * ...
     */
    let canvasWidth

    $: ratio = `aspect-ratio: ${$width} / ${$height}`
    $: scale = canvasWidth / $width

    $: frameStyle = `width: ${$width}px; height: ${$height}px; transform-origin: top left; transform: scale(${scale});`
</script>

<article {id} class="d-flex align-items-center justify-content-center overflow-hidden {added}">
    <main bind:clientWidth={canvasWidth} id="{id}-background" class="position-relative {canvas_added}" style={ratio}>
        <section class="position-absolute" style={frameStyle}>
            <img class="border border-danger border-2 position-relative" src="https://i.imgur.com/AWeJwfK.jpg" style="left:-56px; top: 1080px;" width="168" />
        </section>
    </main>
</article>