<script lang="ts">
    import { canvas } from '../../store/canvas.store'
    import SceneItem from './SceneItem.svelte'

    /**
     * Props
     * 'class'
     * 'canvas-class'
     * 'slot-class'
     * 'id'
     */
    let added: string
    export { added as class }                           // creates prop 'class'
    let canvas_added: string = $$props['canvas-class']  // kebab-case prop 'canvas-class'
    let slot_class: string = $$props['slot-class']      // kebab-case prop 'canvas-class'
    export let id: string = Math.random().toString(36).substring(7)

    /**
     * ...
     */
    let canvasWidth: number
    let ratio: string
    let scale: number
    let frameStyle: string

    $: ratio = `aspect-ratio: ${$canvas.w} / ${$canvas.h}`
    $: scale = canvasWidth / $canvas.w

    $: frameStyle = `width: ${$canvas.w}px; height: ${$canvas.h}px; transform-origin: top left; transform: scale(${scale});`
</script>

<article {id} class="d-flex align-items-center justify-content-center overflow-hidden position-relative {added}">
    <main bind:clientWidth={canvasWidth} id="{id}-background" class="position-relative {canvas_added}" style={ratio}>
        <section class="position-absolute" style={frameStyle}>
            <SceneItem class="border border-danger border-2 position-relative" src="https://i.imgur.com/AWeJwfK.jpg" x={35} y={128} />
        </section>
    </main>
    {#if $$slots}
    <aside class="position-absolute w-100 h-100 {slot_class}">
        <slot />
    </aside>
    {/if}
</article>