<script>
    import { width, height } from '../../store/canvas.store'

    import SceneItem from './SceneItem.svelte'

    /**
     * Props
     * 'class'
     * 'canvas-class'
     * 'id'
     */
    let added = ''
    export { added as class }                   // creates prop 'class'
    let canvas_added = $$props['canvas-class']  // kebab-case prop 'canvas-class'
    let slot_class = $$props['slot-class']  // kebab-case prop 'canvas-class'
    export let id = Math.random().toString(36).substring(7)

    /**
     * ...
     */
    let canvasWidth

    $: ratio = `aspect-ratio: ${$width} / ${$height}`
    $: scale = canvasWidth / $width

    $: frameStyle = `width: ${$width}px; height: ${$height}px; transform-origin: top left; transform: scale(${scale});`
</script>

<article {id} class="d-flex align-items-center justify-content-center overflow-hidden position-relative {added}">
    <main bind:clientWidth={canvasWidth} id="{id}-background" class="position-relative {canvas_added}" style={ratio}>
        <section class="position-absolute" style={frameStyle}>
            <SceneItem class="border border-danger border-2 position-relative" src="https://i.imgur.com/AWeJwfK.jpg" x="35" y="128" />
        </section>
    </main>
    {#if $$slots}
    <aside class="position-absolute w-100 h-100 {slot_class}">
        <slot />
    </aside>
    {/if}
</article>