<script>
    export let scale = 1
    export let width, height
    export let style

    $: props = $$restProps

    let image

    let natural, ratio, size
    $: if (image) {
        // Get the natural dimensions of the image
        natural = {
            width: image?.naturalWidth || 0,
            height: image?.naturalHeight || 0
        }

        // Get the natural ratio
        ratio = {
            width: natural.width / natural.height,
            height: natural.height / natural.width
        }

        // Create a size using props or natural, or a mix of both.
        size = width || height ? {
            width: (width ? width : height * ratio.width) * scale,
            height: (height ? height : width * ratio.height) * scale
        } : {
            width: natural.width * scale,
            height: natural.height * scale
        }
    }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img bind:this={image} {...props} style={style} {...size} />